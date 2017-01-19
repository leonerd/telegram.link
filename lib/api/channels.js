// Dependencies:
var api = require('../api');
var utility = require('../utility');


function Channels(client) {
    this.client = client;
}

Channels.prototype.getFullChannel = function (channel, callback) {
    return utility.callService(api.service.channels.getFullChannel, this.client, this.client._channel, callback, arguments);
};

// Exports the class
module.exports = exports = Channels;
