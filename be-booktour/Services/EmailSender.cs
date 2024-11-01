using System.Net;
using System.Net.Mail;
using be_booktour.Interfaces;

namespace be_booktour.Services
{
    public class EmailSender : IEmailSender
    {
        public async Task<bool> SendEmailAsync(string from, string to, string subject, string htmlMessage)
        {
            var pw = "pslsjxdndpzwyrhm";

            var client = new SmtpClient("smtp.gmail.com", 587)
            {
                Credentials = new NetworkCredential(from, pw),
                EnableSsl = true
            };
            return client.SendMailAsync(
                new MailMessage(from: from, to: to, subject, htmlMessage)
                {
                    IsBodyHtml = false
                }).IsCompleted;
        }
    }
}