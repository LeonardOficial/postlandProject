angular.module("myApp", [
  "ngAnimate",
//
  "myApp.controllers",
  "myApp.services",
  "myApp.directives" 
])
// main configuration object
.constant("myApp.config", {
	version: 1.0,
	langs: ["eng-US"],
	currentLang: "eng-us",
	//supported files
	supported: {
		image: {
			//min and max supported image size in MB
			min: "0",
			max: "10",
			//types of supported images
			types: []
		},
		video: {
			//min and max supported video size in MB
			min: "0",
			max: "30",
			//types of supported videos
			types: []
		}
	}
});

$(document.body).ready(function() {
	setTimeout(function() {
	    $(".loading-page").css("display", "none");
	}, 1000);
});
