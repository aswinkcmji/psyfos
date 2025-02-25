// JS FOR NAVIGATION MENU MOBILE

const mobileNav = document.querySelector('.mnav')
const closeBtn = document.querySelector('.mnav__close-btn')
const closeBtnIcon = document.querySelector('.mnav__close-btn-icon')

const navOpenedClass = 'left-0';
const navClosedClass = '-left-[300px]';
const arrowLeftClass = 'ri-arrow-left-s-line';
const arrowRightClass = 'ri-arrow-right-s-line';

closeBtn.addEventListener('click', () => {
    if (mobileNav.classList.contains(navClosedClass)) {
        mobileNav.classList.remove(navClosedClass); 
        mobileNav.classList.add(navOpenedClass); 
        closeBtnIcon.classList.remove(arrowRightClass)
        closeBtnIcon.classList.add(arrowLeftClass)
    } else {
        mobileNav.classList.remove(navOpenedClass); 
        mobileNav.classList.add(navClosedClass); 
        closeBtnIcon.classList.remove(arrowLeftClass)
        closeBtnIcon.classList.add(arrowRightClass)
    }
})

// JS FOR MODAL

window.openModal = function(modalId) {
    document.getElementById(modalId).style.display = 'block'
    document.getElementsByTagName('body')[0].classList.add('overflow-y-hidden')
}

window.closeModal = function(modalId) {
    document.getElementById(modalId).style.display = 'none'
    document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden')
}

// Close all modals when press ESC
document.onkeydown = function(event) {
    event = event || window.event;
    if (event.keyCode === 27) {
        document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden')
        let modals = document.getElementsByClassName('modal');
        Array.prototype.slice.call(modals).forEach(i => {
            i.style.display = 'none'
        })
    }
};

// JS FOR SWIPPER
const swiper = new Swiper('.swiper', {

    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

});

// JS FOR SCROLL ANIMATION
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 2000,
    delay: 400,
})

sr.reveal('.hero__text', {
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 400,
});
sr.reveal('.hero__img',{
    origin: 'bottom',
    distance: '60px',
    duration: 2500,
    delay: 400,
});
sr.reveal('.services',{
    delay: 100,
    distance: '100px',
    iterval: 80,
    origin: 'top',
});
sr.reveal('.why__choose',{
    delay: 100,
    distance: '100px',
    iterval: 80,
    origin: 'top',
});
sr.reveal('.why__choose-head',{
    delay: 100,
    distance: '150px',
    iterval: 80,
    origin: 'top',
});
sr.reveal('.why__choose-text',{
    delay: 100,
    distance: '70px',
    iterval: 80,
    origin: 'top',
});
sr.reveal('.service__item',{
    delay: 100,
    distance: '100px',
    iterval: 80,
    origin: 'top',
});
sr.reveal('.team__title')
sr.reveal('.team__slider')

sr.reveal('.footer__item', {
    delay: 100,
    distance: '50px',
    iterval: 80,
    origin: 'bottom', 
})

sr.reveal('.blog__title', {
    delay: 100,
    distance: '50px',
    iterval: 80,
    origin: 'bottom', 
})

sr.reveal('.blog__post', {
    delay: 100,
    distance: '50px',
    iterval: 80,
    origin: 'bottom', 
})

sr.reveal('.career__title', {
    delay: 100,
    distance: '50px',
    iterval: 80,
    origin: 'top', 
})

sr.reveal('.career__text', {
    delay: 100,
    distance: '50px',
    iterval: 80,
    origin: 'bottom', 
})

sr.reveal('.career__img', {
    delay: 100,
    distance: '100px',
    iterval: 80,
    origin: 'top', 
})

document.getElementById("year").innerHTML = new Date().getFullYear();