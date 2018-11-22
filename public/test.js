const test = require('tape');
const matchedPlaces = require('./places.js');
const countries = [{"name": "Palestine"},
{"name": "Jordan"},
{"name": "Syria"},
{"name": "Lebanon"},
{"name": "Panama"}
];


test('tape working', function (t) {
    t.equal("", "", "tape is working");
    t.end();
});

test("returning matches", function (t) {
    const actual = matchedPlaces.findMatch(countries, "P");
    const expected = ["Palestine","Panama"];
    t.deepEqual(actual, expected, "Palestine and Panama should be listed!");
    t.end();
});

test("testing case sensitive", function (t) {
    const actual = matchedPlaces.findMatch(countries, "PA");
    const expected = ["Palestine","Panama"];
    t.deepEqual(actual, expected, "Palestine and Panama should be listed!");
    t.end();
});

test("testing if input is empty", function (t) {
    const actual = matchedPlaces.findMatch(countries, "");
    const expected = [];
    t.deepEqual(actual, expected, "empty array expected");
    t.end();
});
