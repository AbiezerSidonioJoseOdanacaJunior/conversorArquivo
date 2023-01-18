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

function modificarArquivo(nome, curso, categoria) {
  fs.readFile("./usuario.json", { encoding: "utf-8" }, (err, dados) => {
    if (err) {
      console.log("Erro na leitura de arquivo!");
    } else {
      // Tranformar texto para Objeto JAVASCRIPT
      var conteudo = JSON.parse(dados);

      //Alterando o conteúdo inicial do arquivo usuuario.json
      conteudo.nome = nome;
      conteudo.curso = curso;
      conteudo.categoria = categoria;

      //Tranformar objeto javascritp para tetxo com Json.stringfy
      fs.writeFile("./usuario.json", JSON.stringify(conteudo), (err) => {
        if (err) {
          console.log("Falha ao escrever o arquivo!");
        } else {
          console.log(conteudo);
        }
      });
    }
  });
}

modificarArquivo("Abiezer Odanaca", "React", "Web");
