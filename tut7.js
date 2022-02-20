console.log("This is tutorial 7.");

function greet(name, greeText){
        console.log(greeText + ", " + name + "!");
        console.log(name + ' is a good boy.');
}

function sum(a, b, c){
        let d = a+b+c;
        return d;
}

let name1 = 'Prithvi';
let name2 = 'Rahul';
let name3 = 'Shivam';
let name4 = 'Rohan';
let greetText = 'Good Morning';

let returnVal = sum(1, 2, 3);
console.log(returnVal);
greet(name1, greetText);
greet(name2, greetText);
greet(name3, greetText);
greet(name4, greetText);