//Profile Image Collection
ProfileImages = new FS.Collection("ProfileImages", {
  stores: [new FS.Store.GridFS("ProfileImages")]
});
//Permissions to display images
ProfileImages.allow({
  insert: function(userId,doc){
    return true;
  },
  update: function(userId,doc,fields,modifier){
    return true;
  },
  //display
  download: function(){
    return true;
  }
});


//Designate Image to User
//Store in Link
UserImages = new Mongo.Collection("UserImages");
Posts = new Mongo.Collection("posts");

Posts.attachSchema(new SimpleSchema({
  body: {
    type: String,
    max: 400,
  },
  userId:{
    type: String,
    autoValue: function(){return Meteor.userId()}
  },
  username: {
    type: String,
    autoValue: function(){return Meteor.users.findOne({_id:this.userId}).username}
  },
  createdAt: {
    type: Date,
    autoValue: function() {return new Date()}
  }
}));

Posts.allow({
  insert: function(userId,doc){
    return true;
  }
});
