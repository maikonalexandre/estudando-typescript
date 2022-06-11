"use strict";
const x = 10;
console.log(x);
let y = 10;
y = 20;
console.log(typeof y);
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
let myTupla;
myTupla = [5, 'a', ['a', 'b', 'c']];
console.log(typeof myTupla);
const user = {
    name: 'artur',
    age: 18,
};
console.log(user);
console.log(user.age);
let id = 10;
console.log(typeof id);
id = 'Pedro';
console.log(typeof id);
const userId = 10;
console.log(userId);
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
let camisa = {
    name: "Camisa gola v",
    size: Size.P
};
console.log(camisa);
console.log(typeof camisa.name);
console.log(camisa.size);
let literal;
literal = 'literal';
console.log(typeof literal);
function sum(a, b) {
    const x = a + b;
    return x.toString();
}
console.log(sum(1, 2), typeof x);
function hello(firstname, lastname) {
    const xs = ['1', '2', '3', '4'];
    return (console.log('Mateus'),
        xs.map(x => parseInt(x)),
        console.log(x),
        xs.forEach(x => {
            console.log(x);
        }),
        'ola ' + firstname + ' ' + lastname + ' ' + Number(1));
}
console.log(hello('joao'));
function showArrays(arr) {
    return (arr[0]);
}
console.log(showArrays(['x']));
class User {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }
}
const Zeca = new User("Zeca", '20');
console.log(Zeca);
