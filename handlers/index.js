const allNearestTrainsHandler = require('./train-schedule-handlers/all-nearest-trains-handler');
const commonHandler = require('./common-handlers/common-handler');
const nextTrainHandler = require('./train-schedule-handlers/next-train-handler');
const trainScheduleHandler = require('./train-schedule-handlers/train-schedule-handler');

module.exports = [
    allNearestTrainsHandler,
    commonHandler,
    nextTrainHandler,
    trainScheduleHandler,
];
