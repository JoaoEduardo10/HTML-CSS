//verificação de numero primo

//exibirNumeroPrimo(15)
/*
function exibirNumeroPrimo(limite){
    for(let numero = 0; numero <= limite; numero++){
        if(limite % numero == 0){
            console.log(`${numero}`)
            
        } 
    }
} */


function celularPropiedades(marca,tamanho,capacidadeDrbateria){
    this.marca = marca
    this.tamanho = tamanho
    this.capacidadeDrbateria = capacidadeDrbateria
    this.liga = function(){
        console.log('Fazendo ligação')
    }
}

const celular = new celularPropiedades('xiome', 13.5,4000)
console.log(celular)