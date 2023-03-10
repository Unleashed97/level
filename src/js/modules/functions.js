export const handleBurger = () => {
    const header = document.querySelector('.header')
    const burgerBtn = header.querySelector('.burger')
    const menu = header.querySelector('.nav')

    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('active')
        header.classList.toggle('active')
        document.body.classList.toggle('fixed')
    })

    window.addEventListener('resize', (e) => {
        if (screen.width >= 833) {
            burgerBtn.classList.remove('active')
            header.classList.remove('active')
            document.body.classList.remove('fixed')
        }
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

export const handleModal = () => {
    const modal = document.querySelector('.modal')

    if (modal) {
        const closeBtn = modal.querySelector('.modal__close')
        const confirmBtn = modal.querySelector('.modal__confirm')
        const cancelBtn = modal.querySelector('.modal__cancel')

        const funcCloseModal = () => {
            modal.classList.remove('active')
            document.body.classList.remove('fixed')
        }

        if (modal.classList.contains('modal--warning')) {
            console.log('here')
            confirmBtn.addEventListener('click', () => {
                funcCloseModal()
            })

            closeBtn.addEventListener('click', () => {
                history.back()
            })
            cancelBtn.addEventListener('click', () => {
                history.back()
            })
        } else {
            closeBtn.addEventListener('click', () => {
                funcCloseModal()
            })

            window.addEventListener('click', ({ target }) => {
                if (target === modal) {
                    funcCloseModal()
                }
            })
        }
    }
}

export const handleForm = () => {
    const form = document.querySelector('.form')

    if (form) {
        const inputDate = form.querySelector('.input__date')

        inputDate.addEventListener('click', (e) => {
            inputDate.type = 'date'
            inputDate.showPicker()
        })

        const formData = new FormData(form)

        form.addEventListener('submit', (e) => {
            e.preventDefault()
        })
    }
}
