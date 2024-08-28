let cadenaUsuario="";
let cadenaEncriptada="";
let letraCadena="";

function encriptar(){
    cadenaUsuario="hola"
    for(i=0;i<cadenaUsuario.length;i++){
     letraCadenaUsuario=cadenaUsuario[i];
     if (letraCadenaUsuario=="a" || letraCadenaUsuario=="e" ||  letraCadenaUsuario=="i" || letraCadenaUsuario=="o" ||  letraCadenaUsuario=="u" ) {
      let letraLlave=asignarLlave(letraCadenaUsuario) ; 
      cadenaEncriptada+=letraLlave;
      console.log("Cadena encriptada:",cadenaEncriptada);
    } else {
        cadenaEncriptada+= letraCadenaUsuario;
    }
    }
    console.log("se encriptó en:",cadenaEncriptada)
} 

function asignarLlave(letra) {
   /* console.log(letra);*/
   console.log("Letra recibida",letra);
    let llave=""
    switch (letra) {
        case "e":
           llave="enter"
           break;    
        case "i":
           llave="imes"
           break; 
        case "a":
           llave="ai"
           break; 
        case "o":
           llave="ober" 
           break; 
        case "u":
           llave="ufat"  
           break;          
        default:
           break;
    }
    return(llave);
}



encriptar();