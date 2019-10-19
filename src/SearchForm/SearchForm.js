import React, {useContext} from 'react'
import {withRouter} from 'react-router'
import MuseumContext from '../MuseumContext'
import  Geocoder from '../Geocoder/Geocoder'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SearchForm.css'

function SearchForm(props) {
    const {dataBounds, setCenter} = useContext(MuseumContext)
    const mapAccess = {
        accessToken: process.env.REACT_APP_API_TOKEN
    }

    const onSelect = (res) => {
        if (props.activeLink === "true") {
            props.history.push('/map')
        }
        dataBounds([[res.bbox[0],res.bbox[1]],[res.bbox[2],res.bbox[3]]])
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
        <>
        <Geocoder
            {...mapAccess}
            onSelect={(res) => onSelect(res)}
            country='US'
            inputPlaceholder='Address, City, or ZIP'
            resultClass='geocoder__li'
            resultsClass='geocoder__ul'
        />
        <button onClick={() => getUserLocation()}>
            <FontAwesomeIcon icon="location-arrow" />
        </button>
        </>
    )
}

export default withRouter(SearchForm)