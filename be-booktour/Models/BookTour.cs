using System.ComponentModel.DataAnnotations.Schema;

namespace be_booktour.Models
{
    [Table("BookTours")]
    public class BookTour
    {
        public string BookTourId { get; set; }
        public string TourId { get; set; }
        public string AppUserId { get; set; }
        public int People { get; set; } // Số người
        [Column(TypeName = "decimal(18,2)")]
        public decimal TotalPrice { get; set; } // Tổng giá
        public DateTime BookDay { get; set; } = new DateTime(); // Ngày đặt
        public DateTime DepartureDay { get; set; }// Ngày khởi hành
        // Thông tin liên hệ
        public string FullName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
        public string Note { get; set; } // Ghi chú
        public string Status { get; set; } // Trạng thái
        public int TourTypeId { get; set; }
        public TourTypes TourType { get; set; }
        public List<PassengerInfomation> PassengerInfomations { get; set; }
        public Tour Tour { get; set; }
        public ICollection<Payment> Payments { get; set; }

    }
}