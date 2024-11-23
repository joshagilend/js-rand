// Generate a random integer between min (inclusive) and max (exclusive)
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Examples
console.log(randInt(1, 10));  // Random integer between 1 and 9
console.log(randInt(0, 5));   // Random integer between 0 and 4
console.log(randInt(50, 100)); // Random integer between 50 and 99

// Generate random dice rolls
const diceRoll = randInt(1, 7);
console.log(`You rolled: ${diceRoll}`);

// Generate random index for an array
const colors = ['red', 'green', 'blue', 'yellow'];
console.log(colors[randInt(0, colors.length)]); // Random color

// Simulate coin flip
const coin = randInt(0, 2) === 0 ? 'Heads' : 'Tails';
console.log(`Coin flip: ${coin}`);

// Random year in a range
console.log(randInt(2000, 2023)); // Random year between 2000 and 2022

// Random grade from A to F
const grades = ['A', 'B', 'C', 'D', 'F'];
console.log(grades[randInt(0, grades.length)]);

// Pick a random character from a string
const name = "JavaScript";
console.log(name[randInt(0, name.length)]); // Random character

// Random boolean
const isLucky = randInt(0, 2) === 1;
console.log(`Are you lucky? ${isLucky}`);
