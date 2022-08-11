window.onload = iniciar;

function iniciar() {
    //btnAgregar escucha el click
    var btnAgregar = document.getElementById("btnAgregar");
    btnAgregar.addEventListener("click", clickBtnAgregar);

    //renderiza la nota
    mostrarNotas();
}

function clickBtnAgregar() {
    //Traemos el dato de txtnota
    var txtNota = document.getElementById("txtNota");

    var notas = [];
    if (localStorage.notas != undefined) {
        notas = JSON.parse(localStorage.notas);
    }

    notas.push(txtNota.value);
    localStorage.notas = JSON.stringify(notas); //transforma a string
    mostrarNotas();
}

function mostrarNotas() {

    //Trae el div notas
    var divNotas = document.getElementById("divNotas");

    //Asigna las notas desde el localStorage
    var notas = [];
    if (localStorage.notas != undefined) {
        notas = JSON.parse(localStorage.notas);
    } //regresa a dato original aka array
    
    var html = "";
    for (var nota of notas) {
        html += nota + "<br />"
    }
    divNotas.innerHTML = html;
}