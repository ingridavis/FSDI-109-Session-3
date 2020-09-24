import React, { Component } from 'react';
import { connect } from "react-redux";
import { incrementCartCounter } from './store/actions/index';


class Cart extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h2>Cart Page </h2>
                <button onClick = {this.testDispatch} className="btn btn-warning">Test Dispatch</button>
            </div>
         );
    }
    testDispatch = () => {
        console.log("dispatching");
        this.props.incrementCartCounter(); // dispatch an action to the store
    };
}
 
export default connect(null, { incrementCartCounter } ) (Cart);
