"use strict";
const FirebaseSDK = require("firebase");

class Firebase {
  constructor(Config) {
    this.Config = Config;
    this._firebase = null;
  }

  initialize() {
    /**
     * If there is an instance of firebase already, then return it
     */
    if (this._firebase) {
      return this._firebase;
    }

    /**
     * Read configuration using Config
     * provider
     */
    const config = this.Config.get(`firebase`);

    /**
     * Create a new queue instance and save it's
     * reference
     */
    this._firebase = FirebaseSDK.initializeApp(config);

    /**
     * Return the instance back
     */
    return this._firebase;
  }
}

module.exports = new Firebase();
