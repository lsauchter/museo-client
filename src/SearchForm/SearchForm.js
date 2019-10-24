import React, {useContext} from 'react'
import {withRouter} from 'react-router'
import MuseumContext from '../MuseumContext'
import config from '../config'
import  Geocoder from '../Geocoder/Geocoder'
import './SearchForm.css'

function SearchForm(props) {
    const {dataBounds, setCenter} = useContext(MuseumContext)
    const mapAccess = {
        accessToken: config.MAPBOX_TOKEN
    }

    const onSelect = (res) => {
        if (props.activeLink === "true") {
            props.history.push('/map')
        }
        //sends coordinates for App component to fetch museums//
        dataBounds([[res.bbox[0],res.bbox[1]],[res.bbox[2],res.bbox[3]]])
        //sets the center of the map//
        setCenter(res.center)
    }

    function getUserLocation() {
        if (props.activeLink === "true") {
            props.history.push('/map')
        }
        //The if...in checks for geolocation support within the browser
        //Users choose to allow (success) or deny (error) only IF geolcation is supported
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                function success(position) {
                    setCenter([position.coords.longitude, position.coords.latitude]);
                },
                function error() {
                    console.log('location denied');
                }
            ); 
        }
        else {
            console.log('geolocation is not enabled on this browser');
        }
    }

    return(
        <Geocoder
            {...mapAccess}
            onSelect={(res) => onSelect(res)}
            country='US'
            inputPlaceholder='Address, City, or ZIP'
            inputClass='geocoder__input'
            resultClass='geocoder__li'
            resultsClass='geocoder__ul'
            getUserLocation={() => getUserLocation()}
        />
    )
}

export default withRouter(SearchForm)