import React from 'react'
import Map from '../Map/Map'
import MapFilters from '../MapFilters/MapFilters'
import MuseumResult from '../MuseumResult/MuseumResult'
import './MapPage.css'

export default function MapPage() {
    return(
        <>
        <div className="map">
            <Map />
        </div>
        <div className="top">
            <MapFilters />
        </div>
        <div className="bottom result">
            <MuseumResult />
        </div>

        </>
    )
}