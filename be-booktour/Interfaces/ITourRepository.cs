using be_booktour.Dtos;
using be_booktour.Dtos.itinerary;
using be_booktour.Dtos.tour;
using be_booktour.Helpers;
using be_booktour.Models;

namespace be_booktour.Interfaces
{
    public interface ITourRepository
    {
        // Tour
        Task<MyResponse<List<Tour>>> GetAllTours(QueryObject queryObject);
        Task<MyResponse<Tour>> GetTourById(string id);
        Task<MyResponse<Tour>> CreateDefaultTour(int days, int departureId, int destinationId);
        Task<MyResponse<TourUpdate>> UpdateTour(string id, TourUpdate tourUpdate);
        Task<MyResponse<string>> DeleteTourIncomplete();
        // TourType
        Task<MyResponse<List<TourTypes>>> GetTourTypes();
        Task<MyResponse<TourTypes>> GetTourTypeById(int id);
        // PassengerType
        Task<MyResponse<List<PassengerType>>> GetPassengerTypes();

        // Đếm số lượng người đặt tour vào ngày được truyền vào
        Task<MyResponse<int>> CountBookedPeople(string tourId, DateTime date);
        // Itinerary(sửa)
        Task<MyResponse<Itinerary>> UpdateItinerary(string tourId, ItineraryUpdate itinerary);
        // DepartureDate(thêm, xóa)
        Task<MyResponse<List<DepartureDate>>> AddDepartureDate(string tourId, DateTime[] departureDays);
        Task<MyResponse<DepartureDate>> DeleteDepartureDate(string tourId, DateTime[] departureDays);
        // TourImage(thêm xóa)
        Task<MyResponse<List<TourImage>>> AddTourImage(string tourId, int[] imageIds);
        Task<MyResponse<TourImage>> DeleteTourImage(string tourId, int[] imageIds);
    
    }
}