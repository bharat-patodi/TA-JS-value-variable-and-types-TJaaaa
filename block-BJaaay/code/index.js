//  Loop basics

// Do the following using loops:

// Using `console.log` log all the values from 1 to 10.
console.log("All Numbers from 1 to 10: ");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// Using `console.log` log all the evan values from 1 to 10.
console.log("Even Numbers from 1 to 10: ");
let n = 1;
while (n <= 10) {
  if (n % 2 == 0) {
    console.log(n);
  }
  n++;
}

// Using `console.log` log all the od values from 1 to 10.
console.log("Odd Numbers from 1 to 10: ");
let m = 1;
while (m <= 10) {
  if (m % 2 != 0) {
    console.log(m);
  }
  m++;
}

// Calculate the sum of all numbers from 1 to 10.

console.log("Sum of Numbers from 1 to 10: ");
let sum = 0;
for (let i = 0; i <= 10; i++) {
  sum += i;
}
console.log(sum);

// Log all the values from 1 to 10 using while loop
console.log("All Numbers from 1 to 10: ");
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}
