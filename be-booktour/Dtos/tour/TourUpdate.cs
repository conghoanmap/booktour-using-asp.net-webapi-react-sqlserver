using be_booktour.Dtos.departuredate;
using be_booktour.Dtos.itinerary;
using be_booktour.Models;

namespace be_booktour.Dtos.tour
{
    public class TourUpdate
    {
        public string TourName { get; set; }
        public string MeetingPoint { get; set; } // Điểm hẹn(địa chỉ cụ thể)
        public required decimal Price { get; set; } // Giá
        public string Vehicle { get; set; } // Phương tiện
        public int MaxPeople { get; set; } // Số người tối đa
        public int ImageId { get; set; } // Mã ảnh đại diện
        public decimal SingleRoomPrice { get; set; } // Giá phòng đơn
        public int AdvanceDeposit { get; set; } // Phần trăm cọc trước n%
        public int Finished { get; set; } // Sẵn sàng [0,1]
    }
}