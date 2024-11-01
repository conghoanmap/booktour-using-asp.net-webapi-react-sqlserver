using System.ComponentModel.DataAnnotations.Schema;

namespace be_booktour.Models
{
    [Table("Images")]
    public class Image
    {
        public int ImageId { get; set; }
        public string ImageName { get; set; } = "";
        public string Url { get; set; } = "";// Link ảnh hoặc đường dẫn ảnh
        List<Tour> Tours { get; set; }
        public ICollection<TourImage> TourImages { get; set; }
    }
}