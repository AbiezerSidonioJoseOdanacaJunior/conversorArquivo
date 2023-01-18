const fs = require("fs");

class Reader {
  Read(filepath) {
    fs.readFile(filepath, { encoding: "utf-8" }, (err, date) => {
      if (err) {
        console.log("Não foi possível ler o aqruivo" + err);
      } else {
        console.log(date);
      }
    });
  }
}

module.exports = Reader;
