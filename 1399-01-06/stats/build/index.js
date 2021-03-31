"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchResult_1 = require("./MatchResult");
var MatchReader_1 = require("./MatchReader");
// const reader = new CsvFileReader('football.csv');
var reader = new MatchReader_1.MatchReader('football.csv');
reader.read();
// enum - enumeration
// enum MatchResult {
//     HomeWin = 'H',
//     AwayWin = 'A',
//     Draw = 'D' 
// };
var manUnitedWins = 0;
console.log(reader.data[0]);
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Man United won " + manUnitedWins + " games");