define(
["backbone"], 
function(Backbone) {
	
	var AppRouter = Backbone.Router.extend({
		routes : {
			'*actions' : 'defaultAction',
		}
	});
	
	var initialize = function() {
		var router = new AppRouter();
		
		router.on('route:defaultAction', function() {
			$(".text-center").append("<p>Index route has been called</p>");
		});
		
		Backbone.history.start();
	};
	
	return {
		initialize : initialize
	};
	
});