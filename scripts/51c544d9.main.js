var Contact=Backbone.Model.extend({idAttribute:"_id",defaults:{name:"Steve Holt",phone:"777-574-1234",avatar:"http://wac.450f.edgecastcdn.net/80450F/noisecreep.com/files/2011/07/wcar-476-71511.jpg",bio:"I like to eat food."}}),ContactsCollection=Backbone.Collection.extend({model:Contact,url:"http://0.0.0.0:3000/collections/contacts"});console.log("my list View is located");var ListView=Backbone.View.extend({className:"list-item col-md-3",createTemplate:_.template($("#list-item-template").text()),events:{click:"addMainView",click:"remove"},initialize:function(){$(".js-contact-list").prepend(this.el),this.render()},render:function(){var a=this.createTemplate(this.model.attributes);this.$el.html(a)},addMainView:function(){new MainView({model:this.model}),$("body").animate({scrollTop:$(".jumbotron").offset().top-50},"slow"),console.log("executed scrollToElement")}}),MainView=Backbone.View.extend({className:"jumbo-item",events:{"click .main-photo":"remove"},jumboTemplate:_.template($("#jumbo-item-template").text()),initialize:function(){$(".jumbotron-js").html(this.el),this.render()},render:function(){var a=this.jumboTemplate(this.model.attributes);this.$el.html(a)}});console.log("You are special!!!"),$(document).ready(function(){window.contacts=new ContactsCollection,contacts.fetch({success:function(){contacts.each(function(a){new ListView({model:a})})},error:function(){console.log("WHOAAAAAAAAAA theres a problem")}})}),$(".add-album-button").click(function(){var a=new Contact;$(".userName").val()&&a.set({name:$(".userName").val()}),$(".bio").val()&&a.set({bio:$(".bio").val()}),$(".album-artwork").val()&&a.set({avatar:$(".album-artwork").val()});var b=contacts.add(a);new ListView({model:b}),b.save()}),window.deleteFunction=function(){contacts.each(function(a){console.log(a),$.ajax({type:"delete",url:"http://0.0.0.0:3000/collections/contacts/"+a.get("_id")})})},$(".delete-button").click(function(){deleteFunction()});