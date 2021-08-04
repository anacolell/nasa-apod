import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";

const nasaApiKey = process.env.REACT_APP_NASA_API_KEY;
const baseUrl = `https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}`;

export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();
    async function fetchPhoto() {
      axios.get(baseUrl).then((res) => {
        setPhotoData(res.data);
      });
    }
  }, []);

  if (!photoData) return <div />;

  return (
    <>
      <NavBar />
      <div className="nasa-photo">
        {photoData.media_type === "image" ? (
          <img alt={photoData.title} src={photoData.url} className="photo" />
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
        <div>
          <h1>{photoData.title}</h1>
          <p>{photoData.date}</p>
          <p>{photoData.explanation}</p>
        </div>
      </div>
    </>
  );
}
