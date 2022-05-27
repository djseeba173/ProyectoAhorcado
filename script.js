const palabras = [
    'pelota',
    'momia',
    'mazmorra',
    'area'
]
let rta = '';
const palabraChosen = palabras[Math.round(Math.random()*(palabras.length - 1))]
let c = 0;
while(c < palabraChosen.length){
    debugger;
    rta = rta + '-'
    debugger;
    c++;
}
let respuesta = document.getElementById('palabraElegida')
respuesta.value = rta;
let perdiste = false;


function checkLetra(){
    let letras = [];
    let flag = true;
    let colgado = document.getElementById('colgado')
    let i = 0;
    const letraRecibida = String(document.getElementById('respuesta').value);

    if(palabraChosen.includes(letraRecibida)){
        console.log('nazhei')
        letras = palabraChosen.split("")
        rta = rta.split("")
        while(i < palabraChosen.length){
            debugger;
            let index = letras.indexOf(letraRecibida)
            rta[index] = letraRecibida
            letras[index] = '-'
            debugger;
            i++;
            debugger;
        }
        rta = rta.join('')
        respuesta.value = rta;
    }else{
        debugger;
        var link = colgado.src;
        if(link.includes("ahorcado_completo")){
            debugger;
            colgado.src = "Fotos/ahorcado_sin_pierna_derecha.jpg"
        }else if( link.includes("ahorcado_sin_pierna_derecha")){
            debugger;
            colgado.src = "Fotos/ahorcado_sin_dos_piernas.jpg"
        }else if(link.includes("ahorcado_sin_dos_piernas.jpg")){
            debugger;
            colgado.src = "Fotos/ahorcado_sin_brazo_izquierdo.jpg"
        }else if(link.includes("ahorcado_sin_brazo_izquierdo.jpg")){
            debugger;
            colgado.src = "Fotos/ahorcado_sin_dos_brazos.jpg"
        }else if (link.includes("ahorcado_sin_dos_brazos.jpg")){
            debugger;
            colgado.src = "Fotos/ahorcado_solo_cabeza.jpg"
            perdiste = true;
        }
        debugger;
    }

    debugger;
    if(rta == palabraChosen){
        debugger;
        var cosa = document.getElementById('victoria');
        debugger;
        cosa.innerHTML = 'SOS UN NAZHEI';
    }else if (perdiste){
        debugger;
        var cosa = document.getElementById('victoria');
        debugger;
        cosa.innerHTML = 'Perdiste como un perdedor. Reinicia la pagina e intenta de nuevo'
    }
}
