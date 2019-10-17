import React, {useContext, useState} from 'react'
import MuseumContext from '../MuseumContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactMapGL, {NavigationControl, Marker} from 'react-map-gl'
import './Map.css'

export default function Map(props) {
    const {museumsVisible} = useContext(MuseumContext)
    const [map, updateMap] = useState(null)
    const [viewport, updateViewport] = useState({
        height: '50vh',
        width: '100vw',
        zoom: 11,
        latitude: 40.85001,
        longitude: -73.87812
    })

    const icons = {
        ART: 'palette',
        BOT: 'leaf',
        CMU: 'child',
        GMU: 'landmark',
        HSC: 'university',
        HST: 'university',
        NAT: 'bone',
        SCI: 'flask',
        ZAW: 'hippo'
    }

    const mapMuseums = museumsVisible.map(museum => {
        return <Marker
        key={museum.MID}
        longitude={museum.LONGITUDE}
        latitude={museum.LATITUDE}
        >
        <FontAwesomeIcon icon={icons[museum.DISCIPL]} className="mapMarker"
            onClick={() => {
            props.setMuseumResult(museum)}}/>
        </Marker>
    })

    return(
        <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_API_TOKEN}
            mapStyle="mapbox://styles/mapbox/streets-v10"
            onViewportChange={(viewport) => {
                if (map) console.log(map.getMap().getBounds())
                const {width, height, latitude, longitude, zoom} = viewport
                return updateViewport({width, height, latitude, longitude, zoom})}
            
            }
            ref={map => updateMap(map)}
        >
            <div style={{position: 'absolute', right: 0}}>
                <NavigationControl />
            </div>

            {mapMuseums}
        </ReactMapGL>
    )
}