var server = require('../../libs/coap-broker');

var onmessage = function(message) {
    // Parse strings to JSON object.
    var obj = JSON.parse(message.data);
    // Print strings.
    console.log('<DATA> ' + message.data);
};

server.start({
    onmessage: onmessage,
});
