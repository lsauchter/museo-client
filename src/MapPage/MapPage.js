import React, { useState } from "react";
import Map from "../Map/Map";
import MapFilters from "../MapFilters/MapFilters";
import MuseumResult from "../MuseumResult/MuseumResult";
import "./MapPage.css";

export default function MapPage() {
  const [museum, updateMuseum] = useState({});
  const [filterMenu, updateFilterMenu] = useState(false);
  const [filter, updateFilter] = useState({
    ART: true,
    CMU: true,
    BOT: true,
    GMU: true,
    HST: true,
    HSC: true,
    NAT: true,
    SCI: true,
    ZAW: true
  });

  function setMuseumResult(museum) {
    updateMuseum(museum);
  }

  function setFilters(abbr) {
    const update = {
      ...filter,
      [abbr]: !filter[abbr]
    };
    updateFilter(update);
  }

  function handleFilterMenu() {
    updateFilterMenu(!filterMenu);
  }

  return (
    <>
      <div className="map">
        <Map
          setMuseumResult={museum => setMuseumResult(museum)}
          handleFilterMenu={() => handleFilterMenu()}
          filterMenu={filterMenu}
          filter={filter}
        />
        {Object.keys(museum).length > 0 && (
          <div className="result">
            <MuseumResult
              museum={museum}
              setMuseumResult={museum => setMuseumResult(museum)}
            />
          </div>
        )}
      </div>
      <div className="filterContainer">
        <MapFilters
          setFilters={abbr => setFilters(abbr)}
          handleFilterMenu={() => handleFilterMenu()}
          filterMenu={filterMenu}
          filter={filter}
        />
      </div>
    </>
  );
}
