using be_booktour.Data;
using be_booktour.Dtos;
using be_booktour.Interfaces;
using be_booktour.Models;
using Microsoft.EntityFrameworkCore;

namespace be_booktour.Services
{
    public class LocationService : ILocationRepository
    {
        private readonly ApplicationDbContext _context;
        public LocationService(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<MyResponse<List<Location>>> GetLocationByRegionId(int regionId)
        {
            MyResponse<List<Location>> response = new MyResponse<List<Location>>();
            try
            {
                var locations = new List<Location>();
                if (regionId < 1)
                {
                    locations = await _context.Locations.ToListAsync();
                    response.StatusCode = 200;
                    response.Message = "Lấy danh sách địa điểm thành công";
                    response.Data = locations;
                }
                else
                {
                    var region = await _context.Regions.FindAsync(regionId);
                    if (region == null)
                    {
                        response.StatusCode = 404;
                        response.Message = "Không tìm thấy khu vực";
                        return response;
                    }

                    locations = await _context.Locations.Where(l => l.RegionId == regionId).ToListAsync();
                    response.StatusCode = 200;
                    response.Message = "Lấy danh sách địa điểm thành công";
                    response.Data = locations;
                }
            }
            catch (Exception ex)
            {
                response.StatusCode = 500;
                response.Message = ex.Message;
            }
            return response;
        }
        public async Task<MyResponse<Location>> GetLocationById(int locationId)
        {
            MyResponse<Location> response = new MyResponse<Location>();
            try
            {
                var location = await _context.Locations.FindAsync(locationId);
                if (location == null)
                {
                    response.StatusCode = 404;
                    response.Message = "Không tìm thấy địa điểm";
                    return response;
                }
                response.StatusCode = 200;
                response.Message = "Lấy địa điểm thành công";
                response.Data = location;
            }
            catch (Exception ex)
            {
                response.StatusCode = 500;
                response.Message = ex.Message;
            }
            return response;
        }

        public async Task<MyResponse<List<Region>>> GetRegions()
        {
            MyResponse<List<Region>> response = new MyResponse<List<Region>>();
            try
            {
                var regions = await _context.Regions.Include(r=> r.Locations).ToListAsync();
                response.StatusCode = 200;
                response.Message = "Lấy danh sách khu vực thành công";
                response.Data = regions;
            }
            catch (Exception ex)
            {
                response.StatusCode = 500;
                response.Message = ex.Message;
            }
            return response;
        }
    }
}