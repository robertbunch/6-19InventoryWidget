import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component{
    constructor(){
        super();
        this.state = {
            search: ""
        }
    }

    handleFilterChange = (value)=>{
        this.setState({
            search: value
        })
    }

    render(){
        return(
            <div className="col-sm-3">
                <SearchBar search={this.state.search} changeFromParent={this.handleFilterChange} />
                <ProductTable search={this.state.search} />
            </div>
        )
    }
}

export default FilterableProductTable;