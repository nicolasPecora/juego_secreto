let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numerMaximo = 10
console.log(numeroSecreto);

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value );
    
    console.log(intentos);
    
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else {
        //El ususrio no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
    };
    intentos++;
    limpiarCaja();
    return;
}


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function gerarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random () * 10) + 1;
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    
    //Si ya soteamos todos los números
    if (listaNumerosSorteados.length == numerMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    } else {
    
        // Si el número generado esta incluido en la lista
        
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return gerarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado
        }
    }
}


function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales() {
    asignarTextoElemento('h1', "Juego del número secreto");
    asignarTextoElemento('p', `Indica un número del 1 al ${numerMaximo}`);
    numeroSecreto = gerarNumeroSecreto();
    intentos = 1
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Generar el número aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
     //Deshabilitar el boton del nuevo juego
     document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();
