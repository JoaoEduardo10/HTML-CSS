//le uma objeto

const filmes = {
    Titulo: "Vingadores",
    ano: 2018,
    iretor: "Robin",
    personagem: "thor"
}

exibir(filmes)
function exibir(objeto){
    for (const exibir in objeto) {
      if(typeof objeto[exibir] === "string"){
        console.log(exibir,objeto[exibir])
      }
}

}
