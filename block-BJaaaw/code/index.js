// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/

let evenOdd = function () {
  let input = Number(prompt("Enter a big number: "));
  if (input % 2 == 0) {
    alert("number is even");
  } else {
    alert("number is odd");
  }
};

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.

let maxFunc = function () {
  let num1 = Number(prompt("Enter the first number: "));
  let num2 = Number(prompt("Enter the second number: "));
  if (num1 >= num2) {
    alert(num1);
  } else {
    alert(num2);
  }
};

// 3. Convert the above code using`?` terniary operator

let maxFuncV2 = function () {
  let num1 = Number(prompt("Enter the first number: "));
  let num2 = Number(prompt("Enter the second number: "));
  num1 >= num2 ? alert(num1) : alert(num2);
};

/*
4. Write a program that asks the user for the house name and check the following conditions:

- `if` house name is "stark" then print the message " Winter is coming"
- `if` house name is "lannister" then print the message " A lannister always pays his debt"
- `else` print the message " All men must die"
*/

let houseCheck = function () {
  let houseName = Number(prompt("Enter the house name: "));
  if (houseName == "stark") {
    alert("Winter is coming");
  } else if (houseName == "lannister") {
    alert("A lannister always pays his debt");
  } else {
    alert("All men must die");
  }
};

// 5. Convert the above code using`?` terniary operator

let houseCheckV2 = function () {
  let houseName = Number(prompt("Enter the house name: "));
  houseName == "stark"
    ? alert("Winter is coming")
    : houseName == "lannister"
    ? alert("A lannister always pays his debt")
    : alert("All men must die");
};

// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
function monthDays() {
  let input = Number(prompt("Enter the number of the month: "));
  switch (input) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      alert("The number of days in this month are: 31");
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      alert("The number of days in this month are: 30");
      break;
    case 2:
      alert("The number of days in this month are: 28");
      break;
  }
}

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
- `Salary <= 20000` tax is 10 %
- `Salary <= 40000` tax is 20 %
- `Salary > 50000` tax is 30 %

*/

// BUG: This isn't working

// function switchSalary() {
//   let salary = Number(prompt("Enter the salary: "));
//   switch (salary) {
//     case salary <= 20000:
//       alert("The tax is 10%");
//       break;
//     // case salary <= 20000 && salary <= 40000:
//     //   alert("The tax is 20%");
//     //   break;
//     case salary > 50000:
//       alert("The tax is 30%");
//   }
// }

function salary() {
  let salary = Number(prompt("Enter the salary: "));
  let amount = 0;
  if (salary <= 20000) {
    alert("The tax is 10%");
    amount = salary * 0.9;
    alert(amount);
  } else if (salary <= 20000 && salary <= 40000) {
    alert("The tax is 20%");
    amount = salary * 0.8;
    alert(amount);
  } else {
    alert("The tax is 30%");
    amount = salary * 0.7;
    alert(amount);
  }
}

//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

- `marks > 100` alert`"Marks can't be greater than 100"`
- `marks > 80 && marks < 100` alert`"Grade A"`
- `marks > 50 && marks < 80` alert`"Grade B"`
- `marks > 30 && marks < 50` alert`"Grade C"`
- `marks > 0` alert`"Grade D"`

*/

function checkMarks() {
  let marks = prompt("Enter your marks: ");

  if (marks > 100) {
    alert("Marks can't be greater than 100");
  } else if (marks > 80 && marks < 100) {
    alert("Grade A");
  } else if (marks > 50 && marks < 80) {
    alert("Grade B");
  } else if (marks > 30 && marks < 50) {
    alert("Grade C");
  } else {
    alert("Grade D");
  }
}

function checkMarksV2() {
  let marks = prompt("Enter your marks: ");
  switch (marks) {
    case marks > 100:
      alert("Marks can't be greater than 100");
      break;
    case marks > 80 && marks < 100:
      alert("Grade A");
      break;
    case marks > 50 && marks < 80:
      alert("Grade B");
      break;
    case marks > 30 && marks < 50:
      alert("Grade C");
      break;
    default:
      alert("Grade D");
  }
}

/* 9. Weather app

- Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
- If user says`sunny` alert`Wear a T-shirt`
- If`rainy` alert`Don't forget to take your raincoat`
- If`hot` alert`Get a hanky`
- If`freezing` alert`Get your sweeter on`
- Anything else should alert`Not a valid input`
*/

function weatherOutside() {
  let weather = prompt("What is the weather like outside?");
  if (weather == "sunnny") {
    alert("Wear a T-shirt");
  } else if (weather == "hot") {
    alert("Get a hanky");
  } else if (weather == "freezing") {
    alert("Get your sweater on");
  } else {
    alert("Not a valid input");
  }
}

evenOdd();
maxFunc();
maxFuncV2();
houseCheck();
houseCheckV2();
monthDays();
salary();
checkMarks();
checkMarksV2();
weatherOutside();
