angular.module("myApp.directives", [])
//
.directive("mainMenu", function() {
	return {
		scope: { wanted: "=" },
		//priority: 100,
		templateUrl: "templates/mainmenu.html",
		restrict: "E",
		replace: true
	};
})
//
.directive("collapseBox", function() {
	return {
		scope: { display: "@" },
		replace: true,
		transclude: true,
		templateUrl: "templates/collapsebox.html"
	};
})
//
.directive("postInput", function() {
	return {
		restrict: "E",
		replace: true,
		templateUrl: function(el, attrs) {
			return "templates/postinput.html";
		}
	};
})
//
.directive("picModal", 
["$parse", "readAs", function($parse, readAs) {
	return {
		scope: { myfileObj: "=" },
		require: "?^process",
		replace: true,
		restrict: "E",
		templateUrl: "templates/picmodal.html",
		link: function(scope, el, attrs, ctrl) {
			var btn = el.find(".pic-modal-body .btn");
			
			function success(data) {
				ctrl.progress(100);
				
				scope.myfileURL = data;
			}
			
			btn.on("change", function(e) {
				var file = e.target.files[0];
				readAs.dataURL(file).then(success, ctrl.error, ctrl.progress);
				
				$parse("myfileObj").assign(scope, file);
				
				scope.$apply();
			});
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
				el.parent().prop("scrollTop", 0);
			});
		}
	};
})
//
.directive("alertLg", function() {
	return {
		scope: { title: "@"},
		replace: true,
		restrict: "E",
		transclude: true,
		templateUrl: "templates/alertlg.html"
	};
})
//
.directive("alertMd", function() {
	return {
		scope: { title: "@" },
		replace: true,
		restrict: "E",
		transclude: true,
		templateUrl: "templates/alertmd.html"
	};
})
//
.directive("process", function() {
	return {
		scope: {},
		restrict: "EA",
		transclude: true,
		templateUrl: "templates/process.html",
		controller: function($scope) {
			this.progress = function(n) {
				$scope.now = n;
				if(n == 100) {
					$scope.now = n;
				}
			};
			
			this.error = function() {
				$scope.now = 0;
			};
			
		}
	};
});
