// myApp services Namespaces

angular.module("myApp.services", [])
//
.factory("readAs", ["$q", function($q) {
	return {
		dataURL: function(file) {
		    var deferred = $q.defer();
		
		    if(!window.FileReader) deferred.reject();
			
		    var reader = new FileReader();
		
		    reader.onload = function(e) {
		    	deferred.resolve(reader.result);
		    };
		
		    reader.onprogress = function(e) {
			    if(e.lengthComputable) {
			    	var percent = Math.round((e.loaded/e.total)*100);
				    if(percent < 95 && percent % 5 == 0) {
					    deferred.notify(percent);
				    }
			    }
		    };
		
	        reader.readAsDataURL(file);
		
		    return deferred.promise;
	    }
	};
}]);
