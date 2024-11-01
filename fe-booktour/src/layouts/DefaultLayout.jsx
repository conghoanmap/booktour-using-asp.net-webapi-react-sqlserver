import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { GlobalContext } from "../contexts/GlobalProvider";
import { useLogout } from "../hooks";
import { LocationService } from "../services";
import Header from "../components/Header";
import Footer from "../components/Footer";

const DefaultLayout = () => {
  const [regions, setRegions] = useState([]);
  const [locations, setLocations] = useState([]);
  const context = useContext(GlobalContext);
  const logout = useLogout();

  useEffect(() => {
    const fetchRegions = async () => {
      try {
        const response = await LocationService.getRegionsAndLocationsOfRegion();
        setRegions(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchLocations = async () => {
      try {
        const response = LocationService.getByRegionId(0);
        response.then((res) => {
          //   console.log(res);
          setLocations(res.data);
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchRegions();
    fetchLocations();
  }, []);
  return (
    <>
      <Header />
      {/* <DefaultHeader locations={locations} regions={regions} /> */}
      <div className="font-quicksand">
        <Outlet />
      </div>
      <Footer locations={locations} regions={regions}/>
      {/* <DefaultFooter locations={locations} regions={regions} /> */}
    </>
  );
};

export default DefaultLayout;
