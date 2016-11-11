angular.module("myApp.directives", [])
//
.directive("mainMenu", function() {
	return {
		scope: { wanted: "=" },
		templateUrl: "templates/mainmenu.html",
		restrict: "E",
		replace: true,
		link: function(sc, element) {
			sc.visible = true;
			
			sc.toggleBar = function(bool) {
				sc.visible = bool;
			};
		}
	};
})
//
.directive("subMenu", function() {
	return {
		replace: true,
	    restrict: "E",
		templateUrl: "templates/submenu.html",
		link: function(sc, element) {
			var tagsList = element.find("li");	
			var currentTag = $(tagsList[0]);
			
			for(var i=0; i<tagsList.length; i++) {
				var li = $(tagsList[i]);
				(function(x) {
				    x.bind("click", function() {
					    li.css("border-color", "blue");
					    //
					    currentTag = x;
				    });
				}(li));
			}
			
		}
	};
})
//
.directive("collapseBox", function() {
	return {
		restrict: "EA",
		replace: true,
		transclude: true,
		templateUrl: "templates/collapsebox.html",
		link: function(sc, el, attrs) {
			var open = false;
			
			var swbtn = el.find(".sw-btn");
			var temp  = el.find(".content");
			
			swbtn.click(function() {
				if(open) {
				    temp.css("display", "none");
					open = false;
				} else {
					temp.css("display", "block");
					open = true;
				}
			});
		}
	};
})
//
.directive("postInput", function() {
	return {
		restrict: "E",
		replace: true,
		templateUrl: "templates/postinput.html",
		controller: function($scope, $element) {
			$scope.post = function(text) {
				alert(text);
			};
		},
		link: function(sc, el) {
			// post
			
			// show Camera modal
			el.find(".pic-btn").click(function(){
				$("#pic-modal").modal("show");
			});
		}
	};
})
//
.directive("picModal", ["readAsDataURL", function(readAsDataURL) {
	return {
		scope: true,
		require: "?^process",
		replace: true,
		restrict: "E",
		templateUrl: "templates/picmodal.html",
		link: function(sc, el, attrs, ctrl) {
			var btn   = el.find(".btn");
			var media = el.find(".media-holder");
			
			//sc.ispicture = true;
			
			function success(data) {
			    media.attr("src", data);
				ctrl.progress(100);
			}
			
			btn.on("change", function(e) {
				var f = e.target.files[0];
				readAsDataURL(f).then(success, ctrl.error, ctrl.progress);
			});
			/*
			sc.to = function(bool) {
				sc.ispicture = bool;
			};*/
		}
	};
}])
//
.directive("goUp", function() {
	return {
		replace: true,
		restrict: "E",
		template: "<button class='go-up-btn'><span class='glyphicon glyphicon-forward'></span></button>",
		link: function(sc, el) {
			el.click(function() {
				$(this).parent().prop("scrollTop", 0);
			});
		}
	};
})
//
.directive("alertLg", function() {
	return {
		scope: {
			title: "@"
		},
		replace: true,
		restrict: "E",
		transclude: true,
		templateUrl: "templates/alertlg.html"
	};
})
//
.directive("alertMd", function() {
	return {
		scope: {
			title: "@"
		},
		replace: true,
		restrict: "E",
		transclude: true,
		templateUrl: "templates/alertmd.html"
	};
})
//
.directive("process", function() {
	return {
		scope: { now: "@" },
		replace: true,
		restrict: "EA",
		transclude: true,
		templateUrl: "templates/process.html",
		controller: function($scope, $element) {
			this.progress = function(n) {
				$scope.$broadcast("process-data", n);
				if(n == 100) {
					$scope.$broadcast("process-success");
				}
			};
			
			this.error = function() {
				$scope.$broadcast("process-error");
			};
			
		},
		link: function(scope, element) {
			var pgbar = element.find(".progress-bar");
			
			scope.$on("process-data", function(e, perc) {
				pgbar.attr("aria-val", perc)
				 .attr("class", "progress-bar progress-bar-load")
				 .width(perc + "%")
				 .text(perc + "%");
			});
			
			scope.$on("process-success", function() {
				pgbar.attr("class", "progress-bar progress-bar-success");
				pgbar.text("loaded!");
			});
			
			scope.$on("proccess-error", function(e) {
				pgbar.attr("class", "progress-bar progress-bar-fail");
				pgbar.text("an error eccurred");
			});
			
			scope.$broadcast("process-data", scope.now || 0);
		}
	};
});
