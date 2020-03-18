const drink = {
    color: 'brown',
    carbonated: true,
    suger: 40
};

// Type alias 
type Drink = [string, boolean, number];

const pepsi: Drink = ['red', true, 85];
const sprite: Drink = ['clear', true, 98];
const tea: Drink = ['brown', false, 0];
