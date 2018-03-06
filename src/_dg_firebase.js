dg.createModule('dg_firebase');

dg_firebase._initialized = false;

dg_firebase._messagingInitialized = false;
dg_firebase.messagingInitialized = function() {
  return dg_firebase._messagingInitialized;
};
