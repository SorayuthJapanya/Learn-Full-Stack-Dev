
function myFunction() {
    document.getElementById('test').innerHTML = "Hellow World!!"
}



function changeColorBg () {
    const myBody = document.getElementById("myBody");
    const myFont = document.getElementById("test");
    myBody.style.backgroundColor = "Black";
    myFont.style.color = "white";
};


// Operator
{ 
    // (=)
    let x = 5;
    console.log(x);

    {
        // (+)
        let x = 2;
        let y = 5;
        let z = x + y;
        console.log(z);
    }

    {
        // (*)
        let x = 2;
        let y = 5;
        let z = x * y;
        console.log(z);
    }

    // Arithmetic
    {
        let a = 5;
        let x = (100 + 50) * a;
        a **= 2;
        console.log(x);
        console.log(a);
    }

    // Addition Assignment Operator
    {
        let x = 10;
        let y = 4;
        x += 5;
        x += y;
        x -= y;
        x *= y;
        x /= y;
        x %= y;
        x **= y;
        console.log(x);
    }

    // Comparison Operators
    {
        // String Comparison
        let text1 = '20';
        let text2 = '3';
        let result = text1 < text2;
        console.log(result);

        // String Addition 
        {
            let text1 = 'Euro';
            let text2 = 'NN';
            let text3 = text1 + " " + text2;
            text1 += " NN";
            console.log(text3); 
            console.log(text1);
        }
    }
}

// JavaScript Data Types 
{
    // Number
    let lenght = 699;
    let weight = 45.5;

    // Strights
    let color = "Red";
    let lastname = "Euro";

    // Booleans
    let x = true;
    let y = false;

    // Object
    const person = {firstName: "Euro", lastName: "Sorayuth"};

    // Array
    const cars = ["Saab", "Volvo", "BMW"];

    // Date 
    const date = new Date;
    console.log(date);

    // JavaScript Types are Dynamic
    {
        let x;
        x = 5;
        x = "Euro";
        console.log(x)

        // Strings
        let carName1 = "Volvo XC60"; // double qoutes
        let carName2 = 'Volvo XC60'; // single qoutes
        console.log(carName1);
        console.log(carName2);

        // Numbers 
        let x1 = 34.00  // decimal

        // Exponential Notation 
        let y = 125e5;
        let z = 125e-5;
        console.log(y);
        console.log(z);

        // BigInt 
        let b = BigInt("123456789012345678901234567890");
        console.log(b);

    }

}

// Function
{
    let x = myOperator(100, 5);
    console.log(x);
    function myOperator(a, b) {
        return a * b;
    }
}

// Object
{
    const car = {
        make: "Maercedes-Benz",
        model: "A-Class",
        year: 2024,
        // Method
        displayInfo: function() {
            console.log(`${this.make} ${this.model}, Year: ${this.year}`);
        }
    }
    console.log(car.make);
    console.log(car.model);
    car.displayInfo();

    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.displayInfo = function() {
            console.log(`${this.make} ${this.model}, Year: ${this.year}`);
        };
    };

    const car1 = new Car("BMW", "S-Class", 2022);  
    const car2 = new Car("Volvo", "A-Class", 2023);
    
    console.log(car1);
    console.log(car2);

    car1.displayInfo();
    car2.displayInfo();
}


// Array Iteration
{
    //forEach
    {
        const numbers = [1, 2, 3, 4, 5];
        numbers.forEach(function(numbers) {
            console.log(numbers);
        });
    }

    // Maps
    {
        const numbers = [1, 2, 3, 4, 5];
        const doubled = numbers.map(function(numbers) {
            return numbers * 2;
        });
        console.log(doubled);
    }

    // Filter
    {
        const numbers = [1, 2, 3, 4, 5];
        const even = numbers.filter(function(numbers) {
            return numbers % 2 === 0 ;
        });
        console.log(even);
    }

    // Reduce 
    {
        const numbers = [1, 2, 3, 4, 5];
        const sum = numbers.reduce(function(total, numbers) {
            return total + numbers ;
        }, 0);
        console.log(sum);
    }

    // Some
    {
        const numbers = [1, 2, 3, 4, 5];
        const hasEven = numbers.some(function(numbers) {
            return numbers % 4 === 0 ;
        });
        console.log(hasEven);
    }

    //Every
    {
        const numbers = [1, 2, 3, 4, 5];
        const allPositive = numbers.every(function(numbers) {
            return numbers > 0;
        });
        console.log(allPositive);
    }

    // Find
    {
        const numbers = [1, 2, 3, 4, 5];
        const findNumber = numbers.find(function(numbers) {
            return numbers % 1 === 0;
        });
        console.log(findNumber);
    }

    // FindIndex
    {
        const numbers = [1, 2, 3, 4, 5];
        const findIndexNumber = numbers.findIndex(function(numbers) {
            return numbers === 5;
        });
        console.log(findIndexNumber);
    }
}

// For Loop
{
    let fruits = ['apple', 'banana', 'grape', 'orange', 'mango']

    for (let i = 0; i < fruits.length; i++ ) {
        console.log(fruits[i]);
    }

    for (let i = 0; i <= 5; i++) {
        console.log('Number: ' + i);
    }
}

// For in Loop
{
    let person = {
        name: "Euro Sorayuth",
        age: 21,
        city: "Saraphi"
    }

    for ( let key in person) {
        console.log(key + ': ' + person[key]);
    }
}

// For of Loop
{
    let cars = ["Honda", "Toyota", "Mazda"];

    for (let car of cars) {
        console.log(car);
    }
}

console.log('------------------------------');

// While Loop
{
    let i = 0;
    while (i < 5) {
        console.log(i);
        i++;
    }
}

console.log('------------------------------');

// Do While Loop 
{
    let i = 0;
    do {
        console.log(i);
        i++;
    }while (i < 5);
}

// JavaScript Destructuring
{
    const person = {
        firstName: "Euro",
        lastName: "Sorayuth",
        age: 20
    }

    let {firstName: fn, lastName: ln, age, country = "TH"} = person;
    console.log(fn, ln, age, country) ;
}

// JavaScript This Keyword
{
    const person = {
        fn: "Euro",
        ln: "Sorayuth",
        age: 20,
        fullName() {
            return this.fn + " " + this.ln;
        }
    }
    console.log(person.fullName())
}

// Arrow Function
{
    const add = (a, b) => {
        return a + b;
    };
    console.log(add(5, 8));
}

