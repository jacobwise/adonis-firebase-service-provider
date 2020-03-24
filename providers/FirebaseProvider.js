"use strict";
const { ServiceProvider } = require("@adonisjs/fold");
const firebase = require("firebase");

class FirebaseProvider extends ServiceProvider {
  register() {
    this.app.singleton("Adonis/Addons/Firebase", () => {
      const Config = this.app.use("Adonis/Src/Config");
      return firebase.initializeApp(Config);
    });

    this.app.alias("Adonis/Addons/Firebase", "Firebase");
  }
}

module.exports = FirebaseProvider;
