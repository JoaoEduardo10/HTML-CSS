



//variavel de controle 
let senha = document.querySelector('#senha')
let senha2 = document.querySelector('#conf-senha')
let item1 = document.querySelector("#soldado1")
let item2 = document.querySelector("#soldado2")
let item3 = document.querySelector("#soldado3")
let item4 = document.querySelector("#soldado4")
let radio = document.getElementById('radio')

let inpultsenha = senha.type == "password"
let inpultsenhav = senha2.type == "password"
let confRadio = radio.checked 




const AdicionarPar = () => {
    
    if(inpultsenha){
        senha.setAttribute('type',"text")
        item1.classList.add('remover')
        item2.classList.remove('remover')
    } 
    
    
    
}
const AdicionarPar2 = () => {
    if(inpultsenhav){
        senha2.setAttribute('type',"text")
        item3.classList.add('remover')
        item4.classList.remove('remover')
    }
}
const AdicionarImpar = () => {
    
        senha.setAttribute('type',"password")
        item1.classList.remove('remover')
        item2.classList.add('remover')
        
    
}
const AdicionarImpar2 = () => {
    
        senha2.setAttribute('type',"password")
        item3.classList.remove('remover')
        item4.classList.add('remover')
    
        
}


let icons1 = document.querySelectorAll('.fa-eye')
let icons2 = document.querySelector('#soldado2')
let icons3 = document.querySelector('#soldado4')
icons1[0].addEventListener('click', AdicionarPar)
icons1[1].addEventListener('click', AdicionarPar2)
icons2.addEventListener('click', AdicionarImpar)
icons3.addEventListener('click', AdicionarImpar2)
radio.addEventListener('click', function(){
    if(radio.checked == true){
        radio.checked = true
    } 
})





