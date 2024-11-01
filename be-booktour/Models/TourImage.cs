using System.ComponentModel.DataAnnotations.Schema;

namespace be_booktour.Models
{
    [Table("TourImages")]
    public class TourImage
    {
        public string TourId { get; set; }
        public Tour Tour { get; set; }
        public int ImageId { get; set; }
        public Image Image { get; set; }
    }
}