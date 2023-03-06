function sayHello(username) {
    return `Hello ${username}`;
}

function Factorial(number) {
    let fact = 1;
    for (let i = 1; i <= number; i++) {
        fact = fact * i;
    }
    return fact;
}

function getPerson() {
    let person = {
        fname: 'Peter',
        lname: 'Parker',
        age: 26
    };
    return person;
}

function GetUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json());

}

module.exports = { sayHello, Factorial, getPerson, GetUsers };