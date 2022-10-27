/* let total = 0;

for (let i = 1; i <= 10; i++) {
    total += i;
}

//console.log(total);


function sumarRango(inicio, fin) {
    let total = 0;
    for (let i = inicio; i <= fin; i++) {
        total += i;
    }
    return total;
}

console.log(sumarRango(1, 100)); */

/* function porCadaUno(fn, array) {
    for (const elemento of array) {
        fn(elemento);
    }

}

function cuadrado(num) {
    let resultado = num * num;
    console.log(resultado);
}

function agregarLetra(letra){
    let resultado = letra+'A';
    console.log(resultado);
}



const letras = ['A','B','C','D']

porCadaUno(cuadrado,numeros);
porCadaUno(agregarLetra,numeros);
 */

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


/* function cubo(num) {
    let resultado = num * num * num;
    console.log(resultado);
} */

/* const triplicados = []

numeros.forEach((elemento) => { 
    //element = element * 3;
    triplicados.push(elemento*3) 
});


console.log(triplicados); */

const cursos = [{
    nombre: 'Javascript',
    precio: 15000
},
{
    nombre: 'ReactJS',
    precio: 22000
},
{
    nombre: 'AngularJS',
    precio: 20500
},
{
    nombre: 'Desarrollo Web',
    precio: 16000
},
]

/* const encontrado = cursos.find( curso => curso.precio>15000 &&curso.precio<21000   )

console.log(encontrado);

const alguno = cursos.some(curso => curso.precio > 50000);

console.log(alguno); */

/* const filtrado = cursos.filter(curso => curso.precio > 50000);

console.log(filtrado); */

/* let keyword =prompt('Ingresa el término de búsqueda');

const otroFiltrado = cursos.filter(curso=>curso.nombre.includes(keyword));

console.log(otroFiltrado);

const precioConDescuento = otroFiltrado.map(curso=>
    { return { nombre: curso.nombre, precio: curso.precio * .50 } }
    
    )


    console.log(precioConDescuento)

   const nombres= precioConDescuento.map(curso=>curso.nombre);
   console.log(nombres); */

/*    const totalArray = numeros.reduce((acumulador,numero)=>acumulador+numero,0)

   console.log(totalArray); */


/*    const precioFinal = cursos.reduce((acumulador,curso)=>{
    return acumulador+=curso.precio
   },0)

   console.log(precioFinal); */


/* const desordenados = [1, 5, 23, 45, 2, 78, 4];

const ordenados = desordenados.slice(0);

ordenados.sort((a, b) => b - a);

console.log(ordenados); */

/* console.log(Math.PI)


let maximo = Math.max(22, 64, -54, -12, 78, 145.23);
console.log(maximo);

let minimo = Math.min(22, 64, -54, -12, 78, 145.23);
console.log(minimo);

let min = Math.min(numeros);
console.log(min);
 */

/* 
let azar = Math.random()*10;

console.log(azar);

//Métodos de redondeo
console.log(Math.ceil(azar));
console.log(Math.floor(azar));
console.log(Math.round(azar));
console.log(Math.trunc(azar)); */

/* let dados =[]

for(let i=0;i<5;i++){
    let dado = Math.ceil(Math.random()*6);
    dados.push(dado);
}

console.log(dados); */

let ultimoSegundo = new Date(2022,11,31,23,59,59);
console.log(ultimoSegundo);

/* let fecha = new Date();
console.log(fecha) */


console.log(ultimoSegundo.getFullYear());
console.log(ultimoSegundo.getMonth());
console.log(ultimoSegundo.getDay());
console.log(ultimoSegundo.getDate());
console.log(ultimoSegundo.getTime());