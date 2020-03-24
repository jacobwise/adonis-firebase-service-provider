"use strict";
const { ServiceProvider } = require("@adonisjs/fold");
const firebaseAdmin = require("firebase-admin");

class FirebaseProvider extends ServiceProvider {
  register() {
    this.app.singleton("Adonis/Addons/FirebaseAdmin", () => {
      const Config = this.app.use("Adonis/Src/Config");
      const credential = Config.get("firebase.credential");
      const config = {
        credential: firebaseAdmin.credential.cert(credential),
        databaseURL: Config.get("firebase.databaseURL")
      };
      return firebaseAdmin.initializeApp(config);
    });

    this.app.alias("Adonis/Addons/FirebaseAdmin", "FirebaseAdmin");
  }
}

module.exports = FirebaseProvider;
