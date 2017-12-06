# dg_google_firebase

The Google Firebase Module for DrupalGap 8.

## settings.js

Place this inside the `dg_google` JSON config object in your `settings.js` file with the API key(s) you retrieve from
your project's Google API Console:

```
dg.settings.dg_google = {

  /* ... */

  firebase: {
    apiKey: {
      web: '',
      android: '',
      ios: ''
    }
  },

  /* ... */
};
```

## Usage

Use the `_attached` variable on any widget to have Google Firebase loaded and ready for your widget's render time:

```
var html = dg.render({
    _type: 'foo',
    _attached: {
        dg_google: ['firebase']
    }
});
```
