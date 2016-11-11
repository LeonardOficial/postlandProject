angular.module("myApp.controllers", [])
//
.controller("postsController", ["$scope", function($scope) {
	$scope.post = function() {
		alert("a");
	};
	$scope.posts = [];
	$scope.posts.push(
	{
		  name: "ryan",
		  date: "12 november, 2016",
		  topic: "adventure",
		  friends: 22,
		  views: 22,
		  likes: 7,
		  comm: 3,
		  img: "css/imgs/zero.png",
		  body: 
			  "i wrote this post! i wrote this post!"
			+ "i wrote this post! i wrote this post!"
			+ "i wrote this post! ..."
	  },
	  {
		  name: "zero",
		  date: "12 november, 2016",
		  topic: "adventure",
		  friends: 22,
		  views: 22,
		  likes: 7,
		  comm: 3,
		  img: "css/imgs/zero.png",
		  body: 
			  "i wrote this post! i wrote this post!"
			+ "i wrote this post! i wrote this post!"
			+ "i wrote this post! ..."
	  },
	  {
		  name: "zepto",
		  date: "12 november, 2016",
		  topic: "adventure",
		  friends: 22,
		  views: 22,
		  likes: 7,
		  comm: 3,
		  img: "css/imgs/zero.png",
		  body: 
			  "i wrote this post! i wrote this post!"
			+ "i wrote this post! i wrote this post!"
			+ "i wrote this post! ..."
	  });
}]);
