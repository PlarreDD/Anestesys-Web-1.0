﻿
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
            this.txtUrlToQuery = new System.Windows.Forms.TextBox();
            this.txtResult = new System.Windows.Forms.TextBox();
            this.btnQueryUrl = new System.Windows.Forms.Button();
            this.label1 = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // txtUrlToQuery
            // 
            this.txtUrlToQuery.Location = new System.Drawing.Point(81, 42);
            this.txtUrlToQuery.Name = "txtUrlToQuery";
            this.txtUrlToQuery.Size = new System.Drawing.Size(100, 20);
            this.txtUrlToQuery.TabIndex = 0;
            // 
            // txtResult
            // 
            this.txtResult.Location = new System.Drawing.Point(81, 103);
            this.txtResult.Name = "txtResult";
            this.txtResult.Size = new System.Drawing.Size(100, 20);
            this.txtResult.TabIndex = 2;
            // 
            // btnQueryUrl
            // 
            this.btnQueryUrl.Location = new System.Drawing.Point(257, 103);
            this.btnQueryUrl.Name = "btnQueryUrl";
            this.btnQueryUrl.Size = new System.Drawing.Size(75, 23);
            this.btnQueryUrl.TabIndex = 0;
            this.btnQueryUrl.Click += new System.EventHandler(this.btnQueryUrl_Click);
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(93, 171);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(35, 13);
            this.label1.TabIndex = 3;
            this.label1.Text = "label1";
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.btnQueryUrl);
            this.Controls.Add(this.txtResult);
            this.Controls.Add(this.txtUrlToQuery);
            this.Name = "Form1";
            this.Text = "Form1";
            this.FormClosed += new System.Windows.Forms.FormClosedEventHandler(this.Form1_FormClosed);
            this.Load += new System.EventHandler(this.Form1_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.TextBox txtUrlToQuery;
        private System.Windows.Forms.TextBox txtResult;
        private System.Windows.Forms.Button btnQueryUrl;
        private System.Windows.Forms.Label label1;
    }
}

