using be_booktour.Dtos;
using be_booktour.Dtos.itinerary;
using be_booktour.Dtos.tour;
using be_booktour.Helpers;
using be_booktour.Interfaces;
using be_booktour.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace be_booktour.Controllers
{
    [Route("api/tour")]
    [ApiController]
    public class TourController : ControllerBase
    {
        private readonly ITourRepository _tourRepository;

        public TourController(ITourRepository tourRepository)
        {
            _tourRepository = tourRepository;
        }
        [HttpGet("passenger-types")]
        public async Task<IActionResult> GetPassengerTypes()
        {
            return Ok(await _tourRepository.GetPassengerTypes());
        }
        [HttpGet("tour-types")]
        public async Task<IActionResult> GetTourTypes()
        {
            return Ok(await _tourRepository.GetTourTypes());
        }
        [HttpGet("tour-type/{id}")]
        public async Task<IActionResult> GetTourTypeById([FromRoute] int id)
        {
            return Ok(await _tourRepository.GetTourTypeById(id));
        }
        [HttpGet]
        public async Task<IActionResult> GetAllTours([FromQuery] QueryObject queryObject)
        {
            return Ok(await _tourRepository.GetAllTours(queryObject));
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetTourById(string id)
        {
            return Ok(await _tourRepository.GetTourById(id));
        }

        [HttpGet("default")]
        [Authorize(Roles = "TourManager")]
        public async Task<IActionResult> CreateDefaultTour([FromQuery] int days, [FromQuery] int destinationId, [FromQuery] int departureId)
        {
            return Ok(await _tourRepository.CreateDefaultTour(days, destinationId, departureId));
        }


        [HttpPut("{id}")]
        [Authorize(Roles = "TourManager")]
        public async Task<IActionResult> UpdateTour([FromRoute] string id, [FromBody] TourUpdate tourUpdate)
        {
            return Ok(await _tourRepository.UpdateTour(id, tourUpdate));
        }

        [HttpPut("itinerary/{tourId}")]
        [Authorize(Roles = "TourManager")]
        public async Task<IActionResult> UpdateItinerary([FromRoute] string tourId, [FromBody] ItineraryUpdate itineraryUpdate)
        {
            return Ok(await _tourRepository.UpdateItinerary(tourId, itineraryUpdate));
        }
        [HttpPost("departure-date/{tourId}")]
        [Authorize(Roles = "TourManager")]
        public async Task<IActionResult> AddDepartureDate([FromRoute] string tourId, [FromBody] DateTime[] departureDays)
        {
            return Ok(await _tourRepository.AddDepartureDate(tourId, departureDays));
        }
        [HttpDelete("departure-date/{tourId}")]
        [Authorize(Roles = "TourManager")]
        public async Task<IActionResult> DeleteDepartureDate([FromRoute] string tourId, [FromBody] DateTime[] departureDays)
        {
            return Ok(await _tourRepository.DeleteDepartureDate(tourId, departureDays));
        }
        [HttpPost("tour-image/{tourId}")]
        [Authorize(Roles = "TourManager")]
        public async Task<IActionResult> AddTourImage([FromRoute] string tourId, [FromBody] int[] imageIds)
        {
            return Ok(await _tourRepository.AddTourImage(tourId, imageIds));
        }
        [HttpDelete("tour-image/{tourId}")]
        [Authorize(Roles = "TourManager")]
        public async Task<IActionResult> DeleteTourImage([FromRoute] string tourId, [FromBody] int[] imageIds)
        {
            return Ok(await _tourRepository.DeleteTourImage(tourId, imageIds));
        }
        [HttpGet("count-booked-people/{tourId}/{date}")]
        public async Task<IActionResult> CountBookedPeople([FromRoute] string tourId, [FromRoute] DateTime date)
        {
            return Ok(await _tourRepository.CountBookedPeople(tourId, date));
        }
        
        [HttpDelete("delete-tour-incomplete")]
        [Authorize]
        public async Task<IActionResult> DeleteTourIncomplete()
        {
            return Ok(await _tourRepository.DeleteTourIncomplete());
        }
    }
}