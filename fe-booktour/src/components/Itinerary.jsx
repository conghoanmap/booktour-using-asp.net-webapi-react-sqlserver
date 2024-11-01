import React from "react";

const Itinerary = (props) => {
  return (
    <details className="group [&_summary::-webkit-details-marker]:hidden shadow-lg">
      <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
        <h2 className="font-medium">{props.itinerary?.title}</h2>

        <svg
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </summary>
      <div className="mt-4 p-4 leading-relaxed text-gray-700">
        {props.itinerary?.description.split("\n").map((line, index) => {
          return <p key={index}>{line}</p>;
        })}
      </div>
    </details>
  );
};

export default Itinerary;
