import React, { useEffect, useRef, useState } from "react";
import BreadCrumbs from "../../components/BreadCrumbs";
import DefaultTour from "../../components/admin/DefaultTour";
import {formatPrice} from "../../utils";
import { TourService } from "../../services";

const listMode = ["create", "edit", "view"];

const TourList = (props) => {
  const [mode, setMode] = useState(); // Xem chi tiết, sửa, xóa
  const modalRef = useRef();
  const [tours, setTours] = useState([]);

  useEffect(
    () => async () => {
      try {
        const response = await TourService.getByDestinationId(0);
        console.log(response.data);

        setTours(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    []
  );

  const handleClickOutside = (event) => {
    // Kiểm tra nếu click ra ngoài modalRef thì gọi hàm onClose
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setMode("normal");
    }
  };

  useEffect(() => {
    // Lắng nghe sự kiện click khi component được mount
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Xóa sự kiện khi component bị unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Vô hiệu hóa thanh cuộn nếu modal mở
    if (listMode.includes(mode)) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mode]);
  return (
    <div>
      {mode === "create" && (
        <div className="z-20 fixed inset-0 flex items-center justify-center bg-black bg-opacity-35">
          <DefaultTour objectRef={modalRef} clickOutSide={handleClickOutside} />
        </div>
      )}
      <BreadCrumbs breadCrumbs={props.breadCrumbs} />
      <h2 className="text-3xl font-bold dark:text-white my-3">
        Tất cả tour hiện hành
      </h2>
      <div className="md:flex my-3">
        <form className="max-w-full md:max-w-md w-full md:w-1/3">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
              placeholder="Nhập vào tên tour du lịch"
              required
            />
          </div>
        </form>
        <button
          onClick={() => setMode("create")}
          type="button"
          className="w-full md:w-auto md:ml-auto my-3 md:my-auto text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
        >
          <svg
            className="w-3.5 h-3.5 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 21"
          >
            <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
          </svg>
          Tạo tour mới
        </button>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-3">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-sky-600 bg-gray-100 border-gray-300 rounded focus:ring-sky-500 dark:focus:ring-sky-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Mã tour
              </th>
              <th scope="col" className="px-6 py-3">
                Tên tour
              </th>
              <th scope="col" className="px-6 py-3">
                Số ngày
              </th>
              <th scope="col" className="px-6 py-3">
                Giá/người
              </th>
              <th scope="col" className="px-6 py-3">
                Lượng người
              </th>
              <th scope="col" className="px-6 py-3">
                Điểm đi
              </th>
              <th scope="col" className="px-6 py-3">
                Điểm đến
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {tours.map((tour, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-sky-600 bg-gray-100 border-gray-300 rounded focus:ring-sky-500 dark:focus:ring-sky-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="checkbox-table-search-1"
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {tour?.tourId}
                </th>
                <td className="px-6 py-4">{tour?.tourName}</td>
                <td className="px-6 py-4">{tour?.days}</td>
                <td className="px-6 py-4">{formatPrice(tour?.price)}</td>
                <td className="px-6 py-4">{tour?.maxPeople}</td>
                <td className="px-6 py-4">{tour?.departureLocation?.locationName}</td>
                <td className="px-6 py-4">{tour?.destinationLocation?.locationName}</td>
                <td className="flex items-center px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-sky-600 dark:text-sky-500 hover:underline"
                  >
                    Edit
                  </a>
                  <a
                    href="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                  >
                    Remove
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex">
        <div className="flex ml-auto">
          <a
            href="#"
            className="flex items-center justify-center px-4 h-10 me-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <svg
              className="w-3.5 h-3.5 me-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 5H1m0 0 4 4M1 5l4-4"
              />
            </svg>
            Previous
          </a>
          <a
            href="#"
            className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TourList;
