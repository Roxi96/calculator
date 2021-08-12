let primera;
let segunda;
let operacion;

function init() {
    //variables
    let resultado = document.getElementById('result');
    let reset = document.getElementById('limpiar');
    let del = document.getElementById('delete');
    let uno = document.getElementById('uno');
    let dos = document.getElementById('dos');
    let tres = document.getElementById('tres');
    let cuatro = document.getElementById('cuatro');
    let cinco = document.getElementById('cinco');
    let seis = document.getElementById('seis');
    let siete = document.getElementById('siete');
    let ocho = document.getElementById('ocho');
    let nueve = document.getElementById('nueve');
    let cero = document.getElementById('cero');
    let sumar = document.getElementById('suma');
    let resta = document.getElementById('resta');
    let multi = document.getElementById('multi');
    let divi = document.getElementById('divi');
    let igual = document.getElementById('igual');
    let puntito = document.getElementById('punto');
    let porcentaje = document.getElementById('porcentaje');


    //eventos
    uno.onclick = function (e) {
        resultado.textContent = resultado.textContent + '1';
    }
    dos.onclick = function (e) {
        resultado.textContent = resultado.textContent + '2';
    }
    tres.onclick = function (e) {
        resultado.textContent = resultado.textContent + '3';
    }
    cuatro.onclick = function (e) {
        resultado.textContent = resultado.textContent + '4';
    }
    cinco.onclick = function (e) {
        resultado.textContent = resultado.textContent + '5';
    }
    seis.onclick = function (e) {
        resultado.textContent = resultado.textContent + '6';
    }
    siete.onclick = function (e) {
        resultado.textContent = resultado.textContent + '7';
    }
    ocho.onclick = function (e) {
        resultado.textContent = resultado.textContent + '8';
    }
    nueve.onclick = function (e) {
        resultado.textContent = resultado.textContent + '9';
    }
    cero.onclick = function (e) {
        resultado.textContent = resultado.textContent + '0';
    }
    puntito.onclick = function (e) {
        resultado.textContent = resultado.textContent + '.';
    }
    //BOTON C
    reset.onclick = function (e) {
        resetear();
    }

    del.onclick = function (e) {
        borrar();
    }
    sumar.onclick = function (e) {
        primera = resultado.textContent;
        resultado.textContent = resultado.textContent + '+';
        operacion = '+';
        limpiar();


    }
    resta.onclick = function (e) {
        primera = resultado.textContent;
        resultado.textContent = resultado.textContent + '-';
        operacion = '-';
        limpiar();

    }
    multi.onclick = function (e) {
        primera = resultado.textContent;
        resultado.textContent = resultado.textContent + '*';
        operacion = '*';
        limpiar();

    }
    divi.onclick = function (e) {
        primera = resultado.textContent;
        resultado.textContent = resultado.textContent + '/';
        operacion = '/';
        limpiar();

    }
    igual.onclick = function (e) {
        segunda = resultado.textContent;
        resolver();
    }


    function resetear() {
        resultado.textContent = ''; //Boton
        primera = 0;
        segunda = 0;
        operacion = '';
    }

    function limpiar() {
        resultado.textContent = '';
    }

    function borrar() {
        resultado.textContent= resultado.textContent.slice(0, -1);
    }
 


    function resolver() {
        let res = 0;
        switch (operacion) {
            case '+':
                res = parseFloat(primera) + parseFloat(segunda);
                break;
            case '-':
                res = parseFloat(primera) - parseFloat(segunda);
                break;
            case '*':
                res = parseFloat(primera) * parseFloat(segunda);
                break;
            case '/':
                res = parseFloat(primera) / parseFloat(segunda);
                break;
        }
        resetear();
        resultado.textContent = res;
    }
}