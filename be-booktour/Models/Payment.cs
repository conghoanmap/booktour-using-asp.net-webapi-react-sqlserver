using System.ComponentModel.DataAnnotations.Schema;

namespace be_booktour.Models
{
    [Table("Payments")]
    public class Payment
    {
        public string PaymentId { get; set; } // Mã thanh toán
        public string BookTourId { get; set; } // Tour thanh toán
        public int PaymentMethodId { get; set; } // Phương thức thanh toán
        public string PaymentStatus { get; set; } // Trạng thái thanh toán
        public string PaymentNote { get; set; } // Ghi chú
        [Column(TypeName = "decimal(18,0)")]
        public decimal PaidAmount { get; set; } // Số tiền đã thanh toán
        [Column(TypeName = "decimal(18,0)")]
        public decimal UnPaidAmount { get; set; } // Số tiền đã thanh toán
        public BookTour BookTour { get; set; }
        public PaymentMethod PaymentMethod { get; set; }
    }
}