Template.profile.events({
  "submit .edit-profile": function(event){
    var file = $('#profileImage').get(0).files[0]
      if(file){
        fsFile = new FS.File(file);
        ProfileImages.insert(fsFile, function(err,result){
          if(err){
            throw new Meteor.error(err);
          } else {
              var imageLocation = '/cfs/files/ProfileImages/' + result._id;
              UserImages.insert({
                userId: Meteor.userId(),
                username: Meteor.user().username,
                image: imageLocation
              });
              //redirect to root
              Router.go('/');
          }
      });
    }
    return false;
  }
});
