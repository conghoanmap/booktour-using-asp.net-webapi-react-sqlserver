namespace be_booktour.Interfaces
{
    public interface IEmailSender
    {
        Task<bool> SendEmailAsync(string from, string to, string subject, string htmlMessage);
    }
}