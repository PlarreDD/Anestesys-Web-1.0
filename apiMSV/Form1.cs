using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Net;
using System.Net.NetworkInformation;
using System.Net.Sockets;
using System.IO;
using System.Runtime.CompilerServices;

namespace apiMSV
{
    public partial class Form1 : Form
    {
        Thread p1,
               p2;

        public static IPHostEntry ipLocal;
        public static TcpListener listener;
        public static TcpClient client;

        private HttpListener httpListener;
        public static int port = 6664;

        public static string ipMonitor;
        public static Ping pMSV;
        public static PingReply rMSV;
        private IPStatus Nose;

        string responseString = "Información no disponible";

        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            p1 = new Thread(new ThreadStart(HiloServidor));
            p2 = new Thread(new ThreadStart(HiloMSV));

            p1.Start();
            p2.Start();
        }

        public void HiloServidor()
        {
            startServer();
        }

        public void HiloMSV()
        {
            do
            {
                Nose = conexionMSV(ipMonitor);
            } while (Nose != System.Net.NetworkInformation.IPStatus.Success);

            obtenerDatosMSV();
        }

        private async void startServer()
        {
            try
            {
                if (ipLocal == null)
                {
                    ipLocal = Dns.GetHostEntry(Dns.GetHostName());
                    listener = new TcpListener(IPAddress.Any, port);
                }

                if (httpListener == null)
                {
                    httpListener = new HttpListener();
                    httpListener.Prefixes.Add($"http://{ipLocal.AddressList[ipLocal.AddressList.Length - 1]}:5000/apiMVS/");
                    httpListener.Start();
                    await ListenForRequests();
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }
        }

        private async Task ListenForRequests()
        {
            while (httpListener.IsListening)
            {
                try
                {
                    HttpListenerContext context = await httpListener.GetContextAsync();
                    ProcessRequest(context);
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"Error: {ex.Message}");
                }
            }
        }

        private void ProcessRequest(HttpListenerContext context)
        {
            try
            {
                context.Response.Headers.Add("Access-Control-Allow-Origin", "*");
                context.Response.Headers.Add("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
                context.Response.Headers.Add("Access-Control-Allow-Headers", "Content-Type, Accept");

                byte[] buffer = System.Text.Encoding.UTF8.GetBytes(responseString);
                context.Response.ContentLength64 = buffer.Length;

                using (Stream outputStream = context.Response.OutputStream)
                {
                    outputStream.Write(buffer, 0, buffer.Length);
                }

                context.Response.Close();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }
        }

        public IPStatus conexionMSV(string ip)
        {
            IPStatus otroNoSe;

            pMSV = new Ping();

            try
            {

                try
                {
                    rMSV = pMSV.Send(ip, 1000);
                    otroNoSe = rMSV.Status;
                }
                catch
                {
                    otroNoSe = IPStatus.DestinationUnreachable;
                }

                if (otroNoSe == IPStatus.Success)
                {
                    pingMSV.Invoke((MethodInvoker)delegate {
                        pingMSV.Image = Properties.Resources.pingOk;
                    });

                    ipMSV.Invoke((MethodInvoker)delegate {
                        this.ipMSV.Enabled = false; ;
                    });
                }
                else
                {
                    pingMSV.Invoke((MethodInvoker)delegate {
                        this.pingMSV.Image = Properties.Resources.noPing;
                    });

                    ipMSV.Invoke((MethodInvoker)delegate {
                        this.ipMSV.Enabled = true;
                    });
                }

                return otroNoSe;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
                otroNoSe = IPStatus.DestinationUnreachable;
                return otroNoSe;
            }
        }

        private void pingMSV_Click(object sender, EventArgs e)
        {
            ipMonitor = ipMSV.Text;
            Nose = conexionMSV(ipMonitor);
        }

        public void obtenerDatosMSV()
        {
            try
            {
                if (ipLocal == null)
                {
                    ipLocal = Dns.GetHostEntry(Dns.GetHostName());
                    listener = new TcpListener(IPAddress.Any, port);
                }

                listener.Start();

                while (true)
                {
                    client = listener.AcceptTcpClient();

                    StreamReader reader = new StreamReader(client.GetStream(), true);

                    while (!reader.EndOfStream)
                    {
                        string cadena_MVS = reader.ReadLine();

                        bool valor = cadena_MVS.StartsWith("\v");

                        if (valor)
                        {
                            responseString = "";
                        }

                        responseString += cadena_MVS + ",";

                        conexionMSV(ipMonitor);

                        testHL7.BackColor = Color.Black;
                    }

                    testHL7.BackColor = Color.Orange;
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }
        }

        private void testHL7_Click(object sender, EventArgs e)
        {
            txtHL7.Text = responseString;
        }

        private void pictureBox1_Click(object sender, EventArgs e)
        {
            try
            {
                httpListener?.Stop();
                listener.Stop();
                p1.Abort();
                p2.Abort();

                this.Close();
            }
            catch
            {
                p1.Abort();
                p2.Abort();

                this.Close();
            }
        }
    }
}
