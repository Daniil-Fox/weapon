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