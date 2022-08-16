const form = document.querySelector('#form');

const selected = document.getElementById('option');

const talents = document.getElementById('search_talents');
const services = document.getElementById('search_services');

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


selected.addEventListener('change', (event) => {
    if(event.target.value == 'talentos'){
        services.classList.add("form--disabled")
        talents.classList.remove("form--disabled")
    }else{
        talents.classList.add("form--disabled")
        services.classList.remove("form--disabled")
    }
});