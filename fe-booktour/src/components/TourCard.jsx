import { CalendarToday, FavoriteOutlined, Flight } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid2,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { GrMapLocation } from "react-icons/gr";
import { IoBusOutline, IoTicketOutline } from "react-icons/io5";
import { LuAlarmClock } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";
import { formatDateMMDD, formatPrice } from "../utils";

const TourCard = (props) => {
  const border = "border border-dashed border-red-500";
  console.log(props.tour.departureDates);

  return (
    <Link
      to={`/tour/${props.tour?.tourId}`}
      className="h-full md:h-102 block rounded-lg p-4 shadow-sm shadow-sky-100 hover:shadow-lg"
      title="Nhấn để xem chi tiết"
    >
      <img
        alt=""
        src={props.tour?.image?.url}
        className="h-56 w-full rounded-md object-cover"
      />

      <div className="mt-2">
        <dl>
          <div>
            <dt className="sr-only">Giá</dt>

            <dd className="text-sm text-gray-500">
              Giá: {formatPrice(props.tour?.price)}
            </dd>
          </div>

          <div>
            <dt className="sr-only">Địa chỉ</dt>

            <dd className="font-medium">{props.tour.tourName}
              <span className="text-sky-500 hover:text-sky-600">(Nhấn để xem chi tiết tour)</span>
            </dd>
          </div>
          <div className="md:max-w-5xl md:truncate">
            <dt className="sr-only">Mô tả</dt>

            <dd className="text-sm text-gray-500">
            Tham quan, sống ảo tại Kỳ Co Eo Gió, Quy Nhơn - nơi được biết đến như là thiên đường Maldives “phiên bản Việt” với vẻ đẹp hoang sơ, hữu tình. Chiêm bái Ngọc Xá Lợi của Phật Tổ Thích Ca Mâu Ni tại Chùa Thiên Hưng.
            </dd>
          </div>
        </dl>

        <div className="mt-6 flex items-center gap-8 text-xs">
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <svg
              className="size-4 text-sky-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
              />
            </svg>

            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Khởi hành</p>

              <p className="font-medium">{props.tour?.departureLocation?.locationName}</p>
            </div>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <svg
              className="size-4 text-sky-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>

            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Thời gian</p>

              <p className="font-medium">{props.tour.days}N{props.tour.days - 1}Đ</p>
            </div>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <svg
              className="size-4 text-sky-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>

            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Phương tiện</p>

              <p className="font-medium">{props.tour?.vehicle}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TourCard;
