import { Map } from "@mui/icons-material";
import { Typography } from "@mui/material";
import React, { useState } from "react";
import { GiClockwork } from "react-icons/gi";
import {
  IoBusOutline,
  IoFastFoodOutline,
  IoMapOutline,
  IoPricetagsOutline,
} from "react-icons/io5";
import { SlPeople } from "react-icons/sl";

const MoreInfoTour = () => {
  const [moreInfo, setMoreInfo] = useState([
    {
      icon: (
        <IoMapOutline style={{ fontSize: "45px" }} className="text-sky-400" />
      ),
      title: "Điểm tham quan",
      description:
        "Quy Nhơn, Gành Đá Dĩa, Nhà Thờ Mằng Lăng, Vịnh Vũng Rô, Chùa",
    },
    {
      icon: (
        <IoFastFoodOutline
          style={{ fontSize: "45px" }}
          className="text-sky-400"
        />
      ),
      title: "Ẩm thực",
      description: "Theo thực đơn",
    },
    {
      icon: <SlPeople style={{ fontSize: "45px" }} className="text-sky-400" />,
      title: "Đối tượng thích hợp",
      description: "Gia đình nhiều thế hệ",
    },
    {
      icon: (
        <GiClockwork style={{ fontSize: "45px" }} className="text-sky-400" />
      ),
      title: "Thời gian lý tưởng",
      description: "Quanh năm",
    },
    {
      icon: (
        <IoBusOutline style={{ fontSize: "45px" }} className="text-sky-400" />
      ),
      title: "Phương tiện",
      description: "Xe du lịch",
    },
    {
      icon: (
        <IoPricetagsOutline
          style={{ fontSize: "45px" }}
          className="text-sky-400"
        />
      ),
      title: "Ưu đãi",
      description: "Đã ưu đãi trực tiếp vào giá tour",
    },
  ]);
  return (
    <>
      <h1 className="mb-2 mt-0 text-2xl text-center font-medium leading-tight text-black">
        NHỮNG THÔNG TIN CẦN LƯU Ý
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-3">
        {moreInfo.map((info, index) => {
          return (
            <div key={index}>
              <div className="flex justify-center gap-2">{info.icon}</div>
              <div className="my-2 flex">
                <p className="text-base mx-auto font-bold leading-tight">{info.title}</p>
              </div>
              <p className="text-center text-base">{info.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MoreInfoTour;
