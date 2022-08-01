

let contador = 0

function Chamada (contador, cartsList, cartSelecionado){

    //adicona a class ao procimo e remover a anterior
    cartsList[contador].classList.add('selecionado')
    cartSelecionado.classList.remove("selecionado")
}

const MoverDireita = () => {
    //manipulação html
    let cartsList = document.querySelectorAll('.cart');
    let cartSelecionado = document.querySelector('.selecionado')
    
    //tamanho da lista de cartas
    const tam = cartsList.length

    //verificar se o contador e menor para passa a lista
    if(contador <= tam - 2){
        contador++ //adicona 1 ao contador

        //chamada da função
        Chamada(contador, cartsList, cartSelecionado)
    
    } else{ //se for maior vai volta ao inicio
        contador = 0    

        //chamada da função
        Chamada(contador, cartsList, cartSelecionado)
    }
    
}

const MoverEsquerda = () => {
    //manipulação html
    let cartsList = document.querySelectorAll('.cart');
    let cartSelecionado = document.querySelector('.selecionado')
    
    //tamanho da lista de cartas
    const tam = cartsList.length

    if(contador == 0){
        contador = tam - 1

        //chamada da função
        Chamada(contador, cartsList, cartSelecionado)
    } else {
        //retirar o contador
        contador--

        //chamada da função
        Chamada(contador, cartsList, cartSelecionado)
    }
}


let btDireita = document.getElementById('btDireita')
let btEsquerda = document.getElementById('btEsquerda')
btDireita.addEventListener('click', MoverDireita)
btEsquerda.addEventListener('click', MoverEsquerda)