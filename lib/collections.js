//Profile Image Collection
ProfileImages = new FS.Collection("ProfileImages", {
  stores: [new FS.Store.GridFS("ProfileImages")]
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
    type: String
  },
  username: {
    type: String
  },
  createdAt: {
    type: Date
  }
}));
