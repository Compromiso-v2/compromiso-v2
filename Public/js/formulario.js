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
        headers : {
            'Accept' : 'application/json'
        }
    })
    if(response.ok){
        this.reset()
        alert("Formulario enviado!")
        gtag('event', 'form send')
    }

}


talents.addEventListener('change', (event) => {
    if(event.target.value != '0'){
        services.setAttribute('disabled', '');
    }
    else{
        services.removeAttribute('disabled', '');
    }
});
services.addEventListener('change', (event) => {
    if(event.target.value != '0'){
        talents.setAttribute('disabled', '');
    }
    else{
        talents.removeAttribute('disabled', '');
    }
});



/* button.setAttribute('disabled', '');

else if(event.target.value == '0'){
    services.classList.add("form--disabled")
    talents.classList.add("form--disabled")
} */