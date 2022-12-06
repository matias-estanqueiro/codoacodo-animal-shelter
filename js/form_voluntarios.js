const formVolunteer = document.getElementById('form_pages')
const inputsFormVolunteer = document.querySelectorAll('#form_pages input')


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

const formVolunteerFields = {
    volunteer_name: false,
    volunteer_surname: false,
    volunteer_dni: false,
    volunteer_email: false,
    volunteer_phone: false,
    volunteer_street: false,
    volunteer_st_number: false,
    volunteer_departament: false,
    volunteer_location: false,
    volunteer_province: false,
}

fieldValidation = (expresion, input, field) => {
    console.log(field)
    if (expresion.test(input.value)){
        document.getElementById(`group_${field}`).classList.remove('form-group-error')
        document.getElementById(`group_${field}`).classList.add('form-group-ok')
        document.querySelector(`#group_${field} i`).classList.add('fa-check-circle')
        document.querySelector(`#group_${field} i`).classList.remove('fa-times-circle')
        document.querySelector(`#group_${field} .form-input-error`).classList.remove('form-input-error-active')
        formVolunteerFields[field] = true
    } else {
        document.getElementById(`group_${field}`).classList.add('form-group-error')
        document.getElementById(`group_${field}`).classList.remove('form-group-ok')
        document.querySelector(`#group_${field} i`).classList.remove('fa-check-circle')
        document.querySelector(`#group_${field} i`).classList.add('fa-times-circle')
        document.querySelector(`#group_${field} .form-input-error`).classList.add('form-input-error-active')
        formVolunteerFields[field] = false

    }
}

const formValidationVolunteer = (e) => {
    switch (e.target.name) {
        case "volunteer_name":
            fieldValidation(regex.words, e.target, e.target.name)
            break
        case "volunteer_surname":
            fieldValidation(regex.words, e.target, e.target.name)
            break
        case "volunteer_dni":
            fieldValidation(regex.dni, e.target, e.target.name)
            break
        case "volunteer_email":
            fieldValidation(regex.email, e.target, e.target.name)
            break
        case "volunteer_phone":
            fieldValidation(regex.phone, e.target, e.target.name)
            break
        case "volunteer_street":
            fieldValidation(regex.street, e.target, e.target.name)
            break
        case "volunteer_st_number":
            fieldValidation(regex.streetNumber, e.target, e.target.name)
            break
        case "volunteer_departament":
            fieldValidation(regex.departament, e.target, e.target.name)
            break
        case "volunteer_location":
            fieldValidation(regex.words, e.target, e.target.name)
            break
        case "volunteer_province":
            fieldValidation(regex.words, e.target, e.target.name)
            break
    }
}

inputsFormVolunteer.forEach((input) => {
    input.addEventListener('keyup', formValidationVolunteer)
    input.addEventListener('blur', formValidationVolunteer)
})

formVolunteer.addEventListener('submit', (e) => {
    e.preventDefault()
    if(
        formVolunteerFields.volunteer_name &&
        formVolunteerFields.volunteer_surname &&
        formVolunteerFields.volunteer_dni &&
        formVolunteerFields.volunteer_email &&
        formVolunteerFields.volunteer_phone &&
        formVolunteerFields.volunteer_street &&
        formVolunteerFields.volunteer_st_number &&
        formVolunteerFields.volunteer_location &&
        formVolunteerFields.volunteer_province
    ) {
        formVolunteer.reset()
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
