import React from 'react'
import {Link} from 'react-router-dom'
import SearchForm from '../SearchForm/SearchForm'
import './NavBarSearch.css'

export default function NavBarSearch() {
    return(
        <div className="navBar">
            <h1 className="appTitle">
                <Link to="/">museo</Link>
            </h1>
            <div className="searchContainer">
                <SearchForm activeLink="false"/>
            </div>
        </div>
    )
}