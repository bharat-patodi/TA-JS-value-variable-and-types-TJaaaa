/*
🎖 Write a program to calculate the total price of your phone purchase. With these conditions
 * [ ] You will keep purchasing phones (hint: loop!) until you run out of bank balance.
 * [ ] You'll also buy accessories for each phone as long as your purchase amount is below your spending threshold.
 * [ ] After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted like ($334.76).
 * [ ] Finally, check the amount against your bank account balance to see if you can afford it or not.
*/

const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = 303.91;
var amount = 0;
// your code goes here

while (bank_balance > amount) {
  // Buy the phone
  amount += PHONE_PRICE;
  // Buy the accessories till the spending threshold is reached
  while (amount < SPENDING_THRESHOLD) {
    amount += ACCESSORY_PRICE;
  }
}

// Calculate tax
amount = amount * (1 + TAX_RATE);
alert(`The total purchase amount for the deal is: $${amount}`);
// Compare with bank balance
if (amount < bank_balance) {
  alert("We can afford this deal.");
} else {
  alert("We cannot afford this deal.");
}

// ⛑ Answer of the above will `$334.76`.

// I think the question is wrongly worded. If we only have to buy a single accessory, it should be mentioned so in the second rule. The second rule states that we can buy as many accessories as we can till the spending threshold is reached. In that case, we will buy about 10 accessories per phone ($100 + $10*10) before the cut-off of $200 is reached.
// In case you think my suggestion is incorrect, I have added a different solution in the bottom that gets $334.76

/*
const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = 303.91;
var amount = 0;
// your code goes here

while (bank_balance > amount) {
  // Buy the phone
  amount += PHONE_PRICE;
  console.log(amount);
  // Buy the accessories till the spending threshold is reached
  if (amount < SPENDING_THRESHOLD) {
    amount += ACCESSORY_PRICE;
  }
  console.log(amount);
}
// Calculate tax
amount = amount * (1 + TAX_RATE);
console.log(amount);
alert(`The total purchase amount for the deal is: ${amount}`);
// Compare with bank balance
if (amount < bank_balance) {
  alert("We can afford this deal.");
} else {
  alert("We cannot afford this deal.");
}
*/
