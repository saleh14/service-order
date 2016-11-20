var Faker = require('Faker');

var fakeIDs = "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15".split(' ');

var costumerList = fakeIDs.map(function(id) {
    var cst = {
        id: id,
        card: Faker.Helpers.createCard()
    }
    return cst;
});
module.exports = costumerList;