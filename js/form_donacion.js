const formDonation = document.getElementById('form_pages')
const inputsFormDonation = document.querySelectorAll('#form_pages input')

const regex = {
	words: /^[a-zA-Z \_\-]{2,50}$/,
	symbol: /^[_.-0-9a-zA-ZÀ-ÿ\s]{15,200}$/, 
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^\d{10,20}$/,
	address: /^[0-9a-zA-Z ]{10,50}$/,
    location: /^[0-9a-zA-Z ]{2,20}$/,
	postal_code: /^[0-9a-zA-Z]{4,8}$/, 
	card_number: /^\d{16,18}$/, 
	cvc: /^\d{3,3}$/ 
}

const formDonationFields = {
    donation_name: false,
    donation_surname: false,
    donation_email: false,
    donation_phone: false,
    donation_address: false,
    donation_location: false,
    donation_province: false,
    donation_postal_code: false,
    donation_card_name: false,
    donation_card_number: false,
    donation_card_cvc: false
}

fieldValidation = (expresion, input, field) => {
    console.log(field)
    if (expresion.test(input.value)){
        document.getElementById(`group_${field}`).classList.remove('form-group-error')
        document.getElementById(`group_${field}`).classList.add('form-group-ok')
        document.querySelector(`#group_${field} i`).classList.add('fa-check-circle')
        document.querySelector(`#group_${field} i`).classList.remove('fa-times-circle')
        document.querySelector(`#group_${field} .form-input-error`).classList.remove('form-input-error-active')
        formDonationFields[field] = true
    } else {
        document.getElementById(`group_${field}`).classList.add('form-group-error')
        document.getElementById(`group_${field}`).classList.remove('form-group-ok')
        document.querySelector(`#group_${field} i`).classList.remove('fa-check-circle')
        document.querySelector(`#group_${field} i`).classList.add('fa-times-circle')
        document.querySelector(`#group_${field} .form-input-error`).classList.add('form-input-error-active')
        formDonationFields[field] = false

    }
}

const formValidationDonation = (e) => {
    switch (e.target.name) {
        case "donation_name":
            fieldValidation(regex.words, e.target, e.target.name)
            break
        case "donation_surname":
            fieldValidation(regex.words, e.target, e.target.name)
            break
        case "donation_email":
            fieldValidation(regex.email, e.target, e.target.name)
            break
        case "donation_phone":
            fieldValidation(regex.phone, e.target, e.target.name)
            break
        case "donation_address":
            fieldValidation(regex.address, e.target, e.target.name)
            break
        case "donation_location":
            fieldValidation(regex.location, e.target, e.target.name)
            break
        case "donation_province":
            fieldValidation(regex.words, e.target, e.target.name)
            break
        case "donation_postal_code":
            fieldValidation(regex.postal_code, e.target, e.target.name)
            break
        case "donation_card_name":
            fieldValidation(regex.words, e.target, e.target.name)
            break
        case "donation_card_number":
            fieldValidation(regex.card_number, e.target, e.target.name)
            break
        case "donation_card_cvc":
            fieldValidation(regex.cvc, e.target, e.target.name)
            break
    }
}

inputsFormDonation.forEach((input) => {
    input.addEventListener('keyup', formValidationDonation)
    input.addEventListener('blur', formValidationDonation)
})

formDonation.addEventListener('submit', (e) => {
    e.preventDefault()
    if(
        formDonationFields.donation_name &&
        formDonationFields.donation_surname &&
        formDonationFields.donation_email &&
        formDonationFields.donation_phone &&
        formDonationFields.donation_address &&
        formDonationFields.donation_location &&
        formDonationFields.donation_province &&
        formDonationFields.donation_postal_code &&
        formDonationFields.donation_card_name &&
        formDonationFields.donation_card_number &&
        formDonationFields.donation_card_cvc
    ) {
        formDonation.reset()
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
