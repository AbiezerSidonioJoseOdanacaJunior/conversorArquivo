const fs = require("fs");

fs.readFile("./abiezer.txt", { encoding: "utf-8" }, (err, dados) => {
  if (err) {
    console.log("Falha na leitura de arquivo");
  } else {
    console.log(dados);
  }
});

fs.writeFile("./teste.txt", "Nome: Abiezer José Junior", (err) => {
  if (err) {
    console.log("Falha ao adicionar texto no Arquivo");
  }
});
