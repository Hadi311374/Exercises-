interface Vehicles {
    // name: string;
    // year: number;
    // broken: boolean;
    summary(): string;
};

const oldCivic = {
    name:'civic',
    year: 2000,
    broken: true,
    summary(): string {
        return `Name: ${this.name}`;
    }
};

const drinks = {
    color:'red',
    carbonated: true,
    suger: 30,
    summary(): string {
        return `My drink has ${this.suger} grams of suger`;
    }
};

// const printVehicle = (vehicle: {  name:string, year: number, broken: boolean }): void => {
const printVehicle = (vehicle: Vehicles ): void => {
    // console.log(`Name: ${vehicle.name}`);
    // console.log(`Year: ${vehicle.year}`);
    // console.log(`Broken: ${vehicle.broken}`);
    console.log(vehicle.summary());
};

printVehicle(drinks);
printVehicle(oldCivic);
