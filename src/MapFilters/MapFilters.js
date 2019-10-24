import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './MapFilters.css'

export default function MapFilters(props) {

    function handleClick(abbr) {
        props.setFilters(abbr)
    }

    const { ART, CMU, BOT, GMU, HST, HSC, NAT, SCI, ZAW } = props.filter

    return(
        <>
        <button className="button--filter" onClick={() => props.handleFilterMenu()}>Filter</button>
        {props.filterMenu && <ul className="filters">
            <li onClick={() => handleClick('ART')}>
                <button >
                    {ART && <FontAwesomeIcon className='check' icon='check'/>}
                    {!ART && <div style={{width: '21px', display: 'inherit'}}/>}
                    <FontAwesomeIcon className="museumKey" icon='palette' />
                    Art Museums
                </button>
            </li>
            <li onClick={() => handleClick('CMU')}>
                <button >
                    {CMU && <FontAwesomeIcon className='check' icon='check'/>}
                    {!CMU && <div style={{width: '21px', display: 'inherit'}}/>}
                    <FontAwesomeIcon className="museumKey" icon='child' />
                    Children's Museums
                </button>
            </li>
            <li onClick={() => handleClick('BOT')}>
                <button >
                    {BOT && <FontAwesomeIcon className='check' icon='check'/>}
                    {!BOT && <div style={{width: '21px', display: 'inherit'}}/>}
                    <FontAwesomeIcon className="museumKey" icon='leaf' />
                    Gardens & Nature Centers
                </button>
            </li>
            <li onClick={() => handleClick('GMU')}>
                <button >
                    {GMU && <FontAwesomeIcon className='check' icon='check'/>}
                    {!GMU && <div style={{width: '21px', display: 'inherit'}}/>}
                    <FontAwesomeIcon className="museumKey" icon='landmark' />
                    General Museums
                </button>
            </li>
            <li onClick={() => handleClick('HST')}>
                <button >
                    {HST && <FontAwesomeIcon className='check' icon='check'/>}
                    {!HST && <div style={{width: '21px', display: 'inherit'}}/>}
                    <FontAwesomeIcon className="museumKey" icon='university' />
                    History Museums
                </button>
            </li>
            <li onClick={() => handleClick('HSC')}>
                <button >
                    {HSC && <FontAwesomeIcon className='check' icon='check'/>}
                    {!HSC && <div style={{width: '21px', display: 'inherit'}}/>}
                    <FontAwesomeIcon className="museumKey" icon='monument' />
                    Historical Societies & Preservation
                </button>
            </li>
            <li onClick={() => handleClick('NAT')}>
                <button >
                    {NAT && <FontAwesomeIcon className='check' icon='check'/>}
                    {!NAT && <div style={{width: '21px', display: 'inherit'}}/>}
                    <FontAwesomeIcon className="museumKey" icon='bone' />
                    Natural History & Natural Science Museums
                </button>
            </li>
            <li onClick={() => handleClick('SCI')}>
                <button >
                    {SCI && <FontAwesomeIcon className='check' icon='check'/>}
                    {!SCI && <div style={{width: '21px', display: 'inherit'}}/>}
                    <FontAwesomeIcon className="museumKey" icon='flask' />
                    Science Museums & Planetariums
                </button>
            </li>
            <li onClick={() => handleClick('ZAW')}>
                <button >
                    {ZAW && <FontAwesomeIcon className='check' icon='check'/>}
                    {!ZAW && <div style={{width: '21px', display: 'inherit'}}/>}
                    <FontAwesomeIcon className="museumKey" icon='hippo' />
                    Zoos and Aquariums
                </button>
            </li>
        </ul>
        }
        </>
    )
}