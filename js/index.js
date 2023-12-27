
import '../scss/style.scss';
import { Pagination } from 'swiper/modules';

import Swipe from './swiper'


let settings = {
    modules: [Pagination],
    direction: 'horizontal',
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
};

let swipe = new Swipe('(min-width: 768px)', settings, '.swiper')

window.addEventListener('DOMContentLoaded', () => swipe.checkWidth());


/*let button = document.querySelector('.scroll__button');
let container = document.querySelector('.scroll__wrapper');
let containerHeight = container.clientHeight;
let opened = false;*/


function addOpenClose(button, container) {
    let container1 = document.querySelector(container);
    let containerHeight = container1.clientHeight;
    let opened = false;
    let button1 = document.querySelector(button);
    let style = button.slice(1) + '--clicked';
    button1.addEventListener('click', () => {
        openClose()
        })
    
    function openClose() {
        let containerScrollHeight = container1.scrollHeight;

        if(!opened) {
            container1.style.height = containerScrollHeight + 'px';
            button1.textContent ='Скрыть';
            opened = true;
            
            button1.classList.add(style);
    
        } else {
            containerHeight = containerHeight < 160 ? 160: containerHeight;
            container1.style.height = containerHeight + 'px';
            button1.textContent='Показать всё';
            opened = false;
            button1.classList.remove(style)
        }
    }
}

addOpenClose( '.tech-views__button','.tech-views__wrapper');
addOpenClose( '.brends__button','.brends__wrapper');

let menuButton = document.querySelector('.menu');
let menu = document.querySelector('.aside-panel');
let crossButton = document.querySelector('.cross');
let openedMenu = false;
let openedModal = false;

let blur = document.createElement('div');
blur.classList.add('blur');
let wrapper = document.querySelector('.page');

let blur1 = blur.cloneNode(true)


menuButton.addEventListener('click', () => {
    openCloseMenu()
})

crossButton.addEventListener('click', () => {
    closeMenu()
})

blur1.addEventListener('click', () => {
    closeMenu()
})

function openMenu () {
    menu.classList.add('aside-panel--opened')
    wrapper.appendChild(blur1);
    openedMenu = true;
}

function closeMenu() {
    if(openedModal && openedMenu) {
        menu.classList.remove('aside-panel--opened')
        openedMenu = false;
    }   else if(!openedModal && openedMenu) {
        blur1.remove();
        menu.classList.remove('aside-panel--opened')
        openedMenu = false;
    }
};

function openCloseMenu() {
    
    if(openedMenu) {
        closeMenu()
    } else {
        openMenu()
    }
}



let chat = document.querySelectorAll('.chat');
let chatCross = document.querySelectorAll('.popup__dialogue-cross');
let call = document.querySelectorAll('.call');



for(let elem of chat) {
    elem.addEventListener('click', (event) => {
        let str = '.popup-' + elem.classList[1];
        closeMenu();
        openCloseModal(str);
    })
}

for(let elem of call) {
    
    elem.addEventListener('click', (event) => {

        closeMenu();
        let str = '.popup-' + elem.classList[1];
        openCloseModal(str);
    })
}

for(let elem of chatCross) {
    elem.addEventListener('click', (event) => {
        closeMenu();
        let elem = event.target.closest('.popup')
        let str = '.' + elem.classList[1] ;
        openCloseModal(str);
    })
}


function openCloseModal(str) {
    let elem = document.querySelector(str);
    if(openedModal) {
        closeModal(elem)
    } else {
        openModal(elem)
    }
}

function openModal (elem) {
    elem.classList.add('popup--opened')
    wrapper.appendChild(blur1);
    openedModal = true;
    blur1.addEventListener('click', () => {
        closeModal(elem);
    })

}

function closeModal(elem) {
        elem.classList.remove('popup--opened')
        openedModal = false;
        blur1.remove();
};

let buttons = document.querySelectorAll('users-button');

for(let button of buttons) {
    button.addEventListener('click', ()=>{
        button.classList.toggle('users-button--clicked')
    }
    )
}



