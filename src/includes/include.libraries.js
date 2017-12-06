/**
 * Implements hook_libraries().
 */
dg_firebase.libraries = function() {
  var libraries = {};
  libraries['firebase'] = {
    js: [ {
      _attributes: {
        src: 'https://www.gstatic.com/firebasejs/4.6.2/firebase.js'
      }
    } ]
  };
  libraries['app'] = {
    js: [ {
      _attributes: {
        src: 'https://www.gstatic.com/firebasejs/4.6.2/firebase-app.js'
      }
    } ]
  };
  libraries['messaging'] = {
    js: [ {
      _attributes: {
        src: 'https://www.gstatic.com/firebasejs/4.6.2/firebase-messaging.js'
      }
    } ]
  };
  return libraries;
};
