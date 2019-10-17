import React, {useContext} from 'react'
import {withRouter} from 'react-router'
import MuseumContext from '../MuseumContext'
import  Geocoder from '../Geocoder/Geocoder'
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
        console.log(res)
        dataBounds([[res.bbox[0],res.bbox[1]],[res.bbox[2],res.bbox[3]]])
        setCenter(res.center)
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

export default withRouter(SearchForm)