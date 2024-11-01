using System.ComponentModel.DataAnnotations.Schema;

namespace be_booktour.Models
{
    // Phương thức thanh toán
    [Table("PaymentMethods")]
    public class PaymentMethod
    {
        public int PaymentMethodId { get; set; }
        public string PaymentMethodName { get; set; }
        public ICollection<Payment> Payments { get; set; }
    }
}