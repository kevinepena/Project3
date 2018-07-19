const axios = require("axios");
const router = require("express").Router();
const jwt = require('express-jwt');
const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');
const request = require("request");





// Authentication middleware. When used, the
// Access Token must exist and be verified against
// the Auth0 JSON Web Key Set
const checkJwt = jwt({
    // Dynamically provide a signing key
    // based on the kid in the header and 
    // the signing keys provided by the JWKS endpoint.
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
    }),

    // Validate the audience and the issuer.
    audience: 'urn:auth0-authz-api',
    issuer: `${process.env.AUTH0_DOMAIN}`,
    algorithms: ['RS256']
});

// const checkJwt = jwt({
//     secret: jwksRsa.expressJwtSecret({
//         cache: true,
//         rateLimit: true,
//         jwksRequestsPerMinute: 5,
//         jwksUri: `${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
//     }),
//     audience: 'my-blog',
//     issuer: `${process.env.AUTH0_DOMAIN}/`,
//     algorithms: ['RS256']
// });

// const checkWriteBlog = jwtAuthz(['write:blog']);


// const checkJwt = jwt({
//     // Dynamically provide a signing key based on the kid in the header and the singing keys provided by the JWKS endpoint.
//     secret: jwksRsa.expressJwtSecret({
//       cache: true,
//       rateLimit: true,
//       jwksRequestsPerMinute: 5,
//       jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
//     }),

//     // Validate the audience and the issuer.
//     audience: process.env.AUTH0_AUDIENCE,
//     issuer: `https://${process.env.AUTH0_DOMAIN}/`,
//     algorithms: ['RS256']
//   });


const checkScopesAdmin = jwtAuthz(['post:article']);

// Matches with "/api/admin"
router
    .route("/")
    .get(checkJwt, function (req, res) {
        console.log(req.body)
        var options = {
            method: 'GET',
            url: 'http://path_to_your_api/',
            headers: { authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik5qa3dPREZHTURJMk9UYzROREZHT1RJM01qYzBPVEEyTVRNME5FTXhSRU5HUlVJek5rRkdOQSJ9.eyJpc3MiOiJodHRwczovL2tldnBlbi5hdXRoMC5jb20vIiwic3ViIjoidTFJVFF6NTNPMUg2bGhDeTZHRXVCcHJiTUhWMHcyYm9AY2xpZW50cyIsImF1ZCI6InVybjphdXRoMC1hdXRoei1hcGkiLCJpYXQiOjE1MzE4NzQyNjAsImV4cCI6MTUzMTk2MDY2MCwiYXpwIjoidTFJVFF6NTNPMUg2bGhDeTZHRXVCcHJiTUhWMHcyYm8iLCJzY29wZSI6InJlYWQ6dXNlcnMgcmVhZDphcHBsaWNhdGlvbnMgcmVhZDpjb25uZWN0aW9ucyByZWFkOmNvbmZpZ3VyYXRpb24gdXBkYXRlOmNvbmZpZ3VyYXRpb24gcmVhZDpncm91cHMgY3JlYXRlOmdyb3VwcyB1cGRhdGU6Z3JvdXBzIGRlbGV0ZTpncm91cHMgcmVhZDpyb2xlcyBjcmVhdGU6cm9sZXMgdXBkYXRlOnJvbGVzIGRlbGV0ZTpyb2xlcyByZWFkOnBlcm1pc3Npb25zIGNyZWF0ZTpwZXJtaXNzaW9ucyB1cGRhdGU6cGVybWlzc2lvbnMgZGVsZXRlOnBlcm1pc3Npb25zIHJlYWQ6cmVzb3VyY2Utc2VydmVyIGNyZWF0ZTpyZXNvdXJjZS1zZXJ2ZXIgdXBkYXRlOnJlc291cmNlLXNlcnZlciBkZWxldGU6cmVzb3VyY2Utc2VydmVyIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.KfJ2K4WZIVBiozRndJCfMWtkqF7ElEPCkLo04IZd4qpOHoH8IegwV_OIXk8060Gar4sDSfn-7hkOpCgcHcUT8dM6qJTldxru6UKKBhDwhDInuzx68IxQm6S68zD6md4bRMSj1n0z3BHdLwL2o9Vt-yeH1Ezm6rDjeIaMaisiHBqQAnwGIpnmoSETNfoaXKMheI4IPBa9a-Fl27FuiGtwDxtfDLMT-YyeHHwtGEwJ-M2LuQ0VVXNkBpRbIA0mcSvLXHn8bNkv2fylCwQix-WvBX_BPAEfM9vq9XbMxW0PpjPt6DJ6JZiB41dVV_ngXEUKE5EwHdmkHfOnc_kxmPMhwA' }
        };
        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            console.log(body);
            return body;
        }).then(res => console.log(res)).catch(err => console.log(err));
    })
    .post(checkJwt, function (req, res) {
        console.log("getting api/admin")
            .then(dbModel => console.log(dbModel))
            .catch(err => res.status(422).json(err));
    });


// router
//     .route("/")
//     .get(articleController.findAll)
//     .post(articleController.create);

module.exports = router;
