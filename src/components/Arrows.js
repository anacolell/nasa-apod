import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Arrows({
  handleNextDay,
  handlePrevDay,
  formatDate,
  newDate,
  date,
}) {
  const [nextDay, setNextDay] = useState(false);
  const [prevDay, setPrevDay] = useState(true);

  useEffect(() => {
    let nextDay = new Date(date);
    nextDay.setDate(nextDay.getDate() + 1);
    let now = formatDate(new Date());
    if (formatDate(nextDay) < now || formatDate(nextDay) === now) {
      setNextDay(false);
    } else {
      setNextDay(true);
    }
  }, [newDate, date, formatDate]);

  useEffect(() => {
    let prevDay = new Date(date);
    prevDay.setDate(prevDay.getDate() - 1);
    let limitDate = formatDate(new Date("06/21/1995"));
    if (formatDate(prevDay) > limitDate) {
      setPrevDay(false);
    } else {
      setPrevDay(true);
    }
  }, [newDate, date, formatDate]);

  return (
    <div className="arrows">
      <div>
        <FontAwesomeIcon
          className={`arrow arrow-left ${prevDay && "btn-disabled"}`}
          onClick={() => handlePrevDay()}
          icon={faArrowLeft}
        />
        <p className={`arrow-text ${prevDay && "btn-disabled"}`}>
          Previous day
        </p>
      </div>
      <div>
        <FontAwesomeIcon
          className={`arrow arrow-right ${nextDay && "btn-disabled"}`}
          onClick={() => handleNextDay()}
          icon={faArrowRight}
        />
        <p className={`arrow-text ${nextDay && "btn-disabled"}`}>Next day</p>
      </div>
    </div>
  );
}
