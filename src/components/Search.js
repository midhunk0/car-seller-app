import React from 'react';

const Search = ({ onSearch }) => {
    const handleChange = (e) => {
        onSearch(e.target.value);
    };

    return (
        <div className="search-bar">
            <input type="text" placeholder="Search..." onChange={handleChange} />
        </div>
    );
};

export default Search;
