// app de gastos

var formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
  });

const form = document.getElementById("form");

let cont = 0;
let suma = 0;
let cut = 0;

function calcular() {
    let nombre = $("#nombre").val();
    let monto = $('#monto').val();
    cont += 1;

    calcularTotal(nombre, monto, cont);
    let mostrarNombre= `<h5> ${nombre}:</h5>`;
    let mostrarMonto= `<h5>  ${formatter.format(monto)} </h5>`;

    $("#resultadoNombre").append(mostrarNombre);
    $("#resultadoMonto").append(mostrarMonto);

    form.reset();
}

function calcularTotal(person, spent, c){
    suma += parseInt(spent);
    $("#sumaTotal").text(formatter.format(suma));

    cut = suma / c;
    $("#cut").text(formatter.format(Math.round(cut)));
}

$("#monto").keypress(function(event){
    if (event.which == 13) {
        calcular()
    }
})