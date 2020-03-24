# adonis-firebase-service-provider

JavaScript Firebase SDK wrapper for Adonis JS

## Install

```bash
npm install adonis-firebase-service-provider --save
```

## Usage

Create a file in `app/config/firebase.js` and paste the code below by replacing it's values where necessary:

```javascript
"use strict";

/*
 |--------------------------------------------------------------------------
 | Firebase
 |--------------------------------------------------------------------------
 |
 | Provide details of firebase project
 |
 */

module.exports = {
  /*
   |--------------------------------------------------------------------------
   | API key
   |--------------------------------------------------------------------------
   */
  apiKey: "",
  /*
   |--------------------------------------------------------------------------
   | Auth
   |--------------------------------------------------------------------------
   */
  authDomain: "",
  /*
   |--------------------------------------------------------------------------
   | Database
   |--------------------------------------------------------------------------
   */
  databaseURL: "",
  /*
   |--------------------------------------------------------------------------
   | Hosting
   |--------------------------------------------------------------------------
   */
  storageBucket: ""
};
```

Also you need to add the provider to AdonisJS at `app/bootstrap/app.js`:

```javascript
const providers = [
  ..."adonis-firebase-service-provider/providers/FirebaseProvider"
];
```

then you can simply call it from within controllers etc:

```javascript
const Firebase = use("Firebase");

let firebaseApp = Firebase.initialize();
```
