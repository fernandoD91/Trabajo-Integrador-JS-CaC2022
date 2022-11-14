
function resumen() {
    const precioActual = document.getElementById('precioTicket').innerText;
    const cantidadDeTickets = document.getElementById('cantidad').value;

    const descuento = document.getElementById('categoria').value;

    var precio = cantidadDeTickets * ( ((precioActual * descuento)));
    
    document.getElementById('pago').value= 'Total: $'+precio;

}

const precioTicket=200;

function resumir() {
    var cantidadTicket=document.getElementById('inputCantidad').value;
    var descuento=document.getElementById('inputCategoría').value;
    var precio=cantidadTicket * (precioTicket - ((precioTicket * descuento)/100));
    document.getElementById('compraTotal').value= 'Total a pagar: $'+precio;
}