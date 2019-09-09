import React, { Component } from 'react';
import productData from './data';
import ProductRow from './ProductRow'

console.log(productData);

function ProductTable(props){
    const products = productData.data.map((product,i)=>{
        return(
            <ProductRow key={i} product={product} />
            // <tr key={i}>
            //     <td>{product.name}</td>
            //     <td>{product.price}</td>
            // </tr>
        )
    });

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
                    {products}
                </tbody>
            </table>
        </div>
    )
}

export default ProductTable;
