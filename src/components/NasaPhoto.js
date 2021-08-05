import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import Moment from "react-moment";
import Particles from "react-particles-js";
import ParticleConfig from "../config/particle-config";

const nasaApiKey = process.env.REACT_APP_NASA_API_KEY;
const baseUrl = `https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}`;

export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();
    async function fetchPhoto() {
      axios.get(baseUrl).then((res) => {
        console.log(res);
        setPhotoData(res.data);
      });
    }
  }, []);

  if (!photoData) return <div />;

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
            <p className="photo-explanation">{photoData.explanation}</p>
            <a className="photo-hd" href={photoData.hdurl}>
              View in HD
            </a>
          </div>
        </div>
      </div>
      <Particles className="particles" params={ParticleConfig} />
    </>
  );
}
