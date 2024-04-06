import inquirer from "inquirer";
const balance = 10000; // in PKR
let pincode = 3306;
async function main() {
    const Pinansware = await inquirer.prompt([
        {
            message: "Please enter your PIN",
            name: "pin",
            type: "number"
        }
    ]);
    if (Pinansware.pin === pincode) {
        console.log("Access Granted");
        console.log("Current balance:", balance);
        let optionans = await inquirer.prompt([
            {
                message: "Please select an option",
                name: "option",
                type: "list",
                choices: [
                    "Deposit",
                    "Withdraw"
                ]
            }
        ]);
        console.log(optionans);
        if (optionans.option === "Deposit") {
            let amount = await inquirer.prompt([
                {
                    message: "Please enter the amount to be deposited",
                    name: "amount",
                    type: "number"
                }
            ]);
            const newbalance = balance + amount.amount;
            console.log("New balance:", newbalance);
        }
        else if (optionans.option === "Withdraw") {
            let amount = await inquirer.prompt([
                {
                    message: "Please enter the amount to be withdrawn",
                    name: "amount",
                    type: "number"
                }
            ]);
            const newbalance = balance - amount.amount;
            console.log("Withdraw successful");
            console.log("New balance:", newbalance);
        }
    }
    else {
        console.log("Access Denied");
    }
}
main();
