(function(){
	var app = angular.module('app', ['ngRoute']);
	

	//*-*-*-*-*-*-*-*-*-controladore StoreController-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

	app.controller('StoreController',['$http', function($http){
		var store = this;
		var url = 'http://localhost:3001/music/product';
		store.p = ({
			name: "",
			price: 0,
			discription: 0,
			foto: "",
			stock: 0,
			
			
		});

		

		$http.get(url).then(function success(response){
			console.log(response.data.product);
			store.products = response.data.product;
			console.log(store.products);
		});

		store.addProduct = function(product){
			console.log(product);
			$http.post(url, product).
			then(function success(response){
				console.log(response);
			},
			function err(err){
				console.log(err);
			})
			
		}

		store.deleteProduct = function(id){
			console.log(id);
			$http.delete(url + id)
			.then(function success(response){
				console.log(`El producto con el ID ${id} se ha eliminado`);
				document.location.reload();
			}, function err(err){
				console.log(`El producto no se ha eliminado ERR ${err}`);
			})
		}


		store.getUniqueProduct = function(id){
			$http.get(url + id).then(function success(response){

			console.log(response);
			store.product = response.data.product;
		});
		}

		store.updateProduct = function(id,revProduct){

			console.log(revProduct);
			console.log(id);

			$http.put(url+id,revProduct)
			.then(function success(response){
				console.log(response);
			},
			function err(err){console.log(`ho ho algo salio mal error ${err}`);}
			);
		}

	}]);
//*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*






//*-*-*-*-*-*-*-*-*--Controlador UserController*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

	app.controller('UserController',['$http',function($http){

		var store = this;
		var url = 'http://localhost:3001/music/user';

	}]);
//*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*







//*-*-*-*-*-*-*-*-*--Controlador TransController*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*


	app.controller('TransController',['$http',function($http){

		var store = this;
		var url = 'http://localhost:3001/music/transaction';


		$http.get(url).then(function success(response){
			console.log(response.data.product);
			store.products = response.data.product;
			console.log(store.products);
		});
	}]);
//*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*



   

})();