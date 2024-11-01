using be_booktour.Dtos;
using be_booktour.Dtos.payment;
using be_booktour.Models;

namespace be_booktour.Interfaces
{
    public interface IPaymentRepository
    {
        Task<MyResponse<List<PaymentMethod>>> GetPaymentMethods();
        Task<MyResponse<Payment>> PaymentTour(PaymentTourDto paymentTourDto);
    }
}