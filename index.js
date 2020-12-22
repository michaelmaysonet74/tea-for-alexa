const Alexa = require('alexa-sdk');
const handlers = require('./handlers');

exports.handler = (event, context, callback) => {
    const alexa = Alexa.handler(event, context, callback);
    alexa.appId = process.env.APP_ID;
    alexa.registerHandlers(...handlers);

    try {
        alexa.execute();
    } catch (err) {
        console.error('Caught Error: ' + err);
        alexa.emit(
            ':tell',
            `Sorry, I'm experiencing some technical difficulties at the moment. Please try again later.`
        );
    }
};
