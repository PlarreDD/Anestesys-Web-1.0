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
        public static string ipMonitor = "172.16.20.101";

        public static Ping pMSV;
        public static PingReply rMSV;

        private HttpListener httpListener;

        string responseString = "";

        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            IPStatus Nose;
            
            do
            {
                Nose = pingMSV();
            } while (Nose != System.Net.NetworkInformation.IPStatus.Success);

            p1 = new Thread(new ThreadStart(Hilo1));
            p2 = new Thread(new ThreadStart(Hilo2));

            p1.Start();
            p2.Start();
        }

        public void Hilo1()
        {
            startServer();
        }

        public void Hilo2()
        {
            obtenerDatosMSV();
        }

        private void Form1_FormClosed(object sender, FormClosedEventArgs e)
        {
            p1.Abort();
            p2.Abort();
            httpListener?.Stop();
        }

        private async void startServer()
        {
            if (ipLocal == null)
                ipLocal = Dns.GetHostEntry(Dns.GetHostName());

            if (httpListener == null)
            {
                httpListener = new HttpListener();
                httpListener.Prefixes.Add($"http://{ipLocal.AddressList[1]}:5000/apiMVS/");
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
            label1.Text = responseString;
        }

        public IPStatus pingMSV()
        {
            pMSV = new Ping();
            rMSV = pMSV.Send(ipMonitor, 1000);

            return rMSV.Status;
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

                    btnQueryUrl.BackColor = Color.Black;
                }

                btnQueryUrl.BackColor = Color.Orange;
            }
        }
    }
}

