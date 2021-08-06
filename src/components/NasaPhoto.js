import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import DatePicker from "./DatePicker";
import Arrows from "./Arrows";
import Moment from "react-moment";
import Particles from "react-particles-js";
import ParticleConfig from "../config/particle-config";

const nasaApiKey = process.env.REACT_APP_NASA_API_KEY;
const baseUrl = `https://api.nasa.gov/planetary/apod?api_key=`;

export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);
  const [date, setPhotoDate] = useState(new Date());

  const newDate = formatDate(date);

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

  function formatDate(date) {
    return date.toISOString().split("T")[0];
  }

  function handlePrevDay() {
    let prevDay = new Date(date);
    prevDay.setDate(prevDay.getDate() - 1);
    let limitDate = formatDate(new Date("06/21/1995"));
    if (formatDate(prevDay) > limitDate) {
      setPhotoDate(prevDay);
    } else {
      return;
    }
  }

  function handleNextDay() {
    let nextDay = new Date(date);
    nextDay.setDate(nextDay.getDate() + 1);
    let now = formatDate(new Date());
    if (formatDate(nextDay) > now) {
      return;
    } else {
      setPhotoDate(nextDay);
    }
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
            <Arrows
              handlePrevDay={handlePrevDay}
              handleNextDay={handleNextDay}
            />
            <DatePicker date={date} setPhotoDate={setPhotoDate} />
          </div>
        </div>
      </div>
      <Particles className="particles" params={ParticleConfig} />
    </>
  );
}
