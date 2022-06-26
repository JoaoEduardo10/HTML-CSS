//medudor de velocidade
console.log(verificarvelocidade(180))
function verificarvelocidade(velocidade){
    if(velocidade <= 70){
        return `ok`
    } else{
        const ponts = Math.floor(((velocidade - 70) / 5 ))
        if(ponts >= 12){
            return `carteir suspença`
        } else {
            return `pontos: ${ponts}`
        }
    }

    
    
       
}