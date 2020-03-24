"use strict";
const { ServiceProvider } = require("@adonisjs/fold");

class FirebaseProvider extends ServiceProvider {
  register() {
    this.app.singleton("Adonis/Addons/Firebase", () => {
      const Config = this.app.use("Adonis/Src/Config");
      return new (require("../src/Firebase"))(Config);
    });
  }
}

module.exports = FirebaseProvider;
