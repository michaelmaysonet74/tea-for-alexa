const Alexa = require('alexa-sdk');

const {
    generateRandomConludingExp: randomConcludingExp,
} = require('./../../mbta-api/utils/util');

const {
    getAllNearestTrainsPredictions,
} = require('../../mbta-api/controllers/predictions-controller');

const allNearestTrainsHandler = {
    'AllNearestTrainsIntent': async function () {
        const res = await getAllNearestTrainsPredictions()
        this.emit(':tell', `${res} ${randomConcludingExp()}`);
    },
};

module.exports = allNearestTrainsHandler;
