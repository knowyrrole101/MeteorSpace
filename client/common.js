Meteor.subscribe("posts");
Meteor.subscribe("ProfileImages");
Meteor.subscribe("UserImages");

Meteor.startup(function () {
  AccountsEntry.config({
    homeRoute: '/'   ,                 // mandatory - path to redirect to after sign-out
    dashboardRoute: '/', // mandatory - path to redirect to after successful sign-in
    passwordSignupFields: 'USERNAME_AND_EMAIL',
    profileRoute: 'profile',
    showOtherLoginServices: true,      // Set to false to hide oauth login buttons on the signin/signup pages. Useful if you are using something like accounts-meld or want to oauth for api access
    fluidLayout: false           ,    // Set to true to use bootstrap3 container-fluid and row-fluid classes.
    useContainer: true             ,  // Set to false to use an unstyled "accounts-entry-container" class intead of a bootstrap3 "container" or "container-fluid" class.
    signInAfterRegistration: true ,   // Set to false to avoid prevent users being automatically signed up uon sign-up e.g. to wait until their email has been verified.
    // emailVerificationPendingRoute: '/verification-pending', // The route to which users should be directed after sign-up. Only relevant if signInAfterRegistration is false.
    showSpinner: true            ,    // Show the spinner when the client is talking to the server (spin.js)
    spinnerOptions: { color: "#000", top: "80%" } // options as per [spin.js](http://fgnass.github.io/spin.js/)
  });

  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL'
  });
});

//Image helper
Template.registerHelper('getProfileImg', function(userId){
  var imgURL = UserImages.findOne({userId: userId}).image;
  return imgURL;
});
