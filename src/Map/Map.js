import React, {useContext, useState, useEffect} from 'react'
import MuseumContext from '../MuseumContext'
import config from '../config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactMapGL, {NavigationControl, Marker, FlyToInterpolator} from 'react-map-gl'
import './Map.css'

export default function Map(props) {
    const {museums, fetchNewMuseums, mapCenter} = useContext(MuseumContext)
    const filter = props.filter
    const [mapRef, updateMap] = useState()
    const [viewport, updateViewport] = useState({
        height: 'calc(100vh - 56px)',
        width: '100vw',
        zoom: 13,
        latitude: mapCenter[1],
        longitude: mapCenter[0]
    })

    const icons = {
        ART: 'palette',
        BOT: 'leaf',
        CMU: 'child',
        GMU: 'landmark',
        HSC: 'monument',
        HST: 'university',
        NAT: 'bone',
        SCI: 'flask',
        ZAW: 'hippo'
    }

    function mapMuseums(abbr) { 
        const museumsOfType = museums.filter(museum => museum.discipl === abbr)
        const museumMarkers =  museumsOfType.map(museum => {
            return <Marker
            key={museum.mid}
            longitude={museum.longitude}
            latitude={museum.latitude}
            >
            <FontAwesomeIcon icon={icons[museum.discipl]} className="mapMarker"
                onClick={() => {props.setMuseumResult(museum)}}/>
            </Marker>
        })
        return museumMarkers
    }

    useEffect(() => {
        const {width, height} = viewport
        const newViewport = {
            width,
            height,
            latitude: mapCenter[1],
            longitude: mapCenter[0],
            zoom: 13,
            transitionDuration: 5000,
            transitionInterpolator: new FlyToInterpolator()
        }
        updateViewport({...newViewport})
    }, [mapCenter])

    function handleViewportChange(newViewport) {
        const {latitude, longitude, zoom} = newViewport
        updateViewport({width: '100vw', height: 'calc(100vh - 56px)', latitude, longitude, zoom})
    }

    function getNewMuseums() {
        if (mapRef) {
            const bounds = mapRef.getMap().getBounds()
            fetchNewMuseums(bounds)
        }
    }

    return(
        <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={config.MAPBOX_TOKEN}
            mapStyle="mapbox://styles/mapbox/streets-v10"
            onViewportChange={(viewport) => handleViewportChange(viewport)}
            onInteractionStateChange={(interactionState) => {
                if (!interactionState.isDragging  && !interactionState.isZooming && !interactionState.isPanning && !interactionState.inTransition && !interactionState.isRotating) {
                    getNewMuseums()
                }
            }}
            ref={map => {
                updateMap(map)
            }}
            onMouseDown={() => {
                props.setMuseumResult({})
                if (props.filterMenu) props.handleFilterMenu()
            }}
            onTouchStart={() => {
                props.setMuseumResult({})
                if (props.filterMenu) props.handleFilterMenu()
            }}
        >
            <div style={{position: 'absolute', right: 0}}>
                <NavigationControl 
                    onViewportChange={(viewport) => {
                        handleViewportChange(viewport)
                        getNewMuseums()}}
                    />
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