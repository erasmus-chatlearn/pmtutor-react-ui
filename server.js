const express = require('express');
const session = require('express-session');
const passport = require('passport');
const WebAppStrategy = require('ibmcloud-appid').WebAppStrategy;
const cors = require('cors');
const helmet = require('helmet');
const path = require("path");

require('dotenv').config();

let REDIRECT_URI = process.env.BASE_URL + ":" + process.env.PORT + "/appid/callback";

if ( process.env.CE_APP && process.env.CE_SUBDOMAIN && process.env.CE_DOMAIN ) {
    REDIRECT_URI = 'https://' + process.env.CE_APP + '.' + process.env.CE_SUBDOMAIN + '.' + process.env.CE_DOMAIN + '/appid/callback';
}

const app = express();

const corsOptions = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE"
}

/*const corsOptions = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}*/
app.use(cors(corsOptions));

app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            "default-src": ["'self'", "*.ibm.com", "https://*.appdomain.cloud"],
            "frame-ancestors": ["'none'"],
            "style-src": ["'self'", "*.ibm.com", "'unsafe-inline'"],
            "script-src-elem": ["*"],
            "script-src": ["'self'", "*.ibm.com"],
            "worker-src": ["'self'", "blob: *.ibm.com"],
            "img-src": ["*"],
            "frame-src": ["*"],
            "media-src": ["*"],
            "upgrade-insecure-requests": null
        }
    }
}));
app.use(session({
    secret: '123456',
    resave: false,
    saveUninitialized: false,
    cookie: {
        sameSite: 'lax'
    }
}));

app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser((user, cb) => cb(null, user));
passport.deserializeUser((user, cb) => cb(null, user));
passport.use(new WebAppStrategy({
    tenantId: process.env.IBM_APP_ID_TENANT_ID,
    clientId: process.env.IBM_APP_ID_CLIENT_ID,
    secret: process.env.IBM_APP_ID_SECRET,
    oauthServerUrl: process.env.IBM_OAUTH_SERVER_URL,
    redirectUri: REDIRECT_URI
}));

app.get('/appid/callback', passport.authenticate(WebAppStrategy.STRATEGY_NAME));

app.get('/appid/logout', function(req, res, next){
    req.logout(function(err) {
        if (err) { return next(err); }
        // res.redirect('/');
        res.json({"message":"logout completed"})
    });
});

app.get('/user', (req, res) => {
    if (req.user) {
        res.json(req.user);
    } else {
        res.status(401).send({'message':"unauthorized"});
    }
});


// Protect the entire application
// app.use(passport.authenticate(WebAppStrategy.STRATEGY_NAME));
app.get('/', passport.authenticate(WebAppStrategy.STRATEGY_NAME));

app.use(express.static(`${__dirname}/build`));


// Handles any requests that don't match the ones above
app.get("*", passport.authenticate(WebAppStrategy.STRATEGY_NAME), (req, res) => {
    res.sendFile(path.join(`${__dirname}/build/index.html`));
});

app.listen(process.env.PORT, () => {
    console.log('Listening on ' + process.env.BASE_URL + ":" + process.env.PORT);
});
