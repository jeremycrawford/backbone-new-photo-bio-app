console.log('You are special!!!')

$(document).ready(function(){

  // start the app
  window.contacts = new ContactsCollection( )

  contacts.fetch({
    success: function(){
      contacts.each(function(contact){
        new ListView({model: contact});
      })
      
    },
    error: function(){
      console.log('WHOAAAAAAAAAA theres a problem')
    }
  })

});

// When you click on the save button you grab the values of the input items and stores them in a variable
// Any data that you are trying to use, it has to stored in a variable

$('.add-album-button').click(function(){

  var newUserInfo = new Contact()

  if($('.userName').val()) {newUserInfo.set({name: $('.userName').val()})}
  if($('.bio').val()) {newUserInfo.set({bio: $('.bio').val()})}  
  if($('.album-artwork').val()) {newUserInfo.set({avatar: $('.album-artwork').val()})}  

var freshModel = contacts.add(newUserInfo)  // You read this line backwards

new ListView({model: freshModel}); // This is a new model that you are running through to your list view

freshModel.save()

})


window.deleteFunction = function(){
contacts.each(function(dataStuff){
console.log(dataStuff)
$.ajax({
type: 'delete',
url: 'http://0.0.0.0:3000/collections/contacts/'+dataStuff.get("_id")
})
})
};

$('.delete-button').click(function(){
  deleteFunction()
})
