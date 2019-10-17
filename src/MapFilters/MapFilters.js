import React from 'react'
import './MapFilters.css'

export default function MapFilters() {
    return(
        // <ul className="filters">
        //     <li>
        //         <button>Art Museums</button>
        //     </li>
        //     <li>
        //         <button>Gardens & Nature Centers</button>
        //     </li>
        //     <li>
        //         <button>Children's Museums</button>
        //     </li>
        //     <li>
        //         <button>History Museums</button>
        //     </li>
        //     <li>
        //         <button>Natural History & Natural Science Museums</button>
        //     </li>
        //     <li>
        //         <button>Science Museums & Planetariums</button>
        //     </li>
        //     <li>
        //         <button>Zoos and Aquariums</button>
        //     </li>
        //     <li>
        //         <button>General Museums</button>
        //     </li>
        //     <li>
        //         <button>Historical Societies & Preservation</button>
        //     </li>
        // </ul>
        <ul className="filters">
        <li>
            <input type="checkbox" id="art"/>
            <label htmlFor="art">Art Museums</label>
        </li>
        <li>
            <input type="checkbox" id="bot"/>
            <label htmlFor="bot">Gardens & Nature Centers</label>
        </li>
        <li>
            <input type="checkbox" id="child" />
            <label htmlFor="child">Children's Museums</label>
        </li>
        <li>
            <input type="checkbox" id="hist"/>
            <label htmlFor="hist">History Museums</label>
        </li>
        <li>
            <input type="checkbox" id="nat"/>
            <label htmlFor="nat">Natural History & Natural Science Museums</label>
        </li>
        <li>
            <input type="checkbox" id="sci"/>
            <label htmlFor="sci">Science Museums & Planetariums</label>
        </li>
        <li>
            <input type="checkbox" id="zoo"/>
            <label htmlFor="zoo">Zoos and Aquariums</label>
        </li>
        <li>
            <input type="checkbox" id="mus"/>
            <label htmlFor="mus">General Museums</label>
        </li>
        <li>
            <input type="checkbox" id="soc"/>
            <label htmlFor="soc">Historical Societies & Preservation</label>
        </li>
    </ul>
    )
}