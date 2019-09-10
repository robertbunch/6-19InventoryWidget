import React, { Component } from 'react';

class SearchBar extends Component{
    constructor(){
        super();
        this.state = {
            search: ""
        }
        this.changeSearch = this.changeSearch.bind(this);
    }

    changeSearch(event){
        // console.dir(event.target);
        const newVal = event.target.value;
        // console.log(newVal);
        // this.setState({
        //     search: newVal
        // })
        this.props.changeFromParent(newVal);
    }

    render(){
        return(
            <div className="search-bar">
                <input value={this.props.search} onChange={this.changeSearch} type="text" placeholder="Search" />
                <div>
                    <input id="in-stock" type="checkbox" /> Only show products in stock
                </div>
            </div>
        )
    }
}

export default SearchBar;
