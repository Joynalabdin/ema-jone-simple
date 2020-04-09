import React from 'react';

const ReviewItems = (props) => {
    console.log(props)
    const {name, quantity,key,price} = props.product;
    const reviewItemsStyle = {
        borderBottom:'1px solid lightgray',
        marginBottom:'5px',
        paddingBottom:"5px",
        marginLeft:"150px"
    }
    return (
        <div style={ reviewItemsStyle} className="review-item">
            <h3 className ="product-name">{name}</h3>
            <h5>Quantity: {quantity} </h5>
            <p><small>${price} </small></p>
            <br/>
            <button
            onClick = { ()=> props.removeProduct(key) } 
            className="main-button">Remove</button>
        </div>
    );
};

export default ReviewItems; 