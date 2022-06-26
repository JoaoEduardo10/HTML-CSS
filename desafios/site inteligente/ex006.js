//medidor de nota escolar

const arrey = [70,70,80]
console.log(mediaDasNotas(arrey))
function mediaDasNotas(notas){
    

    let receber = 0
    
    for(let c of notas){
        receber += c
    }
    let media = receber / (notas.length)

    if (media > 0 && media <= 59) {
        return `Nota F`
    } else if (media > 60 && media <= 69) {
        return `Nota D`
    } else if (media > 70 && media <=79) {
        return `Nota C`
    } else if (media > 80 && media <= 89){
        return `Nota B`
    } else if (media > 90 && media <=100){
        return `Nota A`
    } else {
        return `Nota Invalida`
    }
    

}