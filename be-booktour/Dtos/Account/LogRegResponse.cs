namespace blueberry.Dtos.Account
{
    public class LogRegResponse
    {
        public string Username { get; set; } // Username
        public string FullName { get; set; } // Tên đầy đủ
        public IList<string> Roles { get; set; } // Vai trò
        public string Token { get; set; } // Token
    }
}