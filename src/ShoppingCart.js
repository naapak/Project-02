export default class ShoppingCart{

    constructor(){
        console.log("creating shopping cart");
        this.itemskunumber = null;
        //// creating the variable to input the this.theApp = the 
        if(Storage){
            // you can create a shoppingCart! 
            this.initShoppingCart();
        } else
        {
            console.log("Error! SessionStorage not supported in your browser!");
        }
    }

    initShoppingCart(){
        // create the sessionStorage object that will be used
        // to store the items.
        console.log("finished creating shopping cart");
    }

    addItemToCart(sku){
        console.log("im adding sku to the cart");
        console.log(sku);

        // if (sessionStorage !== undefined) {
        //     // transfer sku to the shopping cart view to input the value
        //     let sessionSku = sessionStorage.getItem('Value')
        //     sessionSku = sessionSku+1;
        //     sessionSku = sessionSku.toString();
        //     sessionStorage.setItem(sku,sessionSku);

            

        // } else {
        //     return;
        // }



        //// does the session log contains the sku number?
        //// call the session log to view the sku number... 
        //// do if and else statement to add the item to the cart.. copy this information from catalogview details...
        //// 
    }

    removeItemFromCart(sku){

    }

    updateQuantityofItemInCart(sky,qty){


        // for (var i = 0; i >= qty ; i++) { qty += qty +1;
           
        // }
    }

    clearCart(){
        // clear the entire cart





    }

}




