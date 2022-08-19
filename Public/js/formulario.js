const form = document.querySelector('#form');
const talents = document.getElementById('talentos');
const services = document.getElementById('servicios');


// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
	'use strict'

	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	const forms = document.querySelectorAll('.needs-validation')

	// Loop over them and prevent submission
	Array.from(forms).forEach(form => {
		form.addEventListener('submit', event => {
			if (!form.checkValidity()) {
				event.preventDefault()
				event.stopPropagation()
				}


			
			form.classList.add('was-validated')
			
			form.addEventListener('submit', handlesubmit)
			
				}, false)
	})
		
})()



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
        //this.reset()


        alert("Formulario enviado!")
        gtag('event', 'form send')
    }

}

talents.addEventListener('change', (event) => {
    if (event.target.value != '0') {
        services.setAttribute('disabled', '');
    }
    else {
        services.removeAttribute('disabled', '');
    }
});

services.addEventListener('change', (event) => {
    if (event.target.value != '0') {
        talents.setAttribute('disabled', '');
    }
    else {
        talents.removeAttribute('disabled', '');
    }
});
