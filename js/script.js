let boton = document.querySelector('.boton-menu');
let nav = document.querySelector('.nav-inicio');

boton.addEventListener('click',()=>{
    if(nav.className == 'nav-inicio'){
        nav.className = 'nav-inicio active';
        /*activa barra*/
    }
    else{
        nav.className = 'nav-inicio';
        /*oculta barra*/
    }
});

/* function validar(nombr, mail) {
    let nombre = document.forms["Form"]["nombre"].value;
    let email = document.forms["Form"]["email"].value;
    let mensaje = document.forms["Form"]["mensaje"].value;
    if (nombre == "") {
      alert("Escribe tu nombre por favor...");
      return false;
    }
    if (email == "") {
      alert("Escribe tu email por favor...");
      return false;
    }
    if (mensaje == "") {
      alert("Escribe un mensaje por favor...");
      return false;
    }
    if(nombre!==""){
      let boolean = validarTexto(nombr, mail);
      if (boolean == false) {
        return false
      }
    }
  }

function validarTexto(nombre, email) {
    let valorNombre = nombre.value;
   // let valorEmail = email.value;
    let reg = new RegExp(/^([a-zA-Z]+)(\s[a-zA-Z]+)*$/);
   // let regemail = new RegExp('/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/');
    if (reg.test(valorNombre)){
        console.log(valorNombre, 'si coincide')
        return true
    }
    else {
        console.log(valorNombre, 'no coincide')
        alert('Valor incorrecto solo se admiten letras')
        console.log(false)
        return false
    }
   
}

let nombre = document.getElementById('nombre'),
email = document.getElementById('email'),
enviar = document.getElementById('enviar');
let form = document.getElementById('formulario');
enviar.addEventListener("click", function(){
  validar(nombre, email)
  /* validarTexto() */