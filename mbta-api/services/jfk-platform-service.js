const Platform = require('../models/platform');

const ashmontInbound = new Platform(70086, 'Ashmont Platform', 'Alewife');
const braintreeInbound = new Platform(70096, 'Braintree Platform', 'Alewife');

module.exports = {
    ashmontInbound,
    braintreeInbound,
};
