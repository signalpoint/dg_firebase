dg_firebase.initializeMessaging = function() {

  return new Promise(function(ok, err) {

    // Retrieve Firebase Messaging object.
    const messaging = firebase.messaging();

    // @TODO change the location of the service worker to be within modules/contrib/dg_firebase/
    // @see https://stackoverflow.com/questions/41659970/firebase-change-the-location-of-the-service-worker

    navigator.serviceWorker.register('./firebase-messaging-sw.js').then(function(registration) {

      messaging.useServiceWorker(registration);

      // Request permission and get token.....

      // Request permission to receive notifications.
      messaging.requestPermission()
          .then(function() {
            //console.log('Notification permission granted.');

            // Get Instance ID token. Initially this makes a network call, once retrieved
            // subsequent calls to getToken will return from cache.
            messaging.getToken()
                .then(function(currentToken) {
                  if (currentToken) {

                    dg_firebase._messagingInitialized = true;

                    //console.log('token retrieved', currentToken);
                    ok(currentToken);

                    //sendTokenToServer(currentToken);
                    //updateUIForPushEnabled(currentToken);

                  }
                  else {
                    // Show permission request.
                    //console.log('No Instance ID token available. Request permission to generate one.');

                    // Show permission UI.
                    //updateUIForPushPermissionRequired();
                    //setTokenSentToServer(false);

                  }
                })
                .catch(function(err) {
                  console.log('An error occurred while retrieving token. ', err);

                  //showToken('Error retrieving Instance ID token. ', err);
                  //setTokenSentToServer(false);

                });
          })
          .catch(function(err) {
            console.log('Unable to get permission to notify.', err);
          });

      // Monitor token refresh. Callback fired if Instance ID token is updated.
      messaging.onTokenRefresh(function() {
        messaging.getToken()
            .then(function(refreshedToken) {
              //console.log('Token refreshed.', refreshedToken);

              // Indicate that the new Instance ID token has not yet been sent to the
              // app server.
              //setTokenSentToServer(false);
              // Send Instance ID token to app server.
              //sendTokenToServer(refreshedToken);
              // ...

            })
            .catch(function(err) {
              console.log('Unable to retrieve refreshed token ', err);
              //showToken('Unable to retrieve refreshed token ', err);
            });
      });

    });

  });

};
