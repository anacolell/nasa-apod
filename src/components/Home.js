import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Link to="/nasaphoto">See picture of the day</Link>
    </div>
  );
}