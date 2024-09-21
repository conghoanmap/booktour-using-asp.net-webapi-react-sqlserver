using be_booktour.Models;
using Microsoft.AspNetCore.Identity;

namespace be_booktour.Interfaces
{
    public interface IAccountRepository
    {
        // Tạo tài khoản
        Task<IdentityResult> CreateAsync(AppUser user, string password);
        // Gán quyền cho tài khoản
        Task<IdentityResult> AddToRoleAsync(AppUser user, string roleName);
        // Lấy tài khoản đầu tiên theo username
        Task<AppUser> FirstOrDefaultAsync(string username);
        // Kiểm tra mật khẩu
        Task<SignInResult> CheckPasswordSignInAsync(AppUser user, string password);
        // Lấy quyền của tài khoản
        Task<IList<string>> GetRolesAsync(AppUser user);
    }
}