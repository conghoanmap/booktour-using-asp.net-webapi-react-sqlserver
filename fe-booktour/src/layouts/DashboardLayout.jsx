import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { useLogout } from "../hooks";
import { GlobalContext } from "../contexts/GlobalProvider";
import Sidebar from "../components/admin/Sidebar";

const DashboardLayout = () => {
  const context = useContext(GlobalContext);
  const logout = useLogout();

  return (
    <div className="lg:flex bg-gray-50">
      <Sidebar />
      <div className="w-full lg:w-4/5 lg:h-screen lg:overflow-y-auto p-5">
        <Outlet />
      </div>
      {/* {context.isAuthenticated && <button onClick={logout}>Đăng xuất</button>}
      DashboardLayout */}
    </div>
  );
};

export default DashboardLayout;
