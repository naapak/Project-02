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
        // console.log("finished creating shopping cart");

    }

    addItemToCart(sku,theApp){
        $(".quickView").fadeOut(); 
        console.log("im adding sku to the cart");
        console.log(sku);
        let theSku = sku;
        if (sessionStorage.getItem(theSku)==undefined){
            sessionStorage.setItem(theSku,1);
            return
        }

        for (let i=0; i<sessionStorage.length; i++){
            let currentsku = sessionStorage.key(i);

            if (currentsku.toString() == theSku.toString()) {
                let currentValue = sessionStorage.getItem(currentsku);
                currentValue = parseInt(currentValue);
                currentValue = currentValue +1;
                sessionStorage.setItem(currentsku,currentValue);
            }
        }
        
        
}



    removeItemFromCart(sku){

    }

    updateQuantityofItemInCart(theApp){
        let self = this;
       return function(e){
        // console.log(self);
        self.updateCartQuantity(theApp);
        
        }
    }
    updateCartQuantity (theApp){
        
    
     let products = theApp.products;

     for (let i=0; i<sessionStorage.length; i++) { 
            let currentSku = sessionStorage.key(i);
            let current_qty = sessionStorage.getItem(currentSku);
            // console.log(currentSku);
        if (currentSku !== "Quantity"){
            let inputvalue= document.getElementById("QQv_"+currentSku).value;
            // console.log(inputvalue);

            if (current_qty.toString() !== inputvalue.toString()){
                sessionStorage.setItem(currentSku,inputvalue);
                let newQuantity = sessionStorage.getItem("Quantity");
                newQuantity = parseInt(newQuantity);
                inputvalue = parseInt(inputvalue);
                current_qty = parseInt(current_qty);
                newQuantity = newQuantity + inputvalue - current_qty;
                console.log(newQuantity);
                sessionStorage.setItem("Quantity",newQuantity);
                let current_val = sessionStorage.getItem("Quantity");
                $("#counter").val(current_val);
                theApp.shoppingCartView.cartshow(products,theApp);
            }

            }

            }


}

    clearCart(e){
        // clear the entire cart
        console.log('im clearing the cart');
        sessionStorage.clear();
        console.log(this);
        // this.addItemToCart;
        $('.ShoppingCart').fadeOut();
    }

}
