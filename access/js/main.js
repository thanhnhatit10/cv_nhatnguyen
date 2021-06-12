/*==================== MENU SHOW Y HIDDEN ====================*/

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose =document.getElementById('nav-close'),
      navMain =document.getElementById('main');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}
/*===== MENU HIDDEN =====*/

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}


if(navMain) {
    navMain.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}
/* Validate if constant exists */


/*==================== REMOVE MENU MOBILE ====================*/

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');

    navMenu.classList.remove('show-menu');
    // console.log(navLink);

}
navLink.forEach(x =>x.addEventListener('click', linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent= document.getElementsByClassName('skills__content'),
      skillsHeader= document.querySelectorAll('.skills__header');


function toggleSkills() {
    let itemClass = this.parentNode.className;

    for(i=0; i< skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close';
    }
    if(itemClass == 'skills__content skills__close') {
          this.parentNode.className = 'skills__content skills__open';
    }

} 
skillsHeader.forEach((el)=> {
    el.addEventListener('click', toggleSkills)
});

/*==================== QUALIFICATION TABS ====================*/

const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]');


tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);
        // console.log(target);
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active');
        })
        target.classList.add('qualification__active');

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active');
        })
        tab.classList.add('qualification__active');
    })
})


/* ================== ALERT ====================*/


const alertModal = document.getElementById('alert__wrapper'),
      closeModel = document.getElementById('alert__icon');

window.addEventListener('load', () => {
    alertModal.classList.add('active');
})

closeModel.addEventListener('click', ()=> {
    alertModal.classList.remove('active');
})
/*==================== SERVICES MODAL ====================*/

const modalViews = document.querySelectorAll('.services__modal'),
        modelBtns = document.querySelectorAll('.services__button'),
        modelClose = document.querySelectorAll('.services__modal-close');

modelBtns.forEach((modalBtn,i) => {
    modalBtn.addEventListener('click', () => {
        // console.log(i);
        modalViews[i].classList.add('active');  
    })
})
modelClose.forEach(close => {
    close.addEventListener('click', () => {
        modalViews.forEach((model) => {
            model.classList.remove('active');
        })
    })
})
/*==================== PORTFOLIO SWIPER  ====================*/

let swiperPostfolio = new Swiper('.fortfolio__container', {
    cssMode:true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el:'.swiper-pagination',
        clickable: true,
    },
});

/*==================== TESTIMONIAL ====================*/

let swiperTestimonial = new Swiper('.testimonial__container', {
    grabCursor: true,
    loop: true,
    spaceBetween: 48,
    pagination: {
        el:'.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        568: {
            slidesPerView: 2,
        }

    }
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 

function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
/*==================== SHOW SCROLL UP ====================*/ 


function scroLLTop() {
    const scrollTop = document.getElementById('scroll-up');
    if(this.scrollY >= 560) {
        scrollTop.classList.add('active');
    }else {
        scrollTop.classList.remove('active');
    }
}
window.addEventListener('scroll', scroLLTop);

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
});
