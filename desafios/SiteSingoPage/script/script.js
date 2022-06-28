
// script do header
let hamburger = document.querySelector('.hamburger')
let efeito = document.querySelector('.sidebar')
let botao1= document.querySelector('.hamburger')

botao1.classList.remove('invisivel1');
let botao2 = document.querySelector('.hamburger2')


hamburger.addEventListener('click',function(){
    efeito.classList.remove('invisivel')
    botao1.classList.add('invisivel1')
    botao2.classList.remove('invisivel2')
})

botao2.addEventListener('click',function(){
    efeito.classList.add('invisivel')
    botao1.classList.remove('invisivel1')
    botao2.classList.add('invisivel2')
})

//********************************************************************** */
//script do orçamento



document.querySelector('#quantidade').addEventListener('change', atualizarPreso)
document.querySelector('#js').addEventListener('change', atualizarPreso)
document.querySelector('#layout-sim').addEventListener('change', atualizarPreso)
document.querySelector('#layout-nao').addEventListener('change', atualizarPreso)
document.querySelector('#prazo').addEventListener('mousemove', function(){
    let prazo = document.querySelector('#prazo').value
    document.querySelector('label[for=prazo]').innerHTML = `Praso: ${prazo} semanas`
    
})


function atualizarPreso(){
    
    let quantidade = document.querySelector('#quantidade').value;
    let preco = quantidade * 100
    let temjs = document.querySelector('#js').checked;
    let incluilayout = document.querySelector('#layout-sim').checked
    let prazo = document.querySelector('#prazo').value
    
    
    if(temjs){
        preco *= 1.1
    }
    if(incluilayout){
        preco = preco + 500
    } 
    
    
    document.querySelector('#preco').innerHTML = `R$${preco.toFixed(2)} ` 
    

}



