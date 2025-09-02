function abrirMenu(){

    let menu = document.getElementById("nav_pai")
    let btn = document.getElementById('menuBtn')
    let filho_btn = document.getElementById('filho_menuBtn')
    let filho_btn_close = document.getElementById('filho_menuBtn_close')
    let logo = document.getElementById('logoImg')
    let section = document.getElementById('section_header')
    let nav_filho = document.getElementById('nav_filho')
    let ul_nav_filho = document.getElementById('ul_nav_filho')
    let body = document.querySelector('body')

    if (menu.style.display == 'block' || menu.style.display == 'flex'){
        menu.classList.add('fechando')
        section.style.display = 'block'
        logo.style.display = 'block'
        nav_filho.style.display = 'none'
        nav_filho.classList.remove('expandido')
        ul_nav_filho.classList.remove('expandido')
        btn.classList.remove('menuAberto')
        menu.classList.remove('expandido')
        menu.style.display = 'none'
        body.classList.remove('expandido')
        filho_btn.style.display = 'block'
        recarregar()

        
    } else{
        menu.style.display = 'flex'
        menu.classList.add('expandido')
        section.style.display = 'none'
        logo.style.display = 'none'
        nav_filho.style.display = 'flex'
        nav_filho.classList.add('expandido')
        ul_nav_filho.classList.add('expandido')
        btn.classList.add('menuAberto')
        body.classList.add('expandido')
        filho_btn.style.display = 'none'
        filho_btn_close.style.display = 'block'

        
    }
    

}
function recarregar(){
    setTimeout({
    }, 3000)
    window.location.reload()

}