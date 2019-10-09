import React from 'react'
import './MapFilters.css'

export default function MapFilters() {
    return(
        <ul className="filters">
            <li>
                <button>Art Museums</button>
            </li>
            <li>
                <button>Gardens & Nature Centers</button>
            </li>
            <li>
                <button>Children's Museums</button>
            </li>
            <li>
                <button>History Museums</button>
            </li>
            <li>
                <button>Natural History & Natural Science Museums</button>
            </li>
            <li>
                <button>Science Museums & Planetariums</button>
            </li>
            <li>
                <button>Zoos and Aquariums</button>
            </li>
            <li>
                <button>General Museums</button>
            </li>
            <li>
                <button>Historical Societies & Preservation</button>
            </li>
        </ul>
    )
}