angular.module("myApp", [
  "myApp.controllers",
  "myApp.services",
  "myApp.directives" 
])
// main configuration object
.constant("config", {
	version: 1.0,
	langs: ["eng-US", "port-BR"],
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
