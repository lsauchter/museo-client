import React, {useState} from 'react'
import Map from '../Map/Map'
import MapFilters from '../MapFilters/MapFilters'
import MuseumResult from '../MuseumResult/MuseumResult'
import './MapPage.css'

export default function MapPage() {
    const [museum, updateMuseum] = useState({})
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
    })

    function setMuseumResult(museum) {
        updateMuseum(museum)
    }

    function setFilters(abbr) {
        const update = {
            ...filter,
            [abbr]: !filter[abbr]
        }
        updateFilter(update)
    }

    return(
        <>
        <div className="map">
            <Map
                setMuseumResult={(museum) => setMuseumResult(museum)}
                filter={filter}/>
            {(Object.keys(museum).length > 0) && <div className="bottom result">
                <MuseumResult
                    museum={museum}
                    setMuseumResult={(museum) => setMuseumResult(museum)}/>
                </div>}
        </div>
        <div className="filterContainer">
            <MapFilters 
                setFilters={(abbr) => setFilters(abbr)}
                filter={filter}/>
        </div>
        </>
    )
}