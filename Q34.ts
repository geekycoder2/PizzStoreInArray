// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

// Store Fav Pizza in array
let pizzas : string [] = ["Fajita Pizza","Margherita Pizza","Cheese Pizza "];

//  Use a for loop to print the name of each pizza
for (const pizza of pizzas) {
    console.log(pizza);
}

console.log("\n");

// Modify the for loop to print a sentence using the name of the pizza
for (const pizza of pizzas) {
    console.log(`I like ${pizza} pizza.`);
}

console.log("\n");

// Add a line at the end to express how much you like pizza
console.log("I really love pizza!");
