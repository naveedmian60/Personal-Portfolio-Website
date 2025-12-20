/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
   
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
            
              // services_modal//
const modalView = document.querySelectorAll('.services_modal'),
      modalBtn = document.querySelectorAll('.services_button'),
      modalClose = document.querySelectorAll('.services_modal-close')

let modal = function (modalClick) {
    modalView[modalClick].classList.add('active-modal')
}


modalBtn.forEach((mb, i) => {
    mb.addEventListener('click', () => {
        modal(i)
    })
})


modalClose.forEach((mc) => {
    mc.addEventListener('click', () => {
        modalView.forEach((mv) => {
            mv.classList.remove('active-modal')
        })
    })
})

              // mixitup filter //

let mixerPortfolio  = mixitup('.work_container', {
    selectors: {
        target: '.work_card'
    },
    animation: {
        duration: 300
    }
});


               // linkactive//

const linkWork=document.querySelectorAll('.work_item')
     
         function activeWork(){
           linkWork.forEach(l=>l.classList.remove('active_work'))
           this.classList.add('active_work')
         }

         linkWork.forEach(l=>l.addEventListener('click',activeWork))
                     // testimonial//

         const swiperTestimonial = new Swiper(".testimonial_container", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
     breakpoints: {
        576: {
          slidesPerView: 2,
         
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
       
      },
});
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 60
        const sectionId = current.getAttribute('id')

        const link = document.querySelector(
            '.nav_menu a[href="#' + sectionId + '"]'
        )

        if (!link) return

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            link.classList.add('active_link')
        } else {
            link.classList.remove('active_link')
        }
    })
}

window.addEventListener('scroll', scrollActive)




const themeButton = document.getElementById('theme_button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun' 

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')


if (selectedTheme) {
    document.body.classList[selectedTheme === 'light' ? 'add' : 'remove'](lightTheme)
    themeButton.classList[selectedIcon === 'bx-sun' ? 'add' : 'remove'](iconTheme)
}


themeButton.addEventListener('click', () => {
    document.body.classList.toggle(lightTheme)

    
    if (document.body.classList.contains(lightTheme)) {
        
        themeButton.classList.remove('bx-sun')
        themeButton.classList.add('bx-moon')
        localStorage.setItem('selected-theme', 'light')
        localStorage.setItem('selected-icon', 'bx-moon')
    } else {
        
        themeButton.classList.remove('bx-moon')
        themeButton.classList.add('bx-sun')
        localStorage.setItem('selected-theme', 'dark')
        localStorage.setItem('selected-icon', 'bx-sun')
    }
})




const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
})

sr.reveal('.home_data')
sr.reveal('.home_handle', { delay: 700 })
sr.reveal('.home_social, .home_scroll', { delay: 900, origin: 'bottom' })
