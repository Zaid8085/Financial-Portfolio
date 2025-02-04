import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const HistoricalChartFilter = ({
  onDateChange,
}: {
  onDateChange: (selectedDate: Date | null) => void;
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleApply = () => {
    onDateChange(selectedDate);
  };

  const handleReset = () => {
    setSelectedDate(null);
    onDateChange(null); // Fetch current portfolio
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col">
        <label className="text-sm text-sky-600">Select Date</label>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          placeholderText="Select a date"
          className="px-2  py-1 lg:px-4 lg:py-2 mr-2 cursor-pointer text-sm lg:text-lg rounded-md shadow-md border-1 border-sky-400"
        />
      </div>
      <div className="">
        <button
          onClick={handleApply}
          className="px-2  py-1 lg:px-4 lg:py-2 mr-2 cursor-pointer text-sm lg:text-lg  rounded-md bg-sky-500 text-white "
        >
          Apply
        </button>
        <button
          onClick={handleReset}
          className="px-4 py-2 mr-2 cursor-pointer  text-lg rounded-md bg-gray-200 "
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default React.memo(HistoricalChartFilter);
