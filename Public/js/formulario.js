const form = document.querySelector('#form');

const selected = document.getElementById('option');

const talents = document.getElementById('talentos');
const services = document.getElementById('servicios');

form.addEventListener('submit', handlesubmit)

async function handlesubmit(event) {

    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })
    if (response.ok) {
        this.reset()
        alert("Formulario enviado!")
        gtag('event', 'form send')
    }

}

talents.addEventListener('change', (event) => {
    if (event.target.value != '0') {
        services.setAttribute('disabled', '');
        console.log(event.target.value)
    }
    else {
        services.removeAttribute('disabled', '');
    }
});

services.addEventListener('change', (event) => {
    if (event.target.value != '0') {
        talents.setAttribute('disabled', '');
        console.log(event.target.value)
    }
    else {
        talents.removeAttribute('disabled', '');
    }
});