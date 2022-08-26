//variaveis de maniulaçcao html
let input = document.getElementById('email')
let input2 = document.getElementById('email2')

//adiconar os ventos de focus do inpult-footer
input2.addEventListener("focus",function(){
    document.getElementById('email2').style.border = "1px solid lightseagreen"
    document.querySelector('.label2').classList.add('labefocus')
})

//eventos de saida de focus ara inpult-footer
input2.addEventListener('blur', function({target}){
    if(target.value == ""){
        document.querySelector('.label2').classList.remove('labefocus')
    } 
})

//adiconar os ventos de focus do inpult-header
input.addEventListener('focus', function ({target}) {
    

    
        document.getElementById('label1').classList.add('focusout')
        document.getElementById('email').classList.add('focus')
    document.getElementById('label1').classList.remove('temfocus') 
    
    

    
    


})

//eventos de saida de focus ara inpult-header
input.addEventListener('blur', function ({target}) {
    
    if (target.value == "") {
        document.getElementById('label1').classList.remove('focusout')
        
        document.getElementById('label1').classList.add('temfocus')
    }

    
})

//evento de perguntas


//variaveis de manipulacao html
let perguntas = document.querySelectorAll('.pergunta')
let resposta = document.querySelectorAll('.reposta')
let tegP = document.querySelectorAll('[data-p]')
let icon = document.querySelectorAll('[data-icon]')

//funçao para adicona icon
const adicionarIconEClass = (irmao, novoIcon) => {

    //remover o icone de bar e adicionar o icone de x
    novoIcon.classList.remove('fa-bars')
    novoIcon.classList.add('fa-x')
    
    //remover adicionar a class "aparecer" e remover a teg escondido e voltar
    irmao.classList.add('aparecer')
    irmao.classList.remove('escondido')
    irmao.classList.remove("voltar")

}
//funcao para remover icons
const removerIconEClass = (irmao, novoIcon) => {
    //adicionar o icon bar e revvomer o icon X
    novoIcon.classList.add('fa-bars')
    novoIcon.classList.remove('fa-x')

    //remover a teg aparecer e adicionar a teg voltar e a teg escondido
    irmao.classList.remove('aparecer')
    irmao.classList.add('voltar')
    setTimeout( () => { // espera 0.5s para adicionar a teg escondido
        irmao.classList.add('escondido')
    },500)

}

const aparecer = ({path}) => {
    //variavel que vai receber as teg
    let irmao;
    let novoIcon;
    
        //percorre sobre as erguntas
       perguntas.forEach( (item) => {
        //ver se a div-perguntas e a mesma o ietem
            if(path[0] == item){ //se sim
                irmao = path[0].nextElementSibling //pegar a tega irmao do elemento pergunta
                novoIcon = path[0].lastElementChild //pega o a ultima teg filho do elemento pergunta
               
                //ver se a teg aparecer esta adicionada
                if(irmao.className.indexOf('aparecer') == -1){ //se não
                    
                    adicionarIconEClass(irmao,novoIcon)

                } else if(irmao.className.indexOf('aparecer') >= 1){ //se a class ecistir

                    removerIconEClass(irmao,novoIcon)
                
                }
                
            }

            
       })
       
       //percorre sobre as tegs
       for(let i = 0; i < tegP.length; i++){
        //se clicar emcima do paragrafo ou do incon
            if(path[0] == tegP[i] || path[0] == icon[i]){

                //pegar a teg irmao do elemento perguntas e o ultimo filho da teg perguntas
                irmao = path[1].nextElementSibling //elemento irmao
                novoIcon = path[1].lastElementChild //ultimo elemento filho

                //ver se a class aparecer esta adicionar
                if(irmao.className.indexOf('aparecer') == -1){ //se não
                    
                    adicionarIconEClass(irmao, novoIcon)

                } else if(irmao.className.indexOf('aparecer') >= 1){ //se sim
                    
                   removerIconEClass(irmao, novoIcon)
                }
                
                break; //sair da repetição

            }
       }
       
   
   
}


//adiconar eventos de clicks em cada un das perguntas  
perguntas.forEach( (item) => item.addEventListener('click', aparecer))


