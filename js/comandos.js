
var app = angular.module('listagemApp',[]);

app.controller('produtos', function($scope){
	
	$scope.produtos = [
		{
			"produto_id" : 1,
			"produto_nome" : "MCQ ALEXANDER MCQUEEN",
			"produto_sub" : "Logo appliquè sweatshirt",
			"produto_img" : "img/01.png",
			"produto_preco" : 137.50,
            "produto_preco_alt" : 210
		},
		{
			"produto_id" : 2,
			"produto_nome" : "OFF-WHITE",
			"produto_sub" : "Spray paint checked shirt",
			"produto_img" : "img/02.png",
			"produto_preco" : 335,
            "produto_preco_alt" : null
		},
		{
			"produto_id" : 3,
			"produto_nome" : "NEIL BARRETT",
			"produto_sub" : "Lightning bolt print T-shirt",
			"produto_img" : "img/03.png",
			"produto_preco" : 175,
            "produto_preco_alt" : null
		},
		{
			"produto_id" : 4,
			"produto_nome" : "MARCELO BURLON COUNTY",
			"produto_sub" : "Gorilla print sweatshirt",
			"produto_img" : "img/04.png",
			"produto_preco" : 270,
            "produto_preco_alt" : null
		},
		{
			"produto_id" : 5,
			"produto_nome" : "PALM ANGELS",
            "produto_sub" : "Unicorn print T-shirt",
			"produto_img" : "img/05.png",
			"produto_preco" : 83,
            "produto_preco_alt" : null
		},
		{
			"produto_id" : 6,
			"produto_nome" : "AMI ALEXANDRE MATTIUSSI",
			"produto_sub" : "Denim shirt",
			"produto_img" : "img/06.png",
			"produto_preco" : 160,
            "produto_preco_alt" : null
		},
		{
			"produto_id" : 7,
			"produto_nome" : "AMI ALEXANDRE MATTIUSSI",
			"produto_sub" : "Ami print T-shirt",
			"produto_img" : "img/07.png",
			"produto_preco" : 72,
            "produto_preco_alt" : null
		},
		{
			"produto_id" : 8,
			"produto_nome" : "DOLCE & GABBANA",
			"produto_sub" : "Cockerel print t-shirt",
			"produto_img" : "img/08.png",
			"produto_preco" : 245,
            "produto_preco_alt" : null
		},
		{
			"produto_id" : 9,
			"produto_nome" : "PRODUTO 9",
			"produto_sub" : "consectetur adipiscing elit",
			"produto_img" : "img/06.png",
			"produto_preco" : 171,
            "produto_preco_alt" : null
		},
		{
			"produto_id" : 10,
			"produto_nome" : "PRODUTO 10",
			"produto_sub" : "Lorem ipsum dolor sit amet",
			"produto_img" : "img/02.png",
			"produto_preco" : 215,
            "produto_preco_alt" : null
		}
	];
	$scope.currentPage = 0;
    $scope.pageSize = 8;
    $scope.data = $scope.produtos
    $scope.numberOfPages=function(){
        return Math.ceil($scope.data.length/$scope.pageSize);                
    }
	$scope.cart = [];
	$scope.addTocart = function(productIndex){
		$scope.cart.push($scope.produtos[productIndex]);
		$scope.produtos[productIndex].disable = true;
		
	};
	
	$scope.removerProd = function(itemIndex){
		$scope.cart[itemIndex].disable = false;
		$scope.cart.splice(itemIndex,1);
	};
	
	$scope.calcularTotal = function(){
		var total = 0;
		angular.forEach($scope.cart,function(value){
			total = total + value.produto_preco;
		});
		return total;
	};


});

// PAGINACAO
// https://stackoverflow.com/questions/11581209/pagination-on-a-list-using-ng-repeat


    //We already have a limitTo filter built-in to angular,
    //let's make a startFrom filter
    app.filter('startFrom', function() {
        return function(input, start) {
            start = +start; //parse to int
            return input.slice(start);
        }
    });