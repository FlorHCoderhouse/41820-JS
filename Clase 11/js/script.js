const cuentasUsuarioNuevo = [
    {
        tipo: 'pesos',
        simbolo: '$',
        numero: '120485',
        saldo: 50000
    }, {
        tipo: 'dolares',
        simbolo: 'u$s',
        numero: '220007',
        saldo: 87
    },
    {
        tipo: 'pesos',
        simbolo: '$',
        numero: '120500',
        saldo: 23000
    },
    {
        tipo: 'pesos',
        simbolo: '$',
        numero: '120930',
        saldo: 85500
    }, {
        tipo: 'dolares',
        simbolo: 'u$s',
        numero: '220485',
        saldo: 1000
    },
    {
        tipo: 'dolares',
        simbolo: 'u$s',
        numero: '221501',
        saldo: 230
    }
]


//Elementos que usaré del DOM
const btnSiguiente = document.getElementById('btnSiguiente'),
    btnCancelar = document.getElementById('btnCancelar'),
    btnUltima = document.getElementById('btnUltima'),
    btnVolver = document.getElementById('btnVolver'),
    formDatos = document.getElementById('ingresoDatosPF'),
    monto = document.getElementById('monto'),
    dias = document.getElementById('dias'),
    selectorTipoPF = document.getElementById('tipoPF'),
    selectorCuentas = document.getElementById('cuentas'),
    checkDatos = document.getElementById('guardarDatos'),
    cardIngreso = document.querySelector('.cardIngreso'),
    confirmacion = document.querySelector('.confirmacion'),
    tasaPesos = 0.75,
    tasaDolares = 0.01;



//Elegir del array de todas las cuentas, aquellas que sean las que el usuario elige en el simulador, sólo en pesos o sólo en dólares
function elegirTipoCuenta(cuentasUsuario, moneda) {
    return cuentasUsuario.filter(cuenta => cuenta.tipo == moneda);
}

//Crear las opciones del select según el tipo de cuenta elegida (usa el array que devuelve la función elegirTipoCuenta)
function mostrarCuentas(cuentasUsuario) {
    for (const cuenta of cuentasUsuario) {
        let option = `<option value="${cuenta.numero}" id="cuenta${cuenta.numero}">CA ${cuenta.simbolo} Nº ${cuenta.numero} - ${cuenta.simbolo} ${cuenta.saldo}</option>`
        selectorCuentas.innerHTML += option;
    }
}

//Este evento ejecuta las funciones al momento de que se carga la página en la ventana
window.onload = mostrarCuentas(elegirTipoCuenta(cuentasUsuarioNuevo, selectorTipoPF.value));

//Cuando cambia la opción seleccionada en el primer select, se crean las opciones del otro select de manera dinámica
selectorTipoPF.onchange = () => {
    selectorCuentas.innerHTML = '';
    mostrarCuentas(elegirTipoCuenta(cuentasUsuarioNuevo, selectorTipoPF.value));
}


//Guarda el objeto PF en el localStorage, con la key 'plazoFijo'
function guardarPFenStorage(datos) {
    localStorage.setItem('plazoFijo', JSON.stringify(datos));
}

//Esta función va a retornar un objeto del storage si se guardó (a través de la key), o false si no encuentra el objeto
function recuperarPFDeStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}


//Esta función genera los elementos que voy a agregar en el DOM, con los resultados de la simulación

function crearHTMLResultados(pf) {
    let lista = confirmacion.querySelector('ul');
    let items = [];
    for (const atributo in pf) {
        let li = ` <li>${atributo}: ${pf[atributo]}</li>`;
        items.push(li);
    }

    items.forEach(item => {
        lista.innerHTML += item;
    });

}

//Las acciones a realizarse al clickear en el botón "siguiente"
btnSiguiente.addEventListener('click', () => {
    //Crear el objeto PF
    const datosPF = new PF(monto.value, dias.value, selectorTipoPF.value, selectorCuentas.value);

    //Hacer todos los cálculos usando los métodos del objeto
    datosPF.calcularFechaAcreditacion();
    datosPF.calcularIntereses(tasaPesos, tasaDolares);
    datosPF.calcularGananciaTotal();

    //Mostrar y ocultar las secciones que corresponden
    cardIngreso.classList.replace('visible', 'oculta');
    confirmacion.classList.replace('oculta', 'visible');

    crearHTMLResultados(datosPF);

    if (checkDatos.checked) {
        guardarPFenStorage(datosPF);
    }

    formDatos.reset();
})

//Las acciones a realizarse al clickear en el botón "cancelar"
btnCancelar.addEventListener('click', () => {
    formDatos.reset();
});

//Las acciones a realizarse al clickear en el botón "volver"
btnVolver.addEventListener('click', () => {
    //Mostrar y ocultar las secciones que corresponden
    cardIngreso.classList.replace('oculta', 'visible');
    confirmacion.classList.replace('visible', 'oculta');
    confirmacion.querySelector('ul').innerHTML = '';
    selectorCuentas.innerHTML = '';
    mostrarCuentas(elegirTipoCuenta(cuentasUsuarioNuevo, selectorTipoPF.value));

})

//Las acciones a realizarse al clickear en el botón "ultima simulación"
btnUltima.addEventListener('click', () => {
    let datosGuardados = recuperarPFDeStorage('plazoFijo');
    console.log(datosGuardados);

    if (!datosGuardados) {
        alert('No se encontraron simulaciones previas');
    } else {
        //Mostrar y ocultar las secciones que corresponden
        cardIngreso.classList.replace('visible', 'oculta');
        confirmacion.classList.replace('oculta', 'visible');
        //Hago todos los cálculos, pero uso el objeto almacenado en el storage en vez de pedir los datos al usuario
        crearHTMLResultados(datosGuardados);
        formDatos.reset();
    }

})