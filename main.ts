#!/usr/bin/env node

import inquirer from "inquirer";

let myBalance = 20000;
let mypin = 2221;

// checking if user enters a correct pin
while (true) {
    let checkMyPin = await inquirer.prompt([
        {
            message: "Please enter your 4 digits pin : ",
            type: "number",
            name: "pin",
        },
    ]);

    if (checkMyPin.pin == mypin) {
        console.log("correct pin");

        // asking user what he wants to do
        let answer = await inquirer.prompt([
            {
                message: "Please select any option",
                name: "option",
                type: "list",
                choices: ["cash withdraw","Fast cash" , "check balance"],
            },
        ]);

        //opt 1
        if (answer.option === "cash withdraw") {
            let cash = await inquirer.prompt([
                {
                    message: "Please enter the cash you want to withdraw: ",
                    name: "amount",
                    type: "number",
                },
            ]);

            // checking if user enters amount within the limit or not
            while (true) {
                if (cash.amount <= myBalance) {
                    console.log(`\nYou have successfully withdrawn ${cash.amount}rs\n`);
                    myBalance -= cash.amount;
                    console.log(`Now your current balance is ${myBalance}rs`);
                    break;
                } else if (cash.amount > myBalance) {
                    console.log(`Please Apni hesiyat main reh kr amount nikale`);
                    cash = await inquirer.prompt([
                        {
                            message: "Please enter the cash you want to withdraw: ",
                            name: "amount",
                            type: "number",
                        },
                    ]);
                }
            }
        } 
        //opt2
        else if (answer.option === "Fast cash"){
        
        let fastCash = await inquirer.prompt([

            {

            message: "Please select amount you want to withdraw",
            type:"list",
            name:"cashtype",
            choices:["500","1000","3000","5000",]
        
            }

      ]);

        if(fastCash.cashtype === "500"){
        console.log(`\nYou have succssesfully withdrawn ${ 500}rs\n`)
        myBalance -= 500
        console.log(`Your current balance is ${myBalance}`)

        }
        else if(fastCash.cashtype === "1000"){
            console.log(`\nYou have succssesfully withdrawn ${1000}rs\n`)
            myBalance -= 1000
            console.log(`Your current balance is ${myBalance}`)

        }
        else if (fastCash.cashtype === "3000"){
            console.log(`\nYou have succssesfully withdrawn ${ 3000}rs\n`)
            myBalance -= 3000
            console.log(`Your current balance is ${myBalance}`)

        }
        else if(fastCash.cashtype === "5000"){
            console.log(`\nYou have succssesfully withdrawn ${ 5000}rs\n`)
            myBalance -= 5000
            console.log(`Your current balance is ${myBalance}`)
        }

        }
        //opt5
        else if (answer.option === "check balance") {
            console.log(`Your balance is ${myBalance}rs`);
        }
        break;
    } else if (checkMyPin.pin !== mypin) {
        console.log("Incorrect pin please try again");
    }
}



































































