import fs from 'fs';
// import { dateStringToDate } from './utils';
// import { MatchResult } from './MatchResult';

// type MatchData = [Date, string, string, number, number, MatchResult, string];

export abstract class CsvFileReader<T> {
    // data: string[][] = [];
    // data: MatchData[] = [];
    data: T[] = [];

    constructor(public fileName: string) {}
    
    abstract mapRow(row: string[]): T;

    read(): void {
        this.data =  fs.readFileSync(this.fileName, {
            encoding: 'utf-8'
        })
        .split('\n')
        .map(
            (row: string): string[] => {
            return row.split(',');
            }
        )
        .map(this.mapRow)
        // .map((row: string[]): MatchData => {
        //     return [
        //         dateStringToDate(row[0]),
        //         row[1],
        //         row[2],
        //         parseInt(row[3]),
        //         parseInt(row[4]),
        //         row[5] as MatchResult,
        //         row[6]
        //     ];
        // })
    };
    
    // mapRow(row: string[]): MatchData {
    //     return [
    //         dateStringToDate(row[0]),
    //         row[1],
    //         row[2],
    //         parseInt(row[3]),
    //         parseInt(row[4]),
    //         row[5] as MatchResult,
    //         row[6]
    //     ];
    // }

}