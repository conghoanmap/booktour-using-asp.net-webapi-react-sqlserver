import React, { useEffect, useState } from "react";
import { LocationService, TourService } from "../../services";
import { useNavigate } from "react-router-dom";

const DefaultTour = (props) => {
    const navigate = useNavigate();
  const [regions, setRegions] = useState([]);
  const [formData, setFormData] = useState({
    departureId: 1,
    destinationId: 50,
    days: 1,
  });

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await LocationService.getRegionsAndLocationsOfRegion();
        setRegions(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchLocations();
  }, []);

  const handleSubmit = async () => {
    try {
      const response = await TourService.createDefaultTour(formData);
      if (response?.statusCode === 200) {
        console.log(response.data);
        
        alert("Tạo tour thành công");
        navigate(`/admin/edit-tour/${response.data?.tourId}`);
      }
    } catch (error) {
      console.log(error);
      alert("Tạo tour thất bại");
    }
  };

  return (
    <div
      ref={props?.objectRef}
      className="h-auto overflow-y-auto rounded-lg md:w-1/2 border border-solid border-gray-500 bg-white shadow-lg p-5"
    >
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Tạo tour
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Khởi tạo tour mới sau đó sẽ được chỉnh sửa để hoàn thiện
          </p>

          <div className="mt-10 grid sm:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">
            <div className="sm:col-span-1">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Điểm đi
              </label>
              <div className="mt-2">
                <select
                  id="countries"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  value={formData.departureId}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      departureId:
                        e.target.value === formData.destinationId
                          ? formData.departureId
                          : e.target.value,
                    });
                  }}
                >
                  {regions?.map((region, index) => {
                    return region.locations?.map((location, index) => {
                      return (
                        <option key={index} value={location.locationId}>
                          {location.locationName}
                        </option>
                      );
                    });
                  })}
                </select>
                {/* <span className="text-sm text-red-500">tuyệt</span> */}
              </div>
            </div>
            <div className="sm:col-span-1">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Điểm đi
              </label>
              <div className="mt-2">
                <select
                  id="countries"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  value={formData.destinationId}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      destinationId:
                        e.target.value === formData.departureId
                          ? formData.destinationId
                          : e.target.value,
                    });
                  }}
                >
                  {regions?.map((region, index) => {
                    return region.locations?.map((location, index) => {
                      return (
                        <option key={index} value={location.locationId}>
                          {location.locationName}
                        </option>
                      );
                    });
                  })}
                </select>
                {/* <span className="text-sm text-red-500">tuyệt</span> */}
              </div>
            </div>
            <div className="sm:col-span-1">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Số ngày
              </label>
              <div className="mt-2">
                <input
                  id="first-name"
                  name="first-name"
                  type="number"
                  autoComplete="given-name"
                  placeholder="Số ngày"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  value={formData.days}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      days: e.target.value < 1 ? 1 : e.target.value,
                    });
                  }}
                />
                {/* <span className="text-sm text-red-500">tuyệt</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Hủy
        </button>
        <button
          onClick={handleSubmit}
          type="submit"
          className="rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
        >
          Tạo tour
        </button>
      </div>
    </div>
  );
};

export default DefaultTour;
