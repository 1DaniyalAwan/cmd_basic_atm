#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000; //dollars
let myPin = 12345;

console.log("Current Balance: " + myBalance);

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter You Pin",
    type: "number",
  },
]);

if (pinAnswer.pin === myPin) {
  console.log("Correct Pin Code!!");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "Please Select Option",
      type: "list",
      choices: ["Withdraw", "Fast Cash", "Check Balance"],
    },
  ]);

  if (operationAns.operation === "Withdraw") {
    let amountAns = await inquirer.prompt([
      { name: "amount", message: "Enter Your Amount", type: "number" },
    ]);
    if (amountAns.amount <= myBalance) {
      myBalance -= amountAns.amount;

      console.log("Your Remaining Balance is: " + myBalance);
    } else {
      console.log("Invalid Amount");
    }
  } else if (operationAns.operation === "Fast Cash") {
    let fastAmountans = await inquirer.prompt([
      {
        name: "fastAmount",
        message: "Select Amount",
        type: "list",
        choices: [1000, 2000, 5000, 10000],
      },
    ]);

    if(fastAmountans.fastAmount === 1000){
        myBalance -= fastAmountans.fastAmount;
        console.log("Your Remaining Balance is: " + myBalance);
    }else if(fastAmountans.fastAmount === 2000){
        myBalance -= fastAmountans.fastAmount;
        console.log("Your Remaining Balance is: " + myBalance);
    }else if(fastAmountans.fastAmount === 5000){
        myBalance -= fastAmountans.fastAmount;
        console.log("Your Remaining Balance is: " + myBalance);
    }else{
        myBalance -= fastAmountans.fastAmount;
        console.log("Your Remaining Balance is: " + myBalance);
    }
  } else {
    console.log("Your Current Balance is: " + myBalance);
  }
} else {
  console.log("Incorrect Pin Code!!");
}
