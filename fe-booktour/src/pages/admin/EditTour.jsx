import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ImageService, TourService } from "../../services";
import { formatDateMMDD } from "../../utils";
import BreadCrumbs from "../../components/BreadCrumbs";
import Login from "../Login";

const EditTour = (props) => {
  const navigate = useNavigate();
  const { tourId } = useParams();

  const [formData, setFormData] = useState({
    tourName: "",
    meetingPoint: "",
    price: 0,
    vehicle: "",
    maxPeople: 0,
    imageId: 0,
    SingleRoomPrice: 0,
    AdvanceDeposit: 0,
    Finished: 0,
  });
  const [itineraries, setItineraries] = useState([]);
  const [depatureDates, setDepatureDates] = useState([]);
  const [removeDepatureDates, setRemoveDepatureDates] = useState([]);
  const [addDepatureDates, setAddDepatureDates] = useState([]);

  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const response = await TourService.getByTourId(tourId ? tourId : "1");

        if (response?.statusCode !== 200) {
          navigate("/admin/not-found");
          return;
        }
        console.log(response.data);

        setFormData({
          tourName: response.data?.tourName,
          meetingPoint: response.data?.meetingPoint,
          price: response.data?.price,
          vehicle: response.data?.vehicle,
          maxPeople: response.data?.maxPeople,
          imageId: response.data?.imageId,
          SingleRoomPrice: response.data?.singleRoomPrice,
          AdvanceDeposit: response.data?.advanceDeposit,
          Finished: response.data?.finished,
        });
        setItineraries(response.data?.itineraries);
        setDepatureDates(response.data?.departureDates);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTour();
  }, []);

  const handleSave = async () => {
    try {
      if (image != null) {
        const responseUpload = await ImageService.uploadImage(image);
        if (responseUpload?.statusCode === 201) {
          const response = await TourService.updateTour(tourId, {
            ...formData,
            imageId: responseUpload.data[0].imageId,
          });
          if (response?.statusCode === 200) {
            alert("Lưu thành công");
          }
        }
      } else {
        const response = await TourService.updateTour(tourId, formData);
        if (response?.statusCode === 200) {
          alert("Lưu thành công");
        }
      }
    } catch (error) {
      console.error(error);
      alert("Lưu thất bại");
    }
  };

  const handleDeleteDepatureDates = async () => {

    // Chuyển mảng object thành mảng các ngày
    const dates = removeDepatureDates.map((date) => date.departureDay);
    console.log(dates);
    
    try {
      const response = await TourService.removeDepartureDate(tourId, dates);
      console.log(response);
      alert(response?.message);
    } catch (error) {
      console.error(error);
      
      alert("Xóa thất bại, vui lòng thử lại");
    }
  }

  return (
    <>
      <BreadCrumbs breadCrumbs={props.breadCrumbs} />
      <div className="grid gap-5 grid-cols-1 lg:grid-cols-9">
        <div className="lg:col-span-5 bg-white rounded-xl border border-solid p-5">
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="tour_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Tên tour
              </label>
              <input
                type="text"
                id="tour_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                required
                value={formData?.tourName}
                onChange={(e) => {
                  setFormData({ ...formData, tourName: e.target.value });
                }}
              />
            </div>
            <div>
              <label
                htmlFor="meeting_point"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Điểm tập trung
              </label>
              <input
                type="text"
                id="meeting_point"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                required
                value={formData.meetingPoint}
                onChange={(e) => {
                  setFormData({ ...formData, meetingPoint: e.target.value });
                }}
              />
            </div>
            <div>
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Giá/người
              </label>
              <input
                type="number"
                id="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                step={50000}
                required
                value={formData.price}
                onChange={(e) => {
                  setFormData({ ...formData, price: e.target.value });
                }}
              />
            </div>
            <div>
              <label
                htmlFor="single_room_price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Giá phòng đơn
              </label>
              <input
                type="number"
                id="single_room_price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                required
                step={50000}
                value={formData.SingleRoomPrice}
                onChange={(e) => {
                  setFormData({ ...formData, SingleRoomPrice: e.target.value });
                }}
              />
            </div>
            <div>
              <label
                htmlFor="vehicle"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phương tiện
              </label>
              <input
                type="text"
                id="vehicle"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                required
                value={formData.vehicle}
                onChange={(e) => {
                  setFormData({ ...formData, vehicle: e.target.value });
                }}
              />
            </div>
            <div>
              <label
                htmlFor="number_of_people"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Số người
              </label>
              <input
                type="number"
                id="number_of_people"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                placeholder="flowbite.com"
                required
                value={formData.maxPeople}
                onChange={(e) => {
                  setFormData({ ...formData, maxPeople: e.target.value });
                }}
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="advance_deposit"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Cọc trước
            </label>
            <input
              type="number"
              id="advance_deposit"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
              required
              value={formData.AdvanceDeposit}
              onChange={(e) => {
                setFormData({ ...formData, AdvanceDeposit: e.target.value });
              }}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Sẵn sàng(Để có thể hiện thị trên trang chủ)
            </label>
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
              value={formData.Finished}
              onChange={(e) => {
                setFormData({ ...formData, Finished: e.target.value });
              }}
            >
              <option value={0}>Chưa sẵn sàng</option>
              <option value={1}>Sẵn sàng</option>
            </select>
          </div>
          <button
            onClick={handleSave}
            className="text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
          >
            Lưu
          </button>
        </div>
        <div className="lg:col-span-4 grid gap-x-5 gap-y-5 md:gap-x-0">
          <div className="bg-white rounded-xl border border-solid p-5 overflow-y-auto">
            <div className="mb-6">
              <label
                htmlFor="advance_deposit"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Các ngày khởi hành(Nhấn để chọn gỡ)
              </label>
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 lg:grid-cols-5 gap-2">
                {depatureDates?.map((date, index) => {
                  return (
                    <button
                      onClick={() => {
                        setRemoveDepatureDates([...removeDepatureDates, date]);
                        setDepatureDates(
                          depatureDates.filter((d) => d !== date)
                        );
                      }}
                      key={index}
                      className="rounded-lg px-2 py-1 border border-solid border-sky-700 text-sky-700"
                    >
                      {formatDateMMDD(date.departureDay)}
                    </button>
                  );
                })}
              </div>
            </div>
            {removeDepatureDates.length > 0 && (
              <div className="mb-6">
                <label
                  htmlFor="advance_deposit"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Xóa ngày khởi hành(Nhấn để gỡ khỏi danh sách)
                </label>
                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 lg:grid-cols-5 gap-2">
                  {removeDepatureDates?.map((date, index) => {
                    return (
                      <button
                        onClick={() => {
                          // Gỡ bỏ ngày khởi hành
                          setRemoveDepatureDates(
                            removeDepatureDates.filter((d) => d !== date)
                          );
                        }}
                        key={index}
                        className="rounded-lg px-2 py-1 border border-solid border-sky-700 text-sky-700"
                      >
                        {formatDateMMDD(date.departureDay)}
                      </button>
                    );
                  })}
                </div>
                <div className="flex">
                  <button
                    onClick={handleDeleteDepatureDates}
                    className="ml-auto text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
                  >
                    Xóa
                  </button>
                </div>
              </div>
            )}
            <div className="mb-6">
              <label
                htmlFor="advance_deposit"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Thêm ngày khởi hành(Nhấn để chọn)
              </label>
              <input
                type="date"
                id="tour_name"
                className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                required
                value={new Date().toISOString().split("T")[0]}
                onChange={(e) => {
                  if (addDepatureDates.includes(new Date(e.target.value))) {
                    return;
                  } else {
                    if (
                      new Date(e.target.value) < new Date().setHours(0, 0, 0, 0)
                    ) {
                      alert(
                        "Không thể chọn ngày khởi hành nhỏ hơn ngày hiện tại"
                      );
                      return;
                    }
                    setAddDepatureDates([
                      ...addDepatureDates,
                      new Date(e.target.value),
                    ]);
                  }
                }}
              />
              {addDepatureDates.length > 0 && (
                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 lg:grid-cols-5 gap-2">
                  {addDepatureDates?.map((date, index) => {
                    return (
                      <button
                        onClick={() => {
                          //Gỡ bỏ ngày khởi hành
                          setAddDepatureDates(
                            addDepatureDates.filter((d) => d !== date)
                          );
                        }}
                        key={index}
                        className="rounded-lg px-2 py-1 border border-solid border-sky-700 text-sky-700"
                      >
                        {formatDateMMDD(date)}
                      </button>
                    );
                  })}
                </div>
              )}
              {addDepatureDates.length > 0 && (
                <div className="flex">
                  <button className="ml-auto text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">
                    Thêm
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="bg-white rounded-xl border border-solid p-5 overflow-y-auto">
            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="file_input"
              >
                Hình ảnh
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                id="file_input"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  // console.log(e.target.files[0]);
                  setImage(e.target.files[0]);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTour;
