import React from 'react';

export default function SearchForm(props) {
    const handleSearch = (evt) => {
        evt.preventDefault();
    }

    return (
        <form name="vehicleSearch" onSubmit={ handleSearch }>
            <input type="text" name="searchQuery"/>
            <button name="search">Search</button>
        </form>
    );
}
