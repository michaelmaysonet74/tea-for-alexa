const axios = require('axios');

const getStops = async (station = '') => {
    const url = 'https://api-v3.mbta.com/stops';

    try {
        let {
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
    }
    catch (e) {
        throw e;
    }
};

module.exports = {
    getStops
};