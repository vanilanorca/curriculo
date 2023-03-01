/*==================== LOADING ANIMATION ====================*/
function load (){
    document.getElementById("loading").style.display = "none";
    document.getElementById("conteudo").style.display = "inherit";
}

window.onload = (function () { window.setInterval('load()',2000);})



// SHOW - HIDDEN MENU
const hambMenu = document.getElementById('hamburguer-menu');
const menu = document.getElementById('menu')

hambMenu.addEventListener('click', function(){
    if (menu.style.display === 'block'){
        menu.style.display = 'none'
    } else{
        menu.style.display = 'block'
    }
})



// AO CLICAR EM ALGUM ITEM DO MENU, ELE É FECHADO
function closeMenu(){
    menu.style.display = 'none'
}



