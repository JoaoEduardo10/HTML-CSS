let inEmail = document.querySelectorAll('input')

const focus = ({ path }) => {
    const form = path[1]
    const label = form.childNodes[1]
    
    label.classList.add('label-focus')
    label.classList.remove('label') 

}
const focusOut = ({ path, target }) => {
    const form = path[1]
    const label = form.childNodes[1]
    
    if(target.value > 0){
        label.classList.remove('label-focus')
        
    } else if(target.value <= 0){
        label.classList.remove('label-focus')
        label.classList.add('label')
    }

}

inEmail.forEach((item) => item.addEventListener("focus",focus))
inEmail.forEach((item) => item.addEventListener("focusout",focusOut))





//anomação do conteiner de peguntas

let pergunta = document.querySelectorAll('.pergunta')

const aparecer = ({ path, target }) => {

    
    if(path[0] === target ){
        const conteinerPai = path[1] //pegar a teg pai
        const respostas = conteinerPai.childNodes[4] //pega a teg irmao
        const targetL = path[0]
        const icon = targetL.childNodes[3]

        

        try {
            if(respostas.classList.contains("escondido")){ //se escondido esta em documento
                respostas.classList.remove("escondido") //remove
                icon.classList.remove("fa-bars")
                icon.classList.add("fa-x")
            } else { //se nao
                icon.classList.add("fa-bars")
                icon.classList.remove("fa-x")
                respostas.classList.add("aparecer") //adiciona a class de animação para desaparecer
                setTimeout(() => { // espera 3s
                    respostas.classList.add("escondido") //adiciona  class escondido
                    respostas.classList.remove("aparecer") //remove class aparecer
                },300)
            }
        } catch (error) {
            console.log(error)
        }
    } 

    if(path[1] != target){
        const conteinerPai = path[2] //pegar a teg pai
        const respostas = conteinerPai.childNodes[4] //pega a teg irmao
        const targetL = path[1]
        const icon = targetL.childNodes[3]

        try {
            if(respostas.classList.contains("escondido")){ //se escondido esta em documento
                respostas.classList.remove("escondido") //remove
                icon.classList.remove("fa-bars")
                icon.classList.add("fa-x")
            } else { //se nao
                icon.classList.add("fa-bars")
                icon.classList.remove("fa-x")
                respostas.classList.add("aparecer") //adiciona a class de animação para desaparecer
                setTimeout(() => { // espera 3s
                    respostas.classList.add("escondido") //adiciona  class escondido
                    respostas.classList.remove("aparecer") //remove class aparecer
                },300)
            }
        } catch (error) {
            console.log(error)
        }


    }

     

    

    

}


pergunta.forEach((itens) => itens.addEventListener('click', aparecer))

