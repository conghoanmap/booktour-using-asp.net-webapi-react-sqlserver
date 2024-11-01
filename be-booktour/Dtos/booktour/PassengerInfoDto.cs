using System.ComponentModel.DataAnnotations;

namespace be_booktour.Dtos.booktour
{
    public class PassengerInfoDto
    {
        public int PassengerTypeId { get; set; } // Loại hành khách
        [Required(ErrorMessage = "Vui lòng nhập họ tên")]
        public string FullName { get; set; }
        public string Gender { get; set; }
        public bool SingleRoom { get; set; } = false; // Phòng đơn không?
    }
}