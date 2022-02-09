/*------------ MENU SHOW ------------*/
const showMenu = (toggleId, navId) => { // Pegando os elementos pelo id
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

    if(toggle && nav){ //caso os dois receber um click
        toggle.addEventListener('click', ()=>{
        nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')


/*------------ ACTIVE E REMOVE MENU ------------*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){

    //Active Link, ativa e desativa a aba selecionada
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    //Remove o menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))



/*------------ ANIMAÇÃO DE SCROLL REVEAL(API) ------------*/

const sr= ScrollReveal({
    origin:'top',
    distance: '80px',
    duration: 2000,
    reset: false
})


/*------------ SCROLL INICIO ------------*/
sr.reveal('.home__title',{})
sr.reveal('.button',{delay:200})
sr.reveal('.home__img',{delay:400})
sr.reveal('.home__social-icon',{interval:200})



/*------------ SCROLL SOBRE ------------*/
sr.reveal('.about__img',{})
sr.reveal('.about__subtitle',{delay:200})
sr.reveal('.about__text',{delay:400})



/*------------ SCROLL HABILIDADES ------------*/
sr.reveal('.skills__subtitle',{})
sr.reveal('.skills__text',{delay:200})
sr.reveal('.skills__data',{interval:200})
sr.reveal('.skills__img',{delay:400})



/*------------ SCROLL TRABALHOS ------------*/
sr.reveal('.work__img',{interval:200})



/*------------ SCROLL CONTATO ------------*/
sr.reveal('.contact__input',{interval:200})
