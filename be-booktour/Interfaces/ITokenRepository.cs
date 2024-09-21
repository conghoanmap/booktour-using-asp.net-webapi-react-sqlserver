using be_booktour.Models;

namespace be_booktour.Interfaces
{
    public interface ITokenRepository
    {
        Task<string> createToken(AppUser user);
    }
}