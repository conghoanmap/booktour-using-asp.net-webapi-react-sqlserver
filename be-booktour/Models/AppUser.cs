using Microsoft.AspNetCore.Identity;

namespace be_booktour.Models
{
    public class AppUser : IdentityUser
    {
        public string FullName { get; set; }
    }
}