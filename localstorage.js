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

    //Lo asignamos al localStorage (se necesita usar JSON.stringfy para guardar arreglos)
    localStorage.nota = txtNota.value;
    mostrarNotas();
}

function mostrarNotas() {

    //Trae el div notas
    var divNotas = document.getElementById("divNotas");

    //Asigna las notas desde el localStorage
    divNotas.innerHTML = localStorage.nota;
}