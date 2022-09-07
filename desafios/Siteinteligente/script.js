let btnSim = document.getElementById('btnSim')

const mover = ({clientY,clientX}) => {


    const alturaYneg = -300
    const larguraXneg = -600

    const alturaY = 300
    const larguraX = 600

    let sort1 = [alturaY, alturaYneg]
    let sort2 = [larguraX, larguraXneg]
    const newSortX = [...sort2]
    const newSortY = [...sort1]
    const soeteioX = newSortX.sort(() => Math.random() - 0.5)
    const sorteiY = newSortY.sort(() => Math.random() - 0.5)





    let altura = Math.floor(Math.random()*sorteiY[0] )
    let largura =Math.floor(Math.random()*soeteioX[0] )
    

    
    

    btnSim.style.transform = `translate(${largura}px,${altura}px)`

}


btnSim.addEventListener('mouseover', mover)

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

