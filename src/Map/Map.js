import React from 'react'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl'
import './Map.css'

export default function Map() {
    const MapBox = ReactMapboxGl({
        accessToken:
          'pk.eyJ1IjoibHNhdWNodGVyIiwiYSI6ImNqdmI4cTFyYTA0eWw0M210YnN2azR6N20ifQ.uYKT4OinmcNs0pgAViOuFw'
      });

    return(
        <MapBox
            style="mapbox://styles/mapbox/streets-v9"
            containerStyle={{
                height: '100vh',
                width: '100vw'
            }}
            >
        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
            <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
        </Layer>
        </MapBox>
    )
}