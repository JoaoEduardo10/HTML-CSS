let input = document.getElementById('email')


input.addEventListener('focus', function ({target}) {
    

    
        document.getElementById('label1').classList.add('focusout')
        document.getElementById('email').classList.add('focus')
    document.getElementById('label1').classList.remove('temfocus') 
    
    

    
    


})
input.addEventListener('focusout', function ({target}) {
    
    if (target.value == "") {
        document.getElementById('label1').classList.remove('focusout')
        
        document.getElementById('label1').classList.add('temfocus')
    }

    
})

//evento de perguntas

let perguntas = document.querySelectorAll('.pergunta')
let img1 = document.getElementById('img1')
let outPergunta = document.querySelectorAll('.outPergunta')


const Adicionar = () => {
    outPergunta[0].classList.toggle('escondido')
    outPergunta[0].classList.toggle('noescondido')
}

perguntas[0].addEventListener('click', Adicionar)
l.classList.toggle('escondido')
        l.classList.toggle('noescondido')





