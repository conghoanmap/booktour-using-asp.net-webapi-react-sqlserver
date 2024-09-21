using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace be_booktour.Controllers
{
    [Route("api/home")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        [HttpGet]
        public async Task<IActionResult> HelloWord()
        {
            return Ok("Hello World");
        }
        [HttpGet("customer")]
        [Authorize(Roles = "Customer")]
        public async Task<IActionResult> HelloCustomer()
        {
            return Ok("Hello Customer");
        }
        [HttpGet("tour")]
        [Authorize(Roles = "TourManager")] // Chỉ có role TourManager mới được truy cập
        // [Authorize(Roles = "TourManager, Customer")] - 1 trong 2 role
        public async Task<IActionResult> HelloTour()
        {
            return Ok("Hello Tour");
        }
        [HttpGet("airline-tickets")]
        [Authorize(Roles = "FlightManager")]
        public async Task<IActionResult> HelloAirlineTickets()
        {
            return Ok("Hello Airline Tickets");
        }
        [HttpGet("hotel")]
        [Authorize(Roles = "HotelManager")]
        public async Task<IActionResult> HelloHotel()
        {
            return Ok("Hello Hotel");
        }
    }
}