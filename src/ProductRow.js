import React from 'react';

// Presenationaal component. No need for state. Or Lifecycle methods
// Just for sending back HTML based on props
function ProductRow(props){
    return(
            <tr>
                 <td>{props.product.name}</td>
                 <td>{props.product.price}</td>
            </tr>

    )
}

export default ProductRow;