import React from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import MapFilters from "./MapFilters";

library.add(faLocationArrow);

it("renders without crashing", () => {
  const div = document.createElement("div");
  const filters = {
    ART: true,
    CMU: true,
    BOT: true,
    GMU: true,
    HST: true,
    HSC: true,
    NAT: true,
    SCI: true,
    ZAW: true
  };
  ReactDOM.render(
    <MapFilters
      filter={filters}
      setFilters={() => {}}
      handleFilterMenu={() => {}}
      filterMenu={false}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
