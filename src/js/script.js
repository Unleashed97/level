import * as customFunctions from './modules/functions.js'
customFunctions.handleBurger()
customFunctions.handleGoBackBtn()
customFunctions.handleModal()
customFunctions.handleForm()

// vendors

const swiper1 = new Swiper('.swiper--1', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 28,

    loop: true,

    breakpoints: {
        0: {
            slidesPerView: 1.5,
            spaceBetween: 12,
        },
        576: {
            slidesPerView: 1.5,
            spaceBetween: 12,
        },
        768: {
            slidesPerView: 3.3,
            spaceBetween: 24,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 28,
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper__btn-next--1',
        prevEl: '.swiper__btn-prev--1',
    },
})

const swiper2 = new Swiper('.swiper--2', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 28,

    loop: true,

    breakpoints: {
        0: {
            slidesPerView: 1.5,
            spaceBetween: 12,
        },
        576: {
            slidesPerView: 1.5,
            spaceBetween: 12,
        },
        768: {
            slidesPerView: 3.3,
            spaceBetween: 24,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 28,
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper__btn-next--2',
        prevEl: '.swiper__btn-prev--2',
    },
})

const swiper3 = new Swiper('.swiper--3', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 28,

    loop: true,

    breakpoints: {
        0: {
            slidesPerView: 1.5,
            spaceBetween: 12,
        },
        576: {
            slidesPerView: 1.5,
            spaceBetween: 12,
        },
        768: {
            slidesPerView: 3.3,
            spaceBetween: 24,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 28,
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper__btn-next--3',
        prevEl: '.swiper__btn-prev--3',
    },
})
