// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
	production: false,
	firebaseConfig : {
    apiKey: "AIzaSyDZGVAE7hJvx7sy9_dwiSk7r6-kBFVk-Hg",
    authDomain: "cryptomon-app.firebaseapp.com",
    databaseURL: "https://cryptomon-app.firebaseio.com",
    projectId: "cryptomon-app",
    storageBucket: "cryptomon-app.appspot.com",
    messagingSenderId: "304599221815"
  }

};
