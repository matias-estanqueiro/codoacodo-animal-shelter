const formIndex = document.getElementById('form_index')
const inputsFormIndex = document.querySelectorAll('#form_index input')
const textFormIndex = document.getElementById('index_msg')

const regex = {
	words: /^[a-zA-Z\_\-]{2,25}$/,
	symbol: /^[_.-0-9a-zA-ZÀ-ÿ\s]{15,40}$/, 
	msg: /^[_.-0-9a-zA-ZÀ-ÿ\s]{15,255}$/, 
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	phone: /^\d{7,14}$/
}

const formIndexFields = {
    index_name: false,
    index_email: false,
    index_msg: false
}

fieldValidation = (expresion, input, field) => {
    console.log(field)
    if (expresion.test(input.value)){
        document.getElementById(`group_${field}`).classList.remove('form-group-error')
        document.getElementById(`group_${field}`).classList.add('form-group-ok')
        document.querySelector(`#group_${field} i`).classList.add('fa-check-circle')
        document.querySelector(`#group_${field} i`).classList.remove('fa-times-circle')
        document.querySelector(`#group_${field} .form-input-error`).classList.remove('form-input-error-active')
        formIndexFields[field] = true
    } else {
        document.getElementById(`group_${field}`).classList.add('form-group-error')
        document.getElementById(`group_${field}`).classList.remove('form-group-ok')
        document.querySelector(`#group_${field} i`).classList.remove('fa-check-circle')
        document.querySelector(`#group_${field} i`).classList.add('fa-times-circle')
        document.querySelector(`#group_${field} .form-input-error`).classList.add('form-input-error-active')
        formIndexFields[field] = false

    }
}

const formValidationIndex = (e) => {
    switch (e.target.name) {
        case "index_name":
            fieldValidation(regex.words, e.target, e.target.name)
        break
        case "index_email":
            fieldValidation(regex.email, e.target, e.target.name)
        break
        case "index_msg":
            fieldValidation(regex.msg, e.target, e.target.name)
        break
    }
}

inputsFormIndex.forEach((input) => {
    input.addEventListener('keyup', formValidationIndex)
    input.addEventListener('blur', formValidationIndex)
})

textFormIndex.addEventListener('keyup', formValidationIndex)
textFormIndex.addEventListener('blur', formValidationIndex)

formIndex.addEventListener('submit', (e) => {
    e.preventDefault()
    if(formIndexFields.index_name && formIndexFields.index_email && formIndexFields.index_msg) {
        formIndex.reset()
    document.getElementById('form_ok_msg').classList.add('form-ok-msg-active')
    setTimeout(() => {
        document.getElementById('form_ok_msg').classList.remove('form-ok-msg-active')
    }, 3000)
    document.querySelectorAll('.form-group-ok').forEach((icon) => {
        icon.classList.remove('form-group-ok')
    })
    document.getElementById('form_error_msg').classList.remove('form-error-msg-active')
    } else {
    document.getElementById('form_error_msg').classList.add('form-error-msg-active')
    }
})
