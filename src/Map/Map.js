import React, {useContext, useState, useEffect} from 'react'
import MuseumContext from '../MuseumContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactMapGL, {NavigationControl, Marker} from 'react-map-gl'
import './Map.css'

export default function Map(props) {
    const {museumsVisible, fetchNewMuseums, mapCenter} = useContext(MuseumContext)
    const filter = props.filter
    const [mapRef, updateMap] = useState()
    const [bounds, updateBounds] = useState(null)
    const [viewport, updateViewport] = useState({
        height: 'calc(100vh - 56px)',
        width: '100vw',
        zoom: 11,
        latitude: mapCenter[1],
        longitude: mapCenter[0]
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

    function mapMuseums(abbr) { 
        const museumsOfType = museumsVisible.filter(museum => museum.DISCIPL === abbr)
        const museumMarkers =  museumsOfType.map(museum => {
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
        return museumMarkers
    }

    useEffect(() => {
        const {width, height, zoom} = viewport
        const newViewport = {
            width,
            height,
            latitude: mapCenter[1],
            longitude: mapCenter[0],
            zoom
        }
        updateViewport({...newViewport})
    }, [mapCenter])

    function handleViewportChange(viewport) {
        const {latitude, longitude, zoom} = viewport
        updateViewport({width: '100vw', height: 'calc(100vh - 56px)', latitude, longitude, zoom})
    }

    if (!bounds) {
        if (mapRef) {
            return updateBounds(mapRef.getMap().getBounds())
        }
    }

    function getNewMuseums() {
        if (mapRef) {
            const oldBounds = bounds
            const newBounds = mapRef.getMap().getBounds()
            fetchNewMuseums(oldBounds, newBounds)
            updateBounds(newBounds)
        }
    }

    return(
        <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_API_TOKEN}
            mapStyle="mapbox://styles/mapbox/streets-v10"
            onViewportChange={(viewport) => handleViewportChange(viewport)}
            onInteractionStateChange={(interactionState) => {
                if (!interactionState.isDragging  && !interactionState.isZooming && !interactionState.isPanning) {
                    getNewMuseums()
                }
            }}
            ref={map => {
                updateMap(map)
            }}
        >
            <div style={{position: 'absolute', right: 0}}>
                <NavigationControl 
                    onViewportChange={(viewport) => {
                        handleViewportChange(viewport)
                        getNewMuseums()}
                    }/>
            </div>
            {filter.ART && mapMuseums('ART')}
            {filter.CMU && mapMuseums('CMU')}
            {filter.GMU && mapMuseums('GMU')}
            {filter.HSC && mapMuseums('HSC')}
            {filter.HST && mapMuseums('HST')}
            {filter.NAT && mapMuseums('NAT')}
            {filter.SCI && mapMuseums('SCI')}
            {filter.ZAW && mapMuseums('ZAW')}
        </ReactMapGL>
    )
}