var fs = require('fs');

var update = function(newLine) {
    fs.appendFileSync('costumer.txt', newLine, function(err) { console.log('error:', err) });
}

module.exports = update;