const concludingExp = require('./../../mbta-api/services/concluding-expressions');

const generateRandomConludingExp = () => {
    return concludingExp[
        Math.floor(Math.random() * concludingExp.length)
    ];
};

module.exports = {
    generateRandomConludingExp,
};
