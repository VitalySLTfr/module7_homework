const users = [
    { name: 'John', age: 17 },
    { name: 'Jane', age: 20 },
    { name: 'Bob', age: 15 },
    { name: 'Alice', age: 22 },
];

const adultUsers = users.filter(user => user.age >= 18);
const usersNames = users.map(user => user.name);

console.log(adultUsers);
console.log(usersNames);
