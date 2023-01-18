const Processor = require("./Processor");
const Reader = require("./Reader");

var leitor = new Reader();

async function main() {
  var dados = await leitor.Read("./dadosJogadores.csv");

  Processor.Process(dados);
}

main();
