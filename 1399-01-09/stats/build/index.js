"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var MatchReader_1 = require("./MatchReader");
// Create an object that satisfies the 'DataReader' interface
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
// Creat an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
// let manUnitedWins = 0;
// for (let match of matchReader.matches) {
//     if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
//         manUnitedWins++;
//     }
//     else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin){
//         manUnitedWins++;
//     }
// };
// console.log(`Man United won ${manUnitedWins} games`);
