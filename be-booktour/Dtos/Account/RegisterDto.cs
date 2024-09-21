using System.ComponentModel.DataAnnotations;

namespace be_booktour.Dtos.Account
{
    public class RegisterDto
    {
        [Required(ErrorMessage = "Tên đăng nhập không được để trống")]
        [MinLength(8, ErrorMessage = "Tên đăng nhập phải có ít nhất 8 ký tự")]
        public string Username { get; set; } // Tên đăng nhập
        [Required(ErrorMessage = "Họ tên không được để trống")]
        [MinLength(8, ErrorMessage = "Họ tên phải có ít nhất 8 ký tự")]
        public string FullName { get; set; } // Tên đầy đủ
        [Required(ErrorMessage = "Email không được để trống")]
        [EmailAddress(ErrorMessage = "Email không hợp lệ")]
        public string Email { get; set; } // Email
        [Required(ErrorMessage = "Mật khẩu không được để trống")]
        [MinLength(12, ErrorMessage = "Mật khẩu phải có ít nhất 12 ký tự")]
        public string Password { get; set; } // Mật khẩu
        [Required(ErrorMessage = "Xác nhận mật khẩu không được để trống")]
        public string ConfirmPassword { get; set; } // Xác nhận mật khẩu
    }
}