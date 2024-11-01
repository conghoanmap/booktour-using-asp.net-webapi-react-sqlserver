using System.ComponentModel.DataAnnotations.Schema;

namespace be_booktour.Models
{
    [Table("PassengerInfomations")]
    public class PassengerInfomation
    {
        public string PassengerInfomationId { get; set; }
        public int PassengerTypeId { get; set; } // Loại hành khách
        public string BookTourId { get; set; }
        public string FullName { get; set; }
        public string Gender { get; set; }
        public bool SingleRoom { get; set; } // Phòng đơn không?
        public BookTour BookTour { get; set; }
        public PassengerType PassengerType { get; set; }
    }
}