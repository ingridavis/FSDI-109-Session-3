
const cartProductsReducer = (state = [], action) => {
    switch(action.type){
        case "ADD_PRODUCT":
            /* 
                Algoritm to:
            - add items to the cart
            - check if the item is already present
            - if so, don't add, just sum the quantities
            */ 
            const prodCode = action.payload.product.id;
            // check if there is another product with the same code in the cart
            let found = false;
            let cart = [...state]; //copy of the state

            for (let i = 0; i<cart.length; i++){
                const prod = cart[i];
                if (prod.product.id === prodCode){
                    prod.quantity += action.payload.quantity;
                    found = true;
                }
            }

            // the cart does not contain that iem
            if(!found){
                cart.push(action.payload);
            }
            return cart;
            default: 
                return state;
    }
};
// copying items from state array and adding the new one

export default cartProductsReducer;