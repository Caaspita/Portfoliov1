const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const form = document.getElementById('form');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const errorNombre = document.getElementById('error_nombre');
const errorEmail = document.getElementById('error_email');
const errorAsunto = document.getElementById('error_asunto');
const errorMensaje = document.getElementById('error_mensaje');

form.addEventListener("submit", e =>{
    e.preventDefault();

    validar();
})

function validar(){
    if(nombre.value === ""){
        errorNombre.style.display = "flex";
        errorNombre.innerHTML = "Por favor, introduzca su nombre";
        nombre.classList.add('contacto_error-input');
    }else {
        errorNombre.style.display = "none";
        errorNombre.innerHTML = ""
        nombre.classList.remove('contacto_error-input');
    }
    if(nombre.value.length < 3 ){
        errorNombre.style.display = "flex";
        errorNombre.innerHTML = "El nombre es demasiado corto";
        nombre.classList.add('contacto_error-input');
    }else{
        errorNombre.style.display = "none";
        errorNombre.innerHTML = ""
        nombre.classList.remove('contacto_error-input');
    }

    if (!emailRegex.test(email.value)) {
        errorEmail.style.display = "flex";
        errorEmail.innerHTML = "Por favor, ingrese un email valido";
        email.classList.add('contacto_error-input');
    }else{
        errorEmail.style.display = "none";
        errorEmail.innerHTML = "";
        email.classList.remove('contacto_error-input');
    }

    if(asunto.value === ""){
        errorAsunto.style.display = "flex";
        errorAsunto.innerHTML = "Por favor, ingrese el asunto";
        asunto.classList.add('contacto_error-input');
    }else{
        errorAsunto.style.display = "none";
        errorAsunto.innerHTML = "";
        asunto.classList.remove('contacto_error-input');
    }

    if(asunto.value.length < 6 && asunto.value.length > 1){
        errorAsunto.style.display = "flex";
        errorAsunto.innerHTML = "Por favor, ingrese un asunto mas largo";
        asunto.classList.add('contacto_error-input');
    }

    if(mensaje.value === ""){
        errorMensaje.style.display = "flex";
        errorMensaje.innerHTML = "Por favor, ingrese un mensaje";
        mensaje.classList.add('contacto_error-input');
    }else{
        errorMensaje.style.display = "none";
        errorMensaje.innerHTML = "";
        mensaje.classList.remove('contacto_error-input');
    }
    
    if(mensaje.value.length > 300 ){
        errorMensaje.style.display = "flex";
        errorMensaje.innerHTML = "Por favor, el mensaje debe contener maximo 300 caracteres";
        mensaje.classList.add('contacto_error-input');
    }else{
        mensaje.classList.remove('contacto_error-input');
    }

}
