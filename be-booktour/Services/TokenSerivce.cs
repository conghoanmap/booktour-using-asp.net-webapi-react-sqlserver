using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using be_booktour.Models;
using be_booktour.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;

namespace be_booktour.Services
{
    public class TokenSerivce : ITokenRepository
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly IConfiguration _config;
        private readonly SymmetricSecurityKey _key;
        public TokenSerivce(IConfiguration config, UserManager<AppUser> userManager)
        {
            this._userManager = userManager;
            this._config = config;
            this._key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["JWT:SigningKey"]));
        }
        public async Task<string> createToken(AppUser user)
        {
            // Claim là một thông tin về người dùng, nó sẽ được mã hóa vào token
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Email, user.Email),
                new Claim(JwtRegisteredClaimNames.GivenName, user.UserName)
            };

            var roles = await _userManager.GetRolesAsync(user); // Lấy ra danh sách các role của user
            // Thêm vai trò vào claims
            foreach (var role in roles) // Giả sử bạn có thuộc tính Roles trong AppUser
            {
                claims.Add(new Claim(ClaimTypes.Role, role));
            }

            var creds = new SigningCredentials(_key, SecurityAlgorithms.HmacSha512Signature);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims), // Subject là một danh sách các claim
                Expires = DateTime.Now.AddDays(7), // Token sẽ hết hạn sau 7 ngày
                SigningCredentials = creds, // Thông tin về việc mã hóa token
                Issuer = _config["JWT:Issuer"], // Issuer là người tạo ra token
                Audience = _config["JWT:Audience"] // Audience là người nhận token
            };
            var tokenHandler = new JwtSecurityTokenHandler();

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }

    }
}