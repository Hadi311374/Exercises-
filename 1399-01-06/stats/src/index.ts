import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';
import { MatchReader } from './MatchReader';

// const reader = new CsvFileReader('football.csv');
const reader = new MatchReader('football.csv');
 
reader.read();
 
// enum - enumeration
// enum MatchResult {
//     HomeWin = 'H',
//     AwayWin = 'A',
//     Draw = 'D' 
// };

let manUnitedWins = 0;

console.log(reader.data[0])

for (let match of reader.data) {
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin){
        manUnitedWins++;
    }
}

console.log(`Man United won ${manUnitedWins} games`);