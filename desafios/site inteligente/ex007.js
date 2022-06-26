//criar linha de *

exibirAsterisco(10)
function exibirAsterisco(linhas){
    let padrao = " "

    for(let num = 1; num <= linhas; num++){
        padrao += "*";
        console.log(padrao)
    }
}