const Platform = require('../models/platform');

const ashmontInbound = Platform({
    id: 70086,
    name: 'Ashmont Platform',
    destination: 'Alewife',
});

const braintreeInbound = Platform({
    id: 70096,
    name: 'Braintree Platform',
    destination: 'Alewife',
});

module.exports = {
    ashmontInbound,
    braintreeInbound,
};
