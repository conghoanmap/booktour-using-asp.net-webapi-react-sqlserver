using be_booktour.Data;
using be_booktour.Dtos;
using be_booktour.Dtos.booktour;
using be_booktour.Interfaces;
using be_booktour.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace be_booktour.Services
{
    public class BookingService : IBookingRepository
    {
        private readonly ApplicationDbContext _context;
        private readonly UserManager<AppUser> _userManager;
        public BookingService(ApplicationDbContext context, UserManager<AppUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        public async Task<MyResponse<List<PassengerInfomation>>> AddPassengers(string bookTourId, List<PassengerInfoDto> passengers)
        {
            MyResponse<List<PassengerInfomation>> response = new MyResponse<List<PassengerInfomation>>();
            using (var transaction = await _context.Database.BeginTransactionAsync())
            {
                try
                {
                    // Thêm thông tin hành khách
                    List<PassengerInfomation> passengerInfomations = new List<PassengerInfomation>();
                    int i = 1;
                    foreach (var passenger in passengers)
                    {
                        PassengerInfomation passengerInfomation = new PassengerInfomation
                        {
                            // Guid.NewGuid() tạo ra một giá trị GUID (Globally Unique Identifier), tức là một mã định danh duy nhất toàn cầu.
                            PassengerInfomationId = bookTourId + "_" + i,
                            BookTourId = bookTourId,
                            FullName = passenger.FullName,
                            Gender = passenger.Gender,
                            SingleRoom = passenger.SingleRoom,
                            PassengerTypeId = passenger.PassengerTypeId
                        };
                        _context.PassengerInfomations.Add(passengerInfomation);
                        passengerInfomations.Add(passengerInfomation);
                        i++;
                    }

                    await _context.SaveChangesAsync();
                    await transaction.CommitAsync();

                    response.StatusCode = 201;
                    response.Message = "Thêm hành khách vào tour thành công";
                    response.Data = passengerInfomations;
                    return response;
                }
                catch (Exception ex)
                {
                    await transaction.RollbackAsync();
                    response.StatusCode = 500;
                    response.Message = "Thêm hành khách vào tour thất bại\n(" + ex.Message + ")";
                    return response;
                }

            }
        }

        public async Task<MyResponse<BookTour>> BookTour(string username, BookTourDto bookTourDto)
        {
            MyResponse<BookTour> response = new MyResponse<BookTour>();
            using (var transaction = await _context.Database.BeginTransactionAsync())
            {
                try
                {
                    // Kiểm tra thông tin người dùng
                    var appuser = await _userManager.FindByNameAsync(username);

                    string bookTourId = await GenerateBookTourId(appuser.UserName, bookTourDto.TourId);

                    // Tổng tiền tour
                    var tour = await _context.Tours.Include(d => d.DepartureDates).FirstOrDefaultAsync(t => t.TourId == bookTourDto.TourId);
                    // Số hành khách
                    var countPassenger = await _context.BookTours.Where(p => p.TourId == tour.TourId && p.DepartureDay == bookTourDto.DepartureDay).SumAsync(p => p.People);
                    if (countPassenger + bookTourDto.People > tour.MaxPeople)
                    {
                        response.StatusCode = 400;
                        response.Message = "Tour đã đủ số lượng người tham gia";
                        return response;
                    }
                    // Nếu ngày khởi hành cung cấp không có trong danh sách ngày khởi hành của tour
                    int check = 1;
                    foreach (var item in tour.DepartureDates)
                    {
                        if (item.DepartureDay == bookTourDto.DepartureDay)
                        {
                            check = 0; // Có ngày khởi hành
                            break;
                        }
                    }
                    if (check == 1)
                    {
                        response.StatusCode = 400;
                        response.Message = "Không có kế hoạch khởi hành vào ngày " + bookTourDto.DepartureDay;
                        return response;
                    }

                    decimal tourPrice = tour.Price;
                    var tourType = await _context.TourTypes.FindAsync(bookTourDto.TourTypeId);
                    int percentPrice = tourType.PercentPrice;
                    decimal tourTypePrices = percentPrice * tourPrice / 100;

                    // Tổng tiền tour dựa trên đầu người
                    decimal totalPrice = 0;
                    foreach (var passenger in bookTourDto.PassengerInfoDtos)
                    {
                        var passengerType = await _context.PassengerTypes.FindAsync(passenger.PassengerTypeId);
                        totalPrice += passengerType.PercentPrice * tourTypePrices / 100;
                        totalPrice += passenger.SingleRoom == true ? tour.SingleRoomPrice : 0;
                    }


                    BookTour bookTour = new BookTour
                    {
                        BookTourId = bookTourId,
                        TourId = bookTourDto.TourId,
                        AppUserId = appuser.Id,
                        People = bookTourDto.People,
                        TotalPrice = totalPrice, // Tính sau
                        BookDay = DateTime.Now,
                        DepartureDay = bookTourDto.DepartureDay,
                        FullName = bookTourDto.FullName,
                        Email = bookTourDto.Email,
                        Phone = bookTourDto.Phone,
                        Address = bookTourDto.Address,
                        Note = bookTourDto.Note,
                        TourTypeId = bookTourDto.TourTypeId,
                        Status = "Chờ xác nhận",
                    };

                    _context.BookTours.Add(bookTour);

                    await _context.SaveChangesAsync();
                    await transaction.CommitAsync();

                    response.StatusCode = 201;
                    response.Message = "Đặt tour thành công";
                    response.Data = bookTour;
                    return response;
                }
                catch (Exception ex)
                {
                    await transaction.RollbackAsync();
                    response.StatusCode = 500;
                    response.Message = "Đặt tour thất bại\n(" + ex.Message + ")";
                    return response;
                }
            }
        }

        public async Task<MyResponse<BookTour>> CancelTour(string username, string bookTourId)
        {
            using (var transaction = await _context.Database.BeginTransactionAsync())
            {
                MyResponse<BookTour> response = new MyResponse<BookTour>();
                try
                {
                    var appuser = await _userManager.FindByNameAsync(username);
                    var bookTour = await _context.BookTours.Include(p => p.PassengerInfomations).FirstOrDefaultAsync(b => b.BookTourId == bookTourId);
                    if (bookTour == null)
                    {
                        response.StatusCode = 404;
                        response.Message = "Không tìm thấy tour";
                        return response;
                    }
                    // Nếu cách ngày khởi hành 7 ngày thì không thể hủy
                    if (bookTour.DepartureDay.Subtract(DateTime.Now).Days <= 7)
                    {
                        response.StatusCode = 400;
                        response.Message = "Đã quá thời hạn hủy tour";
                        return response;
                    }
                    if (bookTour.AppUserId != appuser.Id)
                    {
                        response.StatusCode = 403;
                        response.Message = "Không có quyền hủy tour";
                        return response;
                    }

                    _context.BookTours.Remove(bookTour);
                    await _context.SaveChangesAsync();
                    await transaction.CommitAsync();

                    response.StatusCode = 200;
                    response.Message = "Hủy tour thành công";
                    response.Data = bookTour;
                    return response;
                }
                catch (Exception ex)
                {
                    await transaction.RollbackAsync();
                    response.StatusCode = 500;
                    response.Message = "Hủy tour thất bại\n(" + ex.Message + ")";
                    return response;
                }
            }
        }


        public Task<string> GenerateBookTourId(string username, string tourId)
        {
            // Tạo mã đặt tour định dạng BT_username_tourId_date
            string bookTourId = "BT_" + username + "_" + DateTime.Now.ToString("yyyyMMddHHmmss") + "_" + tourId;
            return Task.FromResult(bookTourId);

        }

        public async Task<MyResponse<BookTour>> GetBookingDetail(string username, string bookTourId)
        {
            MyResponse<BookTour> response = new MyResponse<BookTour>();
            try
            {
                var appuser = await _userManager.FindByNameAsync(username);
                var bookTour = await _context.BookTours.Include(b => b.Tour).Include(b => b.Tour.Image).Include(b => b.Payments).Include(p => p.PassengerInfomations).FirstOrDefaultAsync(b => b.BookTourId == bookTourId);
                if (bookTour == null)
                {
                    response.StatusCode = 404;
                    response.Message = "Không tìm thấy tour";
                    return response;
                }
                if (bookTour.AppUserId != appuser.Id)
                {
                    response.StatusCode = 403;
                    response.Message = "Không có quyền xem tour";
                    return response;
                }

                response.StatusCode = 200;
                response.Message = "Lấy thông tin tour thành công";
                response.Data = bookTour;
                return response;
            }
            catch (Exception ex)
            {
                response.StatusCode = 500;
                response.Message = "Lấy thông tin tour thất bại\n(" + ex.Message + ")";
                return response;
            }
        }

        public async Task<MyResponse<List<BookTour>>> GetBookingDetail(string username)
        {
            MyResponse<List<BookTour>> response = new MyResponse<List<BookTour>>();
            try
            {
                var appuser = await _userManager.FindByNameAsync(username);
                if (appuser == null)
                {
                    response.StatusCode = 404;
                    response.Message = "Không tìm thấy người dùng";
                    return response;
                }
                var bookTours = await _context.BookTours.Where(b => b.AppUserId == appuser.Id).ToListAsync();
                response.StatusCode = 200;
                response.Message = "Lấy thông tin tour thành công";
                response.Data = bookTours;
                return response;
            }
            catch (Exception ex)
            {
                response.StatusCode = 500;
                response.Message = "Lấy thông tin tour thất bại\n(" + ex.Message + ")";
                return response;
            }
        }
    }
}