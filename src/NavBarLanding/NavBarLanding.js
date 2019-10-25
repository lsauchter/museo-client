import React from "react";
import { Link } from "react-router-dom";
import "./NavBarLanding.css";

export default function NavBarLanding() {
  return (
    <div className="navBar">
      <h1 className="appTitle">
        <Link to="/">museo</Link>
      </h1>
    </div>
  );
}
