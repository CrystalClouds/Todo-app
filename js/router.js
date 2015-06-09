 //Filename: router.js

define([
  'jquery',
  'underscore',
  'backbone',
  'backbone_local'
  ], function($, _, Backbone, local_storage){
      var AppRouter = Backbone.Router.extend({
      routes: {
        '*filter' : 'setFilter'
      },
      setFilter: function(params){
        console.log('app.router.params = ' + params);
        window.filter = params.trim() || '';
        app.todoList.trigger('reset');
      }
    });

    var initialize = function(){
      var app_router = new AppRouter();
      Backbone.history.start();
    };
    return{
      initialize: initialize
    };
});