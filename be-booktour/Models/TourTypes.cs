using System.ComponentModel.DataAnnotations.Schema;

namespace be_booktour.Models
{
    [Table("TourTypes")]
    public class TourTypes
    {
        public int TourTypeId { get; set; }
        public string TourTypeName { get; set; }
        public int PercentPrice { get; set; } // Phần trăm giá gốc
        public string Description { get; set; }
        public List<BookTour> BookTours { get; set; }
    }
}