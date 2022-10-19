let savedPIN = '5461';

function login() {
    let ingresar = false;

    for (let i = 2; i >= 0; i--) {
        let userPIN = prompt('Ingresá tu PIN. Tenés ' + (i + 1) + ' oportunidades.');
        if (userPIN == savedPIN) {
            alert('Ingreso exitoso. Bienvenido/a');
            ingresar = true;
            break;
        } else {
            alert('Error. Te quedan ' + i + ' intentos.');
        }
    }

    return ingresar;

}


if (login()) {
    let saldo = 1000000;
    let opcion = prompt('Elegí una opción: \n1- Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \nPresioná X para finalizar.');

    while (opcion != 'X' && opcion != 'x') {

        switch (opcion) {
            case '1':
                alert('Tu saldo es $ ' + saldo);
                break;
            case '2':
                let retiro = parseInt(prompt('Ingresa cantidad a retirar'));
                if (retiro <= saldo) {
                    saldo -= retiro;
                    //saldo = saldo-retiro;
                    alert('Retiro exitoso. Tu nuevo saldo es $ ' + saldo);
                } else {
                    alert('Fondos insuficientes');
                }
                break;

            case '3':
                let deposito = parseInt(prompt('Ingresa monto a depositar'));
                saldo += deposito;
                alert('Depósito exitoso. Tu nuevo saldo es $ ' + saldo);
                break;
            default:
                alert('Elegiste una opción inválida');
                break;
        }

        opcion = prompt('Elegí una opción: \n1- Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \n Presioná X para finalizar.');

    }

} else {
    alert('Retendremos tu tarjeta por seguridad');
}


alert('Adiós');