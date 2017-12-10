dg_firebase.initializeApp = function() {

  // Initialize the Firebase application.
  // @see https://firebase.google.com/docs/cloud-messaging/js/client
  var config = {
    apiKey: dg_google.apiKey('firebase'),
    messagingSenderId: dg_google.getConfig('firebase', 'messagingSenderId')
    //authDomain: "<PROJECT_ID>.firebaseapp.com",
    //databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    //storageBucket: "<BUCKET>.appspot.com",
  };
  firebase.initializeApp(config);

};