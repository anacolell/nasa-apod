import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Arrows({ handleNextDay, handlePrevDay }) {
  return (
    <div className="arrows">
      <div className="arrow-left">
        <FontAwesomeIcon
          className="arrow"
          onClick={() => handlePrevDay()}
          icon={faArrowLeft}
        />
        <p className="arrow-text">Previous day</p>
      </div>
      <div className="arrow-right">
        <FontAwesomeIcon
          className="arrow arrow-right"
          onClick={() => handleNextDay()}
          icon={faArrowRight}
        />
        <p className="arrow-text">Next day</p>
      </div>
    </div>
  );
}
