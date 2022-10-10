import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveItem}) => {

    let message;
    if(cart.length === 0){
        message = <p>Please buy at least one item.</p>
    }
    else if(cart.length === 1){
        message = <div>
            <h3>Buy One For Me</h3>
            <p>Buy One For Her</p>
            <p>Buy One For You</p>
        </div>
    }
    else{
        message = <p>Thanks for buying</p>
    }

    return (
        <div>
            <h3 className={cart.length === 2 ? `purple` : `orange`}>Order Summary</h3>
            <h5>Order Quantity: {cart.length}</h5>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}

                >
                    {tshirt.name}
                    <button onClick={()=> handleRemoveItem(tshirt)}>❌</button>
                </p>)
            }
            {
                message
            }

            {cart.length ===3 ? <p>Thanks for buying 3</p> : <p>Please Buy 3</p>}
        </div>
    );
};

export default Cart;