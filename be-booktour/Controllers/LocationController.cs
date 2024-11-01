using be_booktour.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace be_booktour.Controllers
{
    [Route("api/location")]
    [ApiController]
    public class LocationController : ControllerBase
    {
        private readonly ILocationRepository _locationRepository;
        public LocationController(ILocationRepository locationRepository)
        {
            _locationRepository = locationRepository;
        }

        // Lấy danh sách địa điểm theo regionId
        [HttpGet("{regionId}")]
        public async Task<IActionResult> GetLocationByRegionId([FromRoute] int regionId)
        {
            return Ok(await _locationRepository.GetLocationByRegionId(regionId));
        }
        [HttpGet("id/{locationId}")]
        public async Task<IActionResult> GetLocationById([FromRoute] int locationId)
        {
            return Ok(await _locationRepository.GetLocationById(locationId));
        }
        [HttpGet("regions")]
        public async Task<IActionResult> GetRegion()
        {
            return Ok(await _locationRepository.GetRegions());
        }

    }
}