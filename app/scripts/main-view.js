var MainView = Backbone.View.extend({

  className: 'jumbo-item',

  jumboTemplate: _.template($('#jumbo-item-template').text()),

  initialize: function(){
    $('.jumbotron-js').html( this.el );

    this.render();
  },

  render: function(){
    var jumboRenderedTemplate = this.jumboTemplate( this.model.attributes );

    this.$el.html( jumboRenderedTemplate );
  }

});