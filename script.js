window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'PageUp': {
            e.preventDefault()
            history.back()
            break
        }
        case 'PageDown': {
            e.preventDefault()
            history.forward()
            break
        }
    }
})
