export const handleBurger = () => {
    const header = document.querySelector('.header')
    const burgerBtn = header.querySelector('.burger')
    const menu = header.querySelector('.nav')

    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('active')
        header.classList.toggle('active')
    })
}

export const handleGoBackBtn = () => {
    const goBackBtn = document.querySelector('.btn--back')

    if (goBackBtn) {
        goBackBtn.addEventListener('click', () => {
            history.back()
        })
    }
}
