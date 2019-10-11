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