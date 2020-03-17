const carMakers: string[] = ['ford', 'bmw', 'benz'];

const dates = [new Date(), new Date()];

// const carByMake = [ ['f150'], ['i8'], ['c130'] ];
const carByMake: string[][]= [];

const car = carMakers[0];
const myCar = carMakers.pop(); 

// carMakers.push(100);
carMakers.map((car:string): string => {
    return car.toUpperCase();
});

const importantDates: (Date | string)[] = [];
importantDates.push('2020-10-10');
importantDates.push(new Date());
// importantDates.push(100);
