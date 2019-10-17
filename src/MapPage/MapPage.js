import React, {useState} from 'react'
import Map from '../Map/Map'
import MapFilters from '../MapFilters/MapFilters'
import MuseumResult from '../MuseumResult/MuseumResult'
import './MapPage.css'

export default function MapPage() {
    const [museum, updateMuseum] = useState({})

    function setMuseumResult(museum) {
        updateMuseum(museum)
    }

    return(
        <>
        <div className="map">
            <Map setMuseumResult={(museum) => setMuseumResult(museum)}/>
        </div>
        <div className="top">
            <MapFilters />
        </div>
        <div className="bottom result">
            <MuseumResult museum={museum}/>
        </div>

        </>
    )
}