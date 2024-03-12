namespace apiMSV
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
            this.ipMSV = new System.Windows.Forms.TextBox();
            this.txtHL7 = new System.Windows.Forms.TextBox();
            this.testHL7 = new System.Windows.Forms.Button();
            this.pingMSV = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // ipMSV
            // 
            this.ipMSV.Anchor = ((System.Windows.Forms.AnchorStyles)((((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.ipMSV.Font = new System.Drawing.Font("Microsoft Sans Serif", 14F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.ipMSV.Location = new System.Drawing.Point(12, 38);
            this.ipMSV.Name = "ipMSV";
            this.ipMSV.Size = new System.Drawing.Size(422, 29);
            this.ipMSV.TabIndex = 0;
            // 
            // txtHL7
            // 
            this.txtHL7.Anchor = ((System.Windows.Forms.AnchorStyles)((((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.txtHL7.Location = new System.Drawing.Point(12, 119);
            this.txtHL7.Multiline = true;
            this.txtHL7.Name = "txtHL7";
            this.txtHL7.Size = new System.Drawing.Size(776, 280);
            this.txtHL7.TabIndex = 1;
            // 
            // testHL7
            // 
            this.testHL7.Anchor = ((System.Windows.Forms.AnchorStyles)((((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.testHL7.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.testHL7.Location = new System.Drawing.Point(331, 405);
            this.testHL7.Name = "testHL7";
            this.testHL7.Size = new System.Drawing.Size(129, 41);
            this.testHL7.TabIndex = 3;
            this.testHL7.Text = "HL7";
            this.testHL7.UseVisualStyleBackColor = true;
            this.testHL7.Click += new System.EventHandler(this.testHL7_Click);
            // 
            // pingMSV
            // 
            this.pingMSV.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.pingMSV.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(0)))), ((int)(((byte)(45)))), ((int)(((byte)(96)))));
            this.pingMSV.Location = new System.Drawing.Point(648, 12);
            this.pingMSV.Margin = new System.Windows.Forms.Padding(0);
            this.pingMSV.Name = "pingMSV";
            this.pingMSV.Size = new System.Drawing.Size(140, 100);
            this.pingMSV.TabIndex = 2;
            this.pingMSV.UseVisualStyleBackColor = false;
            this.pingMSV.Click += new System.EventHandler(this.pingMSV_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(0)))), ((int)(((byte)(45)))), ((int)(((byte)(96)))));
            this.ClientSize = new System.Drawing.Size(800, 457);
            this.Controls.Add(this.testHL7);
            this.Controls.Add(this.pingMSV);
            this.Controls.Add(this.txtHL7);
            this.Controls.Add(this.ipMSV);
            this.Name = "Form1";
            this.Text = "Form1";
            this.FormClosed += new System.Windows.Forms.FormClosedEventHandler(this.Form1_FormClosed);
            this.Load += new System.EventHandler(this.Form1_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.TextBox ipMSV;
        private System.Windows.Forms.TextBox txtHL7;
        private System.Windows.Forms.Button pingMSV;
        private System.Windows.Forms.Button testHL7;
    }
}

