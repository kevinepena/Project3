// src/Auth/Auth.js

import auth0 from 'auth0-js';
import history from "../history";
import axios from 'axios';

const origin = window.location.origin;
export default class Auth {

  auth0 = new auth0.WebAuth({
    domain: 'kevpen.auth0.com',
    clientID: 'iuoMj520kIvPOE1ohvr2wgxaYJVrVVU4',
    redirectUri: 'http://localhost:3000/callback',
    audience: 'https://kevpen.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid profile roles'
  });

  userProfile;


  //binding them to make sure we can call them from elsewhere- provides context
  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getProfile = this.getProfile.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.getMetadata = this.getMetadata.bind(this);
    // this.isAdmin = this.isAdmin.bind(this);
    // this.getAuthProfile = this.getAuthProfile.bind(this)
  }



  getAccessToken() {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('No Access Token found');
    }
    return accessToken;
  }


  userHasScopes(scopes) {
    let _scopes = JSON.parse(localStorage.getItem("scopes")) || " ";
    const grantedScopes = _scopes.split(' ');
    return scopes.every(scope => grantedScopes.includes(scope));
  }

  getProfile(cb) {
    let accessToken = this.getAccessToken();
    this.auth0.client.userInfo(accessToken, (err, profile) => {

      if (profile) {
        this.userProfile = profile;
      }
      console.log(this.userProfile);

      cb(err, profile);
    });
  }

  getMetadata() {
    if (this.userProfile) {
      console.log(this.userProfile)
    }
  }




  // getAuthExtToken() {
  //   var request = require("request");

  //   var options = {
  //     method: 'POST',
  //     url: 'https://kevpen.auth0.com/oauth/token',
  //     headers: { 'content-type': 'application/json' },
  //     body: '{"client_id":"u1ITQz53O1H6lhCy6GEuBprbMHV0w2bo","client_secret":"PuYc0TMLsSbgAWqT4e1e62BqQVDLunQ1Msw7CrUEbRsAVD2JBRyPtZQuYMf5mBK9","audience":"urn:auth0-authz-api","grant_type":"client_credentials"}'
  //   };
  //   request(options, function (error, response, body) {
  //     if (error) throw new Error(error);
  //     console.log(body)
  //     axios.get("/api/admin", body)
  //     .then(res => console.log(res)).catch(err => console.log(err));
  //   });
  // }

  // getAuthProfile = () => {
  //   // var {access_token} = ;

  //   console.log(this.getAuthExtToken())
  // }


  // fisrtRule(user, context, callback) {
  //   var _ = require('lodash');
  //   var EXTENSION_URL = "https://kevpen.us.webtask.io/adf6e2f2b84784b57522e3b19dfc9201";

  //   var audience = '';
  //   audience = audience || (context.request && context.request.query && context.request.query.audience);
  //   if (audience === 'urn:auth0-authz-api') {
  //     return callback(new UnauthorizedError('no_end_users'));
  //   }

  //   audience = audience || (context.request && context.request.body && context.request.body.audience);
  //   if (audience === 'urn:auth0-authz-api') {
  //     return callback(new UnauthorizedError('no_end_users'));
  //   }

  //   getPolicy(user, context, function(err, res, data) {
  //     if (err) {
  //       console.log('Error from Authorization Extension:', err);
  //       return callback(new UnauthorizedError('Authorization Extension: ' + err.message));
  //     }

  //     if (res.statusCode !== 200) {
  //       console.log('Error from Authorization Extension:', res.body || res.statusCode);
  //       return callback(
  //         new UnauthorizedError('Authorization Extension: ' + ((res.body && (res.body.message || res.body) || res.statusCode)))
  //       );
  //     }

  //     // Update the user object.
  //     user.permissions = data.permissions;

  //     // Store this in the user profile (app_metadata).
  //     saveToMetadata(user, data.groups, data.roles, data.permissions, function(err) {
  //       return callback(err, user, context);
  //     });
  //   });

  //   // Get the policy for the user.
  //   function getPolicy(user, context, cb) {
  //     request.post({
  //       url: EXTENSION_URL + "/api/users/" + user.user_id + "/policy/" + context.clientID,
  //       headers: {
  //         "x-api-key": "8925b779b95f47c583a3af3b4a22da3f648f6cd8d0d2f2abb2068bff24b4b829"
  //       },
  //       json: {
  //         connectionName: context.connection || user.identities[0].connection,
  //         groups: user.groups
  //       },
  //       timeout: 5000
  //     }, cb);
  //   }

  //   // Store authorization data in the user profile so we can query it later.
  //   function saveToMetadata(user, groups, roles, permissions, cb) {
  //     user.app_metadata = user.app_metadata || {};
  //     user.app_metadata.authorization = {
  //       permissions: permissions
  //     };

  //     auth0.users.updateAppMetadata(user.user_id, user.app_metadata)
  //     .then(function() {
  //       cb();
  //     })
  //     .catch(function(err){
  //       cb(err);
  //     });
  //   }
  // }


  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        this.getProfile((err, profile) => {
          if (profile) {
            this.userProfile = profile;
          }
        })
        history.replace('/');
      } else if (err) {
        history.replace('/');
        console.log(err);
      }
    });
  }

  setSession(authResult) {
    // Set the time that the Access Token will expire at
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);

    const scopes = authResult.scope || this.requestedScopes || "";
    localStorage.setItem("scopes", JSON.stringify(scopes));

    // navigate to the home route
    history.replace('/');
  }

  login() {
    this.auth0.authorize();
  }

  logout() {
    // Clear Access Token and ID Token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('scopes');
    // navigate to the home route
    history.replace('/');
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // Access Token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

}