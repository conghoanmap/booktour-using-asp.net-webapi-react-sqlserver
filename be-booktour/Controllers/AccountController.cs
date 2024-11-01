using be_booktour.Dtos.Account;
using be_booktour.Models;
using be_booktour.Interfaces;
using Microsoft.AspNetCore.Mvc;
using blueberry.Dtos.Account;
using Microsoft.AspNetCore.Authorization;
using be_booktour.Extensions;

namespace be_booktour.Controllers
{
    [ApiController]
    [Route("api/account")]
    public class AccountController : ControllerBase
    {
        private readonly IAccountRepository _accountRepository;
        private readonly ITokenRepository _tokenRepository;

        public AccountController(IAccountRepository accountRepository, ITokenRepository tokenRepository)
        {
            _accountRepository = accountRepository;
            _tokenRepository = tokenRepository;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterDto registerDto)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                if (registerDto.Password != registerDto.ConfirmPassword)
                {
                    return BadRequest("Mật khẩu không khớp");
                }
                var AppUser = new AppUser
                {
                    UserName = registerDto.Username,
                    FullName = registerDto.FullName,
                    Email = registerDto.Email,
                    PhoneNumber = registerDto.PhoneNumber
                };

                var createUser = await _accountRepository.CreateAsync(AppUser, registerDto.Password);

                if (createUser.Succeeded)
                {
                    var roleResult = await _accountRepository.AddToRoleAsync(AppUser, "Customer");
                    if (roleResult.Succeeded)
                    {
                        return Ok("Đăng ký tài khoản thành công");
                    }
                    else
                    {
                        return StatusCode(500, roleResult.Errors);
                    }
                }
                else
                {
                    return StatusCode(500, createUser.Errors);
                }
            }
            catch (Exception e)
            {
                return StatusCode(500, e);
            }
        }
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginDto loginDto)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                var user = await _accountRepository.FirstOrDefaultAsync(loginDto.Username);
                if (user == null)
                {
                    return Unauthorized("Tài khoản không tồn tại");
                }
                // Kiểm tra mật khẩu
                var result = await _accountRepository.CheckPasswordSignInAsync(user, loginDto.Password);
                if (!result.Succeeded)
                {
                    return Unauthorized("Mật khẩu không chính xác");
                }
                else
                {
                    return Ok(new LogRegResponse
                    {
                        Username = user.UserName,
                        FullName = user.FullName,
                        Token = await _tokenRepository.createToken(user),
                        Roles = await _accountRepository.GetRolesAsync(user)
                    });
                }
            }
            catch (Exception e)
            {
                return StatusCode(500, e);
            }
        }

        [HttpGet("get-roles")]
        [Authorize]
        public async Task<IActionResult> GetRoles()
        {
            try
            {
                var user = User.GetUserName();
                var appUser = await _accountRepository.FirstOrDefaultAsync(user);
                var roles = await _accountRepository.GetRolesAsync(appUser);
                return Ok(roles);
            }
            catch (Exception e)
            {
                return StatusCode(500, e);
            }
        }

        [HttpPut("grant-authorize/{username}/{role}")]
        public async Task<IActionResult> GrantAuthorize(string username, string role)
        {
            try
            {
                var user = await _accountRepository.FirstOrDefaultAsync(username);
                if (user == null)
                {
                    return NotFound("Không tìm thấy tài khoản");
                }
                var result = await _accountRepository.AddToRoleAsync(user, role);
                if (result.Succeeded)
                {
                    return Ok("Cấp quyền thành công");
                }
                else
                {
                    return StatusCode(500, result.Errors);
                }
            }
            catch (Exception e)
            {
                return StatusCode(500, e);
            }
        }
    }
}