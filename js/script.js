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

