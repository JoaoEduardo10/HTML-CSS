//soma dos multoplos de 3 e 5


somar(10)
function somar(limite){
    let soma1 = 0
    let soma2 = 0
    for(let c = 3; c <= limite; c = c + 3){
        
        soma1 = soma1 + c
    }
    for (let c = 5; c <= 10; c = c + 5) {
        
        soma2 = soma2 + c
    }
    console.log(soma2 + soma1)
}