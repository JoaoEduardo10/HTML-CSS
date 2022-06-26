let posi1 = document.querySelector('.posi1')
posi1.classList.remove('ivisivel1')

let posi2 = document.querySelector('.posi2')
let posi3 = document.querySelector('.posi3')
let posi4 = document.querySelector('.posi4')
let posi5 = document.querySelector('.posi5')
let posi6 = document.querySelector('.posi6')
let posi7 = document.querySelector('.posi7')
let posi8 = document.querySelector('.posi8')

posi1.addEventListener('mouseenter',function(){
    posi1.classList.add('ivisivel1')
    posi2.classList.remove('ivisivel2')
})
posi2.addEventListener('mouseenter',function(){
    posi2.classList.add('ivisivel2')
    posi3.classList.remove('ivisivel3')
})
posi3.addEventListener('mouseenter',function(){
    posi3.classList.add('ivisivel3')
    posi4.classList.remove('ivisivel4')
})
posi4.addEventListener('mouseenter',function(){
    posi4.classList.add('ivisivel4')
    posi5.classList.remove('ivisivel5')
})
posi5.addEventListener('mouseenter',function(){
    posi5.classList.add('ivisivel5')
    posi6.classList.remove('ivisivel6')
})
posi6.addEventListener('mouseenter',function(){
    posi6.classList.add('ivisivel6')
    posi7.classList.remove('ivisivel7')
})
posi7.addEventListener('mouseenter',function(){
    posi7.classList.add('ivisivel7')
    posi8.classList.remove('ivisivel8')
})
posi8.addEventListener('mouseenter',function(){
    posi8.classList.add('ivisivel8')
    posi1.classList.remove('ivisivel1')
})

let pagA = document.querySelector('.principal')
let pagB = document.querySelector('.inv')
pagA.classList.remove('invisivel')

let nao = document.querySelector('.nao')

nao.addEventListener('click', function(event){
    pagA.classList.add('invisivel')
    pagB.classList.remove('inv')
})

document.addEventListener('keydown',function(event){
    console.log(event)
    let exit = event.key == "Escape"

    if (exit) {
        pagA.classList.remove('invisivel')
        pagB.classList.add('inv')
    }
})

