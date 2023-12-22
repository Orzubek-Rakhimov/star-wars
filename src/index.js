const starwarNames = require('../starwars-names.json');
const uniqueRandomArray = require('unique-random-array');



module.exports = {
    all: starwarNames,
    random: uniqueRandomArray(starwarNames)
}

