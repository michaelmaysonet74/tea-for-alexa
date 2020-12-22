const Alexa = require('alexa-sdk');
const { composePrediction } = require('./../../mbta-api/controllers/predictions-controller');
const {
    generateRandomConludingExp: randomConcludingExp,
} = require('./../../mbta-api/utils/util');

const nextTrainHandlers = {
    'NextTrainIntent': function() {
        if (
            Object.keys(this.attributes).length > 0
            && this.attributes.alreadyAsked
        ) {
            this.attributes.alreadyAsked = false;
            return composePrediction(1).then((msg) => {
                this.emit(
                    ':tell',
                    `${msg.replace('The next train to Alewife', 'The other one')} ${randomConcludingExp()}`
                );
            });
        }

        this.emit('TrainScheduleIntent');
    }
};

module.exports = nextTrainHandlers;
