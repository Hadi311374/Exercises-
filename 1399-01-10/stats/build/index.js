"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var MatchReader_1 = require("./MatchReader");
var WinAnalysis_1 = require("./analyzers.ts/WinAnalysis");
var Summary_1 = require("./Summary");
var HtmlReport_1 = require("./reportTargets/HtmlReport");
// Create an object that satisfies the 'DataReader' interface
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
// Creat an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var summary = new Summary_1.Summary(new WinAnalysis_1.WinAnalysis('Man United'), 
// new ConsoleReport()
new HtmlReport_1.HtmlReport());
summary.buildAndPrintReport(matchReader.matches);
