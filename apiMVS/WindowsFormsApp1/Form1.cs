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
using System.IO;

namespace WindowsFormsApp1
{
    public partial class Form1 : Form
    {
        Thread p1;
        //Thread p2;

        private HttpListener httpListener;

        string responseString;

        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            p1 = new Thread(new ThreadStart(Hilo1));
            //p2 = new Thread(new ThreadStart(Hilo2));

            p1.Start();
            //p2.Start();
        }

        public void Hilo1()
        {
            startServer();
            //    while (true)
            //    {
            //        Thread.Sleep(10);

            //        if (r >= 0 && r <= 255 && b1 == false)
            //        {
            //            r++;
            //            if (r == 255)
            //                b1 = true;
            //        }

            //        if (r >= 0 && r <= 255 && b1 == true)
            //        {
            //            r--;
            //            if (r == 0)
            //                b1 = false;
            //        }

            //        pictureBox1.BackColor = Color.FromArgb(r, 80, 100);
            //    }
        }

    //public void Hilo2()
    //{
    //    while (true)
    //    {
    //        Thread.Sleep(10);

    //        if (g >= 0 && g <= 255 && b2 == false)
    //        {
    //            g++;

    //            if (g == 255)
    //                b2 = true;
    //        }

    //        if (g >= 0 && g <= 255 && b2 == true)
    //        {
    //            g--;

    //            if (g == 0)
    //                b2 = false;
    //        }

    //        pictureBox2.BackColor = Color.FromArgb(100, g, 80);
    //    }
    //}

    private void Form1_FormClosed(object sender, FormClosedEventArgs e)
        {
            //p1.Abort();
            //p2.Abort();
            httpListener?.Stop();
        }

        private async void startServer()
        {
            if (httpListener == null)
            {
                httpListener = new HttpListener();
                httpListener.Prefixes.Add("http://localhost:8080/apiMVS/");
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
            string url = context.Request.Url.ToString();

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
            responseString = "Hi";
        }
    }
}

