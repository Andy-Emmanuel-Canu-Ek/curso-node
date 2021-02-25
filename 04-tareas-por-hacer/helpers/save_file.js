const fs = require("fs");

const path = "./data/data.json";

const saveFile = (data) => {
  fs.writeFileSync(path, JSON.stringify(data));
};

const readFile = () => {
  if (!fs.existsSync(path)) {
    return null;
  }

  const info = fs.readFileSync(path,{ encoding: 'utf8' });

  if (!info){
    return null;
  }

  const data = JSON.parse(info);
  
  return data;
};

module.exports = {
  saveFile,
  readFile
};
