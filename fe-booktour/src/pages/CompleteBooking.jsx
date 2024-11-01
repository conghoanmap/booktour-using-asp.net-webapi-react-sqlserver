import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BookingService } from "../services";
import { formatPrice } from "../utils";
import { BsTicketDetailed } from "react-icons/bs";
import { GlobalContext } from "../contexts/GlobalProvider";

const CompleteBooking = () => {
  const navigate = useNavigate();
  const context = useContext(GlobalContext);
  const { bookTourId } = useParams();
  const [booking, setBooking] = useState({});
  const [steps, setSteps] = useState([
    "Nhập thông tin",
    "Thanh toán",
    "Hoàn tất",
  ]);

  // 10p sau set lại JustBookedTour
  setTimeout(() => {
    context.setJustBookedTour(false);
    navigate("/");
  }, 600000);

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const response = await BookingService.GetBookingById(bookTourId);
        console.log(response.data);
        setBooking(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBooking();
  }, []);
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-7 gap-5 my-10">
      <div className="md:col-span-7 h-44 grid">
        <div className="mx-auto mt-5">
          <h1 className="text-2xl font-bold text-sky-700">
            ĐẶT TOUR THÀNH CÔNG
          </h1>
        </div>
        <div className="mx-auto">
          <p className="text-lg text-sky-700 italic">
            Nhân viên sẽ liên hệ với bạn trong thời gian sớm nhất, vui lòng chú
            ý điện thoại
          </p>
        </div>
        <div>
          <h2 className="sr-only">Steps</h2>

          <div>
            <ol className="grid grid-cols-1 divide-x divide-gray-100 overflow-hidden rounded-lg border border-gray-100 text-sm text-gray-500 sm:grid-cols-3">
              <li className="relative flex items-center justify-center gap-2 bg-sky-100 p-4">
                <svg
                  className="size-7 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                  />
                </svg>

                <p className="leading-none">
                  <strong className="block font-medium">
                    {" "}
                    Nhập thông tin{" "}
                  </strong>
                  <small className="mt-1">
                    {" "}
                    Nhập thông tin liên quan đến chuyến đi{" "}
                  </small>
                </p>
              </li>
              <li className="relative flex items-center justify-center gap-2 bg-sky-100 p-4">
                <svg
                  className="size-7 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>

                <p className="leading-none">
                  <strong className="block font-medium"> Thanh toán </strong>
                  <small className="mt-1"> Thanh toán cho chuyến đi </small>
                </p>
              </li>
              <li className="relative flex items-center justify-center gap-2 bg-sky-100 p-4">
                <span className="absolute -left-2 top-1/2 hidden size-4 -translate-y-1/2 rotate-45 border border-gray-100 sm:block ltr:border-b-0 ltr:border-s-0 ltr:bg-white rtl:border-e-0 rtl:border-t-0 rtl:bg-gray-50"></span>

                <span className="absolute -right-2 top-1/2 hidden size-4 -translate-y-1/2 rotate-45 border border-gray-100 sm:block ltr:border-b-0 ltr:border-s-0 ltr:bg-gray-50 rtl:border-e-0 rtl:border-t-0 rtl:bg-white"></span>

                <svg
                  className="size-7 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <p className="leading-none">
                  <strong className="block font-medium"> Hoàn tất </strong>
                  <small className="mt-1"> Chuẩn bị hành lí và đi thôi. </small>
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="md:col-span-4 grid gap-5">
        <div className="p-5 bg-gray-50 border border-solid rounded-lg">
          <p className="text-lg text-sky-700 font-bold">Thông tin liên lạc</p>
          <div className="border-t border-solid my-4 border-gray-300"></div>
          <div className="grid grid-cols-3">
            <div>
              <p className="text-base text-sky-700 font-semibold">Họ và tên</p>
              <p className="text-base font-semibold">{booking?.fullName}</p>
            </div>
            <div>
              <p className="text-base text-sky-700 font-semibold">Email</p>
              <p className="text-base font-semibold">{booking?.email}</p>
            </div>
            <div>
              <p className="text-base text-sky-700 font-semibold">Điện thoại</p>
              <p className="text-base font-semibold">{booking?.phone}</p>
            </div>
            <div>
              <p className="text-base text-sky-700 font-semibold">Địa chỉ</p>
              <p className="text-base font-semibold">{booking?.address}</p>
            </div>
          </div>
          <div>
            <p className="text-base text-sky-700 font-semibold">Ghi chú</p>
            <p className="text-base font-semibold">
              {booking?.note ? booking?.note : "Booking từ travel tour"}
            </p>
          </div>
        </div>
        <div className="p-5 bg-gray-50 border border-solid rounded-lg">
          <p className="text-lg text-sky-700 font-bold">Chi tiết booking</p>
          <div className="border-t border-solid my-4 border-gray-300"></div>
          <div className="grid grid-cols-3">
            <div className="col-span-1 grid gap-2">
              <p className="text-base">Số booking:</p>
              <p className="text-base">Ngày tạo:</p>
              <p className="text-base">Trị giá booking:</p>
              <p className="text-base">Phương thức thanh toán:</p>
              <p className="text-base">Đã thanh toán:</p>
              <p className="text-base">Còn lại:</p>
              <p className="text-base">Tình trạng:</p>
              <p className="text-base">Ghi chú:</p>
            </div>
            <div className="col-span-1 grid gap-2">
              <p className="text-base text-red-500">{booking?.bookTourId}</p>
              <p className="text-base">{booking?.bookDay}</p>
              <p className="text-base">{formatPrice(booking?.totalPrice)}</p>
              <p className="text-base">Trực tuyến</p>
              <p className="text-base">
                {formatPrice(
                  booking.payments &&
                    booking.payments.length > 0 &&
                    booking.payments[0].paidAmount
                    ? booking.payments[0].paidAmount
                    : 0
                )}
              </p>
              <p className="text-base">
                {formatPrice(
                  booking.payments &&
                    booking.payments.length > 0 &&
                    booking.payments[0].unPaidAmount
                    ? booking.payments[0].unPaidAmount
                    : 0
                )}
              </p>
              <p className="text-base">
                {booking.payments &&
                booking.payments.length > 0 &&
                booking.payments[0].paymentStatus
                  ? booking.payments[0].paymentStatus
                  : 0}
              </p>
              <p className="text-base">
                {booking.payments &&
                booking.payments.length > 0 &&
                booking.payments[0].paymentNote
                  ? booking.payments[0].paymentNote
                  : 0}
              </p>
            </div>
          </div>
        </div>
        <div className="p-5 bg-gray-50 border border-solid rounded-lg">
          <p className="text-lg text-sky-700 font-bold">Danh sách hành khách</p>
          <div className="border-t border-solid my-4 border-gray-400"></div>
          <div>
            {booking.passengerInfomations &&
              booking.passengerInfomations.length > 0 && (
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <p className="text-lg font-semibold text-sky-700">
                      Họ và tên:
                    </p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-sky-700">
                      Giới tính:
                    </p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-sky-700">
                      Phòng đơn:
                    </p>
                  </div>
                  {booking.passengerInfomations.map((passenger, index) => {
                    return (
                      <React.Fragment key={index}>
                        <div>
                          <p className="text-lg">{passenger.fullName}</p>
                        </div>
                        <div>
                          <p className="text-lg">{passenger.gender}</p>
                        </div>
                        <div>
                          <p className="text-lg">
                            {passenger.singleRoom ? "Có" : "Không"}
                          </p>
                        </div>
                      </React.Fragment>
                    );
                  })}
                </div>
              )}
          </div>
        </div>
      </div>
      <div className="md:col-span-3">
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-lg text-sky-700 font-bold">
            Phiếu xác nhận đặt tour
          </p>
          <div className="border-t border-solid my-4 border-gray-400"></div>
          <div className="flex gap-3">
            <div className="w-1/3 overflow-hidden rounded-lg">
              <img
                src={
                  booking.tour && booking.tour.image && booking.tour.image.url
                }
                className="w-full object-fill"
                alt=""
                srcSet=""
              />
            </div>
            <div>
              <p className="text-lg font-bold">
                {booking.tour && booking.tour.tourName}
              </p>
              <div className="text-lg flex gap-1">
                <BsTicketDetailed className="my-auto size-6" />
                <span className="my-auto text-lg">Mã tour: </span>
                <span className="text-lg text-sky-700 my-auto">
                  {booking.tour && booking.tour.tourId}
                </span>
              </div>
            </div>
          </div>
          <div className="border-t border-solid my-4 border-gray-400"></div>
          <div className="flex gap-5">
            <div>
              <p className="text-lg">Mã đặt tour:</p>
            </div>
            <div>
              <p className="flex gap-1 text-sky-700">
                {booking.bookTourId}
              </p>
            </div>
          </div>
          <div className="border-t border-solid my-4 border-gray-400"></div>
        </div>
      </div>
    </div>
  );
};

export default CompleteBooking;
