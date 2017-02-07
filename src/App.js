
import BestBuyWebService from './BestBuyWebService';
import CatalogView from './CatalogView';
import ShoppingCart from './ShoppingCart';
import ShoppingCartView from './ShoppingCartView';

export default class App {

    constructor(){
        this.productData = null; // this will store all our data
        this.products = null; // stores specifically the products
        this.catalogView = new CatalogView(); // this will display our data
        this.shoppingCart = new ShoppingCart();

        // call the initBestBuyWebService to initialize the
        // BestBuy Web Service and return the data
        this.shoppingCartView = new ShoppingCartView();
        this.initBestBuyWebService();

    }

    initBestBuyWebService(){
        this.bbws = new BestBuyWebService();
        // use your own API key for this (the one from Cody)
        this.bbws.apiKey = "SXkiDh8lcFEAqyG6rDmJjlH4";

        // this uses 'backticks' for long multi-line strings
        this.bbws.url = `https://api.bestbuy.com/v1/products((categoryPath.id=abcat0502000))?apiKey=${this.bbws.apiKey}&format=json`;

        // pass the reference to this app to store the data
        this.bbws.getData(this);

    }

    prepCatalog(){
        // use this console.log to test the data
        // console.log(this.productData);

        if(this.productData!=null){
            // only get the products property (for now)
            // this code was copied from SimpleHTTPRequest.html
            this.products = this.bbws.getProducts();

        }

        this.showCatalog();
    }

    showCatalog() {

        // populate the catalog only if there are products
        if (this.productData != null) {
            this.catalogView.addProductsToCarousel(this.products, this);
            this.shoppingCartView.cartshow(this.products,this);
            //this.ShoppingCartView.??????????    // this is mine
            // this.catalogView.showCatalog();
          $(document).on("click",".close",this,function(){$(".itemAddedToCart").fadeOut()});
          $(document).on("click",".close",this,function(){$(".subcriptionThankyou").fadeOut()});
          $(document).on("click",".submit",this,function(){$(".subcriptionThankyou").fadeIn()});
        
          $(document).on("click",".close",this,function(){$(".ShoppingCart").fadeOut()});

          $(document).on("click",".close",this,function(){$(".quickView").fadeOut()});

        }

    }


}
