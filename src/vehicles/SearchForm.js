import React from 'react';

export default function SearchForm(props) {
    const handleSearch = (evt) => {
        evt.preventDefault();
    }

    return (
        <form name="vehicleSearch" onSubmit={ handleSearch } className="form-inline">
            <input type="text" name="searchQuery" className="form-control"/>
            <button type="submit" name="search" className="btn btn-default">Search</button>
        </form>
    );
}
