const fs = require("fs");
const path = require("path");

// import .env variables
if (fs.existsSync(path.join(__dirname, ".env"))) {
  require("dotenv-safe").config({
    path: path.join(__dirname, ".env"),
  });
}

module.exports = {
    APP_URL: process.env.APP_URL,
    appIdConfig: {
        oauthServerUrl: process.env.IBM_OAUTH_SERVER_URL,
        secret: process.env.IBM_APP_ID_SECRET,
        tenantId: process.env.IBM_APP_ID_TENANT_ID,
        clientId: process.env.IBM_APP_ID_CLIENT_ID
    }
};