import React from 'react'
import './SearchForm.css'

export default function SearchForm() {
    return(
        <form>
            <input
                id="search"
                name="search"
                type="text"
                placeholder="City, Address, ZIP"
            />
            <button type="submit">Search</button>
		</form>
    )
}