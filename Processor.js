class Processor {
  static Process(date) {
    var linha = date.split("\r\n");
    var rows = [];

    linha.forEach((row) => {
      var arr = row.split(",");
      rows.push(arr);
    });
    console.log(rows);
  }
}

module.exports = Processor;
