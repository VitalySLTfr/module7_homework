function printInfo() {
    console.log(`Name: ${person.name}, Age: ${person.age}`);
}
let person = {
    name: 'John',
    age: 30
};

printInfo.call(person);
