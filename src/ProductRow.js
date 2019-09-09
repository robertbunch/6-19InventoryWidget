import React from 'react';

// Presenationaal component. No need for state. Or Lifecycle methods
// Just for sending back HTML based on props
function ProductRow(props){
    let productClass = "";
    let fontStyle = {}
    if(!props.product.inStock){
        productClass = "text-danger"
        fontStyle = {
            fontWeight: "bold"
        }
    }
    return(
            <tr>
                 <td style={fontStyle} className={productClass}>{props.product.name}</td>
                 <td>{props.product.price}</td>
            </tr>

    )
}

export default ProductRow;