/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/
console.log("\n---------------------EXERCISE 1---------------------\n")

let myArray = [1, 2, 3, 4, 5]

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/
console.log("\n---------------------EXERCISE 2---------------------\n")

let myObject = {
    name: "Batı",
    surname: "Gökovalı",
    email: "batigokovali@icloud.com",
    age: 25,
}

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/
console.log("\n---------------------EXERCISE 3---------------------\n")

myObject.drivingLicense = true; 

/* EXERCISE 4
 Remove from the previously created object the age property.
*/
console.log("\n---------------------EXERCISE 4---------------------\n")

delete myObject.age;

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/
console.log("\n---------------------EXERCISE 5---------------------\n")

let secondObject = {
    name: "Jane",
    surname: "Doe",
    email: "janedoe@icloud.com",
}

if (myObject.email === secondObject.email) {
    console.log("E-mails are the same!")
} else {
    console.log("E-mails are different!")
}

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/
console.log("\n---------------------EXERCISE 6---------------------\n")

let totalShoppingCart = 80;
let shippingCost = 10;

if (totalShoppingCart > 50) {
    console.log("The user is eligible for free shipping!")
} else {
    console.log("Shipping Cost:" + shippingCost);
}

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/
console.log("\n---------------------EXERCISE 7---------------------\n")

let blackFridayDiscount = 0.8;
let totalCost = totalShoppingCart*blackFridayDiscount;

if (totalCost > 50) {
    console.log("The user is eligible for free shipping!")
} else {
    console.log("Shipping Cost:" + shippingCost);
}


/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/
console.log("\n---------------------EXERCISE 8---------------------\n")

let myCar1 = {
    brand: "Dacia",
    model: "Logan",
    licensePlate: "48EF251",
}

let myCar2 = {
    brand: "Dacia",
    model: "Logan",
    licensePlate: "48EF252",
}

let myCar3 = {
    brand: "Dacia",
    model: "Logan",
    licensePlate: "48EF253",
}

let myCar4 = {
    brand: "Dacia",
    model: "Logan",
    licensePlate: "48EF254",
}

let myCar5 = {
    brand: "Dacia",
    model: "Logan",
    licensePlate: "48EF255",
}



/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/
console.log("\n---------------------EXERCISE 9---------------------\n")

let carsForRent = [
myCar1, myCar2, myCar3,myCar4,myCar5
]

console.log(carsForRent);

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/
console.log("\n---------------------EXERCISE 10---------------------\n")


carsForRent.splice(0,1);
carsForRent.pop();
console.log(carsForRent);


/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/
console.log("\n---------------------EXERCISE 11---------------------\n")

console.log(typeof carsForRent, typeof carsForRent[0].brand, typeof carsForRent[0].licensePlate);

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/
console.log("\n---------------------EXERCISE 12---------------------\n")

let carsForSale = [];

carsForSale.push(myCar1, myCar2, myCar3);

console.log(carsForSale);

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/
console.log("\n---------------------EXERCISE 13---------------------\n")


for (let i = 0; i < carsForSale.length; i++) {
    let carsToPrint = carsForSale[i];
    console.log("Cars For Sale: ", carsToPrint);
}