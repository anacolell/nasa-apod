import { enumDefaultedMember } from "@babel/types";
import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <ul>
        <Link to="/">Home</Link>
      </ul>
    </div>
  );
}
