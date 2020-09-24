import React, { Component } from 'react';
import QuantityPicker from './quantityPicker';
import "./item.css";

class Item extends Component {
    state = { 
        minimum: this.props.product.minimum || 1,
        quantity: this.props.product.minimum || 1, /* This is what decides the initial quantity 
        get the minimum or use 1 as the default*/
     };

    render() { 
        return (
            <div className="item">
                <img src={"/images/products/" + this.props.product.image} 
                alt="Product"></img>

                <h4>{this.props.product.title}</h4>
                
                <div className="prices">
                    <h5> <span className ="price-title">Total </span> $ {this.props.product.price * this.state.quantity} </h5>
                    <h6> <span className ="price-title">Price  </span>$ {this.props.product.price}</h6>

                </div>
                <div >
                    
                    <QuantityPicker 
                        value = {this.state.quantity}
                        onValueChange = { (qnt) => this.handleQuantityChange(qnt) } 

                        minimum = { this.state.minimum } 


                    ></QuantityPicker>

                    <button  className="btn btn-sm btn-primary btn-add">
                        <i class="fas fa-cart-plus addCart-icon"></i>
                        </button>
                </div>
                
            </div>
          );
    }


    handleQuantityChange = (qnt) => {
        console.log("Quantity: " + qnt ); 
        this.setState({quantity: qnt});
        //now everytime the qnt is changed, it'll update the state
    };
}
 
export default Item;