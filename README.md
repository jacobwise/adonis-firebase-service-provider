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

const Env = use("Env");

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
   | Firebase Admin credentials key file
   |--------------------------------------------------------------------------
   */
  credential: {
    type: Env.get("FIREBASE_CREDENTIAL_TYPE"),
    project_id: Env.get("FIREBASE_CREDENTIAL_PROJECT_ID"),
    private_key_id: Env.get("FIREBASE_CREDENTIAL_PRIVATE_KEY_ID"),
    private_key: Env.get("FIREBASE_CREDENTIAL_PRIVATE_KEY"),
    client_email: Env.get("FIREBASE_CREDENTIAL_CLIENT_EMAIL"),
    client_id: Env.get("FIREBASE_CREDENTIAL_CLIENT_ID"),
    auth_uri: Env.get("FIREBASE_CREDENTIAL_AUTH_URI"),
    token_uri: Env.get("FIREBASE_CREDENTIAL_TOKEN_URI"),
    auth_provider_x509_cert_url: Env.get("FIREBASE_CREDENTIAL_AUTH_PROVIDER"),
    client_x509_cert_url: Env.get("FIREBASE_CREDENTIAL_CLIENT")
  },
  /*
   |--------------------------------------------------------------------------
   | API key
   |--------------------------------------------------------------------------
   */
  apiKey: Env.get("FIREBASE_API_KEY"),
  /*
   |--------------------------------------------------------------------------
   | Auth
   |--------------------------------------------------------------------------
   */
  authDomain: Env.get("FIREBASE_AUTH_DOMAIN"),
  /*
   |--------------------------------------------------------------------------
   | Database
   |--------------------------------------------------------------------------
   */
  databaseURL: Env.get("FIREBASE_DATABASE_URL"),
  /*
   |--------------------------------------------------------------------------
   | Hosting
   |--------------------------------------------------------------------------
   */
  storageBucket: Env.get("FIREBASE_STORAGE_BUCKET")
};
```

Add the following to your `.env` file

```
FIREBASE_CREDENTIAL_TYPE=
FIREBASE_CREDENTIAL_PROJECT_ID=
FIREBASE_CREDENTIAL_PRIVATE_KEY_ID=
FIREBASE_CREDENTIAL_PRIVATE_KEY=
FIREBASE_CREDENTIAL_CLIENT_EMAIL=
FIREBASE_CREDENTIAL_CLIENT_ID=
FIREBASE_CREDENTIAL_AUTH_URI=
FIREBASE_CREDENTIAL_TOKEN_URI=
FIREBASE_CREDENTIAL_AUTH_PROVIDER=
FIREBASE_CREDENTIAL_CLIENT=
FIREBASE_API_KEY=
FIREBASE_AUTH_DOMAIN=
FIREBASE_DATABASE_URL=
FIREBASE_STORAGE_BUCKET=
```

Also you need to add the provider to AdonisJS at `app/bootstrap/app.js`:

```javascript
const providers = [
  ..."adonis-firebase-service-provider/providers/FirebaseProvider"
];
```

then you can simply call it from within controllers etc:

```javascript
const firebase = use("Firebase");
```
