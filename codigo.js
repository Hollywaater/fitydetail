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

    while (compra != "s") {
        let compra = prompt("Ingrese el NÚMERO de producto que desea comprar (escriba s para salir y finalizar su compra): \n 1) Pasta para pulido: $"+pasta+"\n 2) Cera para abrillantado: $"+cera+"\n 3) Tinner para remover: $"+dinner+"\n 4) Acondicionador: $"+acondi+"\n 5) Shampoo ph neutro: $"+shampoo+"\n Escriba s para salir");
        if (compra == "1") {
            alert("Usted agrego una pasta para pulido a su carrito de compras")
            acumulador = acumulador + pasta
            
        }
        else if (compra == "2") {
            alert("Usted agrego una cera para abrillantado a su carrito de compras")
            acumulador = acumulador + cera
            
        }
        else if (compra == "3") {
            alert("Usted agrego un Tinner removedor de aceites a su carrito de compras")
            acumulador = acumulador + dinner
            
        }
        else if (compra == "4") {
            alert("Usted agrego un Revividor de interiores a su carrito de compras")
            acumulador = acumulador + revividor
            
        }
        else if (compra == "5") {
            alert("Usted agrego un Acondionador para vehiculos a su carrito de compras")
            acumulador = acumulador + acondi
        }
        else if (compra == "6"){
            alert("Usted agrego un Shampoo ph neutro para vehiculos a su carrito de compras")
            acumulador = acumulador + shampoo
        }
        else if (compra == "s") {
            if (acumulador > 0) {
                alert(`Compra finalizada. Seleccione su método de pago`)
                finalizarCompra()
            }
            else {
                alert(`Gracias por visitarnos. Esperamos volver a verte pronto!`)
            }
            break;
        }
        else if (compra == null) {
            alert(`Operación cancelada. Gracias por visitarnos. Esperamos volver a verte pronto!`);
            console.log("dio escape")
            break;
        }
        else {
            alert(`Entrada inválida. Seleccione una de las 6 opciones`)
        }
    }
}

//Función para seleccionar forma de pago. Si es efectivo se descuenta un 15% y se avisa al cliente. Si es débito o crédito se mantiene igual.
function finalizarCompra() {

    let formaPago = prompt("Seleccione el NÚMERO de opcion deseada: \n 1) Efectivo \n 2) Tarjeta de débito \n 3) Tarjeta de crédito")

    while (formaPago != 1 && formaPago != 2 && formaPago != 3) {

        if (formaPago == null) {
            alert("Operación cancelada. Gracias por visitarnos, esperamos volver a verte pronto!");
            break;
        }

        formaPago = prompt(`Entrada inválida. \n \n Seleccione el NÚMERO de opcion deseada: \n 1) Efectivo \n 2) Tarjeta de débito \n 3) Tarjeta de crédito`)

    }

    if (formaPago == "1") {
        alert(`Por abonar en efectivo recibirá un 15% de descuento.`)
        acumulador = acumulador * 0.85
        calcularEnvio()
    }
    else if (formaPago == "2" | formaPago == "3") {
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
        alert("La selección de productos da un total de: $"+acumulador+" más el envío de $800 da un total a abonar de: $"+acumulador + 800+"\n Muchas gracias por tu compra. Esperamos volver a verlo pronto!")
        console.log("paga envío")
    }
}


//----------------------- Comienza a correr el código --------------------

//Bienvenida a la página
alert("Bienvenido a la tienda online de Fit-Detail")

//Prompt para ver o no el menú
let mostrarMenu = prompt("Desea ver la lista de productos que FIT-DETAIL tiene en stock, ingrese si/no");

//Condicional para que en caso de que seleccione "no" despedirlo
if (mostrarMenu == "no") {
    alert("Gracias por visitarnos. Esperamos volver a verte pronto!");
} 

//Bucle para que, mientras que la opción sea incorrecta le vuelva a sugerir una entrada
while (mostrarMenu != "no") {

    if (mostrarMenu == "si") {
        agregarCarrito()    //Caso "si" llamamos a la función agregarCarrito
        break;
    }
    else if (mostrarMenu == "no") {
        alert("Gracias por visitarnos. Esperamos volver a verte pronto!");  //Caso "no" nos despedimos
        break;
    }
    else if (mostrarMenu == null) {
        alert("Gracias por visitarnos. Esperamos volver a verte pronto!");  //Caso toque escape nos despedimos
        break;
    }
    else {
        mostrarMenu = prompt(`Entrada inválida. \n \n Teclee "si" para ver el catálogo o "no" para salir`);
        if (mostrarMenu == "no") {
            alert("Gracias por visitarnos. Esperamos volver a verte pronto!")  //Caso entrada inválida pedimos que ingrese nuevamente
        }
    }

}


























