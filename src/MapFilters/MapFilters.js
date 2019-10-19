import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './MapFilters.css'

export default function MapFilters(props) {
    const [filterMenu, updateFilterMenu] = useState(false)

    function handleClick(abbr) {
        props.setFilters(abbr)
    }

    function handleFilterMenu() {
        updateFilterMenu(!filterMenu)
    }
    
    const { ART, CMU, BOT, GMU, HST, HSC, NAT, SCI, ZAW } = props.filter

    return(
        <>
        <button className="button--filter" onClick={() => handleFilterMenu()}>Filter</button>
        {filterMenu && <ul className="filters">
            <li>
                <button onClick={() => handleClick('ART')}>
                    {ART && <FontAwesomeIcon className='check' icon='check'/>}
                    <FontAwesomeIcon className="museumKey" icon='palette' />
                    Art Museums
                </button>
            </li>
            <li>
                <button onClick={() => handleClick('CMU')}>
                    {CMU && <FontAwesomeIcon className='check' icon='check'/>}
                    <FontAwesomeIcon className="museumKey" icon='child' />
                    Children's Museums
                </button>
            </li>
            <li>
                <button onClick={() => handleClick('BOT')}>
                    {BOT && <FontAwesomeIcon className='check' icon='check'/>}
                    <FontAwesomeIcon className="museumKey" icon='leaf' />
                    Gardens & Nature Centers
                </button>
            </li>
            <li>
                <button onClick={() => handleClick('GMU')}>
                    {GMU && <FontAwesomeIcon className='check' icon='check'/>}
                    <FontAwesomeIcon className="museumKey" icon='landmark' />
                    General Museums
                </button>
            </li>
            <li>
                <button onClick={() => handleClick('HST')}>
                    {HST && <FontAwesomeIcon className='check' icon='check'/>}
                    <FontAwesomeIcon className="museumKey" icon='university' />
                    History Museums
                </button>
            </li>
            <li>
                <button onClick={() => handleClick('HSC')}>
                    {HSC && <FontAwesomeIcon className='check' icon='check'/>}
                    <FontAwesomeIcon className="museumKey" icon='university' />
                    Historical Societies & Preservation
                </button>
            </li>
            <li>
                <button onClick={() => handleClick('NAT')}>
                    {NAT && <FontAwesomeIcon className='check' icon='check'/>}
                    <FontAwesomeIcon className="museumKey" icon='bone' />
                    Natural History & Natural Science Museums
                </button>
            </li>
            <li>
                <button onClick={() => handleClick('SCI')}>
                    {SCI && <FontAwesomeIcon className='check' icon='check'/>}
                    <FontAwesomeIcon className="museumKey" icon='flask' />
                    Science Museums & Planetariums
                </button>
            </li>
            <li>
                <button onClick={() => handleClick('ZAW')}>
                    {ZAW && <FontAwesomeIcon className='check' icon='check'/>}
                    <FontAwesomeIcon className="museumKey" icon='hippo' />
                    Zoos and Aquariums
                </button>
            </li>
        </ul>
        }
        </>
    )
}