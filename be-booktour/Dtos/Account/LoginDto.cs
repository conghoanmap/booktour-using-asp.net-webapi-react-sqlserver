using System.ComponentModel.DataAnnotations;

namespace be_booktour.Dtos.Account
{
    public class LoginDto
    {
        [Required(ErrorMessage = "Vui lòng nhập tên đăng nhập")]
        public string Username { get; set; } // Email
        [Required(ErrorMessage = "Vui lòng nhập mật khẩu")]
        public string Password { get; set; } // Mật khẩu
    }
}