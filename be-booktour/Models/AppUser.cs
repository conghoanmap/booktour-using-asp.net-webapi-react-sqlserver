using Microsoft.AspNetCore.Identity;

namespace be_booktour.Models
{
    public class AppUser : IdentityUser
    {
        public string FullName { get; set; }
        public List<BookTour> BookTours { get; set; }
        public List<Review> Reviews { get; set; }
    }
}