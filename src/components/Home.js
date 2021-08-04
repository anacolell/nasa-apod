import React from "react";
import { Link } from "react-router-dom";
import Particles from "react-particles-js";
import ParticleConfig from "../config/particle-config";
import "../css/app.css";

export default function Home() {
  return (
    <>
      <div className="home">
        <Link className="home-link" to="/nasaphoto">
          See picture of the day
        </Link>
      </div>
      <Particles className="particles" params={ParticleConfig} />
    </>
  );
}
