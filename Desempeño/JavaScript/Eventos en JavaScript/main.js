//eventos de mouse
function subir(){
    alert ('La informacion se ha guardado exitosamente')
}

/*------------------------------------------------------------------------*/

function grande(x){
    x.style.height = "40px"
    x.style.width = "60x"
}

function normal(x){
    x.style.height = ""
    x.style.width = ""
}


//eventos del teclado

var password = document.getElementById("password");
password.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  
        validate(e);
    }
});

function validate(e) {
    var text = e.target.value;
    alert('La informacion se ha guardado exitosamente')
}

/*------------------------------------------------------------------------*/
let input = document.getElementById("texto");

input.addEventListener('keyup', (event)=>{
    let texto = event.target.value
    console.log(texto);

    let textoAMostar='';
    if (texto !=='') {
        textoAMostar=texto;
    } else {
        textoAMostar = 'input vacio'
    }

    document.getElementById("mostrar-texto").innerHTML = textoAMostar;
})

//eventos de form
function vaciar(x){
    x.value=''
}

/*------------------------------------------------------------------------*/

function restablecer(x){
    
    if (x.value == '') {
        alert('debes ingresar datos')
    }
}

//funcion de navegador

function onload(){ 
    if (confirm("creando un evento desde onload, ¿quieres ir a google?")){ 
        window.open("https://www.google.com/") 
    } 
} 