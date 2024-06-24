import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Datepicker = ({ selectedDate, setSelectedDate, label }) => {
  return (
    <div className="datepicker-container">
      <label htmlFor="dob">{label}</label>
      <DatePicker
        className="border border-gray-400 py-2 px-2 rounded-md outline-none"
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="MM/dd/yyyy"
        placeholderText="Select your date of birth"
        maxDate={new Date()}
        showYearDropdown
        scrollableYearDropdown
        yearDropdownItemNumber={100}
        id="dob"
      />
    </div>
  );
};

export default Datepicker;
