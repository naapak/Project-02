export default class ShoppingCartView {

	constructor() {

		this.initshoppingCart();
		this.shoppingCartCounter();

	}

	initshoppingCart(){
	
		
	}

	cartshow (products,theApp){
		console.log("hey im running");
		let output ="";
		let viewCart = $("shoppingCartInfo");
 		// console.log(sessionStorage.length);
 		
		for (let i=0; i<sessionStorage.length; i++) { 
			let currentSku = sessionStorage.key(i);
			let current_qty = sessionStorage.getItem(currentSku);
			// console.log(currentSku);
			// console.log(current_qty);

			for (let p=0;p<products.length;p++) {
				let currentProducts = products[p];
				 // console.log(currentProducts);// i'm getting this
				let productsSku = currentProducts.sku;
				// console.log("bjk sdlkfjbsdkjfbbsd");
				if(productsSku.toString() == currentSku.toString()) {
					let img = currentProducts.image;
					// console.log(currentProducts);
					let name = currentProducts.name;
					let price = currentProducts.regularPrice;
					let subTotal = price * current_qty;
					// console.log(current_qty);

					output += ` <div class="flex">
								<img class='cartimage' height="100" width="100" src=${img}>
								<h3 class="black"> ${name}</h3>  
								<p class="red">$ ${price}</p>
								<input type="number" value=${current_qty} id="QQv_${productsSku}" class="black shoppingCartInput" name="quantity" min="1" max="100" >
								<p class="black">$ ${subTotal}</p>
								<button	class="delete" type"button"> Delete </button>
								</div>`;

			}

		}

	}	

	$(".shoppingCartInfo").html(output);
	if (sessionStorage.getItem("Quantity") == null){ return } else {
	let clearButton = document.getElementById('clearSessionStorage');
    clearButton.addEventListener("click",this.clearTheShoppingCart(theApp),false);

    
    let updateCartButton = document.getElementById('updateCart');
    updateCartButton.addEventListener("click",theApp.shoppingCart.updateQuantityofItemInCart(theApp),false);

    
    
    }
	
}

	clearTheShoppingCart(theApp){

		return function(e) {
			console.log('idfgjsdnfgjknd');
			theApp.shoppingCart.clearCart();
			theApp.shoppingCartView.cartshow();
			theApp.shoppingCartView.shoppingCartCounter();
			let current_val = sessionStorage.getItem("Quantity");
			$("#counter").val(current_val);
			$("#counter").hide();

		}

}

	shoppingCartCounter() {
		if ( sessionStorage.getItem("Quantity") !== null) {
		$("#counter").show();
		let current_val = sessionStorage.getItem("Quantity");
		$("#counter").val(current_val);

	} else {   }

	}


}
