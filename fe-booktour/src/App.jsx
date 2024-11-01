import { useContext, useEffect, useState } from "react";
import "./App.css";
import { GlobalContext } from "./contexts/GlobalProvider";
import { Route, Routes } from "react-router-dom";
import { DashboardLayout, DefaultLayout } from "./layouts";
import {
  AdminNotFound,
  Booking,
  Dashboard,
  Home,
  Login,
  NotFound,
  Register,
  Tour,
  Tours,
} from "./pages";
import CompleteBooking from "./pages/CompleteBooking";
import CreateTour from "./pages/admin/CreateTour";
import TourList from "./pages/admin/TourList";
import EditTour from "./pages/admin/EditTour";

function App() {
  const context = useContext(GlobalContext);

  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/tours/:destinationId"
          element={<Tours breadCrumbs={["Tour"]} />}
        />
        <Route
          path="/tour/:tourId"
          element={<Tour breadCrumbs={["Tour", "Chi tiết"]} />}
        />

        {context.isAuthenticated && context.justBookedTour && (
          <Route path="/complete/:bookTourId" element={<CompleteBooking />} />
        )}
        {context.isAuthenticated && (
          <Route
            path="/booking/:tourId/:departureDate/:emptySeats/:tourTypeId"
            element={<Booking />}
          />
        )}
        {!context.isAuthenticated && (
          <Route
            path="/login"
            element={<Login breadCrumbs={["Đăng nhập"]} />}
          />
        )}
        {!context.isAuthenticated && (
          <Route
            path="/register"
            element={<Register breadCrumbs={["Đăng kí tài khoản"]} />}
          />
        )}
      </Route>
      
      {context.isAuthenticated && (
        context.roles?.includes("Admin") && (
          <Route element={<DashboardLayout />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/tour-manager" element={<TourList breadCrumbs={["Admin", "Quản lý tour"]} />} />
            <Route path="/admin/create-tour" element={<CreateTour breadCrumbs={["Admin", "Tạo tour mới"]} />} />
            <Route path="/admin/edit-tour/:tourId" element={<EditTour breadCrumbs={["Admin", "Chỉnh sửa tour"]} />} />
            <Route path="/admin/*" element={<AdminNotFound />} />
          </Route>
        )
      )}
    </Routes>
  );
}

export default App;
