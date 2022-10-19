//Carrito de compras de Fit-Detail
//----------------------- Declaración de variables/constantes --------------------

const pasta = 1500;
const cera = 1800;
const dinner = 2200;
const revividor = 2500;
const acondi = 1900;
const shampoo = 1300;
const envio = 800;

let acumulador = 0;
let compra


//----------------------- Declaración de funciones --------------------

//Función que calcula el costo total según lo que ingresa el usuario
function agregarCarrito() {

    while (compra !== "s") {
        let compra = prompt("Ingrese el NÚMERO de producto que desea comprar (escriba s para salir y finalizar su compra): \n 1) Pasta para pulido: $"+pasta+"\n 2) Cera para abrillantado: $"+cera+"\n 3) Tinner para remover: $"+dinner+"\n 4) Acondicionador: $"+acondi+"\n 5) Shampoo ph neutro: $"+shampoo+"\n Escriba s para finalizar su compra");
        if (compra === "1") {
            alert("Usted agrego una pasta para pulido a su carrito de compras")
            acumulador = acumulador + pasta
            
        }
        else if (compra === "2") {
            alert("Usted agrego una cera para abrillantado a su carrito de compras")
            acumulador = acumulador + cera
            
        }
        else if (compra === "3") {
            alert("Usted agrego un Tinner removedor de aceites a su carrito de compras")
            acumulador = acumulador + dinner
            
        }
        else if (compra === "4") {
            alert("Usted agrego un Revividor de interiores a su carrito de compras")
            acumulador = acumulador + revividor
            
        }
        else if (compra === "5") {
            alert("Usted agrego un Acondionador para vehiculos a su carrito de compras")
            acumulador = acumulador + acondi
        }
        else if (compra === "6"){
            alert("Usted agrego un Shampoo ph neutro para vehiculos a su carrito de compras")
            acumulador = acumulador + shampoo
        }
        else if (compra === "s") {
            if (acumulador > 0) {
                alert("Compra finalizada. Seleccione su método de pago")
                finalizarCompra()
            }
            else {
                alert("Gracias por visitarnos. Esperamos volver a verte pronto!")
            }
            break;
        }
        else if (compra == null) {
            alert("Operación cancelada. Gracias por visitarnos. Esperamos volver a verte pronto!");
            console.log("dio escape")
            break;
        }
        else {
            alert("Entrada inválida. Seleccione una de las 6 opciones")
        }
    }
}

//Función para seleccionar forma de pago. Si es efectivo se descuenta un 15% y se avisa al cliente. Si es débito o crédito se mantiene igual.
function finalizarCompra() {

    let formaPago = prompt("Seleccione el NÚMERO de opcion deseada: \n 1) Efectivo \n 2) Tarjeta de débito \n 3) Tarjeta de crédito")

    while (formaPago !== 1 && formaPago != 2 && formaPago != 3) {

        if (formaPago === null) {
            alert("Operación cancelada. Gracias por visitarnos, esperamos volver a verte pronto!");
            break;
        }

        formaPago = prompt("Entrada inválida. \n \n Seleccione el NÚMERO de opcion deseada: \n 1) Efectivo \n 2) Tarjeta de débito \n 3) Tarjeta de crédito")

    }

    if (formaPago === "1") {
        alert("Por abonar en efectivo recibirá un 15% de descuento.")
        acumulador = acumulador * 0.85
        calcularEnvio()
    }
    else if (formaPago === "2" | formaPago === "3") {
        calcularEnvio()
    }

}

//Función que calcula envío. Caso que la compra sea mayor a $10.000 es gratuito. Si es menor se le adicionan $800
function calcularEnvio() {
    if (acumulador >= 10000) {
        alert("Como su compra es mayor a $10.000 el envío corre por cuenta nuestra! \n \n Su total a pagar es de: $"+acumulador)
        console.log("envío gratis")
    }
    else {
        alert("La selección de productos da un total de: $"+acumulador+" más el envío de $800 da un total a abonar de: $"+(acumulador + 800)+"\n Muchas gracias por tu compra. Esperamos volver a verlo pronto!")
        console.log("paga envío")
    }
}


//----------------------- Comienza a correr el código --------------------

//Bienvenida a la página
alert("Bienvenido a la tienda online de Fit-Detail")

//Prompt para ver o no el menú
let mostrarMenu = prompt("Desea ver la lista de productos que FIT-DETAIL tiene en stock, ingrese si/no");

//Condicional para que en caso de que seleccione "no" despedirlo
if (mostrarMenu === "no") {
    alert("Gracias por visitarnos. Esperamos volver a verte pronto!");
} 

//Bucle para que, mientras que la opción sea incorrecta le vuelva a sugerir una entrada
while (mostrarMenu !== "no") {

    if (mostrarMenu === "si") {
        agregarCarrito()    //Caso "si" llamamos a la función agregarCarrito
        break;
    }
    else if (mostrarMenu === "no") {
        alert("Gracias por visitarnos. Esperamos volver a verte pronto!");  //Caso "no" nos despedimos
        break;
    }
    else if (mostrarMenu === null) {
        alert("Gracias por visitarnos. Esperamos volver a verte pronto!");  //Caso toque escape nos despedimos
        break;
    }
    else {
        mostrarMenu = prompt(`Entrada inválida. \n \n Teclee "si" para ver el catálogo o "no" para salir`);
        if (mostrarMenu === "no") {
            alert("Gracias por visitarnos. Esperamos volver a verte pronto!")  //Caso entrada inválida pedimos que ingrese nuevamente
        }
    }
////Control de inventario
/*
class Productos {
    constructor( nombre, precio,marca,cantidad) {

        this.nombre = nombre;
        this.precio = precio;
        this.marca = marca;
        this.cantidad = cantidad;
    }
    sumarIva(){
        this.precio=this.precio * 1.21;
}
}

const Inventario = []
/*
let cargaInvent = prompt("Ingrese el nombre del producto que desesa cargar o escriba s cuando quiera finalizar");
do{
    if (cargaInvent ==="s" || cargaInvent === "S"){break}
    else{
        nombreProducto = cargaInvent;
        let precioProducto = parseFloat(prompt("Ingrese el precio del producto"))
        let marcaProucto = prompt("Ingrese la marca del producto")
        let cantidadProducto = prompt("ingrese la cantidad de producto que posee")
    Inventario.push = new Productos (precioProducto,marcaProucto,cantidadProducto)
    cargaInvent = prompt("Ingrese el nombre del producto que desesa cargar o escriba s cuando quiera finalizar");
    }
} 
while((cargaInvent !=="s" || cargaInvent !== "S"))

console.log(Inventario)



while(cargaInvent !=="s"){
    let cargaInvent = prompt("Ingrese el nombre del producto que desesa cargar o escriba s cuando quiera finalizar");
    if(cargaInvent !== "s"){
        nombreProducto = cargaInvent;
        let precioProducto = parseFloat(prompt("Ingrese el precio del producto"))
        let marcaProucto = prompt("Ingrese la marca del producto")
        let cantidadProducto = prompt("ingrese la cantidad de producto que posee")
        Inventario.push = new Productos (precioProducto,marcaProucto,cantidadProducto)
    }
    else{alert("Gracias pro visditarn")}
} cargaInvent = prompt("Ingrese el nombre del producto que desesa cargar o escriba s cuando quiera finalizar");

console.log(Inventario)
*//*
function crearProducto() {
    let carrito = []
    
    const producto = new Producto(prompt(`Ingrese el id del producto: `), prompt(`Ingrese el nombre del producto: `),
    prompt(`Ingrese el precio del producto: `));
    carrito.push(producto);
    console.log(carrito)
    for (const producto of carrito) {
        console.log(producto.id + " " + producto.nombre + " "+producto.precio+"\n");
    }
}

/*
    {
    id:"10",
    nombre:"Pasta para pulido de carroceria",
    precio: 1500,
    categoria:"Exterior"
    },

    {id:"11",
    nombre: "Cera para abrillantados",
    categoria:"Exterior"
    },

    {
    id:"12",
    nombre:"Tinner removedor de aceites",
    precio: 2200,
    categoria:"Interior"
    },

    {id:"13",
    nombre:"Acondicionador para neumaticos",
    precio:2500,
    categoria:"Exterior"
    },

    {
    id:"14",
    nombre:"Acondionador para interiores",
    precio:1900,
    categoria:"Interior"
    },

    {
    id:"15",
    nombre: "Shampoo Ph Neutro para carroceria",
    precio:1300,
    categoria:"Exterior"
    }
*/



class Productos{
    constructor(nombre,precio){
    this.nombre= nombre;
    this.precio=precio;
}
mostrar(){
    alert("Usted a seleccionado: "+this.nombre+" su valor es: $"+this.precio)
}

}
const pasta = new Productos("Pasta para pulido de carroceria",1500);
const cera = new Productos("Cera para abrillantados",1800);
const tinner = new Productos("Tinner removedor de aceites",2200);
const neuma = new Productos("Acondicionador para neumaticos",900);
const acondi = new Productos("Acondionador para interiores",1900);
const shampo = new Productos("Shampoo Ph Neutro para carroceria",1300);
const nuevo1 = new Productos(prompt("Ingrese el nombre del producto",parseFloat(prompt)("ingrese el precio del producto")))}
