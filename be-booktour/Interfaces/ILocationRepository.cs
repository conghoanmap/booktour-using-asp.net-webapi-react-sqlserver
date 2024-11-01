using be_booktour.Dtos;
using be_booktour.Models;

namespace be_booktour.Interfaces
{
    public interface ILocationRepository
    {
        Task<MyResponse<List<Location>>> GetLocationByRegionId(int regionId);
        Task<MyResponse<Location>> GetLocationById(int locationId);
        Task<MyResponse<List<Region>>> GetRegions();
    }
}