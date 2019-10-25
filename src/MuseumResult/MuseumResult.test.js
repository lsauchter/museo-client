import React from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import MuseumResult from "./MuseumResult";

library.add(faTimes);

it("renders without crashing", () => {
  const div = document.createElement("div");
  const museum = {
    mid: 8403601669,
    commonname: "BRONX ZOO",
    phone: 7183671010,
    weburl: "HTTP://BRONXZOO.COM/",
    discipl: "ZAW",
    longitude: -73.87812,
    latitude: 40.85001,
    gstreet: "2300 SOUTHERN BLVD",
    gcity: "BRONX",
    gstate: "NY",
    gzip5: "10460"
  };

  ReactDOM.render(
    <MuseumResult museum={museum} setMuseumResult={() => {}} />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
