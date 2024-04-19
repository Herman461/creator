window.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('click', function(e) {
        if (e.target.closest('.user__copy')) {

            try {
                copyText(e.target.closest('.user__link').querySelector('span'))

                setSuccessAlert('Success copied!')
            } catch (e) {
                setErrorAlert('Fail copied!')
            }
        }
    })
})
