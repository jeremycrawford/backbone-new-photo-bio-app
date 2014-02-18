var Contact = Backbone.Model.extend({
  defaults: {
    name: 'Steve Holt',
    phone: '777-574-1234',
    avatar: 'http://4.bp.blogspot.com/-tNHx8Gt5d1c/T2aHYdEWReI/AAAAAAAAFus/i_Zg63NK93g/s400/6.jpg',
    bio: 'I like to eat food.'
  }
});

var ContactsCollection = Backbone.Collection.extend({
  model: Contact
})