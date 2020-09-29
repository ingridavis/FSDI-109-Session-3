import React, { Component } from 'react';


class CartPageItems extends Component {
    state = {  }
    render() { 
        return ( 
            <div className = "cartItem"> 
                <img src={"/images/products/" + this.props.info.product.image} alt="product"></img>
                <div>
                    <label className="description">{this.props.info.product.title}</label>
                    <label className = "price"> {this.props.info.product.price}</label>

                </div>
               
               <div>
                   <label>{this.props.info.quantity}</label>
                   <label>Total: ${this.props.info.quantity * this.props.info.product.price}</label>
               </div>
            </div>
            

         );
    }
}
 
export default CartPageItems;