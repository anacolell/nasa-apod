import React from "react";
import DatePicker from "react-datepicker";

export default function Datepicker({ date, setPhotoDate }) {
  return (
    <div className="datepicker-wrapper">
      <p className="datepicker-text">...or pick a date</p>
      <DatePicker
        className="datepicker"
        selected={date}
        onChange={(date) => setPhotoDate(date)}
        dateFormat="dd-MM-Y"
        peekNextMonth
        showYearDropdown
        maxDate={new Date()}
        minDate={new Date("June 21, 1995")}
      />
    </div>
  );
}
