define(
["backbone", "underscore"],
function(Backbone, _) {
	
	var IndexView = Backbone.View.extend({
		el : $(".container"),
		initialize : function() {
			// doing what's you want to do
		},
		render: function(){
			$(this.el).append("<p>Index content with render view</p>");
		},
	});
	
	return IndexView;
});