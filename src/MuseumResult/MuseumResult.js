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
        <h3>{commonname}</h3>
        {(phone !== ' ') &&  <p>{phone}</p>}
        {(weburl !== ' ') && <div className="websiteLink">
            <a href={weburl} target="blank" rel="noreferrer">{weburl}</a>
        </div>}
        {(gstreet !== ' ' || gcity !== ' ') && <address>
            <p>{gstreet}</p>
            <p>{gcity}, {gstate}, {gzip5}</p>
        </address>}
        </>
    )
}