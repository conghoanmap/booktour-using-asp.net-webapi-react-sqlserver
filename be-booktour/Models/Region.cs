using System.ComponentModel.DataAnnotations.Schema;

namespace be_booktour.Models
{
    // Vùng miền
    [Table("Regions")]
    public class Region
    {
        public int RegionId { get; set; }
        public string RegionName { get; set; }
        public List<Location> Locations { get; set; }
    }
}