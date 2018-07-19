// const jwt = require('express-jwt');
// const jwtAuthz = require('express-jwt-authz');
// const jwks = require('jwks-rsa');

// // Authentication middleware. When used, the
// // Access Token must exist and be verified against
// // the Auth0 JSON Web Key Set
// const checkJwt = jwt({
//     // Dynamically provide a signing key
//     // based on the kid in the header and 
//     // the signing keys provided by the JWKS endpoint.
//     secret: jwksRsa.expressJwtSecret({
//     cache: true,
//     rateLimit: true,
//     jwksRequestsPerMinute: 5,
//     jwksUri: `https://kevpen.auth0.com/.well-known/jwks.json`
//     }),

//     // Validate the audience and the issuer.
//     audience: 'urn:auth0-authz-api',
//     issuer: `https://kevpen.auth0.com/`,
//     algorithms: ['RS256']
// });

// const checkScopesAdmin = jwtAuthz([ 'post:article' ]);


// app.post('/api/admin', checkJwt, checkScopesAdmin, function(req, res) {
//     res.json({ message: "Hello from an admin endpoint! You need to be authenticated and have a scope of write:messages to see this." });
// });
