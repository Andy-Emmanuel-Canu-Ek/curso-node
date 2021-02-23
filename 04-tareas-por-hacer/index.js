require("colors");

const { showMenu, pause } = require("./helpers/messages");
const { inquirerMenu, inquirerPause } = require("./helpers/inquirer");

const main = async () => {
  let opt = "";
  do {
    opt = await inquirerMenu();
    console.log({opt})
    if (opt !==  0) await inquirerPause();
  } while (opt !==  0);
};

main();
