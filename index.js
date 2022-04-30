window.addEventListener("load", function () {
var input=document.querySelector("#mensaje");
var resultado=document.querySelector("#resultado")

var button=document.querySelector("#encriptar");
var cajaVacia=document.querySelector(".cajaVacia")
var cajaDeSalida=document.querySelector(".conTexto")
var desencriptar=document.querySelector("#desencriptar");
var textoSalida=document.querySelector(".textoSalida")
var btncopiar=document.querySelector("#copiar")

input.focus();
button.onclick=encriptar;
desencriptar.onclick=descifrar ;
var mensaje=input.value;



function encriptar(){
    var mensaje=input.value;
    
      var encriptado=mensaje.replace(/e/g,"enter").replace(/i/g,"imes").replace(/o/g, "ober").replace(/u/g,"ufat").replace(/a/g,"ai");
   console.log(encriptado)
   cajaVacia.style.display="none"
   cajaDeSalida.style.display="flex"

       textoSalida.value=encriptado
input.value="";
}
console.log(mensaje)

function descifrar(){
    var textoCifrado=input.value;
      
      var desencriptado=textoCifrado.replace(/enter/g,"e").replace(/imes/g,"i").replace(/ai/g,"a").replace(/ober/g, "o").replace(/ufat/g,"u");
      
    console.log(desencriptado)
    resultado.value=desencriptado
    cajaVacia.style.display="none"
   cajaDeSalida.style.display="flex"

       textoSalida.value=desencriptado
      } 
  
      btncopiar.addEventListener('click',function() {
        textoSalida.select();
        document.execCommand("copy");
        mensaje.value="";
        alert("mensaje copiado")
      })
    })