
const senhaAtiva = document.querySelectorAll('.fa-eye')//variavel do olho normal
const senhaDesativa = document.querySelectorAll('.fa-eye-slash')//variavel do olho cortado


const mostraSenha = ({ target, path}) => {
    //pega a teg de input
    const inSenha = path[1].childNodes[3]

    target.classList.add("remover")//esconder o olho normal
    inSenha.type = "text" //adicionar o type text para a senha aparecer
    target.nextElementSibling.classList.remove("remover")//mostra o olho cortado
    
}

const esconderSenha = ({ target, path }) => {
    const inSenha = path[1].childNodes[3]//pega a teg input
    const label = target.parentNode //pegar o parete proximo
    const irmao = label.childNodes[5] //pegar o olho normal

    target.classList.add("remover") //esconder o olho cortado
    inSenha.type = "password" //adicionar o type password para esconder a senha
    irmao.classList.remove("remover")//mostra o olho normal
    
}

//adicionando eventos
senhaAtiva.forEach((iten) => iten.addEventListener('click', mostraSenha))
senhaDesativa.forEach((iten) => iten.addEventListener('click', esconderSenha))


senhaAtiva[0].closest

radio.addEventListener('click', function(){
    if(radio.checked == true){
        radio.checked = true
    } 
})





