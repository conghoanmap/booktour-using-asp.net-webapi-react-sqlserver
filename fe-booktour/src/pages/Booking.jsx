import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BookingService, PaymentService, TourService } from "../services";
import { formatPrice } from "../utils";
import { FiMinus, FiPlus } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import Clause from "../components/Clause";
import { IoArrowBack } from "react-icons/io5";
import { BsTicketDetailed } from "react-icons/bs";
import { GlobalContext } from "../contexts/GlobalProvider";
import { Switch } from "@headlessui/react";

const Booking = () => {
  const border = "border border-dashed border-red-500";
  const { tourId, departureDate, emptySeats, tourTypeId } = useParams();

  const context = useContext(GlobalContext);
  const navigate = useNavigate();
  const [steps, setSteps] = useState([
    "Nhập thông tin",
    "Thanh toán",
    "Hoàn tất",
  ]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [acceptClause, setAcceptClause] = useState(false);
  const [counsel, setCounsel] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(1);
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [singleRoomQuantity, setSingleRoomQuantity] = useState(0);
  const [adultType, setAdultType] = useState({});
  const [childrenType, setChildrenType] = useState({});
  const [youngChildrenType, setYoungChildrenType] = useState({});
  const [babyType, setBabyType] = useState({});
  const [tourType, setTourType] = useState({});
  const [tour, setTour] = useState({});
  const [note, setNote] = useState("");
  const [adults, setAdults] = useState([
    {
      passengerTypeId: 2,
      fullName: "",
      gender: "Nam",
      singleRoom: false,
    },
  ]);
  const [childrens, setChildrens] = useState([]);
  const [youngChildrens, setYoungChildrens] = useState([]);
  const [babies, setBabies] = useState([]);
  // Chỗ trống còn lại sau khi tăng giảm số hành khách
  const [remainingVacantSeats, setRemainingVacantSeats] = useState(emptySeats);
  const [bookingInfo, setBookingInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });
  const [bookingInfoError, setBookingInfoError] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });

  const [passengers, setPassengers] = useState({
    adult: 1,
    children: 0,
    youngChildren: 0,
    baby: 0,
  });

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const response = await TourService.getByTourId(tourId);
        // console.log(response);
        setTour(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchTourType = async () => {
      try {
        const response = await TourService.getTourTypeById(tourTypeId);
        // console.log(response);
        setTourType(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchPassengerTypes = async () => {
      try {
        const response = await TourService.getPassengerTypes();
        // console.log(response);
        setAdultType(response.data[0]);
        setChildrenType(response.data[1]);
        setYoungChildrenType(response.data[2]);
        setBabyType(response.data[3]);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchPaymentMethods = async () => {
      try {
        const response = await PaymentService.getPaymentMethods();
        // console.log(response);
        setPaymentMethods(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTour();
    fetchTourType();
    fetchPassengerTypes();
    fetchPaymentMethods();
  }, [tourId]);

  useEffect(() => {
    let totalPassengers =
      passengers.adult +
      passengers.children +
      passengers.youngChildren +
      passengers.baby;
    setRemainingVacantSeats(emptySeats - totalPassengers);
  }, [passengers]);

  useEffect(() => {
    setTotalPrice(
      (adults.length *
        (adultType.percentPrice *
          ((tourType.percentPrice * tour.price) / 100))) /
        100 +
        (childrens.length *
          (childrenType.percentPrice *
            ((tourType.percentPrice * tour.price) / 100))) /
          100 +
        (youngChildrens.length *
          (youngChildrenType.percentPrice *
            ((tourType.percentPrice * tour.price) / 100))) /
          100 +
        (babies.length *
          (babyType.percentPrice *
            ((tourType.percentPrice * tour.price) / 100))) /
          100 +
        singleRoomQuantity * tour.singleRoomPrice
    );
  }, [
    adults.length,
    childrens.length,
    youngChildrens.length,
    babies.length,
    singleRoomQuantity,
  ]);

  // useEffect(() => {
  //   console.log(adults);
  // }, [adults]);

  const handleMinusAdult = () => {
    // Đảm bảo số lượng hành khách người lớn không nhỏ hơn 1
    if (passengers.adult - 1 < 1) {
      return;
    } else {
      setSingleRoomQuantity(singleRoomQuantity - 1);
      setPassengers({
        ...passengers,
        adult: passengers.adult - 1,
      });
      setAdults(adults.slice(0, adults.length - 1));
    }
  };
  const handlePlusAdult = () => {
    if (remainingVacantSeats < 1) {
      return;
    } else {
      setPassengers({
        ...passengers,
        adult: passengers.adult + 1,
      });
      setAdults(
        adults.concat({
          fullName: "",
          gender: "Nam",
          singleRoom: false,
          passengerTypeId: 2,
        })
      );
    }
  };

  const handleMinusChildren = () => {
    if (passengers.children - 1 < 0) {
      return;
    } else {
      setPassengers({
        ...passengers,
        children: passengers.children - 1,
      });
      setChildrens(childrens.slice(0, childrens.length - 1));
    }
  };
  const handlePlusChildren = () => {
    if (remainingVacantSeats < 1) {
      return;
    } else {
      setPassengers({
        ...passengers,
        children: passengers.children + 1,
      });
      setChildrens(
        childrens.concat({
          fullName: "",
          gender: "Nam",
          singleRoom: false,
          passengerTypeId: 3,
        })
      );
    }
  };

  const handleMinusYoungChildren = () => {
    if (passengers.youngChildren - 1 < 0) {
      return;
    } else {
      setPassengers({
        ...passengers,
        youngChildren: passengers.youngChildren - 1,
      });
      setYoungChildrens(youngChildrens.slice(0, youngChildrens.length - 1));
    }
  };
  const handlePlusYoungChildren = () => {
    if (remainingVacantSeats < 1) {
      return;
    } else {
      setPassengers({
        ...passengers,
        youngChildren: passengers.youngChildren + 1,
      });
      setYoungChildrens(
        youngChildrens.concat({
          fullName: "",
          gender: "Nam",
          singleRoom: false,
          passengerTypeId: 4,
        })
      );
    }
  };

  const handleMinusBaby = () => {
    if (passengers.baby - 1 < 0) {
      return;
    } else {
      setPassengers({
        ...passengers,
        baby: passengers.baby - 1,
      });
      setBabies(babies.slice(0, babies.length - 1));
    }
  };
  const handlePlusBaby = () => {
    if (remainingVacantSeats < 1) {
      return;
    } else {
      setPassengers({
        ...passengers,
        baby: passengers.baby + 1,
      });
      setBabies(
        babies.concat({
          fullName: "",
          gender: "Nam",
          singleRoom: false,
          passengerTypeId: 5,
        })
      );
    }
  };

  const handleBooking = async () => {
    // Gộp thông tin hành khách
    let passengers = adults.concat(childrens, youngChildrens, babies);
    console.log(passengers);

    const bookTourDto = {
      tourId: tourId,
      people: passengers.length,
      departureDay: departureDate,
      fullName: bookingInfo.fullName,
      email: bookingInfo.email,
      phone: bookingInfo.phone,
      address: bookingInfo.address,
      note: note,
      tourTypeId: tourTypeId,
      passengerInfoDtos: passengers,
    };
    try {
      const response = await BookingService.Booking(bookTourDto);
      console.log(response);
      if (response.data.bookTourId) {
        const addPassengersRessponse = await BookingService.AddPassenger(
          response.data.bookTourId,
          passengers
        );
        console.log(addPassengersRessponse);

        const paymentTourDto = {
          bookTourId: response.data.bookTourId,
          paymentMethodId: selectedPaymentMethod,
          paidAmount:
            selectedPaymentMethod - 2 === 0
              ? 0
              : response.data.totalPrice -
                response.data.totalPrice * (tour.advanceDeposit / 100),
          unPaidAmount:
            selectedPaymentMethod - 2 === 0
              ? response.data.totalPrice
              : response.data.totalPrice -
                (response.data.totalPrice * (100 - tour.advanceDeposit)) / 100,
        };
        const paymentResponse = await PaymentService.PaymentTour(
          paymentTourDto
        );
        console.log(paymentResponse);
        if (paymentResponse.statusCode - 200 === 0) {
          context.setJustBookedTour(true);
          navigate(`/complete/${response.data.bookTourId}`);
        }
      }
      // response.then((res) => {
      //   console.log(res);
      // });
    } catch (error) {
      if (error.response) {
        console.log("Error Status:", error.response.status); // In ra mã trạng thái
        console.log("Error Message:", error.message); // In ra thông điệp lỗi
        console.log("Error Data:", error.response.data); // In ra dữ liệu lỗi từ server
        console.log("Error Config:", error.config); // In ra cấu hình của yêu cầu

        // Nếu có dữ liệu lỗi chi tiết, kiểm tra và hiển thị
        if (error.response.data) {
          // Kiểm tra thông báo lỗi từ server (nếu có)
          const errorData = error.response.data;
          console.log("Full Error Details:", errorData);

          // Ví dụ, nếu server trả về lỗi xác thực cho email
          if (errorData.errors) {
            console.log("Error Validations:", errorData.errors);

            console.log("Error Validations:", errorData.errors);
            setBookingInfoError({
              fullName: errorData.errors.FullName
                ? errorData.errors.FullName[0]
                : "",
              email: errorData.errors.Email ? errorData.errors.Email[0] : "",
              phone: errorData.errors.Phone ? errorData.errors.Phone[0] : "",
              address: errorData.errors.Address
                ? errorData.errors.Address[0]
                : "",
            });
          }
        }
      } else if (error.request) {
        console.log("Không nhận được phản hồi:", error.request);
      } else {
        // Nếu có lỗi khác (ví dụ: cấu hình)
        console.log("Error:", error.message);
      }
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-7 gap-5 my-10">
        <div className="md:col-span-7 h-44 grid relative">
          <Link
            onClick={handleBack}
            className="flex gap-3 absolute top-0 left-0 hover:text-sky-700 duration-300"
          >
            <IoArrowBack className="my-auto" /> Quay lại
          </Link>
          <div className="mx-auto mt-5">
            <h1 className="text-4xl text-center text-sky-700 font-bold">
              ĐẶT TOUR
            </h1>
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
                    <strong className="block font-medium"> Nhập thông tin </strong>
                    <small className="mt-1"> Nhập thông tin liên quan đến chuyến đi </small>
                  </p>
                </li>
                <li className="flex items-center justify-center gap-2 p-4">
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
                <li className="flex items-center justify-center gap-2 p-4">
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
          <div className="grid gap-3">
            <h1 className="text-3xl text-sky-700 font-semibold">
              Thông tin liên lạc
            </h1>
            <div className="bg-sky-100 p-4 rounded-lg flex gap-2">
              <FaUserCircle style={{ fontSize: "30px" }} className="my-auto" />
              <Link
                to="/login"
                className="my-auto underline hover:text-sky-700"
              >
                Đăng nhập
              </Link>
              <span className="my-auto">
                để nhận ưu đãi, tích điểm và quản lý đơn hàng dễ dàng hơn!
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Họ và tên
                </label>
                <input
                  type="text"
                  placeholder="Le Nguyen Cong Hoan"
                  className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  value={bookingInfo.fullName}
                  onChange={(e) =>
                    setBookingInfo({
                      ...bookingInfo,
                      fullName: e.target.value,
                    })
                  }
                />
                <span className="text-rose-500">
                  {bookingInfoError.fullName}
                </span>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="text"
                  placeholder="john@rhcp.com"
                  className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  value={bookingInfo.email}
                  onChange={(e) =>
                    setBookingInfo({
                      ...bookingInfo,
                      email: e.target.value,
                    })
                  }
                />
                <span className="text-rose-500">{bookingInfoError.email}</span>
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Điện thoại
                </label>
                <input
                  type="text"
                  placeholder="0123456789"
                  className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  value={bookingInfo.phone}
                  onChange={(e) =>
                    setBookingInfo({
                      ...bookingInfo,
                      phone: e.target.value,
                    })
                  }
                />
                <span className="text-rose-500">{bookingInfoError.phone}</span>
              </div>
              <div>
                <label
                  htmlFor="Địa chỉ"
                  className="block text-sm font-medium text-gray-700"
                >
                  Địa chỉ
                </label>
                <input
                  type="text"
                  placeholder="Tan Phu, Sai Gon"
                  className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  value={bookingInfo.address}
                  onChange={(e) =>
                    setBookingInfo({
                      ...bookingInfo,
                      address: e.target.value,
                    })
                  }
                />
                <span className="text-rose-500">
                  {bookingInfoError.address}
                </span>
              </div>
            </div>
          </div>
          <div className="grid gap-3">
            <h1 className="text-3xl text-sky-700 font-semibold">Hành khách</h1>
            {remainingVacantSeats < 1 && (
              <span className="text-rose-500">
                Số hành khách vượt quá số chỗ trống
              </span>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-solid rounded-lg p-3 flex">
                <div className="m-auto">
                  <p className="text-sky-700 font-semibold">Người lớn</p>
                  <p className="text-sm">Từ 12 tuổi trở lên</p>
                </div>
                <div className="m-auto flex">
                  <label htmlFor="Quantity" className="sr-only">
                    Quantity
                  </label>

                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      className="size-10 leading-10 text-gray-600 transition hover:opacity-75"
                      onClick={handleMinusAdult}
                    >
                      <FiMinus />
                    </button>

                    <input
                      type="number"
                      id="Quantity"
                      className="h-10 w-24 rounded border-gray-200 sm:text-sm"
                      value={passengers.adult}
                      onChange={(e) =>
                        setPassengers({ ...passengers, adult: e.target.value })
                      }
                    />

                    <button
                      type="button"
                      className="size-10 leading-10 text-gray-600 transition hover:opacity-75"
                      onClick={handlePlusAdult}
                    >
                      <FiPlus />
                    </button>
                  </div>
                </div>
              </div>
              <div className="border border-solid rounded-lg p-3 flex">
                <div className="m-auto">
                  <p className="text-sky-700 font-semibold">Trẻ em</p>
                  <p className="text-sm">Từ 5 đến 11 tuổi</p>
                </div>
                <div className="m-auto flex">
                  <label htmlFor="Quantity" className="sr-only">
                    Quantity
                  </label>

                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      className="size-10 leading-10 text-gray-600 transition hover:opacity-75"
                      onClick={handleMinusChildren}
                    >
                      <FiMinus />
                    </button>

                    <input
                      type="number"
                      id="Quantity"
                      className="h-10 w-24 rounded border-gray-200 sm:text-sm"
                      value={passengers.children}
                      onChange={(e) =>
                        setPassengers({
                          ...passengers,
                          children: e.target.value,
                        })
                      }
                    />

                    <button
                      type="button"
                      className="size-10 leading-10 text-gray-600 transition hover:opacity-75"
                      onClick={handlePlusChildren}
                    >
                      <FiPlus />
                    </button>
                  </div>
                </div>
              </div>
              <div className="border border-solid rounded-lg p-3 flex">
                <div className="m-auto">
                  <p className="text-sky-700 font-semibold">Trẻ nhỏ</p>
                  <p className="text-sm">Từ 2 đến 4 tuổi</p>
                </div>
                <div className="m-auto flex">
                  <label htmlFor="Quantity" className="sr-only">
                    Quantity
                  </label>

                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      className="size-10 leading-10 text-gray-600 transition hover:opacity-75"
                      onClick={handleMinusYoungChildren}
                    >
                      <FiMinus />
                    </button>

                    <input
                      type="number"
                      id="Quantity"
                      className="h-10 w-24 rounded border-gray-200 sm:text-sm"
                      value={passengers.youngChildren}
                      onChange={(e) =>
                        setPassengers({
                          ...passengers,
                          youngChildren: e.target.value,
                        })
                      }
                    />

                    <button
                      type="button"
                      className="size-10 leading-10 text-gray-600 transition hover:opacity-75"
                      onClick={handlePlusYoungChildren}
                    >
                      <FiPlus />
                    </button>
                  </div>
                </div>
              </div>
              <div className="border border-solid rounded-lg p-3 flex">
                <div className="m-auto">
                  <p className="text-sky-700 font-semibold">Em bé</p>
                  <p className="text-sm">Từ 2 tuổi trở xuống</p>
                </div>
                <div className="m-auto flex">
                  <label htmlFor="Quantity" className="sr-only">
                    Quantity
                  </label>

                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      className="size-10 leading-10 text-gray-600 transition hover:opacity-75"
                      onClick={handleMinusBaby}
                    >
                      <FiMinus />
                    </button>

                    <input
                      type="number"
                      id="Quantity"
                      className="h-10 w-24 rounded border-gray-200 sm:text-sm"
                      value={passengers.baby}
                      onChange={(e) =>
                        setPassengers({ ...passengers, baby: e.target.value })
                      }
                    />

                    <button
                      type="button"
                      className="size-10 leading-10 text-gray-600 transition hover:opacity-75"
                      onClick={handlePlusBaby}
                    >
                      <FiPlus />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-3">
            <h1 className="text-3xl text-sky-700 font-semibold">
              Thông tin hành khách
            </h1>
            <div className="bg-sky-100 p-3 rounded-lg flex gap-2">
              <label
                htmlFor="Option2"
                className="flex cursor-pointer items-start gap-4"
              >
                <div className="flex items-center">
                  &#8203;
                  <input
                    type="checkbox"
                    className="size-4 rounded border-gray-300"
                    id="Option1"
                    checked={counsel}
                    onChange={(e) => setCounsel(e.target.checked)}
                  />
                </div>

                <div>
                  <strong className="font-medium text-gray-900">
                    Tôi cần được nhân viên tư vấn Vietravel trợ giúp nhập thông
                    tin đăng ký dịch vụ.
                  </strong>
                </div>
              </label>
            </div>
            {counsel && (
              <div className="bg-orange-100 p-2 rounded-lg text-orange-600">
                <span className="font-bold">Vietravel</span> sẽ liên hệ Quý
                khách trong thời gian sớm nhất để hỗ trợ. Quý khách vui lòng chú
                ý điện thoại và email như đã đăng ký.
              </div>
            )}
            <div className="grid gap-3">
              <p className="text-lg">Người lớn</p>
              <div className="grid gap-3">
                {adults.map((adult, index) => (
                  <div key={index} className="grid grid-cols-4 gap-3">
                    <div className="col-span-2">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Họ và tên
                      </label>
                      <input
                        type="text"
                        placeholder="john@rhcp.com"
                        className="mt-1.5 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                        value={adult.fullName}
                        onChange={(e) => {
                          // Cập nhật thông tin hành khách người lớn
                          setAdults(
                            adults.map((a, i) =>
                              i === index
                                ? { ...a, fullName: e.target.value }
                                : a
                            )
                          );
                        }}
                      />
                      <span className="text-rose-500">
                        {adult.fullName ? "" : "Vui lòng nhập họ tên"}
                      </span>
                    </div>
                    <div className="col-span-1">
                      <label
                        htmlFor="HeadlineAct"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Giới tính
                      </label>

                      <select
                        className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                        value={adult.gender}
                        onChange={(e) => {
                          // Cập nhật thông tin hành khách người lớn
                          setAdults(
                            adults.map((a, i) =>
                              i === index ? { ...a, gender: e.target.value } : a
                            )
                          );
                        }}
                      >
                        <option value="Nam">Nam</option>
                        <option value="Nữ">Nữ</option>
                      </select>
                    </div>
                    <div className="col-span-1">
                      <label
                        htmlFor="HeadlineAct"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Phòng đơn
                      </label>

                      <Switch
                        value={adult.singleRoom}
                        checked={adult.singleRoom}
                        onChange={(checked) => {
                          // Cập nhật thông tin hành khách người lớn
                          setSingleRoomQuantity(
                            checked ? singleRoomQuantity + 1 : singleRoomQuantity - 1
                          );
                          setAdults(
                            adults.map((a, i) =>
                              i === index
                                ? { ...a, singleRoom: checked }
                                : a
                            )
                          );
                        }}
                        className="mt-3 group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-sky-600"
                      >
                        <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
                      </Switch>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {childrens.length > 0 && (
              <div className="grid gap-3">
                <p className="text-lg">Trẻ em</p>
                <div className="grid gap-3">
                  {childrens.map((children, index) => (
                    <div key={index} className="grid gap-3 grid-cols-4">
                      <div className="col-span-3">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Họ và tên
                        </label>
                        <input
                          type="text"
                          placeholder="john@rhcp.com"
                          className="mt-1.5 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                          value={children.fullName}
                          onChange={(e) => {
                            // Cập nhật thông tin hành khách người lớn
                            setChildrens(
                              childrens.map((a, i) =>
                                i === index
                                  ? { ...a, fullName: e.target.value }
                                  : a
                              )
                            );
                          }}
                        />
                        <span className="text-rose-500">
                          {children.fullName ? "" : "Vui lòng nhập họ tên"}
                        </span>
                      </div>
                      <div className="col-span-1">
                        <label
                          htmlFor="HeadlineAct"
                          className="block text-sm font-medium text-gray-900"
                        >
                          Giới tính
                        </label>

                        <select
                          className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                          value={children.gender}
                          onChange={(e) => {
                            // Cập nhật thông tin hành khách người lớn
                            setAdults(
                              childrens.map((a, i) =>
                                i === index
                                  ? { ...a, gender: e.target.value }
                                  : a
                              )
                            );
                          }}
                        >
                          <option value="Nam">Nam</option>
                          <option value="Nữ">Nữ</option>
                        </select>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {youngChildrens.length > 0 && (
              <div className="grid gap-3">
                <p className="text-lg">Trẻ nhỏ</p>
                <div className="grid gap-3">
                  {youngChildrens.map((youngChildren, index) => (
                    <div key={index} className="grid gap-3 grid-cols-4">
                      <div className="col-span-3">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Họ và tên
                        </label>
                        <input
                          type="text"
                          placeholder="john@rhcp.com"
                          className="mt-1.5 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                          value={youngChildren.fullName}
                          onChange={(e) => {
                            // Cập nhật thông tin hành khách người lớn
                            setYoungChildrens(
                              youngChildrens.map((a, i) =>
                                i === index
                                  ? { ...a, fullName: e.target.value }
                                  : a
                              )
                            );
                          }}
                        />
                        <span className="text-rose-500">
                          {youngChildren.fullName ? "" : "Vui lòng nhập họ tên"}
                        </span>
                      </div>
                      <div className="col-span-1">
                        <label
                          htmlFor="HeadlineAct"
                          className="block text-sm font-medium text-gray-900"
                        >
                          Giới tính
                        </label>

                        <select
                          className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                          value={youngChildren.gender}
                          onChange={(e) => {
                            // Cập nhật thông tin hành khách người lớn
                            setYoungChildrens(
                              youngChildrens.map((a, i) =>
                                i === index
                                  ? { ...a, gender: e.target.value }
                                  : a
                              )
                            );
                          }}
                        >
                          <option value="Nam">Nam</option>
                          <option value="Nữ">Nữ</option>
                        </select>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {babies.length > 0 && (
              <div className="grid gap-3">
                <p className="text-lg">Trẻ nhỏ</p>
                <div className="grid gap-3">
                  {babies.map((baby, index) => (
                    <div key={index} className="grid gap-3 grid-cols-4">
                      <div className="col-span-3">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Họ và tên
                        </label>
                        <input
                          type="text"
                          placeholder="john@rhcp.com"
                          className="mt-1.5 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                          value={baby.fullName}
                          onChange={(e) => {
                            // Cập nhật thông tin hành khách người lớn
                            setBabies(
                              babies.map((a, i) =>
                                i === index
                                  ? { ...a, fullName: e.target.value }
                                  : a
                              )
                            );
                          }}
                        />
                        <span className="text-rose-500">
                          {baby.fullName ? "" : "Vui lòng nhập họ tên"}
                        </span>
                      </div>
                      <div className="col-span-1">
                        <label
                          htmlFor="HeadlineAct"
                          className="block text-sm font-medium text-gray-900"
                        >
                          Giới tính
                        </label>

                        <select
                          className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                          value={baby.gender}
                          onChange={(e) => {
                            // Cập nhật thông tin hành khách người lớn
                            setBabies(
                              babies.map((a, i) =>
                                i === index
                                  ? { ...a, gender: e.target.value }
                                  : a
                              )
                            );
                          }}
                        >
                          <option value="Nam">Nam</option>
                          <option value="Nữ">Nữ</option>
                        </select>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="grid gap-3">
            <h1 className="text-3xl text-sky-700 font-semibold">Ghi chú</h1>
            <p className="text-base">
              Quý khách có ghi chú lưu ý gì, hãy nói với chúng tôi
            </p>
            <textarea
              className="border border-solid border-black rounded-lg p-3"
              placeholder="Nhập ghi chú"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            ></textarea>
          </div>
          <div className="grid gap-3">
            <h1 className="text-3xl text-sky-700 font-semibold">
              Phương thức thanh toán
            </h1>
            <div>
              <label
                htmlFor="HeadlineAct"
                className="block text-sm font-medium text-gray-900"
              >
                Phương thức thanh toán
              </label>

              <select
                className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                value={selectedPaymentMethod}
                onChange={(e) => setSelectedPaymentMethod(e.target.value)}
              >
                {paymentMethods.map((method, index) => {
                  return (
                    <option key={index} value={method.paymentMethodId}>
                      {method.paymentMethodName}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <Clause />
          <div className="bg-sky-100 p-3 rounded-lg flex gap-2">
            <label
              htmlFor="Option2"
              className="flex cursor-pointer items-start gap-4"
            >
              <div className="flex items-center">
                &#8203;
                <input
                  type="checkbox"
                  className="size-4 rounded border-gray-300"
                  id="Option1"
                  checked={acceptClause}
                  onChange={(e) => setAcceptClause(e.target.checked)}
                />
              </div>

              <div>
                <strong className="font-medium text-gray-900">
                  Tôi đồng ý với Chính sách bảo vệ dữ liệu cá nhân và các điều
                  khoản trên.
                </strong>
              </div>
            </label>
          </div>
        </div>
        <div className="md:col-span-3">
          <h1 className="text-3xl my-3 text-sky-700 font-semibold">
            Tóm tắt chuyến đi
          </h1>
          <div className="p-5 rounded-lg bg-gray-100">
            <div className="flex gap-3">
              <div className="w-1/3 overflow-hidden rounded-lg">
                <img
                  src={tour.image && tour.image.url}
                  className="w-full object-fill"
                  alt=""
                  srcSet=""
                />
              </div>
              <div className="grid gap-3">
                <p className="font-bold text-lg">{tour.tourName}</p>
                <p className="flex gap-1 text-lg">
                  <BsTicketDetailed className="my-auto size-6" />
                  <span className="my-auto text-lg">Mã tour: </span>
                  <span className="text-lg font-semibold text-sky-700 my-auto">
                    {tour.tourId}
                  </span>
                </p>
                <p className="text-lg">
                  Loại tour:{" "}
                  <span className="text-lg text-sky-700 my-auto">
                    {tourType.tourTypeName}
                  </span>
                </p>
              </div>
            </div>
            <div className="border-t border-solid my-4 border-gray-400"></div>
            <div className="flex gap-2">
              <p className="text-lg flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="my-auto size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                <span className="my-auto text-lg">Khởi hành:</span>
                <span className="text-lg text-sky-700 my-auto">
                  {tour.departureLocation?.locationName}
                </span>
              </p>
              <p className="text-lg flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="my-auto size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>

                <span className="my-auto text-lg">Thời gian: </span>
                <span className="text-lg text-sky-700 my-auto">
                  {tour.days}N{tour.days - 1}Đ
                </span>
              </p>
            </div>
            <div className="border-t border-solid my-4 border-gray-400"></div>
            <div className="flex">
              <div className="flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="my-auto size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                  />
                </svg>
                <p className="my-auto text-lg">Khách hàng + Phụ thu</p>
              </div>
              <div className="my-auto ml-auto text-red-500 text-xl font-semibold">
                {formatPrice(totalPrice)}
              </div>
            </div>
            <div className="flex">
              Người lớn
              <span className="ml-auto">
                {adults.length} x{" "}
                {formatPrice(
                  (adultType.percentPrice *
                    ((tourType.percentPrice * tour.price) / 100)) /
                    100
                )}
              </span>
            </div>
            {childrens.length > 0 && (
              <div className="flex">
                Trẻ em
                <span className="ml-auto">
                  {childrens.length} x{" "}
                  {formatPrice(
                    (childrenType.percentPrice *
                      ((tourType.percentPrice * tour.price) / 100)) /
                      100
                  )}
                </span>
              </div>
            )}
            {youngChildrens.length > 0 && (
              <div className="flex">
                Trẻ nhỏ
                <span className="ml-auto">
                  {youngChildrens.length} x{" "}
                  {formatPrice(
                    (youngChildrenType.percentPrice *
                      ((tourType.percentPrice * tour.price) / 100)) /
                      100
                  )}
                </span>
              </div>
            )}
            {babies.length > 0 && (
              <div className="flex">
                Em bé
                <span className="ml-auto">
                  {babies.length} x{" "}
                  {formatPrice(
                    (babyType.percentPrice *
                      ((tourType.percentPrice * tour.price) / 100)) /
                      100
                  )}
                </span>
              </div>
            )}
            {singleRoomQuantity > 0 && (
              <div className="flex">
                Phụ thu phòng đơn:
                <span className="ml-auto">
                  {singleRoomQuantity} x {formatPrice(tour.singleRoomPrice)}
                </span>
              </div>
            )}
            <div className="border-t border-solid my-4 border-gray-400"></div>
            <div className="flex">
              <h1 className="text-2xl my-auto">Tổng tiền</h1>
              <p className="ml-auto text-red-500 text-3xl my-auto font-bold">
                {formatPrice(totalPrice)}
              </p>
            </div>
            <button
              className="group mt-4 w-full relative inline-flex items-center overflow-hidden rounded bg-sky-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-sky-500"
              disabled={!acceptClause}
              onClick={handleBooking}
            >
              <span className="absolute -start-full transition-all group-hover:start-4">
                <svg
                  className="size-5 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>

              <span className="text-sm font-medium transition-all group-hover:ms-4">
                Chuyển sang thanh toán
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
