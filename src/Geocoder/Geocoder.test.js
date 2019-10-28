import React from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import Geocoder from "./Geocoder";

library.add(faLocationArrow);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Geocoder accessToken="123" onSelect={() => {}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
