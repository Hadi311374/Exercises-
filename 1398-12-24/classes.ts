class Vehicle {
    // color: string = 'red';
    constructor(public color: string) {
        // this.color = color;
    }

    protected honk(): void {
        console.log('beep')
    }
}

const vehicle = new Vehicle('blue');
// vehicle.honk();
console.log(vehicle.color);

class Car extends Vehicle {
    constructor() {
        super('gray');
    }
    private drive(): void {
        console.log('Vroom')
    }
    
    startDrivingProcess(): void {
        this.drive();
        this.honk();

    }
}

const car = new  Car();
// car.drive();
car.startDrivingProcess();
