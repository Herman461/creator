const delay = 400

window.addEventListener('DOMContentLoaded', function() {

    // Меню

    const menu = document.querySelector('.header__menu')
    const header = document.querySelector('.header')
    const profileMenu = document.querySelector('.profile-menu')
    let lock = false
    const burger = document.querySelector('.header__burger')

    if (burger) {
        burger.addEventListener('click', function() {

            if (lock) return

            lock = true

            toggleMenu()

            setTimeout(() => {
                lock = false
            }, delay)
        })

        function toggleMenu() {
            burger.classList.toggle('active')
            menu.classList.toggle('active')
            header.classList.toggle('active')
            lockBody()
        }

    }




    const searchHeaderInput = document.querySelector('.search-header__input input')
    const searchHeaderButton = document.querySelector('.header__search-button')
    const emptySearchBlock = document.querySelector('.search-header__empty')
    const contentSearchBlock = document.querySelector('.search-header__content')
    const clearSearchHeader = document.querySelector('.search-header__clear')
    const buttonSearchHeader = document.querySelector('.search-header__button')
    const cancelSearchHeader = document.querySelector('.search-header__cancel')
    const searchHeader = document.querySelector('.header__search')

    if (menu) {
        menu.addEventListener('click', function(e) {
            if (!e.target.closest('.menu__body')) {
                toggleMenu()
            }
        })
    }

    if (searchHeaderButton) {
        searchHeaderButton.addEventListener('click', function(e) {
            if (menu.classList.contains('active')) {
                toggleMenu()
            }
            if (searchHeader.classList.contains('active')) {
                searchHeader.classList.remove('active')
                lockBody()
            } else {
                searchHeader.classList.add('active')
                searchHeaderInput.focus()
            }

            lockBody()
            e.stopPropagation()
        })

        header.addEventListener('click', function(e) {
            if (document.querySelector('.search-header').classList.contains('active') && !e.target.closest('.search-header')) {
                searchHeader.classList.remove('active')
                lockBody()
            }
        })
        clearSearchHeader.addEventListener('click', function() {
            searchHeaderInput.value = ''
            searchHeaderInput.focus()
            checkSearchInputValue()
        })


        searchHeaderInput.addEventListener('input', checkSearchInputValue)

        buttonSearchHeader.addEventListener('click', function() {
            searchHeaderInput.focus()
        })

        cancelSearchHeader.addEventListener('click', function() {
            searchHeader.classList.remove('active')
            lockBody()
        })
    }


    function checkSearchInputValue() {
        if (searchHeaderInput.value.length === 0 && emptySearchBlock.classList.contains('hidden')) {
            emptySearchBlock.classList.remove('hidden')
            contentSearchBlock.classList.remove('show')
        }

        if (searchHeaderInput.value.length !== 0 && !emptySearchBlock.classList.contains('hidden')) {
            emptySearchBlock.classList.add('hidden')
            contentSearchBlock.classList.add('show')
        }
    }

    if (header && profileMenu) {
        header.addEventListener('click', function(e) {
            if (profileMenu.classList.contains('active') && (!e.target.closest('.profile-menu__body') && !e.target.closest('.header__user') && !e.target.closest('.bottom-header__item_user'))) {
                profileMenu.classList.remove('active')
                e.preventDefault()
            }
            if (e.target.closest('.header__user') || e.target.closest('.bottom-header__item_user')) {
                profileMenu.classList.toggle('active')
                e.preventDefault()

            }
        })
    }

    // const inputElements = document.querySelectorAll('.input')
    //
    // // const password = document.querySelectorAll('[data-input-password]')
    // // const confirmedPassword = document.querySelectorAl('[data-input-confirmed-password]')
    //
    // const button = document.querySelector('.bottom-edit__save')
    // let errors = []
    //
    // function checkIfButtonIsDisabled() {
    //     const hasValidInputs = document.querySelectorAll('.content-edit__input .input.has-no-error').length > 0
    //
    //     if (password && password.classList.contains('has-no-error') && password.value !== confirmedPassword.value) {
    //         if (button) {
    //             button.setAttribute('disabled', '')
    //         }
    //
    //         return
    //     }
    //
    //     if (hasValidInputs && !document.querySelector('.content-edit .errors-list')) {
    //         if (button) {
    //             button.removeAttribute('disabled')
    //         }
    //
    //     } else {
    //         if (button) {
    //             button.setAttribute('disabled', '')
    //         }
    //
    //     }
    // }
    // function setErrorList() {
    //     if (document.querySelector('.content-edit .errors-list')) {
    //         document.querySelector('.content-edit .errors-list').remove()
    //     }
    //
    //     if (errors.length > 0) {
    //
    //         const photoWrapperElement = document.querySelector('.content-edit .content-edit__photo')
    //         const errorsList = document.createElement('ul')
    //         errorsList.className = 'errors-list list'
    //
    //         for (let index = 0; index < errors.length; index++) {
    //             const error = errors[index]
    //             const item = document.createElement('li')
    //             item.textContent = error.text
    //             errorsList.appendChild(item)
    //         }
    //         if (photoWrapperElement) {
    //             photoWrapperElement.appendChild(errorsList)
    //         }
    //
    //     }
    //     checkIfButtonIsDisabled()
    // }
    //
    // if (inputElements.length > 0) {
    //     for (let index = 0; index < inputElements.length; index++) {
    //         const element = inputElements[index]
    //
    //         // if (element.hasAttribute('data-input')) continue
    //         element.addEventListener('change', function(e) {
    //
    //             const input = e.currentTarget
    //
    //             if (input.dataset.inputMin) {
    //                 const hasError = !!errors.find(error => error.id === input.id)
    //
    //                 if ((Number(input.dataset.inputMin) <= input.value.length) && hasError) {
    //                     // errors = errors.filter(error => error.id !== input.id)
    //
    //                     input.classList.remove('has-error')
    //                     input.classList.add('has-no-error')
    //                     setErrorList()
    //                 }
    //
    //                 if (Number(input.dataset.inputMin) > input.value.length) {
    //                     input.classList.add('has-error')
    //                     input.classList.remove('has-no-error')
    //
    //                     if (hasError) return
    //
    //                     const field = input.dataset.inputField ? input.dataset.inputField : input.id
    //
    //                     // errors.push({
    //                     //     text: 'The field ' + field + ' requires at least ' + input.dataset.inputMin + ' characters',
    //                     //     id: input.id
    //                     // })
    //
    //                     setErrorList()
    //                     return
    //                 }
    //
    //             }
    //
    //             if (input.dataset.inputMax) {
    //                 // const hasError = !!errors.find(error => error.id === input.id)
    //
    //                 if ((Number(input.dataset.inputMax) >= input.value.length) && hasError) {
    //                     // errors = errors.filter(error => error.id !== input.id)
    //
    //                     input.classList.remove('has-error')
    //                     input.classList.add('has-no-error')
    //                     setErrorList()
    //                 }
    //
    //                 if (Number(input.dataset.inputMax) < input.value.length) {
    //                     input.classList.add('has-error')
    //                     input.classList.remove('has-no-error')
    //                     if (hasError) return
    //
    //                     const field = input.dataset.inputField ? input.dataset.inputField : input.id
    //
    //                     // errors.push({
    //                     //     text: 'The field ' + field + ' can have no more than ' + input.dataset.inputMax + ' characters',
    //                     //     id: input.id
    //                     // })
    //
    //                     setErrorList()
    //                     return
    //                 }
    //
    //             }
    //
    //
    //
    //             if (input.hasAttribute('data-input-url')) {
    //                 const urlPattern = new RegExp('^(https?:\\/\\/)?'+
    //                     '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+
    //                     '((\\d{1,3}\\.){3}\\d{1,3}))'+
    //                     '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
    //                     '(\\?[;&a-z\\d%_.~+=-]*)?'+
    //                     '(\\#[-a-z\\d_]*)?$','i')
    //
    //                 const isValidUrl = !!urlPattern.test(input.value);
    //
    //
    //                 // const hasError = !!errors.find(error => error.id === input.id)
    //
    //                 if (isValidUrl && hasError) {
    //                     // errors = errors.filter(error => error.id !== input.id)
    //
    //                     input.classList.remove('has-error')
    //                     input.classList.add('has-no-error')
    //                     setErrorList()
    //                 }
    //
    //                 if (!isValidUrl) {
    //                     input.classList.add('has-error')
    //                     input.classList.remove('has-no-error')
    //
    //                     if (hasError) return
    //
    //                     const field = input.dataset.inputField ? input.dataset.inputField : input.id
    //
    //                     // errors.push({
    //                     //     text: 'The field ' + field + ' is not correct',
    //                     //     id: input.id
    //                     // })
    //
    //                     setErrorList()
    //                     return
    //                 }
    //             }
    //
    //             if (input.hasAttribute('data-input-password')) {
    //                 const confirmedInput = document.querySelector('#retry_password')
    //
    //                 if (confirmedInput.value.length === 0 ) return
    //
    //                 const isConfirmedPassword = input.value === confirmedInput.value
    //
    //
    //                 const hasError = !!errors.find(error => error.id === confirmedInput.id)
    //
    //                 if (isConfirmedPassword && hasError) {
    //                     // errors = errors.filter(error => error.id !== input.id)
    //
    //                     confirmedInput.classList.remove('has-error')
    //                     confirmedInput.classList.add('has-no-error')
    //
    //                     setErrorList()
    //                 }
    //
    //                 if (!isConfirmedPassword) {
    //                     confirmedInput.classList.add('has-error')
    //                     confirmedInput.classList.remove('has-no-error')
    //                     if (hasError) return
    //
    //                     const field = input.dataset.inputField ? input.dataset.inputField : input.id
    //
    //                     // errors.push({
    //                     //     text: 'The password is not confirmed',
    //                     //     id: input.id
    //                     // })
    //
    //                     setErrorList()
    //                     return
    //                 }
    //
    //             }
    //
    //
    //             if (input.hasAttribute('data-input-confirmed-password')) {
    //                 const isConfirmedPassword = input.value === document.querySelector('#new_password').value
    //
    //
    //                 const hasError = !!errors.find(error => error.id === input.id)
    //
    //                 if (isConfirmedPassword && hasError) {
    //                     // errors = errors.filter(error => error.id !== input.id)
    //
    //                     input.classList.remove('has-error')
    //                     input.classList.add('has-no-error')
    //
    //                     setErrorList()
    //                 }
    //
    //                 if (!isConfirmedPassword) {
    //                     input.classList.add('has-error')
    //                     input.classList.remove('has-no-error')
    //                     if (hasError) return
    //
    //                     const field = input.dataset.inputField ? input.dataset.inputField : input.id
    //
    //                     // errors.push({
    //                     //     text: 'The password is not confirmed',
    //                     //     id: input.id
    //                     // })
    //
    //                     setErrorList()
    //                     return
    //                 }
    //             }
    //             //
    //
    //             if (input.hasAttribute('data-input-email')) {
    //                 const format = /^[a-zA-Z\-._0-9]+@[a-zA-Z\-._0-9]+?\.[a-zA-Z\-._0-9]+[a-zA-Z\-._0-9]+/g;
    //                 const secondFormat = /^[A-Z0-9a-z\-]{3,256}\.[a-zA-Z\-]{2,256}/g;
    //
    //                 const isValidEmail = format.test(input.value) || secondFormat.test(input.value)
    //
    //                 // const hasError = !!errors.find(error => error.id === input.id)
    //
    //                 if (isValidEmail && hasError) {
    //                     // errors = errors.filter(error => error.id !== input.id)
    //
    //                     input.classList.remove('has-error')
    //                     input.classList.add('has-no-error')
    //
    //                     setErrorList()
    //                 }
    //
    //                 if (!isValidEmail) {
    //                     input.classList.add('has-error')
    //                     input.classList.remove('has-no-error')
    //                     if (hasError) return
    //
    //                     const field = input.dataset.inputField ? input.dataset.inputField : input.id
    //
    //                     // errors.push({
    //                     //     text: 'Email is not valid',
    //                     //     id: input.id
    //                     // })
    //
    //                     setErrorList()
    //                     return
    //                 }
    //             }
    //
    //             const format = /^[a-zA-Z\-._0-9]+@[a-zA-Z\-._0-9]+?\.[a-zA-Z\-._0-9]+[a-zA-Z\-._0-9]+/g;
    //
    //             const secondFormat = /^[A-Z0-9a-z\-]{3,256}\.[a-zA-Z\-]{2,256}/g;
    //
    //
    //
    //             if (input.hasAttribute('data-input-email')) {
    //                 input.value = input.value.replace(/[^a-zA-Z0-9!.#?\-._@ ]/g, '');
    //                 if (!format.test(input.value) && !secondFormat.test(input.value)) {
    //                     const errorMessageText = 'Email is not correct'
    //
    //                     const error = document.createElement('span')
    //                     error.className = 'error'
    //                     error.textContent = errorMessageText
    //
    //                     input.parentElement.appendChild(error)
    //                     input.classList.add('has-error')
    //
    //                     return
    //                 }
    //
    //
    //             }
    //             input.classList.add('has-no-error')
    //             checkIfButtonIsDisabled()
    //
    //
    //
    //
    //
    //         }, true)
    //
    //         element.addEventListener('focus', function(e) {
    //             const input = e.currentTarget
    //
    //             if (input.classList.contains('has-error')) {
    //                 input.classList.remove('has-error')
    //
    //                 // const error = input.parentElement.querySelector('.error')
    //                 // error.remove()
    //                 //
    //                 // if (e.target.closest('.password')) {
    //                 //     e.target.closest('.password').classList.remove('has-error')
    //                 // }
    //             }
    //         })
    //     }
    //
    // }
    //
    //


    // Меню

    // const menu = document.querySelector('.header__menu')
    // const header = document.querySelector('.header')
    // let lock = false
    // const burger = document.querySelector('.header__burger')
    //
    // burger.addEventListener('click', function() {
    //
    //     if (lock) return
    //
    //     lock = true
    //
    //     toggleMenu()
    //
    //     setTimeout(() => {
    //         lock = false
    //     }, delay)
    // })
    //
    // function toggleMenu() {
    //     burger.classList.toggle('active')
    //     menu.classList.toggle('active')
    //     header.classList.toggle('active')
    //     lockBody()
    // }


    // header.addEventListener('click', function(e) {
    //     if (
    //         document.querySelector('.header__menu.active')
    //         && !e.target.closest('.header__burger')
    //     ) {
    //         toggleMenu()
    //     }
    // })

    // if (document.querySelector('.banner-page__body')) {
    //     const bannerSlider = new Swiper('.banner-page__body', {
    //         spaceBetween: 16,
    //         slidesPerView: 1,
    //         centeredSlides: true,
    //         speed: 1000,
    //         effect: 'fade',
    //         fadeEffect: { crossFade: true },
    //         loop: true,
    //         autoplay: {
    //             delay: 2000,
    //         },
    //         breakpoints: {
    //             767.98: {
    //                 slidesPerGroup: 4,
    //
    //             },
    //             575.98: {
    //                 slidesPerGroup: 3,
    //             }
    //         },
    //
    //         navigation: {
    //             nextEl: '.banner-page__button-next',
    //             prevEl: '.banner-page__button-prev'
    //         },
    //         pagination: {
    //             el: ".banner-page__dots",
    //             clickable: true,
    //         },
    //     })
    //
    // }


    const baseSliders = document.querySelectorAll('.home__slider .swiper')

    if (baseSliders.length > 0) {
        for (let index = 0; index < baseSliders.length; index++) {
            const slider = baseSliders[index]

            if (slider.classList.contains('home__slider-tags')) {
                new Swiper(slider, {
                    spaceBetween: 8,
                    slidesPerView: 'auto',

                    speed: 800,
                    navigation: {
                        nextEl: slider.closest('.home__slider').querySelector('.base-head__button-next'),
                        prevEl: slider.closest('.home__slider').querySelector('.base-head__button-prev')
                    },

                })

            } else if (slider.classList.contains('home__slider-niches')) {
                new Swiper(slider, {
                    spaceBetween: 12,
                    slidesPerView: 1,

                    speed: 800,
                    navigation: {
                        nextEl: slider.closest('.home__slider').querySelector('.base-head__button-next'),
                        prevEl: slider.closest('.home__slider').querySelector('.base-head__button-prev')
                    },
                    breakpoints: {
                        991.98: {
                            slidesPerView: 3,
                        },
                        546.98: {
                            slidesPerView: 2,
                        }
                    }
                })
            } else if (slider.classList.contains('home__slider-items')) {

                new Swiper(slider, {
                    spaceBetween: 12,
                    slidesPerView: 2,

                    speed: 800,
                    navigation: {
                        nextEl: slider.closest('.home__slider').querySelector('.base-head__button-next'),
                        prevEl: slider.closest('.home__slider').querySelector('.base-head__button-prev')
                    },
                    breakpoints: {
                        767.98: {
                            slidesPerView: 3,
                        },

                    }
                })
            }

        }
    }

    //
    //
    // fixHeader()
    // function fixHeader() {
    //     if (document.body.scrollTop > 10 && !header.classList.contains('fix')) {
    //         header.classList.add('fix')
    //     }
    //     if (document.body.scrollTop <= 0 && header.classList.contains('fix')) {
    //         header.classList.remove('fix')
    //     }
    // }

    // window.addEventListener('scroll', fixHeader)


    const feed = document.querySelector('.feed')

    if (feed) {
        feed.addEventListener('mousemove', debounce(playVideo, 2))

        let lockActiveVideo = false
        let activeVideo = null
        function playVideo(e) {
            if (lockActiveVideo) return
            if (e.target.closest('.video') && !e.target.closest('.video').classList.contains('active')) {

                const video = e.target.closest('.video').querySelector('video')
                e.target.closest('.video').classList.add('active')
                if (!video) return

                activeVideo = video
                activeVideo.play()
                lockActiveVideo = true



                e.target.closest('.video').addEventListener('mouseleave', function(e) {
                    resetActiveVideo()
                    setTimeout(function() {
                        lockActiveVideo = false
                    }, 70)
                }, {once: true})
            }
        }

        function resetActiveVideo() {
            if (activeVideo) {
                activeVideo.pause();
                activeVideo.currentTime = 0
                activeVideo.closest('.video').classList.remove('active')
                activeVideo = null
            }
        }
        feed.addEventListener('touchstart', function(e) {


            function detectOffset(e) {

                if (!e.target.closest('.video')) return

                if (e.target.closest('.video').classList.contains('active')) {

                    resetActiveVideo()
                    return

                }
                e.preventDefault()

                resetActiveVideo()
                e.target.closest('.video').classList.add('active')
                activeVideo = e.target.closest('.video').querySelector('video')
                activeVideo.play()
            }
            e.currentTarget.addEventListener('touchmove', debounce(detectOffset, 50), {once: true})
        })

        const gridButton = document.querySelector('.view-feed__item_grid')
        const listButton = document.querySelector('.view-feed__item_list')

        if (gridButton) {
            gridButton.addEventListener('click', function(e) {
                const items = document.querySelectorAll('.feed-items')

                if (items.length > 0) {
                    for (let index = 0; index < items.length; index++) {
                        const item = items[index]
                        if (item.classList.contains('list')) {
                            item.classList.remove('list')
                        }
                    }
                    listButton.classList.remove('active')
                    gridButton.classList.add('active')
                }


            })
        }

        if (listButton) {
            listButton.addEventListener('click', function(e) {
                const items = document.querySelectorAll('.feed-items')

                if (items.length > 0) {
                    for (let index = 0; index < items.length; index++) {
                        const item = items[index]
                        if (!item.classList.contains('list')) {
                            item.classList.add('list')
                        }
                    }
                    listButton.classList.add('active')
                    gridButton.classList.remove('active')
                }




            })
        }

    }

    window.addEventListener('click', function(e) {
        if (e.target.closest('.modal')) {
            if (!e.target.closest('.modal__content')) {
                e.target.closest('.modal').classList.remove('active')

                setTimeout(function() {
                    lockBody()
                }, 300)
            }
        }
        if (e.target.closest('.auth__signup')) {
            e.target.closest('.auth').querySelector('.auth__button[data-tab-title="signup"]').classList.add('active')
        }
    })


})
