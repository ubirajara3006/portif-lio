//Constantes globais
document.cookie = "promo_shown=1; Max-Age=2600000; Secure"
"promo_shown=1; Max-Age=2600000; Secure"
const barraMenu = document.getElementById('barraMenu')
const iconMenu = document.getElementById('icon-menu')
const titulo = document.querySelector('#main-title h1')
const logo = document.querySelector('nav img')
const cover = document.querySelectorAll('.cover')


//Lógica recarregar página
function recarregar(){
    fecharMenu()
    setTimeout(()=>{
        location.reload()
    },500)  
}

//Lógica animação do título

function h1Writer (titulo){
    let c = 0
    const textoArray= titulo.innerHTML.split('')
    titulo.innerHTML = ''
    const loop = setInterval(()=>{
    if(c < textoArray.length){
        titulo.innerHTML += textoArray[c]
        c++
    }else{
        clearInterval(loop)
    }
    }, 100)
}
h1Writer(titulo)

//Lógica para animação da nav e barra de menu.
function menu() {
    if(barraMenu.style.display !='flex'){
        abrirMenu()
    }else{
        fecharMenu()
    } 
}
function abrirMenu(){
    barraMenu.style.display = 'flex'
    barraMenu.style.animation = 'menuAnimation 0.5s'
    setTimeout(() => {
            iconMenu.innerHTML = '<ion-icon name="close-outline"></ion-icon>'
            logo.style = 'filter: invert()'
            iconMenu.style.color =  '#ffffff'
    },300)  
}
function fecharMenu(){
    iconMenu.style.color = '#0F141E'
    iconMenu.innerHTML = '<span>MENU</span><ion-icon name="menu-outline"></ion-icon>'
    logo.style.filter = 'none'
    barraMenu.style.animation = 'menuAnimationOFF 0.5s'
    setTimeout(() => {
        barraMenu.style.display ='none'
    },500)
}
