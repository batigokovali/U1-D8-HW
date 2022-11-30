// Additional assignments for Day 8

/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/
console.log("\n---------------------EXERCISE 1---------------------\n")

let ex1_array = [1,2,3];

console.log("Array in correct order:", ex1_array);

ex1_array.reverse();

console.log("Array in reverse order:", ex1_array);

/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/
console.log("\n---------------------EXERCISE 2---------------------\n")

let ex2_array = [5, 10, 15];

console.log(Math.max(...ex2_array));

/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/
console.log("\n---------------------EXERCISE 3---------------------\n")

let ex3_array = [5, 10, 15];

console.log(Math.min(...ex3_array));

/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/
console.log("\n---------------------EXERCISE 4---------------------\n")

let ex4_array = [5, 10, 15];

for (let i = 0; i < ex4_array.length; i++)
{
    if (ex4_array[i] % 2 === 0) 
{
    console.log("Even number(s) are: ", ex4_array[i]);
}
}

/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/
console.log("\n---------------------EXERCISE 5---------------------\n")

let ex5_array = [1,2,3,4,5];
console.log("Original array: ", ex5_array);

for (let i = 0; i < ex5_array.length; i++)
{
    if (ex5_array[i] % 2 === 0)
    {
        ex5_array.splice(i,1);   
    }
}
console.log("Deleted the even entries: ", ex5_array);


/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/
console.log("\n---------------------EXERCISE 6---------------------\n")


/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/
console.log("\n---------------------EXERCISE 7---------------------\n")

let ex7_array = [1,5,3,4,5,6];

for (let i = 0; i < ex7_array.length; i++)
{
    ex7_array[i]+=1;
}
console.log(ex7_array);

/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/
console.log("\n---------------------EXERCISE 8---------------------\n")

let ex8_array = ["epicode", "is", "awesome"];

for (let i = 0; i < ex8_array.length; i++)
{
    ex8_array[i]=ex8_array[i].length;
}
console.log(ex8_array);
