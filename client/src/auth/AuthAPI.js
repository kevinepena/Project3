
var request = require("request");

var token;

var options = { method: 'POST',
  url: 'https://kevpen.auth0.com/oauth/token',
  headers: { 'content-type': 'application/json' },
  body: '{"client_id":"u1ITQz53O1H6lhCy6GEuBprbMHV0w2bo","client_secret":"PuYc0TMLsSbgAWqT4e1e62BqQVDLunQ1Msw7CrUEbRsAVD2JBRyPtZQuYMf5mBK9","audience":"urn:auth0-authz-api","grant_type":"client_credentials"}' };

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  console.log(body);
//   token = body;
});
// .then(req => {
//     console.log(req)
// });

// var options2 = { method: 'GET',
// url: 'https://kevpen.us.webtask.io/adf6e2f2b84784b57522e3b19dfc9201/api',
// headers: { authorization: `Bearer ${token}` } };

// request(options2, function (error, response, body) {
// if (error) throw new Error(error);
// console.log(body)
// });
