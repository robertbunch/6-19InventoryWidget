import React, { Component } from 'react';

function SearchBar(props){
    return(
        <div className="search-bar">
            <input type="text" placeholder="Search" />
            <div>
                <input id="in-stock" type="checkbox" /> Only show products in stock
            </div>
        </div>
    )
}

export default SearchBar;
