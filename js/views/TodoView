//Filename: views
define([
	'jquery',
	'underscore',
	'backbone',
	'backbone_local'
	], function($, _, Backbone, local_storage){

		var TodoView = Backbone.View.extend({

      tagName: 'li',
      template: _.template($('#item-template').html()),
      render: function(){
        this.$el.html(this.template(this.model.toJSON()));
        this.input = this.$('.edit');
        return this; // enable chained calls
      },
      initialize: function(){
        this.model.on('change', this.render, this);
        this.model.on('destroy', this.remove, this);
//        setInterval(checkTime(), 1000);
        var self = this;
        self.checkTime();
        setInterval(function(){
          self.checkTime()
        }, 1000);
      },
      events: {
        'dblclick label' : 'edit',
        'keypress .edit' : 'updateOnEnter',
        'blur .edit' : 'close',
        'click .toggle' : 'toggleCompleted',
        'click .destroy': 'destroy',
      },
      edit: function(){
        this.$el.addClass('editing');
        this.input.focus();
      },
      close: function(){
        var value = this.input.val().trim();
        if(value) {
          this.model.save({title: value});
        }
        this.$el.removeClass('editing');
      },
      updateOnEnter: function(e){
        if(e.which == 13){
          this.close();
        }
      },
      toggleCompleted: function(){
        this.model.toggle();
      },
      destroy: function(){
        this.model.destroy();
      },
      checkTime: function() {
        var blargh = new Date(this.model.get('timestamp')).valueOf();
        var difference = (new Date()).valueOf() - blargh;
        if(difference > 5000)
        {
          this.$el.addClass('timed');
        }
      }

    });
	
	return TodoView;
});