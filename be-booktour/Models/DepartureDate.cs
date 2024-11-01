using System.ComponentModel.DataAnnotations.Schema;

namespace be_booktour.Models
{
    [Table("DepartureDates")]
    public class DepartureDate
    {
        public string TourId { get; set; }
        public DateTime DepartureDay { get; set; }
        public Tour Tour { get; set; }
    }
}