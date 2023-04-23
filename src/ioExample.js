/* 
Coffie Shop CLI Shop
Show Coffie menu 
 Latte : 100 rs


 // you have to build a coffee shop cli app

// you have to present the user with the coffee and the price

// then take the user input for the coffee

// then just show coffee is preparing

// then after that print your coffee is ready and yoou have to pay this much amount
*/
var clc = require("cli-color");

const menus = [
  { itemeName: "Latte", itemPrice: 100 },
  { itemeName: "Espresso", itemPrice: 160 },
  { itemeName: "Café au Lait", itemPrice: 230 },
  { itemeName: "Mocha", itemPrice: 260 },
];
const cart = [];
const readline = require("readline");
const { stdin: input, stdout: output } = require("process");
const { log } = require("console");
const rl = readline.createInterface({ input, output });

function showMenu(menu) {
  console.log(clc.red(`\n-.-.-.-.--.-.-.-.-.-.-.-.-.-`));
  console.log(clc.green(`Welcome Yo CafeTheCaprio `));
  console.log(clc.red(`-.-.-.-.--.-.-.-.-.-.-.-.-.- `));
  console.table(menu);
}

function runProgram(rl) {
  rl.question(
    `Please Select Item No to add in order \nor press ${clc.red(
      "X"
    )} to exit \n`,
    (itemNo) => {
      if (itemNo == "X" || itemNo == "x") {
        if (cart.length > 0) {
          let Total = 0;
          console.log(clc.black.bgMagentaBright(` Bill `));

          cart.forEach((item, i) => {
            Total += parseInt(item.itemPrice);
          });

          console.table(cart);
          console.log(clc.black.bgMagentaBright(` Total  : ${Total} Rs `));
          rl.close();
        }
      } else {
        itemNo = Number(itemNo);
        if (itemNo > itemNo.length) {
          console.log(
            "Invalid Item number. please check menu for referance \n"
          );
        } else {
          cart.push(menus[itemNo - 1]);
        }
        runProgram(rl);
      }
    }
  );
}
showMenu(menus);

runProgram(rl);
