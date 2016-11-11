angular.module("myApp.services", [])
//

.factory("readAsDataURL", ["$q", function($q) {
	return function(file) {
		var reader   = new FileReader(),
			deferred = $q.defer();
		
		reader.onload = function(e) {
			deferred.resolve(reader.result);
		};
		
		reader.onprogress = function(e) {
			if(evt.lengthComputable) {
				var percent = Math.round((e.loaded/e.total)*100);
				if(percent < 95 && percent % 5 == 0) {
					deferred.notify(percent);
				}
			}
		};
		
	    reader.readAsDataURL(file);
		
		return deferred.promise;
	};
}]);
