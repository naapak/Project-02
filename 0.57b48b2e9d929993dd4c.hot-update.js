webpackHotUpdate(0,[
/* 0 */,
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _BestBuyWebService = __webpack_require__(2);\n\nvar _BestBuyWebService2 = _interopRequireDefault(_BestBuyWebService);\n\nvar _CatalogView = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"./CatalogView\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nvar _CatalogView2 = _interopRequireDefault(_CatalogView);\n\nvar _ShoppingCart = __webpack_require__(4);\n\nvar _ShoppingCart2 = _interopRequireDefault(_ShoppingCart);\n\nvar _ShoppingCartView = __webpack_require__(5);\n\nvar _ShoppingCartView2 = _interopRequireDefault(_ShoppingCartView);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar App = function () {\n    function App() {\n        _classCallCheck(this, App);\n\n        this.productData = null; // this will store all our data\n        this.products = null; // stores specifically the products\n        this.catalogView = new _CatalogView2.default(); // this will display our data\n        this.shoppingCart = new _ShoppingCart2.default();\n        // call the initBestBuyWebService to initialize the\n        // BestBuy Web Service and return the data\n        this.shoppingCartView = new _ShoppingCartView2.default();\n        this.initBestBuyWebService();\n    }\n\n    _createClass(App, [{\n        key: 'initBestBuyWebService',\n        value: function initBestBuyWebService() {\n            this.bbws = new _BestBuyWebService2.default();\n            // use your own API key for this (the one from Cody)\n            this.bbws.apiKey = \"SXkiDh8lcFEAqyG6rDmJjlH4\";\n\n            // this uses 'backticks' for long multi-line strings\n            this.bbws.url = 'https://api.bestbuy.com/v1/products((categoryPath.id=abcat0502000))?apiKey=' + this.bbws.apiKey + '&format=json';\n\n            // pass the reference to this app to store the data\n            this.bbws.getData(this);\n        }\n    }, {\n        key: 'prepCatalog',\n        value: function prepCatalog() {\n            // use this console.log to test the data\n            // console.log(this.productData);\n\n            if (this.productData != null) {\n                // only get the products property (for now)\n                // this code was copied from SimpleHTTPRequest.html\n                this.products = this.bbws.getProducts();\n            }\n\n            this.showCatalog();\n        }\n    }, {\n        key: 'showCatalog',\n        value: function showCatalog() {\n\n            // populate the catalog only if there are products\n            if (this.productData != null) {\n                this.catalogView.addProductsToCarousel(this.products, this);\n                //this.ShoppingCartView.??????????    // this is mine\n                // this.catalogView.showCatalog();\n            }\n        }\n    }]);\n\n    return App;\n}();\n\nexports.default = App;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQXBwLmpzP2E2NzMiXSwibmFtZXMiOlsiQXBwIiwicHJvZHVjdERhdGEiLCJwcm9kdWN0cyIsImNhdGFsb2dWaWV3Iiwic2hvcHBpbmdDYXJ0Iiwic2hvcHBpbmdDYXJ0VmlldyIsImluaXRCZXN0QnV5V2ViU2VydmljZSIsImJid3MiLCJhcGlLZXkiLCJ1cmwiLCJnZXREYXRhIiwiZ2V0UHJvZHVjdHMiLCJzaG93Q2F0YWxvZyIsImFkZFByb2R1Y3RzVG9DYXJvdXNlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7SUFFcUJBLEc7QUFFakIsbUJBQWE7QUFBQTs7QUFDVCxhQUFLQyxXQUFMLEdBQW1CLElBQW5CLENBRFMsQ0FDZ0I7QUFDekIsYUFBS0MsUUFBTCxHQUFnQixJQUFoQixDQUZTLENBRWE7QUFDdEIsYUFBS0MsV0FBTCxHQUFtQiwyQkFBbkIsQ0FIUyxDQUc2QjtBQUN0QyxhQUFLQyxZQUFMLEdBQW9CLDRCQUFwQjtBQUNBO0FBQ0E7QUFDQSxhQUFLQyxnQkFBTCxHQUF3QixnQ0FBeEI7QUFDQSxhQUFLQyxxQkFBTDtBQUdIOzs7O2dEQUVzQjtBQUNuQixpQkFBS0MsSUFBTCxHQUFZLGlDQUFaO0FBQ0E7QUFDQSxpQkFBS0EsSUFBTCxDQUFVQyxNQUFWLEdBQW1CLDBCQUFuQjs7QUFFQTtBQUNBLGlCQUFLRCxJQUFMLENBQVVFLEdBQVYsbUZBQThGLEtBQUtGLElBQUwsQ0FBVUMsTUFBeEc7O0FBRUE7QUFDQSxpQkFBS0QsSUFBTCxDQUFVRyxPQUFWLENBQWtCLElBQWxCO0FBRUg7OztzQ0FFWTtBQUNUO0FBQ0E7O0FBRUEsZ0JBQUcsS0FBS1QsV0FBTCxJQUFrQixJQUFyQixFQUEwQjtBQUN0QjtBQUNBO0FBQ0EscUJBQUtDLFFBQUwsR0FBZ0IsS0FBS0ssSUFBTCxDQUFVSSxXQUFWLEVBQWhCO0FBRUg7O0FBRUQsaUJBQUtDLFdBQUw7QUFDSDs7O3NDQUVhOztBQUVWO0FBQ0EsZ0JBQUksS0FBS1gsV0FBTCxJQUFvQixJQUF4QixFQUE4QjtBQUMxQixxQkFBS0UsV0FBTCxDQUFpQlUscUJBQWpCLENBQXVDLEtBQUtYLFFBQTVDLEVBQXNELElBQXREO0FBQ0E7QUFDQTtBQUNIO0FBR0o7Ozs7OztrQkFwRGdCRixHIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBCZXN0QnV5V2ViU2VydmljZSBmcm9tICcuL0Jlc3RCdXlXZWJTZXJ2aWNlJztcbmltcG9ydCBDYXRhbG9nVmlldyBmcm9tICcuL0NhdGFsb2dWaWV3JztcbmltcG9ydCBTaG9wcGluZ0NhcnQgZnJvbSAnLi9TaG9wcGluZ0NhcnQnO1xuaW1wb3J0IFNob3BwaW5nQ2FydFZpZXcgZnJvbSAnLi9TaG9wcGluZ0NhcnRWaWV3JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIHtcblxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMucHJvZHVjdERhdGEgPSBudWxsOyAvLyB0aGlzIHdpbGwgc3RvcmUgYWxsIG91ciBkYXRhXG4gICAgICAgIHRoaXMucHJvZHVjdHMgPSBudWxsOyAvLyBzdG9yZXMgc3BlY2lmaWNhbGx5IHRoZSBwcm9kdWN0c1xuICAgICAgICB0aGlzLmNhdGFsb2dWaWV3ID0gbmV3IENhdGFsb2dWaWV3KCk7IC8vIHRoaXMgd2lsbCBkaXNwbGF5IG91ciBkYXRhXG4gICAgICAgIHRoaXMuc2hvcHBpbmdDYXJ0ID0gbmV3IFNob3BwaW5nQ2FydCgpO1xuICAgICAgICAvLyBjYWxsIHRoZSBpbml0QmVzdEJ1eVdlYlNlcnZpY2UgdG8gaW5pdGlhbGl6ZSB0aGVcbiAgICAgICAgLy8gQmVzdEJ1eSBXZWIgU2VydmljZSBhbmQgcmV0dXJuIHRoZSBkYXRhXG4gICAgICAgIHRoaXMuc2hvcHBpbmdDYXJ0VmlldyA9IG5ldyBTaG9wcGluZ0NhcnRWaWV3KCk7XG4gICAgICAgIHRoaXMuaW5pdEJlc3RCdXlXZWJTZXJ2aWNlKCk7XG4gICAgICAgXG4gICAgICAgXG4gICAgfVxuXG4gICAgaW5pdEJlc3RCdXlXZWJTZXJ2aWNlKCl7XG4gICAgICAgIHRoaXMuYmJ3cyA9IG5ldyBCZXN0QnV5V2ViU2VydmljZSgpO1xuICAgICAgICAvLyB1c2UgeW91ciBvd24gQVBJIGtleSBmb3IgdGhpcyAodGhlIG9uZSBmcm9tIENvZHkpXG4gICAgICAgIHRoaXMuYmJ3cy5hcGlLZXkgPSBcIlNYa2lEaDhsY0ZFQXF5RzZyRG1KamxINFwiO1xuXG4gICAgICAgIC8vIHRoaXMgdXNlcyAnYmFja3RpY2tzJyBmb3IgbG9uZyBtdWx0aS1saW5lIHN0cmluZ3NcbiAgICAgICAgdGhpcy5iYndzLnVybCA9IGBodHRwczovL2FwaS5iZXN0YnV5LmNvbS92MS9wcm9kdWN0cygoY2F0ZWdvcnlQYXRoLmlkPWFiY2F0MDUwMjAwMCkpP2FwaUtleT0ke3RoaXMuYmJ3cy5hcGlLZXl9JmZvcm1hdD1qc29uYDtcblxuICAgICAgICAvLyBwYXNzIHRoZSByZWZlcmVuY2UgdG8gdGhpcyBhcHAgdG8gc3RvcmUgdGhlIGRhdGFcbiAgICAgICAgdGhpcy5iYndzLmdldERhdGEodGhpcyk7XG5cbiAgICB9XG5cbiAgICBwcmVwQ2F0YWxvZygpe1xuICAgICAgICAvLyB1c2UgdGhpcyBjb25zb2xlLmxvZyB0byB0ZXN0IHRoZSBkYXRhXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucHJvZHVjdERhdGEpO1xuXG4gICAgICAgIGlmKHRoaXMucHJvZHVjdERhdGEhPW51bGwpe1xuICAgICAgICAgICAgLy8gb25seSBnZXQgdGhlIHByb2R1Y3RzIHByb3BlcnR5IChmb3Igbm93KVxuICAgICAgICAgICAgLy8gdGhpcyBjb2RlIHdhcyBjb3BpZWQgZnJvbSBTaW1wbGVIVFRQUmVxdWVzdC5odG1sXG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RzID0gdGhpcy5iYndzLmdldFByb2R1Y3RzKCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2hvd0NhdGFsb2coKTtcbiAgICB9XG5cbiAgICBzaG93Q2F0YWxvZygpIHtcblxuICAgICAgICAvLyBwb3B1bGF0ZSB0aGUgY2F0YWxvZyBvbmx5IGlmIHRoZXJlIGFyZSBwcm9kdWN0c1xuICAgICAgICBpZiAodGhpcy5wcm9kdWN0RGF0YSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmNhdGFsb2dWaWV3LmFkZFByb2R1Y3RzVG9DYXJvdXNlbCh0aGlzLnByb2R1Y3RzLCB0aGlzKTtcbiAgICAgICAgICAgIC8vdGhpcy5TaG9wcGluZ0NhcnRWaWV3Lj8/Pz8/Pz8/Pz8gICAgLy8gdGhpcyBpcyBtaW5lXG4gICAgICAgICAgICAvLyB0aGlzLmNhdGFsb2dWaWV3LnNob3dDYXRhbG9nKCk7XG4gICAgICAgIH1cblxuXG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQXBwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }
])