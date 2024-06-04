const passport = require("passport");
const { WebAppStrategy } = require("ibmcloud-appid");

const { appIdConfig, APP_URL } = require("../../config/vars");

module.exports.webAppStrategy = new WebAppStrategy({
    ...appIdConfig,
    redirectUri: APP_URL + "/appid/callback"
});

passport.serializeUser(function(user, cb) {
    cb(null, user);
});

  passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});