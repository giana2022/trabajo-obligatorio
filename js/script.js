/* function esVisible(elemento){
    if (elemento.style.visibility == 'visible'){
        return true
    }
    else {
        return false;
    }
}
function clickBoton(barra){
    let esvisibleBarra = esVisible(barra);
    if(esvisibleBarra===true){
        barra.style.visibility = 'hidden'
        console.log('visible')
    }
    else {
        barra.style.visibility = 'visible';
    }
} */
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

