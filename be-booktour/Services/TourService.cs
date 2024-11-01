using be_booktour.Data;
using be_booktour.Dtos;
using be_booktour.Dtos.itinerary;
using be_booktour.Dtos.tour;
using be_booktour.Helpers;
using be_booktour.Interfaces;
using be_booktour.Models;
using Microsoft.EntityFrameworkCore;

namespace be_booktour.Services
{
    public class TourService : ITourRepository
    {
        private readonly ApplicationDbContext _context;

        public TourService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<MyResponse<TourUpdate>> UpdateTour(string id, TourUpdate tourUpdate)
        {
            MyResponse<TourUpdate> res = new MyResponse<TourUpdate>();
            using (var transaction = await _context.Database.BeginTransactionAsync())
            {
                try
                {
#pragma warning disable CS8600 // Converting null literal or possible null value to non-nullable type.
                    Tour tour = await _context.Tours.Where(t => t.TourId == id).FirstOrDefaultAsync();
#pragma warning restore CS8600 // Converting null literal or possible null value to non-nullable type.
                    if (tour == null)
                    {
                        res.StatusCode = 404;
                        res.Message = "Không tìm thấy tour";
                        return res;
                    }
                    if (await _context.Tours.Where(t => t.TourName == tourUpdate.TourName && t.TourId != id).FirstOrDefaultAsync() != null)
                    {
                        res.StatusCode = 400;
                        res.Message = "Tên tour đã trùng với tour khác";
                        return res;
                    }
                    if (await _context.Images.Where(i => i.ImageId == tourUpdate.ImageId).FirstOrDefaultAsync() == null)
                    {
                        res.StatusCode = 400;
                        res.Message = "Hình ảnh không tồn tại";
                        return res;
                    }

                    // Còn tiếp...
                    tour.TourName = tourUpdate.TourName;
                    tour.MeetingPoint = tourUpdate.MeetingPoint;
                    tour.Price = tourUpdate.Price;
                    tour.Vehicle = tourUpdate.Vehicle;
                    tour.MaxPeople = tourUpdate.MaxPeople;
                    tour.ImageId = tourUpdate.ImageId;
                    tour.SingleRoomPrice = tourUpdate.SingleRoomPrice;
                    tour.AdvanceDeposit = tourUpdate.AdvanceDeposit;
                    tour.Finished = tourUpdate.Finished;

                    await _context.SaveChangesAsync();
                    await transaction.CommitAsync();

                    res.StatusCode = 200;
                    res.Message = "Cập nhật tour thành công";
                    res.Data = tourUpdate;
                    return res;
                }
                catch (Exception ex)
                {
                    await transaction.RollbackAsync();
                    res.StatusCode = 500;
                    res.Message = "Cập nhật tour thất bại";
                    return null;
                }
            }
        }

        public async Task<MyResponse<Tour>> CreateDefaultTour(int days, int departureId, int destinationId)
        {
            MyResponse<Tour> res = new MyResponse<Tour>();
            using (var transaction = await _context.Database.BeginTransactionAsync())
            {
                try
                {
                    string tourCode = await this.GenerateTourCode();
                    Tour tour = new Tour
                    {
                        TourId = tourCode,
                        TourName = "Tên tour " + tourCode,
                        Days = days,
                        MeetingPoint = "Điểm tập trung",
                        Price = 1000000,
                        Vehicle = "Phương tiện",
                        MaxPeople = 10,
                        ImageId = 13,
                        SingleRoomPrice = 1000000,
                        AdvanceDeposit = 30,
                        DepartureLocationId = departureId, // Sài Gòn
                        DestinationLocationId = destinationId, // Hà Nội
                        Finished = 0
                    };
                    await _context.Tours.AddAsync(tour);

                    for (int i = 1; i <= days; i++)
                    {
                        Itinerary itinerary = new Itinerary
                        {
                            TourId = tourCode,
                            Day = i,
                            Title = "Lộ trình ngày " + i,
                            Description = "Mô tả ngày " + i
                        };
                        await _context.Itineraries.AddAsync(itinerary);
                    }

                    DepartureDate departureDate = new DepartureDate
                    {
                        TourId = tourCode,
                        DepartureDay = DateTime.Now
                    };
                    await _context.DepartureDates.AddAsync(departureDate);

                    await _context.SaveChangesAsync();
                    await transaction.CommitAsync();

                    res.StatusCode = 200;
                    res.Message = "Tạo tour mẫu thành công";
                    res.Data = await _context.Tours.Where(t => t.TourId == tourCode).FirstOrDefaultAsync();
                    return res;
                }
                catch (Exception)
                {
                    await transaction.RollbackAsync();
                    res.StatusCode = 500;
                    res.Message = "Quá trình tạo tour mẫu bị gián đoạn";
                    return res;
                }
            }
        }

        public Task<string> GenerateTourCode()
        {
            // Tạo mã tour ngẫu nhiên có 8 kí tự gồm số hoặc chữ
            string code = "";
            Random random = new Random();
            for (int i = 0; i < 8; i++)
            {
                int type = random.Next(0, 2);
                if (type == 0)
                {
                    code += (char)random.Next(65, 91);
                }
                else
                {
                    code += random.Next(0, 10);
                }
            }
            return Task.FromResult(code);
        }

        public async Task<MyResponse<Tour>> GetTourById(string id)
        {
            MyResponse<Tour> res = new MyResponse<Tour>();
#pragma warning disable CS8600 // Converting null literal or possible null value to non-nullable type.
            Tour tour = await _context.Tours.Where(t => t.TourId == id)
                .Include(t => t.DepartureLocation)
                .Include(t => t.DestinationLocation)
                .Include(t => t.Image)
                .Include(t => t.DepartureDates)
                .Include(t => t.Itineraries)
                .FirstOrDefaultAsync();
            
            List<TourImage> tourImages = await _context.TourImages.Where(ti => ti.TourId == id).Include(t => t.Image).ToListAsync();
            tour.TourImages = tourImages;
#pragma warning restore CS8600 // Converting null literal or possible null value to non-nullable type.
                
            if (tour == null)
            {
                res.StatusCode = 404;
                res.Message = "Không tìm thấy tour";
                return res;
            }
            res.StatusCode = 200;
            res.Message = "Lấy tour thành công";
            res.Data = tour;
            return res;
        }

        public async Task<MyResponse<Itinerary>> UpdateItinerary(string tourId, ItineraryUpdate itinerary)
        {
            MyResponse<Itinerary> res = new MyResponse<Itinerary>();
            using (var transaction = await _context.Database.BeginTransactionAsync())
            {
                try
                {
#pragma warning disable CS8600 // Converting null literal or possible null value to non-nullable type.
                    Itinerary it = await _context.Itineraries.Where(i => i.TourId == tourId && i.Day == itinerary.Day).FirstOrDefaultAsync();
#pragma warning restore CS8600 // Converting null literal or possible null value to non-nullable type.
                    if (it == null)
                    {
                        res.StatusCode = 404;
                        res.Message = "Không tìm thấy lịch trình";
                        return res;
                    }
                    it.Title = itinerary.Title;
                    it.Description = itinerary.Description;
                    await _context.SaveChangesAsync();
                    await transaction.CommitAsync();
                    res.StatusCode = 200;
                    res.Message = "Cập nhật lịch trình thành công";
                    res.Data = await _context.Itineraries.Where(i => i.TourId == tourId && i.Day == itinerary.Day).FirstOrDefaultAsync();
                    return res;
                }
                catch (Exception)
                {
                    await transaction.RollbackAsync();
                    res.StatusCode = 500;
                    res.Message = "Cập nhật lịch trình thất bại";
                    return res;
                }
            }
        }

        public async Task<MyResponse<List<DepartureDate>>> AddDepartureDate(string tourId, DateTime[] departureDays)
        {
            MyResponse<List<DepartureDate>> res = new MyResponse<List<DepartureDate>>();
            List<DepartureDate> departureDates = new List<DepartureDate>();
            using (var transaction = await _context.Database.BeginTransactionAsync())
            {
                try
                {
                    foreach (DateTime item in departureDays)
                    {
                        item.AddHours(0).AddMinutes(0).AddSeconds(0);
                        // Kiểm tra đã tồn tại ngày khởi hành chưa
#pragma warning disable CS8600 // Converting null literal or possible null value to non-nullable type.
                        DepartureDate existDate = await _context.DepartureDates.Where(d => d.TourId == tourId && d.DepartureDay == item).FirstOrDefaultAsync();
#pragma warning restore CS8600 // Converting null literal or possible null value to non-nullable type.
                        if (existDate == null)
                        {
                            // Ngày khởi hành không được là ngày quá khứ
                            if (item > DateTime.Now)
                            {
                                DepartureDate departureDate = new DepartureDate
                                {
                                    TourId = tourId,
                                    DepartureDay = item
                                };
                                await _context.DepartureDates.AddAsync(departureDate);
                                departureDates.Add(departureDate);
                            }
                        }
                    }

                    await _context.SaveChangesAsync();
                    await transaction.CommitAsync();
                    res.StatusCode = 200;
                    res.Message = "Đã thêm " + departureDates.Count + " ngày khởi hành mới vào tour";
                    res.Data = departureDates;
                    return res;
                }
                catch (Exception)
                {
                    await transaction.RollbackAsync();
                    res.StatusCode = 500;
                    res.Message = "Thêm ngày khởi hành thất bại";
                    return res;
                }
            }
        }

        public async Task<MyResponse<DepartureDate>> DeleteDepartureDate(string tourId, DateTime[] departureDays)
        {
            MyResponse<DepartureDate> res = new MyResponse<DepartureDate>();
            using (var transaction = await _context.Database.BeginTransactionAsync())
            {
                try
                {
                    // Kiểm tra tour có tồn tại không
                    Tour tour = await _context.Tours.Where(t => t.TourId == tourId).FirstOrDefaultAsync();
                    if (tour == null)
                    {
                        res.StatusCode = 404;
                        res.Message = "Không tìm thấy tour";
                        return res;
                    }
                    int count = 0;
                    foreach (DateTime item in departureDays)
                    {
                        item.AddHours(0).AddMinutes(0).AddSeconds(0);
                        DepartureDate existDate = await _context.DepartureDates.Where(d => d.TourId == tourId && d.DepartureDay == item).FirstOrDefaultAsync();
                        if (existDate != null)
                        {
                            // Ngày khởi hành không được là ngày quá khứ
                            if (existDate.DepartureDay > DateTime.Now)
                            {
                                _context.DepartureDates.Remove(existDate);
                                count++;
                            }
                        }
                    }

                    await _context.SaveChangesAsync();
                    await transaction.CommitAsync();
                    res.StatusCode = 200;
                    res.Message = "Đã xóa " + count + " ngày khởi hành khỏi tour";
                    return res;
                }
                catch (Exception)
                {
                    await transaction.RollbackAsync();
                    res.StatusCode = 500;
                    res.Message = "Xóa ngày khởi hành thất bại";
                    return res;
                }
            }
        }

        public async Task<MyResponse<List<TourImage>>> AddTourImage(string tourId, int[] imageIds)
        {
            MyResponse<List<TourImage>> res = new MyResponse<List<TourImage>>();
            List<TourImage> tourImages = new List<TourImage>();
            using (var transaction = await _context.Database.BeginTransactionAsync())
            {
                try
                {
                    // Kiểm tra tour có tồn tại không
#pragma warning disable CS8600 // Converting null literal or possible null value to non-nullable type.
                    Tour tour = await _context.Tours.Where(t => t.TourId == tourId).FirstOrDefaultAsync();
#pragma warning restore CS8600 // Converting null literal or possible null value to non-nullable type.
                    if (tour == null)
                    {
                        res.StatusCode = 404;
                        res.Message = "Không tìm thấy tour";
                        return res;
                    }
                    foreach (int item in imageIds)
                    {
                        // Tồn tại hình ảnh trong máy chủ chưa
#pragma warning disable CS8600 // Converting null literal or possible null value to non-nullable type.
                        Image existImage = await _context.Images.Where(i => i.ImageId == item).FirstOrDefaultAsync();
#pragma warning restore CS8600 // Converting null literal or possible null value to non-nullable type.
                        if (existImage != null)
                        {
                            // Tồn tại hình ảnh trong tour chưa
#pragma warning disable CS8600 // Converting null literal or possible null value to non-nullable type.
                            TourImage existTourImage = await _context.TourImages.Where(ti => ti.TourId == tourId && ti.ImageId == item).FirstOrDefaultAsync();
#pragma warning restore CS8600 // Converting null literal or possible null value to non-nullable type.
                            if (existTourImage == null)
                            {

                                TourImage tourImage = new TourImage
                                {
                                    TourId = tourId,
                                    ImageId = item
                                };
                                await _context.TourImages.AddAsync(tourImage);
                                tourImages.Add(tourImage);
                            }
                        }
                    }

                    await _context.SaveChangesAsync();
                    await transaction.CommitAsync();
                    res.StatusCode = 200;
                    res.Message = "Đã thêm " + tourImages.Count + " hình ảnh vào tour";
                    res.Data = tourImages;
                    return res;
                }
                catch (Exception)
                {
                    await transaction.RollbackAsync();
                    res.StatusCode = 500;
                    res.Message = "Quá trình thêm hình ảnh vào tour bị gián đoạn";
                    return res;
                }
            }
        }

        public async Task<MyResponse<TourImage>> DeleteTourImage(string tourId, int[] imageIds)
        {
            MyResponse<TourImage> res = new MyResponse<TourImage>();
            using (var transaction = await _context.Database.BeginTransactionAsync())
            {
                try
                {
                    // Kiểm tra tour có tồn tại không
#pragma warning disable CS8600 // Converting null literal or possible null value to non-nullable type.
                    Tour tour = await _context.Tours.Where(t => t.TourId == tourId).FirstOrDefaultAsync();
#pragma warning restore CS8600 // Converting null literal or possible null value to non-nullable type.
                    if (tour == null)
                    {
                        res.StatusCode = 404;
                        res.Message = "Không tìm thấy tour";
                        return res;
                    }
                    int count = 0;
                    foreach (int imageId in imageIds)
                    {
                        // Kiểm tra hình ảnh có tồn tại trong tour không
#pragma warning disable CS8600 // Converting null literal or possible null value to non-nullable type.
                        TourImage existTourImage = await _context.TourImages.Where(ti => ti.TourId == tourId && ti.ImageId == imageId).FirstOrDefaultAsync();
#pragma warning restore CS8600 // Converting null literal or possible null value to non-nullable type.
                        if (existTourImage != null)
                        {
                            _context.TourImages.Remove(existTourImage);
                            count++;
                        }
                    }

                    await _context.SaveChangesAsync();
                    await transaction.CommitAsync();
                    res.StatusCode = 200;
                    res.Message = "Đã gỡ " + count + " hình ảnh khỏi tour";
                    return res;
                }
                catch (Exception)
                {
                    await transaction.RollbackAsync();
                    res.StatusCode = 500;
                    res.Message = "Quá trình gỡ hình ảnh khỏi tour bị gián đoạn";
                    return res;
                }
            }
        }

        public async Task<MyResponse<List<Tour>>> GetAllTours(QueryObject queryObject)
        {
            MyResponse<List<Tour>> res = new MyResponse<List<Tour>>();
            var tours = _context.Tours
                .Where(t => t.Finished != 0)
                .Include(t => t.DepartureLocation)
                .Include(t => t.DestinationLocation)
                .Include(t => t.Image)
                .Include(t => t.DepartureDates)
                // .Include(t => t.Itineraries)
                .Include(t => t.TourImages)
                .AsQueryable();
            // Lọc theo từ khóa
            // tours = tours.Where(t => t.TourName.Contains(queryObject.TourName));
            // // Lọc theo điểm khởi hành
            // if (queryObject.DepartureId > 0)
            // {
            //     tours = tours.Where(t => t.DepartureLocationId == queryObject.DepartureId);
            // }
            // Lọc theo điểm đến
            if (queryObject.DestinationId > 0)
            {
                tours = tours.Where(t => t.DestinationLocationId == queryObject.DestinationId);
            }
            // // Lọc theo khoảng giá [min, max]
            // tours = tours.Where(t => t.Price > queryObject.MinPrice && t.Price <= queryObject.MaxPrice);
            // // Lọc theo ngày khởi hành truyền vào đến tương lai
            // tours = tours.Where(t => t.DepartureDates.Any(d => d.DepartureDay >= queryObject.DepartureDay));
            // // Lọc theo phương tiện
            // if (queryObject.Vehicle.Count() > 0)
            // {
            //     tours = tours.Where(t => t.Vehicle.Contains(queryObject.Vehicle));
            // }
            // if (queryObject.SortBy.Contains("Price"))
            // {
            //     if (queryObject.IsDecsending)
            //     {
            //         tours = tours.OrderByDescending(t => t.Price);
            //     }
            //     else
            //     {
            //         tours = tours.OrderBy(t => t.Price);
            //     }
            // }
            // // Phân trang
            // var skipNumber = (queryObject.PageNumber - 1) * queryObject.PageSize;

            // tours = tours.Skip(skipNumber).Take(queryObject.PageSize);

            res.StatusCode = 200;
            res.Message = "Lấy danh sách tour thành công";
            res.Data = await tours.ToListAsync();
            return res;
        }

        public async Task<MyResponse<int>> CountBookedPeople(string tourId, DateTime date)
        {
            MyResponse<int> res = new MyResponse<int>();
            try
            {
                var bookTours = await _context.BookTours.Where(b => b.TourId == tourId && b.DepartureDay == date).ToListAsync();
                int count = bookTours.Sum(b => b.People);
                if (count == 0)
                {
                    res.StatusCode = 404;
                    res.Message = "Còn trống";
                    res.Data = 0;
                    return res;
                }
                else
                {
                    res.StatusCode = 200;
                    res.Message = "Số lượng người đặt tour: " + count;
                    res.Data = count;
                }
                return res;
            }
            catch (Exception)
            {
                res.StatusCode = 500;
                res.Message = "Không xác định được số lượng người đặt tour";
                return res;
            }
        }

        public async Task<MyResponse<List<TourTypes>>> GetTourTypes()
        {
            MyResponse<List<TourTypes>> res = new MyResponse<List<TourTypes>>();
            try
            {
                List<TourTypes> tourTypes = await _context.TourTypes.ToListAsync();
                res.StatusCode = 200;
                res.Message = "Lấy danh sách loại tour thành công";
                res.Data = tourTypes;
                return res;
            }
            catch (Exception)
            {
                res.StatusCode = 500;
                res.Message = "Lấy danh sách loại tour thất bại";
                return res;
            }
        }

        public async Task<MyResponse<TourTypes>> GetTourTypeById(int id)
        {
            MyResponse<TourTypes> res = new MyResponse<TourTypes>();
            try
            {
#pragma warning disable CS8600 // Converting null literal or possible null value to non-nullable type.
                TourTypes tourType = await _context.TourTypes.Where(t => t.TourTypeId == id).FirstOrDefaultAsync();
#pragma warning restore CS8600 // Converting null literal or possible null value to non-nullable type.
                if (tourType == null)
                {
                    res.StatusCode = 404;
                    res.Message = "Không tìm thấy loại tour";
                    return res;
                }
                res.StatusCode = 200;
                res.Message = "Lấy loại tour thành công";
                res.Data = tourType;
                return res;
            }
            catch (Exception)
            {
                res.StatusCode = 500;
                res.Message = "Lấy loại tour thất bại";
                return res;
            }
        }

        public async Task<MyResponse<List<PassengerType>>> GetPassengerTypes()
        {
            MyResponse<List<PassengerType>> res = new MyResponse<List<PassengerType>>();
            try
            {
                List<PassengerType> passengerTypes = await _context.PassengerTypes.ToListAsync();
                res.StatusCode = 200;
                res.Message = "Lấy danh sách loại hành khách thành công";
                res.Data = passengerTypes;
                return res;
            }
            catch (Exception)
            {
                res.StatusCode = 500;
                res.Message = "Lấy danh sách loại hành khách thất bại";
                return res;
            }
        }

        public async Task<MyResponse<string>> DeleteTourIncomplete()
        {
            MyResponse<string> res = new MyResponse<string>();
            using (var transaction = await _context.Database.BeginTransactionAsync())
            {
                try
                {
                    // Xóa tour chưa hoàn thành
                    var tours = await _context.Tours.Where(t => t.Finished == 0).ToListAsync();
                    foreach (var item in tours)
                    {
                        _context.Tours.Remove(item);
                    }
                    await _context.SaveChangesAsync();
                    await transaction.CommitAsync();
                    res.StatusCode = 200;
                    res.Message = "Đã xóa tour chưa hoàn thành";
                    return res;
                }
                catch (Exception ex)
                {
                    await transaction.RollbackAsync();
                    res.StatusCode = 500;
                    res.Message = "Xóa tour chưa hoàn thành thất bại";
                    res.Data = ex.Message;
                    return res;
                }
            }
        }
    }
}