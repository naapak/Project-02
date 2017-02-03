



export default class CatalogView{

    constructor(){
        this.carousel = document.getElementsByClassName("owl-carousel");
        this.theApp = null; // i'm creating a property catalogview.theApp which is null. 
        // this.addProductsToCarousel();    
    }

   initCarousel(){ 
        $(document).ready(function(){

            $('.owl-carousel').owlCarousel({
                items:1,
                margin:1,
                loop:true,
                autoHeight:true,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1,
                        nav:true
                    },
                    600:{
                        items:2,
                        nav:false
                    },
                    1050:{
                        items:4,
                        nav:true,
                        loop:false
                    }
                }
            })

        });
       }


    onClickCartButton(theApp) { 
        return function(e){
         console.log(e); //getting the sku number and we need to pass it to a variable so that it can be transfered to shopping cart.
        let theSku = e.target.getAttribute("data-sku");
        console.log(theSku);
       
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

        //if it doesnt it match

        // let sku_val = parseInt(theSku) - parseInt(theSku) +1;
                         
        // sessionStorage.setItem(theSku,sku_val);



        theApp.shoppingCart.addItemToCart(theSku);
        theApp.shoppingCart.removeItemFromCart(theSku);
        // theApp.shoppingCart.updateQuantityofItemInCart(theSku,theQuantity);
        
         //now this passes the the sku from Catalogview to the app and then to shoppingcart 
    // we are going to pass the app from the app.js by sending the app from addprocuctsToCarousel in the app
    }	
    }


  

    addProductsToCarousel(products,theApp){
        this.theApp = theApp; // now assining the catalog.theApp = App.js there by linking app details to catalog
        
        if (products === undefined || products == null){
            return ; // do not do anything! there is no data
        }

        /* the loop creates all the elements for each item in the carousel.
         * it recreates the following structure
         * <div class="product-wrapper">
         * <img src="images/stretch-knit-dress.jpg" alt="Image of stretch knit dress" />
         * <p class="product-type">Dresses</p>
         * <h3>Stretch Knit Dress</h3>
         * <p class="price">$169.00</p>
         * </div>
          * */
        for (let p=0; p<products.length; p++){
            let product = products[p];
            //\\console.log(product);
            // each product is a product object
            // use it to create the element

            // create the DIV tag with class 'product-wrapper'
            let newDiv = document.createElement("div");
            newDiv.setAttribute("class","item");
            

            // create a new IMG tag. Suggest to add data-sku attribute here too
            // so that if you 'click' on the image, it would pop up a quick-view
            // window and you can use the sku.
            let newImg = document.createElement("img");
            newImg.setAttribute("src", product.image);
            newImg.setAttribute("alt", product.name); // this works too
            newImg.setAttribute("data-sku",product.sku);

            // create a new Paragraph to show a description
            // let newPara = document.createElement("p");
            // newPara.setAttribute("class","product-type");
            // let newParaTextNode = document.createTextNode(product.longDescription);
            // newPara.appendChild(newParaTextNode);

            // create a new H3 tag to show the name
            let newH3Tag = document.createElement("h3");
            let newH3TagTextNode = document.createTextNode(product.name);
            newH3Tag.appendChild(newH3TagTextNode);

            let newPricePara = document.createElement("p");
            newPricePara.setAttribute("class","price");
            let newPriceParaTextNode = document.createTextNode("$ "+product.regularPrice);
            newPricePara.appendChild(newPriceParaTextNode);

            let newButtonTag = document.createElement("button");
            newButtonTag.setAttribute("id",`qv_${product.sku}`);
            newButtonTag.setAttribute("data-sku",product.sku);
            newButtonTag.setAttribute("type","button");
            let newButtonTagTextNode = document.createTextNode("Quick View");
            newButtonTag.appendChild(newButtonTagTextNode);
            // <button id='qv${product-sku}' data-sku="" type='button'> Quick View </button>

            let addToCartButton = document.createElement("button");
            addToCartButton.setAttribute("id",`cart_${product.sku}`);
            addToCartButton.setAttribute("data-sku",product.sku);
            addToCartButton.setAttribute("type","button");
            let addToCartButtonTextNode = document.createTextNode("Add to cart");
            addToCartButton.appendChild(addToCartButtonTextNode);
            // <button id='cart_${product.sku}' data-sku="" type='button'> add to cart </button>

            //listen to the buttons click event all the time
            addToCartButton.addEventListener("click",this.onClickCartButton(this.theApp), false);//passing the this app to 
           
            


           

   

            /* you will need similar code to create
            an add to cart and a quick view button
            remember that each button you create should have
            a data-sku attribute that corresponds to the sku
            of each product.
            */
            newDiv.appendChild(newImg);
            // newDiv.appendChild(newPara);
            newDiv.appendChild(newH3Tag);
            newDiv.appendChild(newPricePara);
            newDiv.appendChild(newButtonTag);
            newDiv.appendChild(addToCartButton);
            this.carousel[0].appendChild(newDiv);

           
            //becuase we are calling a class type, [0] we care calling it's first carousel.

        }
    this.initCarousel();
    
    }

}




