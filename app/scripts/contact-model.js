var Contact = Backbone.Model.extend({
  idAttribute: "_id",

  defaults: {
    name: 'Steve Holt',
    phone: '777-574-1234',
    avatar: 'http://wac.450f.edgecastcdn.net/80450F/noisecreep.com/files/2011/07/wcar-476-71511.jpg',
    bio: 'I like to eat food.'
  }
});

var ContactsCollection = Backbone.Collection.extend({
  model: Contact,
  url: 'http://0.0.0.0:3000/collections/contacts'

})