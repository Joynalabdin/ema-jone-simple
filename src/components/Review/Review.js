import React, { useEffect } from 'react';
import { useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItems from '../ReviewItems/ReviewItems';
import Cart from '../Cart/Cart';

const Review = () => {
    const [cart, setCart,] = useState([])
    const removeProduct = (productKey) =>{
        console.log('remove click',productKey );
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart (productKey);
    }
    useEffect (() => {
        // cart
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);
        const carProducts = productKeys.map(key => {
            const product = fakeData.find(pd=> pd.key===key);
            product.quantity = saveCart[key];
            return product;
        })
        setCart(carProducts);
    },[]);
    return (
        <div className="twin-container">
            <div className="product-container">
            {
               cart.map(pd => <ReviewItems 
                key={pd.key}
                removeProduct={removeProduct}
                product={pd}>

                </ReviewItems> )
            }
            </div>
            <div className="cart-container">
            <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Review;