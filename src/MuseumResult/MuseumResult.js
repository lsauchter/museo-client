import React from 'react'
import './MuseumResult.css'

export default function MuseumResult(props) {
    const {COMMONNAME, PHONE, WEBURL, GSTREET, GCITY, GSTATE, GZIP5} = props.museum

    return(
        <>
        <h3>{COMMONNAME}</h3>
        <p>{PHONE}</p>
        <p>{WEBURL}</p>
        <section name="address">
            <p>{GSTREET}</p>
            <p>{GCITY}, {GSTATE}, {GZIP5}</p>
        </section>
        </>
    )
}