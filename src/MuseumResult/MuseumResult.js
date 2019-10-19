import React from 'react'
import './MuseumResult.css'

export default function MuseumResult(props) {
    const {COMMONNAME, PHONE, WEBURL, GSTREET, GCITY, GSTATE, GZIP5} = props.museum
    let weburl
    if (WEBURL) {
        weburl = WEBURL.toLowerCase()
    }

    return(
        <>
        <h3>{COMMONNAME}</h3>
        {PHONE && <p>phone: {PHONE}</p>}
        {WEBURL && <div className="websiteLink">
            <p>website: </p><a href={WEBURL} target="blank">{weburl}</a>
        </div>}
        {GSTREET && <section name="address">
            <p>{GSTREET}</p>
            <p>{GCITY}, {GSTATE}, {GZIP5}</p>
        </section>}
        </>
    )
}