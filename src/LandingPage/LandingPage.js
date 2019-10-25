import React from 'react'
import SearchForm from '../SearchForm/SearchForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './LandingPage.css'

export default function LandingPage() {
    return(
        <div className="landingPage">
        <div className="container hero">
            <div className="hero__text">
                <h2>Find a museum</h2>
                <p>Discover museums nearby or wherever your travels take you</p>
                <div className="landingPageSearch">
                    <SearchForm activeLink="true"/>
                </div>
            </div>
		</div>
        <div className="container bottom">
            <div className="bottom__text">
                <h3>Museums are everywhere</h3>
                <p>There are over <span className="bold">30,000</span> museums in the US so find something new to explore! Play tourist at home or find something unique to do while you're traveling. Either way, museo can help you plan.</p>
                <FontAwesomeIcon icon="university" size='2x' className="landingIcon"/>
                <h3>How it works</h3>
                <p>Enter an address or use your location to search for museums. Filter by the type of museum - zoo, history, art, and more - to find exactly what you're looking for.</p>
            </div>
        </div>
    </div>
    )
}