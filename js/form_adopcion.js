const formAdoption = document.getElementById('form_pages')
const inputsFormAdoption = document.querySelectorAll('#form_pages input')
const textFormAdoption = document.getElementById('adoption_msg')

const regex = {
	words: /^[a-zA-Z \_\-]{2,50}$/,
	symbol: /^[_.-0-9a-zA-ZÀ-ÿ\s]{15,200}$/, 
	dni: /^\d{7,8}$/, 
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^\d{10,20}$/,
	street: /^[.-0-9a-zA-ZÀ-ÿ\s]{2,30}$/, 
    streetNumber: /^[0-9a-zA-ZÀ-ÿ\s]{1,5}$/,
    departament: /^[0-9a-zA-Z]{1,3}$/,

}

const formAdoptionFields = {
    adoption_name: false,
    adoption_surname: false,
    adoption_dni: false,
    adoption_email: false,
    adoption_phone: false,
    adoption_street: false,
    adoption_st_number: false,
    adoption_departament: false,
    adoption_location: false,
    adoption_province: false,
    adoption_name_pet: false,
    adoption_msg: false
}

fieldValidation = (expresion, input, field) => {
    console.log(field)
    if (expresion.test(input.value)){
        document.getElementById(`group_${field}`).classList.remove('form-group-error')
        document.getElementById(`group_${field}`).classList.add('form-group-ok')
        document.querySelector(`#group_${field} i`).classList.add('fa-check-circle')
        document.querySelector(`#group_${field} i`).classList.remove('fa-times-circle')
        document.querySelector(`#group_${field} .form-input-error`).classList.remove('form-input-error-active')
        formAdoptionFields[field] = true
    } else {
        document.getElementById(`group_${field}`).classList.add('form-group-error')
        document.getElementById(`group_${field}`).classList.remove('form-group-ok')
        document.querySelector(`#group_${field} i`).classList.remove('fa-check-circle')
        document.querySelector(`#group_${field} i`).classList.add('fa-times-circle')
        document.querySelector(`#group_${field} .form-input-error`).classList.add('form-input-error-active')
        formAdoptionFields[field] = false

    }
}

const formValidationIndex = (e) => {
    switch (e.target.name) {
        case "adoption_name":
            fieldValidation(regex.words, e.target, e.target.name)
            break
        case "adoption_surname":
            fieldValidation(regex.words, e.target, e.target.name)
            break
        case "adoption_dni":
            fieldValidation(regex.dni, e.target, e.target.name)
            break
        case "adoption_email":
            fieldValidation(regex.email, e.target, e.target.name)
            break
        case "adoption_phone":
            fieldValidation(regex.phone, e.target, e.target.name)
            break
        case "adoption_street":
            fieldValidation(regex.street, e.target, e.target.name)
            break
        case "adoption_st_number":
            fieldValidation(regex.streetNumber, e.target, e.target.name)
            break
        case "adoption_departament":
            fieldValidation(regex.departament, e.target, e.target.name)
            break
        case "adoption_location":
            fieldValidation(regex.words, e.target, e.target.name)
            break
        case "adoption_province":
            fieldValidation(regex.words, e.target, e.target.name)
            break
        case "adoption_name_pet":
            fieldValidation(regex.words, e.target, e.target.name)
            break
        case "adoption_msg":
            fieldValidation(regex.symbol, e.target, e.target.name)
            break
    }
}

inputsFormAdoption.forEach((input) => {
    input.addEventListener('keyup', formValidationIndex)
    input.addEventListener('blur', formValidationIndex)
})

textFormAdoption.addEventListener('keyup', formValidationIndex)
textFormAdoption.addEventListener('blur', formValidationIndex)

formAdoption.addEventListener('submit', (e) => {
    e.preventDefault()
    if(
        formAdoptionFields.adoption_name &&
        formAdoptionFields.adoption_surname &&
        formAdoptionFields.adoption_dni &&
        formAdoptionFields.adoption_email &&
        formAdoptionFields.adoption_phone &&
        formAdoptionFields.adoption_street &&
        formAdoptionFields.adoption_st_number &&
        formAdoptionFields.adoption_location &&
        formAdoptionFields.adoption_province &&
        formAdoptionFields.adoption_name_pet &&
        formAdoptionFields.adoption_msg
    ) {
        formAdoption.reset()
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
