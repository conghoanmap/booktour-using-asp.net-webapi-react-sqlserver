namespace be_booktour.Dtos.payment
{
    public class PaymentTourDto
    {
        public string BookTourId { get; set; } // Tour thanh toán
        public int PaymentMethodId { get; set; } // Phương thức thanh toán
        public decimal PaidAmount { get; set; } // Số tiền đã thanh toán
        public decimal UnPaidAmount { get; set; } // Số tiền còn thanh toán
    }
}