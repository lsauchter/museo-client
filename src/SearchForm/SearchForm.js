//File is an edited copy of this node module
//https://github.com/kmwhelan93/react-geocoder-autocomplete
//This version below includes the country query to limit results to one country

import React, {useContext} from 'react'
import MuseumContext from '../MuseumContext'
import  Geocoder from '../Geocoder/Geocoder'
import './SearchForm.css'

export default function SearchForm() {
    const {viewport, setViewport} = useContext(MuseumContext)
    const mapAccess = {
        accessToken: process.env.REACT_APP_API_TOKEN
    }

    const onSelect = (res) => {
        //setViewport(viewport)
        console.log(res)
    }

    return(
        <Geocoder
            {...mapAccess}
            onSelect={(res) => onSelect(res)}
            country='US'
            inputPlaceholder='City, Address, ZIP'
        />
    )
}