using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace be_booktour.Models
{
    [Table("Locations")]
    public class Location
    {
        public int LocationId { get; set; } // Mã tỉnh/thành phố
        public string LocationName { get; set; } // Tên tỉnh/thành phố
        public int RegionId { get; set; } // Mã vùng miền
        public Region Region { get; set; }
        public ICollection<Tour> DepartureTours { get; set; }
        public ICollection<Tour> DestinationTours { get; set; }
    }
}