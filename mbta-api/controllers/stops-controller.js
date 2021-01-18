const axios = require('axios');

const getStops = async (station = '') => {
    const url = 'https://api-v3.mbta.com/stops';

    const {
        data: {
            data: stops
        }
    } = await axios.get(url);

    if (station !== '') {
        return stops.filter(
            stop => stop.attributes.name.includes(station)
        );
    }

    return stops;
};

module.exports = {
    getStops
};
