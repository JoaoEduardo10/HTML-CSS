

function insert(num){
    document.getElementById('resposta').innerHTML += num
}

function apagar(){
    document.getElementById('resposta').innerHTML = " "
}
function voltar1(){
    const resposta = document.getElementById('resposta').innerHTML
    document.getElementById('resposta').innerHTML = resposta.substring(0,resposta.length -1)
}

function somar(){
    let existe = document.getElementById('resposta').innerHTML

    if(existe){
        document.getElementById('resposta').innerHTML = eval(existe)
    }
}