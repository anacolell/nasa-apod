import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import Moment from "react-moment";
import Particles from "react-particles-js";
import ParticleConfig from "../config/particle-config";
import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const nasaApiKey = process.env.REACT_APP_NASA_API_KEY;
const baseUrl = `https://api.nasa.gov/planetary/apod?api_key=`;

export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);
  const [date, setPhotoDate] = useState(new Date());

  const newDate = date.toISOString().split("T")[0];

  useEffect(() => {
    fetchPhoto();
    async function fetchPhoto() {
      axios.get(`${baseUrl}${nasaApiKey}&date=${newDate}`).then((res) => {
        console.log(res);
        setPhotoData(res.data);
      });
    }
  }, [newDate]);

  if (!photoData) return <div />;

  const isCreditTrue = photoData.copyright
    ? `Copyright: ${photoData.copyright}`
    : null;

  function handlePrevDay() {
    date.setDate(date.getDate() - 1);
    let newestDate = date.toISOString().slice(0, 10);
    setPhotoData(newestDate);
  }

  function handleNextDay() {
    date.setDate(date.getDate() + 1);
    let newestDate = date.toISOString().slice(0, 10);
    setPhotoData(newestDate);
  }

  return (
    <>
      <NavBar />
      <div className="photo-wrapper">
        <div className="nasa-photo">
          {photoData.media_type === "image" ? (
            <img className="photo" alt={photoData.title} src={photoData.url} />
          ) : (
            <iframe
              title="space-video"
              src={photoData.url}
              frameBorder="0"
              gesture="media"
              allow="encrypted-media"
              allowFullScreen
              className="photo"
            />
          )}
          <div className="photo-text">
            <h1 className="photo-title">{photoData.title}</h1>
            <p className="photo-date">
              <Moment format="DD/MM/YYYY">{photoData.date}</Moment>
            </p>
            <p className="photo-copyright">{isCreditTrue}</p>
            <p className="photo-explanation">{photoData.explanation}</p>
            <a className="photo-hd" href={photoData.hdurl}>
              View in HD
            </a>
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
                minDate={new Date("June 16, 1995")}
              />
            </div>
          </div>
        </div>
      </div>
      <Particles className="particles" params={ParticleConfig} />
    </>
  );
}
