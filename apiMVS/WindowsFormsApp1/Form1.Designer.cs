
namespace WindowsFormsApp1
{
    partial class Form1
    {
        /// <summary>
        /// Variable del diseñador necesaria.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Limpiar los recursos que se estén usando.
        /// </summary>
        /// <param name="disposing">true si los recursos administrados se deben desechar; false en caso contrario.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Código generado por el Diseñador de Windows Forms

        /// <summary>
        /// Método necesario para admitir el Diseñador. No se puede modificar
        /// el contenido de este método con el editor de código.
        /// </summary>
        private void InitializeComponent()
        {
            this.btnQueryUrl = new System.Windows.Forms.Button();
            this.hl7Test = new System.Windows.Forms.Label();
            this.ipMSV = new System.Windows.Forms.TextBox();
            this.ping = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // btnQueryUrl
            // 
            this.btnQueryUrl.ForeColor = System.Drawing.Color.Black;
            this.btnQueryUrl.Location = new System.Drawing.Point(677, 415);
            this.btnQueryUrl.Name = "btnQueryUrl";
            this.btnQueryUrl.Size = new System.Drawing.Size(111, 23);
            this.btnQueryUrl.TabIndex = 0;
            this.btnQueryUrl.Text = "Obtener HL7";
            this.btnQueryUrl.Click += new System.EventHandler(this.btnQueryUrl_Click);
            // 
            // hl7Test
            // 
            this.hl7Test.Anchor = ((System.Windows.Forms.AnchorStyles)((((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.hl7Test.BackColor = System.Drawing.SystemColors.ActiveCaption;
            this.hl7Test.Location = new System.Drawing.Point(12, 9);
            this.hl7Test.Name = "hl7Test";
            this.hl7Test.Size = new System.Drawing.Size(776, 393);
            this.hl7Test.TabIndex = 3;
            // 
            // ipMSV
            // 
            this.ipMSV.Location = new System.Drawing.Point(15, 418);
            this.ipMSV.Name = "ipMSV";
            this.ipMSV.Size = new System.Drawing.Size(100, 20);
            this.ipMSV.TabIndex = 4;
            // 
            // ping
            // 
            this.ping.Location = new System.Drawing.Point(403, 418);
            this.ping.Name = "ping";
            this.ping.Size = new System.Drawing.Size(75, 23);
            this.ping.TabIndex = 5;
            this.ping.Text = "Ping";
            this.ping.UseVisualStyleBackColor = true;
            this.ping.Click += new System.EventHandler(this.button1_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.ping);
            this.Controls.Add(this.ipMSV);
            this.Controls.Add(this.hl7Test);
            this.Controls.Add(this.btnQueryUrl);
            this.HelpButton = true;
            this.Name = "Form1";
            this.Text = "Form1";
            this.FormClosed += new System.Windows.Forms.FormClosedEventHandler(this.Form1_FormClosed);
            this.Load += new System.EventHandler(this.Form1_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion
        private System.Windows.Forms.Button btnQueryUrl;
        private System.Windows.Forms.Label hl7Test;
        private System.Windows.Forms.TextBox ipMSV;
        private System.Windows.Forms.Button ping;
    }
}

