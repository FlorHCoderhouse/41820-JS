const btnSwal = document.getElementById('botonSwal');


/* Swal.fire(
    'The Internet?',
    'That thing is still around?',
    'question'
  ) */

btnSwal.onclick = () => {
    Swal.fire({
        title: '¡Hola!',
        text: 'Te damos la bienvenida a nuestra app',
        icon: 'info',
        iconColor: '#66f4ae',
        confirmButtonText: 'Gracias',
        showCancelButton: true,
        cancelButtonText: 'No me interesa',
        timer: 2500
    })
}

/* Swal.fire({
    title: 'Eliminar producto',
    text: '¿Está seguro de eliminar el producto?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, seguro',
    cancelButtonText: 'No, no quiero',
    backdrop: '#66f4ae22'
}).then((result) => {
    if (result.isConfirmed) {
        //borrar(); esta función no existe, pero ustedes deberían tener alguna en su proyecto
        Swal.fire('Borrado', 'El producto ha sido eliminado', 'success')
    }
}) */


const btnToast = document.getElementById('botonToast');
let carrito = ['papas', 'pepinos', 'manzanas', 'naranjas', 'zucchini', 'espinaca'];


btnToast.onclick = () => {

    Toastify({
        text: `Hoy es ${ahora.toLocaleString(DateTime.DATE_FULL)}, y vos tenés un carrito con ${carrito.length} productos`,
        duration: 2500,
        style: {
            color: 'white',
            width: '20vw',
            height: 80,
            background: "radial-gradient(circle, rgba(235,0,255,1) 10%, rgba(86,9,121,1) 65%, rgba(68,0,50,1) 93%)"//Este gradiente lo hice con https://cssgradient.io/
        },
        offset: {
            x: 600,
            y: 300
        }, onClick: () => {
            Toastify({
                text: 'Hola, te voy a llevar a Mercado Libre',
                duration: 2000,
                position: 'left',
                destination: 'https://mercadolibre.com.ar',
                newWindow: true
            }).showToast();
        }
    }).showToast()

}


const DateTime = luxon.DateTime;
const ahora = DateTime.now()
/* 
console.log(ahora);

const dt = DateTime.local(2022, 12, 8, 12, 15);
console.log(dt);

console.log(ahora.toString());
console.log(ahora.toLocaleString());
console.log(ahora.toLocaleString(DateTime.DATE_FULL));
console.log(ahora.toLocaleString(DateTime.DATE_HUGE));
console.log(ahora.toLocaleString(DateTime.TIME_SIMPLE)); */

//Ejemplo integrador de librerías
const btnCalcular = document.getElementById('calcular');
let inputsFecha = document.querySelectorAll('input[type="date"]');

let inicio = DateTime.now().toFormat('yyyy-MM-dd');
console.log(inicio);
let fin = DateTime.now().plus({ months: 4 }).toFormat('yyyy-MM-dd');
console.log(fin);

inputsFecha.forEach(element => {
    element.setAttribute("min",inicio);
    element.setAttribute("max",fin);
});


function calcularEstadia(checkIn,checkOut){
    return checkOut.diff(checkIn).as('days');
}

function calcularPrecioTotal(estadia, precio){
    return estadia*precio;
}

btnCalcular.addEventListener('click', ()=>{
    let checkIn = DateTime.fromISO(inputsFecha[0].value);
    let checkOut = DateTime.fromISO(inputsFecha[1].value);
    let estadia = calcularEstadia(checkIn, checkOut);
    let precioTotal =calcularPrecioTotal(estadia, 7000);

    Swal.fire({
        title: 'Resultado',
        text: `Tu estadía de ${estadia} días tiene un precio total de $${precioTotal}`,
        icon: 'info',
        iconColor: '#00ff00',
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar',
        position: 'top-center',
        backdrop: '#445566aa'
    })
})