using System.ComponentModel.DataAnnotations;

namespace be_booktour.Dtos.booktour
{
    public class BookTourDto
    {
        public string TourId { get; set; }
        public int People { get; set; } // Số người
        public DateTime DepartureDay { get; set; }// Ngày khởi hành
        // Thông tin liên hệ
        [Required(ErrorMessage = "Vui lòng nhập họ tên")]
        public string FullName { get; set; }
        [Required(ErrorMessage = "Vui lòng nhập email")]
        [EmailAddress(ErrorMessage = "Email không hợp lệ")]
        public string Email { get; set; }
        [Required(ErrorMessage = "Vui lòng nhập số điện thoại")]
        [Phone(ErrorMessage = "Số điện thoại không hợp lệ")]
        public string Phone { get; set; }
        [Required(ErrorMessage = "Vui lòng nhập địa chỉ")]
        public string Address { get; set; }
        public string Note { get; set; } // Ghi chú
        public int TourTypeId { get; set; }
        public List<PassengerInfoDto> PassengerInfoDtos { get; set; }
    }
}