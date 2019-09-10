import React, { Component } from 'react';
import productData from './data';
import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow';

console.log(productData);

function ProductTable(props){
    let tempProducts = {}; 
    productData.data.forEach((product,i)=>{
        // run some quick code to see if this is a new cat
        if(tempProducts[product.category] === undefined){
            tempProducts[product.category] = [];
        }
        tempProducts[product.category].push(product);
        // return(
        //     <ProductRow key={i} product={product} />
        // )
    });
    console.log(tempProducts);
    let rows = [];
    // we need 2 loops. outside loop, loops through categories.
    // i.e., sporting goods and electronics
    // it will run as many times as there are categories
    for(let key in tempProducts){
        // console.log(key);
        rows.push(<ProductCategoryRow key={key} header={key} />) // push the PRoductCategoryRow onto rows
        // Map through all the items on this type (i.e.sporting goods)
        tempProducts[key].forEach((product,i)=>{
            rows.push(<ProductRow key={key+i} product={product} />) //push this element on the rows
        })
    }
    
    console.log(props.search);


    return(
        <div className="product-table">
            <table className="table table-stripe">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    )
}

export default ProductTable;
