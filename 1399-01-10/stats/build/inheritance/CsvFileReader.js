"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
// import { dateStringToDate } from './utils';
// import { MatchResult } from './MatchResult';
// type MatchData = [Date, string, string, number, number, MatchResult, string];
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(fileName) {
        this.fileName = fileName;
        // data: string[][] = [];
        // data: MatchData[] = [];
        this.data = [];
    }
    CsvFileReader.prototype.read = function () {
        this.data = fs_1.default.readFileSync(this.fileName, {
            encoding: 'utf-8'
        })
            .split('\n')
            .map(function (row) {
            return row.split(',');
        })
            .map(this.mapRow);
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
    ;
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
