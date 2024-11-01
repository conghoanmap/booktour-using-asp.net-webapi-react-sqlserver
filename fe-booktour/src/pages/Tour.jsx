import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TourService } from "../services";
import { formatPrice } from "../utils";
import Notes from "../components/Notes";
import MoreInfoTour from "../components/MoreInfoTour";
import BreadCrumbs from "../components/BreadCrumbs";
import Itinerary from "../components/Itinerary";

const Tour = (props) => {
  const border = "border border-dashed border-sky-500";
  const [selectedTourType, setSelectedTourType] = useState(0);
  const [tourTypes, setTourTypes] = useState([]);
  const navigate = useNavigate();
  const { tourId } = useParams();
  const [tour, setTour] = useState({});
  const [selectedDate, setSelectedDate] = useState({
    tourId: "",
    departureDay: new Date().toLocaleDateString(),
  });
  const [selectDateMode, setSelectDateMode] = useState(true);
  const [emptySeats, setEmptySeats] = useState(0);
  const [errorBooking, setErrorBooking] = useState("");
  const [imageHover, setImageHover] = useState("");

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const response = await TourService.getByTourId(tourId);
        console.log(response.data);
        // console.log(response.data.itineraries);
        console.log(response.data.tourImages);
        setSelectedDate(response.data.departureDates[0]);
        setTour(response.data);
        setImageHover(response.data.image?.url);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchTourTypes = async () => {
      try {
        const response = TourService.getTourTypes();
        response.then((res) => {
          setTourTypes(res.data);
          setSelectedTourType(res.data[0]);
        });
      } catch (error) {
        console.error(error);
      }
    };
    fetchTour();
    fetchTourTypes();
  }, [tourId]);

  const handleViewInfo = () => {
    try {
      const response = TourService.getBookingsByTourId(
        tourId,
        selectedDate.departureDay
      );
      response.then((res) => {
        setSelectDateMode(false);
        setEmptySeats(tour?.maxPeople - res.data);
      });
    } catch (error) {
      console.error("Không thể xem số người đã đặt");
    }
  };

  const handleBooking = () => {
    if (emptySeats == 0) {
      setErrorBooking(
        "Thời gian này không còn chỗ trống, vui lòng chọn ngày hoặc tour khác"
      );
      // 5s sau reset error
      setTimeout(() => {
        setErrorBooking("");
      }, 5000);
    } else {
      navigate(
        `/booking/${tourId}/${selectedDate?.departureDay}/${emptySeats}/${tourTypes[selectedTourType]?.tourTypeId}`
      );
    }
  };

  return (
    <>
      <BreadCrumbs
        breadCrumbs={props.breadCrumbs}
        subBreadCrumbs={tour?.tourName}
      />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-6 gap-5 my-10">
        <div className="md:col-span-4 grid gap-5">
          <h1 className="mb-2 mt-0 text-5xl font-medium leading-tight text-black">
            {tour?.tourName}
          </h1>
          <div className="w-full h-122 overflow-hidden">
            <img
              src={
                imageHover
                  ? imageHover
                  : "https://media.travel.com.vn/Tour/tfd_231018095531_931127_CHUA%20NUI%20MOT%20(4).jpg"
              }
              className="w-full object-cover rounded-lg"
            />
          </div>

          <div className="flex gap-4 overflow-auto">
            <img
              src={
                tour.image?.url
                  ? tour.image?.url
                  : "https://media.travel.com.vn/Tour/tfd_231018095531_931127_CHUA%20NUI%20MOT%20(4).jpg"
              }
              className="w-32 object-cover rounded-lg cursor-pointer"
            />
            {tour.tourImages?.map((image, index) => {
              return (
                <img
                  key={index}
                  src={image.image?.url}
                  className="w-32 object-cover rounded-lg cursor-pointer"
                  onClick={() => setImageHover(image.image?.url)}
                />
              );
            })}
          </div>
          <div className="my-8">
            <MoreInfoTour />
          </div>
          <div className="p-5 bg-sky-50 rounded-lg my-8">
            <h1 className="mb-2 mt-0 text-xl font-medium leading-tight text-black">
              Điểm nhấn của chương trình
            </h1>
            <h6 className="text-base leading-tight">
              Tham quan, sống ảo tại Kỳ Co Eo Gió, Quy Nhơn - nơi được biết đến
              như là thiên đường Maldives “phiên bản Việt” với vẻ đẹp hoang sơ,
              hữu tình. Chiêm bái Ngọc Xá Lợi của Phật Tổ Thích Ca Mâu Ni tại
              Chùa Thiên Hưng.
            </h6>
          </div>
          <div className="my-8">
            <h1 className="mb-2 mt-0 text-xl text-center font-medium leading-tight text-black">
              LỊCH TRÌNH
            </h1>
            <div className="space-y-4">
              {tour?.itineraries?.map((itinerary, index) => {
                return (
                  <Itinerary key={index} itinerary={itinerary}></Itinerary>
                );
              })}
            </div>
          </div>
          <Notes />
        </div>
        <div className={`md:col-span-2`}>
          {selectDateMode ? (
            <div className={`m-auto`}>
              <div className="shadow-lg rounded-lg">
                <div className="grid gap-2 p-5">
                  <div className="grid gap-2">
                    <p>Giá:</p>
                    <h1 className="text-sky-500 text-4xl font-semibold">
                      {formatPrice(
                        (tourTypes[selectedTourType]?.percentPrice * tour?.price) / 100
                      )}
                      /khách
                    </h1>
                  </div>
                  <div>
                    <label
                      htmlFor="HeadlineAct"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Chọn ngày xuất phát
                    </label>

                    <select
                      name="HeadlineAct"
                      id="HeadlineAct"
                      className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                      value={selectedDate.departureDay}
                      onChange={(e) =>
                        setSelectedDate({
                          ...selectedDate,
                          departureDay: e.target.value,
                        })
                      }
                    >
                      {tour.departureDates?.map((date, index) => {
                        return (
                          // Lọc từ ngày hiện tại
                          new Date(date.departureDay) >= new Date() && (
                            <option key={index} value={date.departureDay}>
                              {new Date(date.departureDay).toLocaleDateString()}
                            </option>
                          )
                        );
                      })}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="HeadlineAct"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Dòng tour
                    </label>

                    <select
                      name="HeadlineAct"
                      id="HeadlineAct"
                      className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                      value={selectedTourType}
                      onChange={(e) => {
                        setSelectedTourType(e.target.value);
                      }}
                    >
                      {tourTypes.map((type, index) => {
                        return (
                          <option key={index} value={index}>
                            {type.tourTypeName}(
                            {formatPrice(
                              (type.percentPrice * tour.price) / 100
                            )}
                            /khách)
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <button
                    className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"
                    onClick={handleViewInfo}
                  >
                    <span className="absolute inset-0 border border-sky-600 group-active:border-sky-500"></span>
                    <span className="block border border-sky-600 bg-sky-600 px-12 py-3 transition-transform active:border-sky-500 active:bg-sky-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
                      Xem thông tin ngày xuất phát
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="shadow-lg rounded-lg">
              <div className="gap-2 p-5">
                <div className="grid gap-2">
                  <p>Giá:</p>
                  <h1 className="text-sky-500 text-4xl font-semibold">
                    {formatPrice(
                      (selectedTourType.percentPrice * tour.price) / 100
                    )}
                    /khách
                  </h1>
                </div>
                <div className="grid gap-2 my-2">
                  <div className="text-lg">
                    Mã tour:{" "}
                    <span className="text-sky-700 font-semibold">
                      {tour?.tourId}
                    </span>
                  </div>
                  <div className="text-lg">
                    Thời gian:{" "}
                    <span className="text-sky-700 font-semibold">
                      {tour?.days}N{tour?.days - 1}Đ
                    </span>
                  </div>
                  <div className="text-lg">
                    Khởi hành:{" "}
                    <span className="text-sky-700 font-semibold">
                      {tour.departureLocation?.locationName}
                    </span>
                  </div>
                  <div className="text-lg">
                    Điểm đến:{" "}
                    <span className="text-sky-700 font-semibold">
                      {tour.destinationLocation?.locationName}
                    </span>
                  </div>
                  <div className="text-lg">
                    Ngày khởi hành:{" "}
                    <span className="text-sky-700 font-semibold">
                      {selectedDate.departureDay}
                    </span>
                  </div>
                  <div className="text-lg">
                    Còn trống:{" "}
                    <span className="text-sky-700 font-semibold">
                      {emptySeats}
                    </span>
                  </div>
                </div>
                {emptySeats === 0 && (
                  <p className="test-base text-sky-500">
                    Ngày này không còn chỗ trống, quý khách vui lòng dời ngày
                    hoặc chọn tour khác
                  </p>
                )}
                {errorBooking && (
                  <p className="test-base text-sky-500">{errorBooking}</p>
                )}
                <div className="flex gap-2" spacing={2} direction="row">
                  <button
                    className="group relative inline-block text-sm font-medium text-sky-600 focus:outline-none focus:ring active:text-sky-500"
                    onClick={() => setSelectDateMode(true)}
                  >
                    <span className="absolute inset-0 border border-current"></span>
                    <span className="block border border-current bg-white px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                      Chọn ngày khác
                    </span>
                  </button>
                  <button
                    className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"
                    onClick={handleBooking}
                    disabled={emptySeats === 0}
                  >
                    <span className="absolute inset-0 border border-sky-600 group-active:border-sky-500"></span>
                    <span className="block border border-sky-600 bg-sky-600 px-12 py-3 transition-transform active:border-sky-500 active:bg-sky-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
                      Đặt ngay
                    </span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Tour;
