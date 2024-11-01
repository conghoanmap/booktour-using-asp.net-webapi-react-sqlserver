using be_booktour.Data;
using be_booktour.Dtos;
using be_booktour.Dtos.payment;
using be_booktour.Interfaces;
using be_booktour.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace be_booktour.Services
{
    public class PaymentService : IPaymentRepository
    {

        private readonly ApplicationDbContext _context;

        public PaymentService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<MyResponse<List<PaymentMethod>>> GetPaymentMethods()
        {
            MyResponse<List<PaymentMethod>> response = new MyResponse<List<PaymentMethod>>();
            try
            {
                var paymentMethods = await _context.PaymentMethods.ToListAsync();
                response.StatusCode = 200;
                response.Message = "Lấy danh sách phương thức thanh toán thành công";
                response.Data = paymentMethods;
                return response;
            }
            catch (Exception ex)
            {
                response.StatusCode = 500;
                response.Message = "Lấy danh sách phương thức thanh toán thất bại\n(" + ex.Message + ")";
                return response;
            }
        }

        public async Task<MyResponse<Payment>> PaymentTour(PaymentTourDto paymentTourDto)
        {
            MyResponse<Payment> response = new MyResponse<Payment>();
            using (var transaction = _context.Database.BeginTransaction())
            {
                try
                {
                    string paymentId = await GeneratePaymentId();
                    var payment = new Payment
                    {
                        PaymentId = paymentId,
                        BookTourId = paymentTourDto.BookTourId,
                        PaymentMethodId = paymentTourDto.PaymentMethodId,
                        PaidAmount = paymentTourDto.PaidAmount,
                        UnPaidAmount = paymentTourDto.UnPaidAmount,
                        PaymentStatus = "Chưa thanh toán",
                        PaymentNote = "Đang chờ xác nhận"
                    };
                    _context.Payments.Add(payment);
                    await _context.SaveChangesAsync();
                    transaction.Commit();
                    response.StatusCode = 200;
                    response.Message = "Thanh toán tour thành công";
                    response.Data = payment;
                    return response;
                }
                catch (Exception ex)
                {
                    transaction.Rollback();
                    response.StatusCode = 500;
                    response.Message = "Thanh toán tour thất bại\n(" + ex.Message + ")";
                    return response;
                }
            }
        }

        public Task<string> GeneratePaymentId()
        {
            // Tạo mã thanh toán ngẫu nhiên
            return Task.FromResult(Guid.NewGuid().ToString());
        }
    }
}