//Constantes globais
document.cookie = "promo_shown=1; Max-Age=2600000; Secure"
"promo_shown=1; Max-Age=2600000; Secure"
const barraMenu = document.getElementById('barraMenu')
const iconMenu = document.getElementById('icon-menu')
const titulo = document.querySelector('#main-title h1')
const logo = document.querySelector('nav img')
const cover = document.querySelectorAll('.cover')
let c = 0;

//Lógica scroll-animation
function ativaNoScroll(){
document.querySelectorAll('.fadein').forEach((e, index) => {
    if(e.getBoundingClientRect().top < window.innerHeight){
        e.style = 'animation: fadein 2s linear;';
    };
})
document.querySelectorAll('.fadein-img img').forEach((img, index) => {
    if(img.getBoundingClientRect().top < window.innerHeight){
       img.src = img.getAttribute('data-src');
    };
})
}

window.addEventListener('scroll', ativaNoScroll);


//Lógica recarregar página
function recarregar(){
    fecharMenu()
    setTimeout(()=>{
        location.reload()
    },500)  
}

//Lógica para animação da nav e barra de menu.
function menu() {
    
    if(c % 2 == 0){
        c++
        abrirMenu()
    }else{
        c++
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
    barraMenu.style.animation = 'menuAnimationOFF 1s'
    setTimeout(() => {
        barraMenu.style.display ='none'
    },1000)
}
