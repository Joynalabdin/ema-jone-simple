import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    
    const cart = props.cart
    const total = cart.reduce( (total, prd) => total + prd.price, 0);
    // let total = 0;
    // for(let i = 0; i<cart.length; i++ ){
    //     const product = cart[i];
    //     total = total + product.price * product.quantity;
    // }

    let shipping =0;
    if(total > 15 ){
        shipping = 0;
    }
    else if ( total > 35){
        shipping = 4.00;
    }
    else if (total > 0){
        shipping = 0;
    }

    // const tax =Math.round (total/10);
    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);

    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items Order:{cart.length} </h5>
            <p><small>Product Price :{total.toFixed(2)} </small></p>
            <p><small>Shipping cost :{shipping} </small></p>
            <p><small>Text+Vat :{tax} </small></p>
            <p><small>Total Price:{grandTotal} </small></p>
            <br/>
            <Link to="/review" >
            <button className="main-button"> Review order</button>
            
            </Link>


        </div>
    );
};

export default Cart;