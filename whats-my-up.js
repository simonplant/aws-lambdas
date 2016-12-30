// Needs and API gateway interface with 
// application/json integration request 
// {"myip": "$context.identity.sourceIp"}

exports.handler = (event, context, callback) => {
  callback(null, event.myip);
};
