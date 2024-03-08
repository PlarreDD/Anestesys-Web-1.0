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

namespace WindowsFormsApp1
{
    public partial class Form1 : Form
    {
        Thread p1;
        Thread p2;

        public static IPHostEntry ipLocal;
        public static TcpListener listener;
        public static TcpClient client;

        public static int port = 6664;
        public static string ipMonitor;

        public static Ping pMSV;
        public static PingReply rMSV;
        private IPStatus Nose;

        private HttpListener httpListener;

        string responseString = "";

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
            do
            {
                Nose = pingMSV(ipMonitor);
            } while (Nose != System.Net.NetworkInformation.IPStatus.Success);

            startServer();
        }

        public void HiloMSV()
        {
            obtenerDatosMSV();
        }

        private void Form1_FormClosed(object sender, FormClosedEventArgs e)
        {
            httpListener?.Stop();
            listener.Stop();
            p1.Abort();
            p2.Abort();
        }

        private async void startServer()
        {
            if (ipLocal == null)
                ipLocal = Dns.GetHostEntry(Dns.GetHostName());

            if (httpListener == null)
            {
                httpListener = new HttpListener();
                httpListener.Prefixes.Add($"http://{ipLocal.AddressList[ipLocal.AddressList.Length - 1]}:5000/apiMVS/");
                httpListener.Start();
                await ListenForRequests();
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

        private void btnQueryUrl_Click(object sender, EventArgs e)
        {
            hl7Test.Text = responseString;
        }

        public IPStatus pingMSV(string ip)
        {
            IPStatus otroNoSe;

            pMSV = new Ping();
            
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
                ping.BackColor = Color.Green;
            else
                ping.BackColor = Color.Red;

            return otroNoSe;
        }

        public void obtenerDatosMSV()
        {
            if (ipLocal == null)
            {
                ipLocal = Dns.GetHostEntry(Dns.GetHostName());
                listener = new TcpListener(IPAddress.Any, port);
            }
            
            listener.Start();

            while (true)
            {
                try
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

                        responseString += cadena_MVS;
                        pingMSV(ipMonitor);

                        btnQueryUrl.BackColor = Color.Black;
                    }

                    btnQueryUrl.BackColor = Color.Orange;
                }
                catch
                {

                }
            }
        }

        private void button1_Click(object sender, EventArgs e)
        {
            ipMonitor = ipMSV.Text;
            Nose = pingMSV(ipMonitor);
        }
    }
}

