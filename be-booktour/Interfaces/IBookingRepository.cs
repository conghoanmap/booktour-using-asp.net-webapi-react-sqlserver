using be_booktour.Dtos;
using be_booktour.Dtos.booktour;
using be_booktour.Models;

namespace be_booktour.Interfaces
{
    public interface IBookingRepository
    {
        Task<MyResponse<BookTour>> BookTour(string username, BookTourDto bookTourDto);
        Task<MyResponse<BookTour>> CancelTour(string username, string bookTourId);
        Task<MyResponse<List<PassengerInfomation>>> AddPassengers(string bookTourId, List<PassengerInfoDto> passengers);
        Task<MyResponse<BookTour>> GetBookingDetail(string username, string bookTourId);
        Task<MyResponse<List<BookTour>>> GetBookingDetail(string username);
    }
}