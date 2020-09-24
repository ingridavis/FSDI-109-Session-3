import React, { Component } from 'react';


class Cart extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h2>Cart Page </h2>
                <button className="btn btn-warning">Test Dispatch</button>

            </div>
            

         );
    }
    testDispatch = () => {
        console.log("dispatching");
    };
}
 
export default Cart;