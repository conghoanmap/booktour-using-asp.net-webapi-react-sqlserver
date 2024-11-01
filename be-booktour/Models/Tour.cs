using System.ComponentModel.DataAnnotations.Schema;

namespace be_booktour.Models
{
    [Table("Tours")]
    public class Tour
    {
        [Column(TypeName = "nvarchar(50)")]
        public string TourId { get; set; }
        public string TourName { get; set; }
        public int Days { get; set; } // Số ngày
        public string MeetingPoint { get; set; } // Điểm hẹn(địa chỉ cụ thể)
        [Column(TypeName = "decimal(18,2)")]
        public required decimal Price { get; set; } // Giá
        public string Vehicle { get; set; } // Phương tiện
        public int MaxPeople { get; set; } // Số người tối đa
        public int ImageId { get; set; } // Mã ảnh đại diện
        [Column(TypeName = "decimal(18,2)")]
        public decimal SingleRoomPrice { get; set; } // Giá phòng đơn
        public int AdvanceDeposit { get; set; } // Phần trăm cọc trước n%
        public int DepartureLocationId { get; set; }
        public int DestinationLocationId { get; set; }
        public int Finished { get; set; } // Sẵn sàng [0,1]
        public Location DepartureLocation { get; set; }
        public Location DestinationLocation { get; set; }
        public Image Image { get; set; }
        public ICollection<TourImage> TourImages { get; set; }
        public ICollection<Itinerary> Itineraries { get; set; }
        public ICollection<DepartureDate> DepartureDates { get; set; }
        public ICollection<Review> Reviews { get; set; }
        public ICollection<BookTour> BookTours { get; set; }

    }
}