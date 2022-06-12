var a = document.getElementById('click')
var num = document.getElementById('n1')
var res = document.getElementById('res')
var imagem = document.getElementById('im')
var capa = document.getElementById('capa')
var link = document.getElementById('')

a.addEventListener('click', mode)


function mode(){
    
  if (Number(num.value) == " ") {
    alert('[ERRO!] Por favor digite um numero')
} else {
    let n = Number(num.value)
    if (n % 2 == 0) {
        res.innerHTML = `o Numero ${n} é Par`
        res.style.color = " #C5D86D"
        imagem.src = 'imagem -2.jpg'
        capa.style.backgroundImage = " linear-gradient(to right, green, yellow )"
    
    } else {
        res.innerHTML = `O Numero ${n} é impar`
        res.style.color = " red "
        imagem.src = 'imagem-3.webp'
        capa.style.backgroundImage = " linear-gradient(to right, green, yellow )"


    }
    num.value = " "
}  

}
