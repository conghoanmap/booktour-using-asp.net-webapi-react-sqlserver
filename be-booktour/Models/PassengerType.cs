using System.ComponentModel.DataAnnotations.Schema;

namespace be_booktour.Models
{
    // Loại hành khách
    [Table("PassengerTypes")]
    public class PassengerType
    {
        public int PassengerTypeId { get; set; }
        public string PassengerTypeName { get; set; }
        public string Description { get; set; }
        public int PercentPrice { get; set; } // Phần trăm giá gốc
        public List<PassengerInfomation> PassengerInfomations { get; set; }
    }
}