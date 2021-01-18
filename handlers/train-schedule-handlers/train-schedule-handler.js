const Alexa = require('alexa-sdk');
const { composePrediction } = require('./../../mbta-api/controllers/predictions-controller');

const trainScheduleHandlers = {
    'LaunchRequest': function () {
        this.emit('TrainScheduleIntent');
    },
    'TrainScheduleIntent': async function () {
        if (this.attributes.attempt === undefined) {
            this.attributes.attempt = 0;
        }

        // Ask for the nearest train => 0 index
        try {
            const msg = await composePrediction(this.attributes.attempt);
            this.attributes.alreadyArked = true;
            this.emit(':ask', `${msg} Do you need to know about the next one?`);
        }
        catch (retry) {
            this.attributes.attempt = retry;
            this.emit('TrainScheduleIntent');
        }
    },
};

module.exports = trainScheduleHandlers;
