const namaDepan = document.getElementById('nama-depan')
const NamaBelakang = document.getElementById('nama-belakang')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

Form.addEventListener('submit' ,(e) => {
    let messages = []
    if (namaDepan.value === '' || namaDepan.value == null) {
        messages.push('First name cannot be empty')
    }

    if(messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})