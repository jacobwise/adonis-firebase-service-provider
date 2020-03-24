"use strict";
const { ServiceProvider } = require("@adonisjs/fold");
const Firebase = require("firebase");

class FirebaseProvider extends ServiceProvider {
  register() {
    this.app.singleton("Adonis/Addons/Firebase", () => {
      const Config = this.app.use("Adonis/Src/Config");
      return new Firebase(Config);
    });

    this.app.alias("Adonis/Addons/Firebase", "Firebase");
  }
}

module.exports = FirebaseProvider;
