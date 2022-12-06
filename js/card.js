const btnNext = document.getElementById('button_next')
const btnPrevious = document.getElementById('button_previous')
const btnMoreInfo = document.getElementById('card_link')
let pageNumber = 1
let modalInfo = document.querySelector('.info-pet')

fetch(`https://api.adoptapet.me/ap?page=${pageNumber}`)
    .then(response => response.json())
    .then(data => crearTarjeta(data.page))
    .catch(err => console.log(err))


function crearTarjeta(mascotas) {
    let mainCards = document.querySelector('.main-cards')
    mainCards.innerHTML = ``
    mascotas.forEach(mascota => {
        let idPet = mascota.api_id 
        let name = mascota.name.toUpperCase()
        let description = mascota.desc.substring(0, 255)
        mainCards.innerHTML += `
        <div class="card-adop">
            <div class="face front">
                <img src="${mascota.pic_url}" alt="">
                <h3>${name}</h3>
            </div>
            <div class="face back">
                <h3>${name}</h3>
                <p>${description}</p>
                <div class="link">
                    <button id="card_link" class="card-link" onclick="moreInfoPet(${idPet})">+ Info</button>
                </div>
            </div>
        </div>
        `  
    })
}

function moreInfoPet(pet) {
    fetch (`https://api.adoptapet.me/ap/${pet}`)
        .then(response => response.json())
        .then(data => crearModal(data))
        .catch(err => console.log(err))
    
    function crearModal(data) {
        modalInfo.innerHTML = `
        <section class="modal">
            <div class="modal-container">
                <div>
                    <h2>NOMBRE: </h2>
                    <h3>EDAD: </h3>
                    <h3>GENERO: </h3>
                    <h3>RAZA: </h3>
                    <h3>ESPECIE: </h3>
                    <h3>REFUGIO: </h3>
                    <h3>UBICACION REFUGIO: </h3>
                </div>
                <div>
                    <h2 class="modal-title span">${data.name}</h2>
                    <h3 class="span">${data.age}</h3>
                    <h3 class="span">${data.sex}</h3>
                    <h3 class="span">${data.species_breed.breed_name}</h3>
                    <h3 class="span">${data.species_breed.species_name}</h3>
                    <h3 class="span">${data.center.name}</h3>
                    <h3 class="span">${data.center.city}</h3>
                </div>
                <button id="button-close" class="button-style span"><a href="../adopcion_info.html">Adoptá!</a></button>
                <button id="button-close" class="button-style span" onclick="discardModal()">Cerrar</button>
            </div>
        </section>
        `
    }
}

function discardModal() {
    modalInfo.innerHTML = ``
}

function pagination(page, symbol) {
    if (symbol == "+") {
        if (page !== 22)
        page += 1
    }
    if (symbol == "-") {
        if (page !== 1) {
            page -= 1
        }
    }

    fetch(`https://api.adoptapet.me/ap?page=${page}`)
        .then(response => response.json())
        .then(data => crearTarjeta(data.page))
        .catch(err => console.log(err))

    return page
}

btnNext.addEventListener('click', () => {
    pageNumber = pagination(pageNumber, "+")
    window.scroll(0,0)
})

btnPrevious.addEventListener('click', () => {
    pageNumber = pagination(pageNumber, "-")
    window.scroll(0,0)
})