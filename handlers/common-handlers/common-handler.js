const Alexa = require('alexa-sdk');

const {
    generateRandomConludingExp: randomConcludingExp,
} = require('./../../mbta-api/utils/util');

const commonHandlers = {
    'AMAZON.YesIntent': function() {
        this.emit('NextTrainIntent');
    },
    'AMAZON.NoIntent': function() {
        this.emit('GoodbyeIntent');
    },
    'GoodbyeIntent': function() {
        this.emit(':tell', `${randomConcludingExp()}`);
    }
};

module.exports = commonHandlers;
