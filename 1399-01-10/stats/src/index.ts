import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinAnalysis } from './analyzers.ts/WinAnalysis';
import { Summary } from './Summary';
import { HtmlReport } from './reportTargets/HtmlReport';

// Create an object that satisfies the 'DataReader' interface
 const csvFileReader = new CsvFileReader('football.csv');

// Creat an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(
    new WinAnalysis('Man United'),
    // new ConsoleReport()
    new HtmlReport()
);

summary.buildAndPrintReport(matchReader.matches);
