// A continuacion veremos de a poco como funciona el codigo del ahorcado

// Primero defino el array de las palabras posibles a adivinar

const palabras = [
    'pelota',
    'momia',
    'mazmorra',
    'area',
    'futbol',
    'manzana',
    'marinero',
    'otorrinolaringologo',
    'doctor',
    'hombre',
    'mujer',
    'mama',
    'papa',
    'hermano',
    'television'
]

// Luego, hago una selección aleatoria de la palabra 
let rta = '';
const palabraChosen = palabras[Math.round(Math.random()*(palabras.length - 1))]
let c = 0;
// Y reemplazo todas las letras de dicha palabra por guiones, de esa manera podrán saber cuantas letras tiene
while(c < palabraChosen.length){
    debugger;
    rta = rta + '-'
    debugger;
    c++;
}
// Aquí muestro los guiones en el <input> del html
let respuesta = document.getElementById('palabraElegida')
respuesta.value = rta;
let perdiste = false;

// En esta función sucede todo lo principal del codigo
function checkLetra(){
    let letras = []; //En este caso defino un array usado más adelante para leer las letras individualmente
    let colgado = document.getElementById('colgado') // Aquí me traigo la imagen del ahorcado para usarla más adelante
    let i = 0; // index de un while usado luego
    // Esta es la letra ingresada por el usuario, se pasa a minúscula para que sea más amigable para usuarios de telefono
    const letraRecibida = String(document.getElementById('respuesta').value).toLocaleLowerCase(); 


    if(palabraChosen.includes(letraRecibida)){ //Primero chequeo que la letra esté en la palabra
        letras = palabraChosen.split("") // separo las letras individualmente
        rta = rta.split("") // en esta variable están los guiones, los separo para poder modificarlos individualmente
        while(i < palabraChosen.length){
            let index = letras.indexOf(letraRecibida) // Chequeo en que index está la letra que ingresaron
            rta[index] = letraRecibida // y aqui la reemplazo
            letras[index] = '-' //esto es por si la letra ingresada está más de una vez
            i++;
        }
        rta = rta.join('')
        respuesta.value = rta;
    }else{
        // Acá sólo modifico la imagen segun el transcurso del juego
        var link = colgado.src;
        if(link.includes("ahorcado_completo")){
            colgado.src = "Fotos/ahorcado_sin_pierna_derecha.jpg"
        }else if( link.includes("ahorcado_sin_pierna_derecha")){
            colgado.src = "Fotos/ahorcado_sin_dos_piernas.jpg"
        }else if(link.includes("ahorcado_sin_dos_piernas.jpg")){
            colgado.src = "Fotos/ahorcado_sin_brazo_izquierdo.jpg"
        }else if(link.includes("ahorcado_sin_brazo_izquierdo.jpg")){
            colgado.src = "Fotos/ahorcado_sin_dos_brazos.jpg"
        }else if (link.includes("ahorcado_sin_dos_brazos.jpg")){
            colgado.src = "Fotos/ahorcado_solo_cabeza.jpg"
            perdiste = true;
        }
    }
    
    // por ultimo, el chequeo si el usuario ganó
    debugger;
    if(rta == palabraChosen){
        debugger;
        var cosa = document.getElementById('victoria');
        cosa.innerHTML = '¡Ganaste! ¡Felicitaciones!';
        debugger;
    }else if (perdiste){
        debugger;
        var cosa = document.getElementById('victoria');
        cosa.innerHTML = 'Perdiste :( La palabra era ' + palabraChosen.toUpperCase() + '. Reinicia la pagina e intenta de nuevo'
        debugger;
    }
}
