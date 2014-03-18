console.log('my list View is located')

var ListView = Backbone.View.extend({
  
  className: 'list-item col-md-3',

  createTemplate: _.template($('#list-item-template').text()),

  events: {
    "click": "addMainView",
    "click .delete-button": "deleteFunction"
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
  },


  deleteFunction: function(){
    this.el.remove();
    this.model.destroy();
  }

});





// window.deleteFunction = function(){
// contacts.each(function(dataStuff){
// console.log(dataStuff)
// $.ajax({
// type: 'delete',
// url: 'http://0.0.0.0:3000/collections/contacts/'+dataStuff.get("_id")
// })
// })
// };

// $('.delete-button').click(function(){
//   deleteFunction()
// })