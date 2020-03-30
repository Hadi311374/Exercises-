import { User } from './models/User';

const user = new User({name:'Hadi', age: 25})

user.on('change', () => {
    console.log('change #1');
});

user.on('change', () => {
    console.log('change #2');
});

user.on('save', () => {
    console.log('Save wa triggered');
});

// user.trigger('change');
user.trigger('save');

// console.log(user);

// user.set({name: 'Ali', age: 88});
// console.log(user.get('name'));
// console.log(user.get('age'));
