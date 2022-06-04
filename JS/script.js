// app de gastos
let total = 0 ;

function calcular() {
    let nombre = $("#lbl-nombre").val();
    let monto = $('#lbl-monto').val();
    let resultado = nombre.split();
    let resultadoMonto = monto.split();
    for (let i=0; i <resultado.length; i++) {
        let textoAMostrar = `<h5> ${resultado[i]}: $${resultadoMonto[i]}</h5>`;
        $("#resultado").append(textoAMostrar);
    }
}
    
$("#lbl-monto").keypress(function(event){
    if (event.which == 13) {
        calcular()
    }
})