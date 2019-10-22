import React from 'react'
import './MuseumResult.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function MuseumResult(props) {
    const {commonname, phone, weburl, gstreet, gcity, gstate, gzip5} = props.museum

    return(
        <>
        <button onClick={() => props.setMuseumResult({})} className="times">
            <FontAwesomeIcon icon="times" />
        </button>
        <address>
            {commonname}
            {(phone !== ' ') && <p>phone: {phone}</p>}
            {(weburl !== ' ') && <div className="websiteLink">
                <p>website: </p><a href={weburl} target="blank">{weburl}</a>
            </div>}
            {(gstreet !== ' ' || gcity !== ' ') && <section name="address">
                <p>{gstreet}</p>
                <p>{gcity}, {gstate}, {gzip5}</p>
            </section>}
        </address>
        </>
    )
}