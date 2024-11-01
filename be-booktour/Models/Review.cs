using System.ComponentModel.DataAnnotations.Schema;

namespace be_booktour.Models
{
    [Table("Reviews")]
    public class Review
    {
        public string TourId { get; set; }
        public string AppUserId { get; set; } 
        public string Comment { get; set; }
        public int Rating { get; set; } // Số sao đánh giá
        public Tour Tour { get; set; }
        public AppUser AppUser { get; set; }
    }
}