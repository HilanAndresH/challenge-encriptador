
const textArea = document.querySelector(".txt-usuario");
const mensaje=document.querySelector(".txt-mensaje");
console.log(textArea);
console.log(mensaje);
function encriptar(cadenaTextoUsuario) {
    cadenaTextoUsuario = cadenaTextoUsuario.replace(/e/g, "enter");
    cadenaTextoUsuario = cadenaTextoUsuario.replace(/i/g, "imes");
    cadenaTextoUsuario = cadenaTextoUsuario.replace(/a/g, "ai");
    cadenaTextoUsuario = cadenaTextoUsuario.replace(/o/g, "ober");
    cadenaTextoUsuario = cadenaTextoUsuario.replace(/u/g, "ufat");
    return cadenaTextoUsuario;
}

function desencriptar(cadenaTextoEncriptada) {
    cadenaTextoEncriptada = cadenaTextoEncriptada.replace(/enter/g,"e" );
    cadenaTextoEncriptada = cadenaTextoEncriptada.replace(/imes/g, "i");
    cadenaTextoEncriptada = cadenaTextoEncriptada.replace(/ai/g, "a");
    cadenaTextoEncriptada = cadenaTextoEncriptada.replace(/ober/g,"o" );
    cadenaTextoEncriptada = cadenaTextoEncriptada.replace(/ufat/g, "u");
    return cadenaTextoEncriptada;
}

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value=textoEncriptado;
    textArea.value="";
    mensaje.style.background.Image="none";
}

function btnDesEncriptar(){
    const textoDesEncriptado = desencriptar(textArea.value);
    mensaje.value=textoDesEncriptado;
    /*textArea.value="";*/
    mensaje.style.background.image="none";
}
function btnCopiar(){
    mensaje.setSelectionRange(0, 99999); // Para dispositivos móviles
    mensaje.select();
   document.execCommand("copy");

}
function limpiarPlaceholder(){
    textArea.Placeholderr="";   
}

// Añadir un evento al escribir en el textarea
const caracteresPermitidos = /^[a-zA-Z0-9 .,]*$/;

function validarCaracter(){
   // Validar el valor del textarea
   if (!caracteresPermitidos.test(textArea.value)) {
    // Mostrar mensaje de error
    mensaje.style.display = 'block';
    mensaje.value="Caracter no permitido";
    // Eliminar el último carácter ingresado si es inválido
   textArea.value = textArea.value.slice(0, -1);
} else {
    // Ocultar el mensaje de error si todo está bien
   // mensaje.style.display = 'none';
    mensaje.value="";
}
}

