using System.ComponentModel.DataAnnotations.Schema;

namespace be_booktour.Models
{
    [Table("Itineraries")]
    public class Itinerary
    {
        public string TourId { get; set; }
        public int Day { get; set; } // Ngày thứ mấy trong chuyến đi
        public string Title { get; set; } // Tiêu đề
        public string Description { get; set; } // Mô tả
        public Tour Tour { get; set; }
    }
}