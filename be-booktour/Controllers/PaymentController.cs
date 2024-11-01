using be_booktour.Dtos.payment;
using be_booktour.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace be_booktour.Controllers
{
    [ApiController]
    [Route("api/payment")]
    public class PaymentController : ControllerBase
    {

        private readonly IPaymentRepository _paymentRepository;

        public PaymentController(IPaymentRepository paymentRepository)
        {
            _paymentRepository = paymentRepository;
        }

        [HttpGet("payment-methods")]
        public async Task<IActionResult> GetPaymentMethods()
        {
            return Ok(await _paymentRepository.GetPaymentMethods());
        }

        [HttpPost("payment-tour")]
        [Authorize]
        public async Task<IActionResult> PaymentTour([FromBody] PaymentTourDto paymentTourDto)
        {
            return Ok(await _paymentRepository.PaymentTour(paymentTourDto));
        }
    }
}