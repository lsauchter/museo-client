import React, {useContext} from 'react'
import MuseumContext from '../MuseumContext'
import ReactMapboxGl, { Layer, Feature, MapContext, Image } from 'react-mapbox-gl'
import { MapboxStyleSwitcherControl } from "mapbox-gl-style-switcher"
import "mapbox-gl-style-switcher/styles.css";
import './Map.css'

export default function Map() {
    const {museumsVisible, mapCenter} = useContext(MuseumContext)

    const MapBox = ReactMapboxGl({
        accessToken:
          process.env.REACT_APP_API_TOKEN
      });
    
    const mapMuseums = museumsVisible.map(museum => {
        console.log(museum)
        const coords = [museum.LONGITUDE, museum.LATITUDE]
        return <Feature key={museum.MID} coordinates={coords} />
    })

    return(
        <MapBox
            style="mapbox://styles/mapbox/streets-v9"
            containerStyle={{
                height: '50vh',
                width: '100vw'
            }}
            center={mapCenter}
            zoom={[11]}
            // onDragEnd={}
            // onZoomEnd={}
        >
            <MapContext.Consumer>
                {(map) => {
                    map.addControl(new MapboxStyleSwitcherControl());
                }}
            </MapContext.Consumer>
            <Layer
                type="symbol"
                id="marker"
                layout={{ 'icon-image': 'symbol'}}
                minZoom={9}>
                {mapMuseums}
            </Layer>
        </MapBox>
    )
}