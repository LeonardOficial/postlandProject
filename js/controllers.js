angular.module("myApp.controllers", [])
//
.controller("postsController", ["$scope", function($scope) {
	$scope.post = function() {
		alert("a");
	};
	$scope.posts = [
	{
		  name: "ryan florest",
		  date: "1h",
		  topics: ["adventure", "action"],
		  friends: 22,
		  views: 22,
		  likes: 7,
		  comm: 3,
		  img: "css/imgs/zero.png",
		  body: 
			  "i wrote this post! i wrote this post!"
			+ "i wrote this post! i wrote this post!"
			+ "i wrote this post!"
	  },
	  {
		  name: "zero zephyrun",
		  date: "1h 30m",
		  topics: ["adventure", "comedy", "drama", "novel"],
		  friends: 22,
		  views: 22,
		  likes: 7,
		  comm: 3,
		  img: "css/imgs/zero.png",
		  body: 
			  "i wrote this post! i wrote this post!"
			+ "i wrote this post! i wrote this post!"
			+ "i wrote this post! i wrote this post!"
	  },
	  {
		  name: "zepto dark",
		  date: "1h 45m",
		  topics: ["adventure"],
		  friends: 22,
		  views: 22,
		  likes: 7,
		  comm: 3,
		  img: "css/imgs/zero.png",
		  body: 
			  "i wrote this post! i wrote this post!"
			+ "i wrote this post! i wrote this post!"
			+ "i wrote this post!"
	  }];
}])

.controller("picmodalController", function($scope, $timeout) {
	$scope.myfileObj = "none";
	
});
