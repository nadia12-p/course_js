window.onload = iniciar
var tareas = [];

function iniciar () {
    var btnAgregar = document.getElementById("btnAgregar");
    btnAgregar.addEventListener("click", clickBtnAgregar);
}

function clickBtnAgregar() {
    var txtTarea = document.getElementById("txtTarea");
    var tarea = txtTarea.value;
    tareas.push(tarea);
    mostrarTareas()
}

function mostrarTareas() {
    var listado = document.getElementById("listado");
    var html = "";
    for (var tarea of tareas) {
        html += tarea + "<br/>"
    }
    listado.innerHTML = html;
}