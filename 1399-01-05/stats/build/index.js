"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import fs from 'fs';
var CsvFileReader_1 = require("./CsvFileReader");
// const matches = fs.readFileSync('football.csv', {
//     encoding: 'utf-8'
// })
// .split('\n')
// .map(
//     (row: string): string[] => {
//     return row.split(',');
//     }
// );
// const homeWin = 'H';
// const awayWin = 'A';
// const draw = 'D';
var reader = new CsvFileReader_1.CsvFileReader('football.csv');
reader.read();
// enum - enumeration
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
;
var manUnitedWins = 0;
// for (let match of matches) {
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[4] === 'Man United' && match[7] === MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[5] === 'Man United' && match[7] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Man United won " + manUnitedWins + " games");
