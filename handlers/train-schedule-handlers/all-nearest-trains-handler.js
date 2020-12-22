const Alexa = require('alexa-sdk');

const {
    generateRandomConludingExp: randomConcludingExp,
} = require('./../../mbta-api/utils/util');

const {
    getAllNearestTrainsPredictions,
} = require('../../mbta-api/controllers/predictions-controller');

const allNearestTrainsHandler = {
    'AllNearestTrainsIntent': function() {
        getAllNearestTrainsPredictions().then((res) => {
            this.emit(':tell', `${res} ${randomConcludingExp()}`);
        });
    },
};

module.exports = allNearestTrainsHandler;
