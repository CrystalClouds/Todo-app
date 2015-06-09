//Filename: main.js

require.config({
	paths: {
		jquery: 'ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js',
		underscore: 'cdnjs.cloudflare.com/ajax/libs/underscore.js/1.3.3/underscore-min.js" type="text/javascript',
		backbone: 'cdnjs.cloudflare.com/ajax/libs/backbone.js/0.9.2/backbone-min.js" type="text/javascript',
		backbone_local: 'cdnjs.cloudflare.com/ajax/libs/backbone-localstorage.js/1.0/backbone.localStorage-min.js" type="text/javascript'
	}
});

require(
	[ 'app', ],
	function(App){
		App.initialize();
});