import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LocationService, TourService } from "../services";
import TourCard from "../components/TourCard";
import { Container, Grid2, Typography } from "@mui/material";
import BreadCrumbs from "../components/BreadCrumbs";

const Tours = (props) => {
  const border = "border border-dashed border-red-500";

  const { destinationId } = useParams();
  const [location, setLocation] = useState({});
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await LocationService.getByLocationId(destinationId);
        // console.log(response.data);
        setLocation(response.data);
      } catch (error) {
        console.error(error);
      }
      try {
        const response = await TourService.getByDestinationId(destinationId);
        console.log(response.data);
        setTours(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [destinationId]);

  return (
    <>
      <BreadCrumbs
        breadCrumbs={props.breadCrumbs}
        subBreadCrumbs={location?.locationName}
      />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-5 my-10">
        <div className={`md:col-span-1`}>
          <div className="space-y-2">
            <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition">
                <span className="text-sm font-medium"> Availability </span>

                <span className="transition group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </summary>

              <div className="border-t border-gray-200 bg-white">
                <header className="flex items-center justify-between p-4">
                  <span className="text-sm text-gray-700"> 0 Selected </span>

                  <button
                    type="button"
                    className="text-sm text-gray-900 underline underline-offset-4"
                  >
                    Reset
                  </button>
                </header>

                <ul className="space-y-1 border-t border-gray-200 p-4">
                  <li>
                    <label
                      htmlFor="FilterInStock"
                      className="inline-flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        id="FilterInStock"
                        className="size-5 rounded border-gray-300"
                      />

                      <span className="text-sm font-medium text-gray-700">
                        {" "}
                        In Stock (5+){" "}
                      </span>
                    </label>
                  </li>

                  <li>
                    <label
                      htmlFor="FilterPreOrder"
                      className="inline-flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        id="FilterPreOrder"
                        className="size-5 rounded border-gray-300"
                      />

                      <span className="text-sm font-medium text-gray-700">
                        {" "}
                        Pre Order (3+){" "}
                      </span>
                    </label>
                  </li>

                  <li>
                    <label
                      htmlFor="FilterOutOfStock"
                      className="inline-flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        id="FilterOutOfStock"
                        className="size-5 rounded border-gray-300"
                      />

                      <span className="text-sm font-medium text-gray-700">
                        {" "}
                        Out of Stock (10+){" "}
                      </span>
                    </label>
                  </li>
                </ul>
              </div>
            </details>

            <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition">
                <span className="text-sm font-medium"> Price </span>

                <span className="transition group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </summary>

              <div className="border-t border-gray-200 bg-white">
                <header className="flex items-center justify-between p-4">
                  <span className="text-sm text-gray-700">
                    {" "}
                    The highest price is $600{" "}
                  </span>

                  <button
                    type="button"
                    className="text-sm text-gray-900 underline underline-offset-4"
                  >
                    Reset
                  </button>
                </header>

                <div className="border-t border-gray-200 p-4">
                  <div className="flex justify-between gap-4">
                    <label
                      htmlFor="FilterPriceFrom"
                      className="flex items-center gap-2"
                    >
                      <span className="text-sm text-gray-600">$</span>

                      <input
                        type="number"
                        id="FilterPriceFrom"
                        placeholder="From"
                        className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                      />
                    </label>

                    <label
                      htmlFor="FilterPriceTo"
                      className="flex items-center gap-2"
                    >
                      <span className="text-sm text-gray-600">$</span>

                      <input
                        type="number"
                        id="FilterPriceTo"
                        placeholder="To"
                        className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </div>
        <div className={`md:col-span-3 grid gap-5`}>
          {tours?.map((tour) => {
            return <TourCard key={tour.tourId} tour={tour} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Tours;
