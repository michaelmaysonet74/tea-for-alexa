const axios = require('axios');
const moment = require('moment');

const {
    ashmontInbound,
    braintreeInbound
} = require('./../services/jfk-platform-service');

function getPrediction(station, i) {
    const { id, name, destination } = station;
    const url = `https://api-v3.mbta.com/predictions?filter[stop]=${id}`;

    return axios.get(url)
        .then(({ data: { data: predictions } }) => {
            const arrival = moment(predictions[i].attributes['arrival_time']).fromNow();

            return {
                arrivalTime: moment(predictions[i].attributes['arrival_time']).valueOf(),
                text: `The next train to ${destination} arrives ${arrival} on the ${name}.`,
                arrival,
                name,
                destination,
            };

        })
        .catch(e => console.log(e));
}

const getAllPredictions = ({ id }) => {
    const url = `https://api-v3.mbta.com/predictions?filter[stop]=${id}`;

    return axios.get(url)
        .then(({ data: { data: predictions } }) => predictions)
        .catch(e => console.log(e));
};

const getAllNearestTrainsPredictions = () => {
    return new Promise((resolve, reject) => {
        let firstPrediction;
        let secondPrediction;

        getPrediction(ashmontInbound, 0).then((prediction) => {
            firstPrediction = prediction;
        })
            .then(() => {
                return getPrediction(braintreeInbound, 0)
                    .then((prediction) => {
                        secondPrediction = prediction;
                    });
            })
            .then(() => {
                const { arrival, name } = secondPrediction;
                const secondText = `And the other one arrives ${arrival} on the ${name}.`;
                resolve(`${firstPrediction.text} ${secondText}`);
            });
    });
};

function composePrediction(i) {
    return new Promise((resolve, reject) => {
        let firstPrediction;
        let secondPrediction;

        getPrediction(ashmontInbound, i).then((prediction) => {
            firstPrediction = prediction;
        })
            .then(() => {
                return getPrediction(braintreeInbound, i)
                    .then((prediction) => {
                        secondPrediction = prediction;
                    });
            })
            .then(() => {
                if (
                    firstPrediction.arrivalTime <= secondPrediction.arrivalTime
                    && !firstPrediction.text.includes('few seconds')
                ) {
                    return resolve(firstPrediction.text);
                }
                else if (!secondPrediction.text.includes('few seconds')) {
                    return resolve(secondPrediction.text);
                }

                reject(i + 1);
            });
    });
}

module.exports = {
    getPrediction,
    getAllNearestTrainsPredictions,
    composePrediction,
};
