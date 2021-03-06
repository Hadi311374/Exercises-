// import fs from 'fs';
import { CsvFileReader } from './CsvFileReader';

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

const reader = new CsvFileReader('football.csv');
reader.read();

// enum - enumeration
enum MatchResult {
    HomeWin = 'H',
    AwayWin = 'A',
    Draw = 'D' 
};

let manUnitedWins = 0;

// for (let match of matches) {
for (let match of reader.data) {
    if (match[4] === 'Man United' && match[7] === MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[5] === 'Man United' && match[7] === MatchResult.AwayWin){
        manUnitedWins++;
    }
}

console.log(`Man United won ${manUnitedWins} games`);