const concludingExp = require('./../../mbta-api/services/concluding-expressions');

const generateRandomConludingExp = () =>
    concludingExp[
        Math.floor(Math.random() * concludingExp.length)
    ];

module.exports = {
    generateRandomConludingExp,
};
