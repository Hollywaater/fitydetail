//Carrito de compras de Fit-Detail
//Defino los precios de mis productos
const pasta = 1500;
const cera = 1800;
const dinner = 2200;
const revividor = 2500;
const acondi = 1900;
const shampoo = 1300;
const envio = 800;
let acumulador = 0;
//Funcion para mostrar el menu
function mostrarMenu (menu){
    while (menu !="si"&& menu!= "no"){menu = prompt("Desea ver la lista de productos que FIT-DETAIL tiene en stock, ingrese si/no")}
}
//Integro las funciones necesarias para calcular el precio final segun el medio de pago.
function descuento (descuento){
    return descuento * 0.15;
    }
function precioEfectivo (precio,descuento){
    return precio - descuento;
}
function precioCredito (precio,descuento){
    return precio + descuento;
}
const calculoEnvio = function (precio){return precio + 800}

function mostrarMenu(catalogo){
    while (catalogo != "si" && catalogo != "no"){
        catalogo = prompt("Opción inválida ¿desea ver el catalogo de precios de FIT-DETAIL? si/no");
    }
}
//Doy la bienvenidad al usuario 
alert("Bienvenido a la tienda online de Fit-Detail");

//Le pregunto al usuario si quiere ver el catalogo, en caso de opción invalida muestro un aviso y hasta que no ingrese la opción si o no no puede continuar
function mostrarMenu(catalogo){
    while (catalogo != "si" && catalogo != "no"){
        catalogo = prompt("Opción inválida ¿desea ver el catalogo de precios de FIT-DETAIL? si/no");
    }
}
let catalogo = prompt("Desea ver la lista de productos que FIT-DETAIL tiene en stock, ingrese si/no")
let mostrar = mostrarMenu(catalogo)
if (catalogo == "no") {alert("Muchas gracias por visitar FIT-DETAIL")}
else if (catalogo == "si"){
//Le muestro 
let compra = prompt("Ingrese el NUMERO del producto que desea comprar.\n1-Pasta para pulido\n2-Cera para abrillantado\n3-Tinner para remover aceites\n4-Acondicionador\n5-Shampoo ph neutro\nEscriba s si quiere salir o finalizar su compra")
while (compra!="s"){
    switch(compra){
        case "1":
        acumulador = acumulador + pasta;
            break;
        case "2":
            acumulador = acumulador + cera;
            break;
        case "3":
            acumulador = acumulador + dinner;
            break;
        case "4":
            acumulador = acumulador + revividor;
            break;
        case "5":
            acumulador = acumulador + acondi;
        case "6":
            acumulador = acumulador + shampoo;
            break;
            default: alert("producto sin stock, usted lleva acumulado: $"+acumulador+" en productos")
    } compra=(prompt("Ingrese el NUMERO del producto que desea comprar.\n1-Pasta para pulido: $"+pasta+"\n2-Cera para abrillantado: $"+cera+"\n3-Tinner para remover aceites: $"+dinner+"\n4-Acondicionador ph neutro: $"+acondi+"\n5-Shampoo ph neutro: $"+shampoo+"\nEscriba s si quiere salir"))
} 
alert("Usted gasto un total de: $"+acumulador);
let descEfectivo = descuento(acumulador)
let finalEfectivo = precioEfectivo(acumulador,descEfectivo)
let finalCredito = precioCredito (acumulador,descEfectivo)
let precioFinalEnvio = calculoEnvio (finalEfectivo)
let precioFinalEnvioC= calculoEnvio (finalCredito)
let precioFinalEnvioD = calculoEnvio (acumulador)
if (acumulador>0)
{let formaPago = prompt("Ingrese el medio de pago que desea utilizar: \nefectivo\ndebito\ncredito\nSi quiere cancelar la compra y salir escriba s")
switch(formaPago){
    case "efectivo":
        alert("En efectivo ofrecemos un %15 de descuento usted se ahorra: $"+descEfectivo+" el monto final a pagar es: $"+finalEfectivo);
        if(finalEfectivo >=10000){alert("Como su compra supero los $10000 el envio corre por nuestra cuenta")}
        else {alert("Debe abonar $800 de envio, por lo tanto su precio final es: $"+precioFinalEnvio)}
        break;
    case "debito":
        alert("El precio final pagando con debito es igual que al precio de lista, por lo tanto usted debe abonar: $"+acumulador)
        if(finalEfectivo >=10000){alert("Como su compra supero los $10000 el envio corre por nuestra cuenta")}
        else {alert("Debe abonar $800 de envio, por lo tanto su precio final es: $"+precioFinalEnvioD)}
        break;
    case "credito":
        alert("Pagando con tarjeta de credito tiene un %15 de recargo por lo tanto su precio final es: $"+finalCredito+" y puede pagarlo en 3 cuotas sin interes de: $"+finalCredito/3)
        if(finalEfectivo >=10000){alert("Como su compra supero los $10000 el envio corre por nuestra cuenta")}
        else {alert("Debe abonar $800 de envio, por lo tanto su precio final es: $"+precioFinalEnvioC)}
        break;
    default:
        alert("opcion no valida")
}}
else{alert("Muchas gracias por ver el catalogo de FIT-DETAIL")}
}
/*
let formaPago = prompt("Ingrese el medio de pago que desea utilizar: \nefectivo\ndebito\ncredito\nSi quiere cancelar la compra y salir escriba s")
    switch(formaPago){
        case "efectivo":
            alert("En efectivo ofrecemos un %15 de descuento usted se ahorra: $"+descEfectivo+" el monto final a pagar es: $"+finalEfectivo);
            if(finalEfectivo >=10000){alert("Como su compra supero los $10000 el envio corre por nuestra cuenta")}
            else {alert("Debe abonar $800 de envio, por lo tanto su precio final es: $"+precioFinalEnvio)}
            break;
        case "debito":
            alert("El precio final pagando con debito es igual que al precio de lista, por lo tanto usted debe abonar: $"+acumulador)
            if(finalEfectivo >=10000){alert("Como su compra supero los $10000 el envio corre por nuestra cuenta")}
            else {alert("Debe abonar $800 de envio, por lo tanto su precio final es: $"+precioFinalEnvioD)}
            break;
        case "credito":
            alert("Pagando con tarjeta de credito tiene un %15 de recargo por lo tanto su precio final es: $"+finalCredito+" y puede pagarlo en 3 cuotas sin interes de: $"+finalCredito/3)
            if(finalEfectivo >=10000){alert("Como su compra supero los $10000 el envio corre por nuestra cuenta")}
            else {alert("Debe abonar $800 de envio, por lo tanto su precio final es: $"+precioFinalEnvioC)}
            break;
        default:
            alert("opcion no valida")
    }
    alert("Muchas gracias por visiar FIT-DETAIL los mejores productos para la estetica vehicular")

*/