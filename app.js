const Reader = require("./Reader");

var leitor = new Reader();

async function main() {
  var dados = await leitor.Read("./dadosJogadores.csv");
  console.log(dados);
}

main();
