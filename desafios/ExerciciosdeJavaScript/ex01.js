

//questão fizzbuzz
let resultado = fizzbuzz(10)
console.log(resultado)


function fizzbuzz(entrada){
    let caso3 = entrada / 3 && entrada % 3 == 0 
    let caso5 = entrada / 5 && entrada % 5 == 0 
    let caso3nega = entrada /3 && entrada % 3 != 0
    let caso5nega = entrada /3 && entrada % 3 != 0
    if(caso3 && !caso5){
        return "Fizz"
    } else if(caso5 && !caso3) {
        return 'Buzz'
    } else if(caso3 && caso5) {
        return "FizzBuzz"
    } else if(caso3nega && typeof caso3nega == Number){
        return entrada
    } else if(caso3nega && typeof caso5nega == Number){
        return entrada
    } else if (typeof entrada !== "number"){
        return `Não é um numero`
    }
        
    
    

    

}