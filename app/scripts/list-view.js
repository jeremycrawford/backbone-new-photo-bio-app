console.log('my list View is located')

var ListView = Backbone.View.extend({
  
  className: 'list-item col-md-3',

  createTemplate: _.template($('#list-item-template').text()),

  events: {
    "click": "addMainView"
  },

  initialize: function(){
    $('.js-contact-list').prepend( this.el );

    this.render();
  },

  render: function(){
    var renderedTemplate = this.createTemplate( this.model.attributes );

    this.$el.html( renderedTemplate );
  },

  addMainView: function(){
    new MainView( {model: this.model } );

    $( "body" ).animate({scrollTop: $(".jumbotron").offset().top - 50 }, "slow");
    console.log('executed scrollToElement');
  }

});