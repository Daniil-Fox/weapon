var modificator = ['military', 'black', 'green', 'gray', 'white']
new Swiper('.raptor-slider__slider', {
    slidesPerVied: 1,
    speed: 1000,
    navigation : {
        prevEl: '.raptor-slider__btn--prev',
        nextEl: '.raptor-slider__btn--next',
    },
    pagination : {
        el: '.raptor-slider__pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return `<span class="${className} raptor-slider__thumb raptor-slider__thumb--${modificator[index]}"><span></span></span>`
        },
    }
})
new Swiper('.raptor-gallery__slider', {
    slidesPerVied: 1,
    speed: 1000,
    navigation : {
        prevEl: '.raptor-gallery__btn--prev',
        nextEl: '.raptor-gallery__btn--next',
    },
    pagination : {
        el: '.raptor-gallery__pagination',
        clickable: true,
    }
})


const raptorModal = document.querySelector('.raptor-modal')
const raptorModalBtn = document.querySelector('[data-raptor-video]')
if(raptorModal){
    const raptorModalWindow = raptorModal.querySelector('.raptor-modal__window')
    const raptorModalClose = raptorModal.querySelector('.raptor-modal__close')
    const video = raptorModal.querySelector('.raptor-modal__video video')
    const videoPlayBtn = raptorModal.querySelector('.raptor-modal__play')
    
    videoPlayBtn.addEventListener('click', e => {
        e.preventDefault()
    
        videoPlayBtn.style.display = 'none'
        video.play()
        video.setAttribute('controls', '')
    })
    raptorModalBtn.addEventListener('click', e => {
        e.preventDefault()
        raptorModal.classList.add('active')
        document.body.style.overflow = 'hidden'
    })
    
    raptorModal.addEventListener('click', e => {
        raptorModal.classList.remove('active')
        videoPlayBtn.style.display = null
        video.pause()
        video.removeAttribute('controls', '')
        document.body.style.overflow = null
    })
    raptorModalClose.addEventListener('click', e => {
        e.preventDefault()
        raptorModal.classList.remove('active')
        videoPlayBtn.style.display = null
        video.pause()
        video.removeAttribute('controls', '')
        document.body.style.overflow = null
    })
    raptorModalWindow.addEventListener('click', e => {
        e.stopPropagation()
    })
}