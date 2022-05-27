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
        switch(colgado.src){
            case 'http://127.0.0.1:5500/Fotos/ahorcado_completo.png':
                colgado.src = "http://127.0.0.1:5500/Fotos/ahorcado_sin_pierna_derecha.jpg"
                break;
            case 'http://127.0.0.1:5500/Fotos/ahorcado_sin_pierna_derecha.jpg':
                colgado.src = "http://127.0.0.1:5500/Fotos/ahorcado_sin_dos_piernas.jpg"
                break;
            case "http://127.0.0.1:5500/Fotos/ahorcado_sin_dos_piernas.jpg":
                colgado.src = "http://127.0.0.1:5500/Fotos/ahorcado_sin_brazo_izquierdo.jpg"
                break;
            case "http://127.0.0.1:5500/Fotos/ahorcado_sin_brazo_izquierdo.jpg":
                colgado.src = "http://127.0.0.1:5500/Fotos/ahorcado_sin_dos_brazos.jpg";
                break;
            case "http://127.0.0.1:5500/Fotos/ahorcado_sin_dos_brazos.jpg":
                colgado.src = "http://127.0.0.1:5500/Fotos/ahorcado_solo_cabeza.jpg"         
        }
        debugger;
    }

    debugger;
    if(rta == palabraChosen){
        debugger;
        var cosa = document.getElementById('victoria')
        debugger;
        cosa.innerHTML = 'SOS UN NAZHEI'
    }
}
