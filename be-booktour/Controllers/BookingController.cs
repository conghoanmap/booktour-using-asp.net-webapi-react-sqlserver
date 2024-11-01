using be_booktour.Dtos.booktour;
using be_booktour.Extensions;
using be_booktour.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace be_booktour.Controllers
{

    [Route("api/booking")]
    [ApiController]
    public class BookingController : ControllerBase
    {
        private readonly IBookingRepository _bookingRepository;

        public BookingController(IBookingRepository bookingRepository)
        {
            _bookingRepository = bookingRepository;
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> BookTour([FromBody] BookTourDto bookTourDto)
        {
            var username = User.GetUserName();
            return Ok(await _bookingRepository.BookTour(username, bookTourDto));
        }

        [HttpPost("passengers/{bookTourId}")]
        [Authorize]
        public async Task<IActionResult> AddPassengers([FromRoute] string bookTourId, [FromBody] List<PassengerInfoDto> passengers)
        {
            var username = User.GetUserName();
            return Ok(await _bookingRepository.AddPassengers(bookTourId, passengers));
        }

        [HttpDelete("{bookTourId}")]
        [Authorize(Roles = "Customer")]
        public async Task<IActionResult> CancelTour(string bookTourId)
        {
            var username = User.GetUserName();
            return Ok(await _bookingRepository.CancelTour(username, bookTourId));
        }
        [HttpGet("{bookTourId}")]
        [Authorize]
        public async Task<IActionResult> GetBookingDetail(string bookTourId)
        {
            var username = User.GetUserName();
            return Ok(await _bookingRepository.GetBookingDetail(username, bookTourId));
        }
        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetMyBookings()
        {
            var username = User.GetUserName();
            return Ok(await _bookingRepository.GetBookingDetail(username));
        }
    }
}