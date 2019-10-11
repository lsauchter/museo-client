import React from 'react'
import ReactMapboxGl, { Layer, Feature, MapContext } from 'react-mapbox-gl'
import { MapboxStyleSwitcherControl } from "mapbox-gl-style-switcher";
import "mapbox-gl-style-switcher/styles.css";
import './Map.css'

export default function Map() {
    console.log(process.env.API_TOKEN)
    const MapBox = ReactMapboxGl({
        accessToken:
          process.env.REACT_APP_API_TOKEN
      });

    return(
        <MapBox
            style="mapbox://styles/mapbox/streets-v9"
            containerStyle={{
                height: '50vh',
                width: '100vw'
            }}
        >
            <MapContext.Consumer>
                {(map) => {
                    map.addControl(new MapboxStyleSwitcherControl());
                }}
            </MapContext.Consumer>
            <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
            </Layer>
        </MapBox>
    )
}