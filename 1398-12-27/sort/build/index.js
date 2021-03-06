"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 1]);
var sorter = new Sorter_1.Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
// class Sorter {
//     constructor(public collection: number[] | string) {}
//     sort(): void {
//         const { length } = this.collection;
//         for (let i = 0; i < length; i++) {
//             for (let j = 0; j < length - i - 1; j++) {
//                 // if collection is an array of numbers
//                 if (this.collection instanceof Array) {
//                     if (this.collection[j] > this.collection[j + 1]) {
//                         const leftHand = this.collection[j];
//                         this.collection[j] = this.collection[j+1];
//                         this.collection[j+1] = leftHand;
//                     }
//                 }
//                 // if collection is a string, do this logic instead:
//                 // ~~~logic to compare and swap characters in a string
//                 if (typeof this.collection === 'string') {
//                 }
//             }
//         }
//     }
// };
// const sorter = new Sorter([10,-5,3,0]);
// sorter.sort();
// console.log(sorter.collection);
