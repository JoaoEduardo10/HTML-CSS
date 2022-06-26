//avalia se o numero passado e par ou impar

avaliar(10)

function avaliar(numero){
    let par = "par"
    let impar = "impar"
    let num = 0
    for(let c = 0; c <= numero; c++){
        if(c % 2 == 0) {
            console.log(`${c} ${par}`)
        } else{
            console.log(`${c} ${impar}`)
        }

    }
    
}