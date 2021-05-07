// Condicionales problemas simples

var salto = '<br>'

//---------------------------------------------------------------------------------------------------------------------------------

var ProblemasSimples = 'CONDICIONALES SIMPLES';
document.write (ProblemasSimples, salto,salto);

//---------------------------------------------------------------------------------------------------------------------------------

var problema1 = '1. Determinar si un alumno aprueba a reprueba un curso, sabiendo que aprobara si su promedio de tres calificaciones es mayor o igual a 70; reprueba en caso contrario.';
document.write (problema1, salto,salto);

var nota1 = 60;
var nota2 = 80;
var nota3 = 90; 
var promedio = (nota1 + nota2 + nota3) / 3; 

if (promedio > 70) {
    document.write ('Estudiante, felicitaciones has aprobado la materia', salto,salto);
    
} else {
    document.write ('Estudiante, tu promedio no ha sido suficiente para aprovar la materia', salto,salto);

    
}

//---------------------------------------------------------------------------------------------------------------------------------

var problema2 = '2. En un almacén se hace un 20% de descuento a los clientes cuya compra supere los $1000 ¿Cuál será la cantidad que pagara una persona por su compra?';
document.write ( problema2,salto,salto);

var preciodelacompra = 1200;
var cantidadapagar;

const descuento= 20

if (preciodelacompra > 1000) {
    cantidadapagar = preciodelacompra - ((preciodelacompra/100)*descuento)
    document.write ('Señor usuario su prducto tiene un costo de ',preciodelacompra, ' aplicando un descuento del 20% queda en ',cantidadapagar, salto, salto);
    
} else {
    document.write ('Señor usuario su producto tiene un costo de ', preciodelacompra,salto,salto);
    
}

//---------------------------------------------------------------------------------------------------------------------------------

var problema3 = '3. Un obrero necesita calcular su salario semanal, el cual se obtiene de la siguiente manera: Si trabaja 40 horas o menos se le paga un salario de $16 por hora, si trabaja más de 40 horas se le paga un salario de $16 por cada una de las primeras 40 horas y un salario de $20 por cada hora extra.';
document.write ( problema3,salto,salto);

var horastrabajadas = 41;
var salariosemanal; 
var Nhorasextra;
var pagohorasextra;

const jornada = 40;
const valorxhora = 16;
const horasextra = 20; 

if (horastrabajadas > 40) {
    Nhorasextra= horastrabajadas - jornada;
    pagohorasextra = horasextra * Nhorasextra;
    salariosemanal = (valorxhora * jornada) + pagohorasextra;
    document.write ('Señor usario, sus horas trabajadas son ', horastrabajadas, ' sus horas extras son ', Nhorasextra, ' por lo tanto su salario semanal es ', salariosemanal,salto,salto);
    
} else {
    salariosemanal = valorxhora * jornada 
    document.write ('Señor sus horas trabajadas son ', horastrabajadas, ' por lo tanto su salario es ', salariosemanal,salto,salto);
    
}

//---------------------------------------------------------------------------------------------------------------------------------

var problema4 = '4. Un hombre desea saber cuánto dinero se genera por concepto de intereses sobre la cantidad que tiene en inversión en el banco. El decidirá reinvertir los intereses siempre y cuando estos excedan a $7000, y en ese caso desea saber cuánto dinero tendrá finalmente en su cuenta';
document.write (problema4,salto,salto);

var inversion;
var intereses; 

//---------------------------------------------------------------------------------------------------------------------------------

var problema5 = '5. Realizar un algoritmo Que lea dos números y los imprima en forma ascendente';

var num1 = 10;
var num2 = 8;

if (num1 < num2) {
    document.write ('El orden de los números es ', num1,', ',num2,salto,salto);
    
} else { 
    document.write ('El orden de los números es ', num2,', ',num1,salto,salto);
    
}

//---------------------------------------------------------------------------------------------------------------------------------

var problema6 = '6. Una persona enferma, que pesa 70 kg, se encuentra en reposo y desea saber cuántas calorías consume su cuerpo durante todo el tiempo que realice una misma actividad. Las actividades que tiene permitido realizar son únicamente dormir o estar sentado en reposo. Los datos que tiene son que estando dormido consume 1.08 calorías por minuto y estando sentado en reposo consume 1.66 calorías por minuto.';
document.write (problema6,salto, salto);

var tiempo = 8;
var dormido = true;
var caloriasdormido;
var caloriasreposo;

const Cdormido = 1.08; // por minuto
const Creposo = 1.66; // por minuto 

if (dormido) {

    caloriasdormido = (Cdormido * 60) * tiempo;
    document.write ('las calorias quemadas estando dormido por ', tiempo, ' horas son: ',caloriasdormido,salto,salto);

    
} else { 
    caloriasreposo = (Creposo * 60) * tiempo;
    document.write ('las calorias quemadas estando dormido por ', tiempo, ' horas son: ',caloriasreposo,salto,salto);

}

//---------------------------------------------------------------------------------------------------------------------------------

var problema7 = '7. Hacer un algoritmo que imprima el nombre de un artículo, clave, precio original y su precio con descuento. El descuento lo hace en base a la clave, si la clave es 01 el descuento es del 10% y si la clave es 02 el descuento en del 20% (solo existen dos claves).';
document.write (problema7,salto,salto);

var Nombre = 'zapote';
var clave01 = true
var preciooriginal = 2000;
var preciodescuento;

const clave1 = 10;
const clave2 = 20;

if (clave01) {
    preciodescuento = preciooriginal - ((preciooriginal/100) * clave1);
    document.write ('El producto ', Nombre, ' tiene un precio de ', preciooriginal, ' con el descuento queda en ', preciodescuento,salto,salto);

} else {
    preciodescuento = preciooriginal - ((preciooriginal/100)* clave2);
    document.write ('El producto ', Nombre, ' tiene un precio de ', preciooriginal, ' con el descuento queda en ', preciodescuento,salto,salto);
}

//---------------------------------------------------------------------------------------------------------------------------------

var problema8 = '8. Hacer un algoritmo que calcule el total a pagar por la compra de camisas. Si se compran tres camisas o más se aplica un descuento del 20% sobre el total de la compra y si son menos de tres camisas un descuento del 10%';
document.write ( problema8,salto,salto);

var totaldecamisas = 2 ;
var valortotalcompra;
var valorcompra;
var descuentoC;

const descuentomax = 20
const descuentomin = 10

if (totaldecamisas >= 3) {
    var camisa1 = 8;
    var camisa2 = 6;
    var camisa3 = 7;
    valorcompra = camisa1 + camisa2 + camisa3;
    descuentoC = (valorcompra/100) * descuentomax;
    valortotalcompra = valorcompra - descuentoC;
 document.write ( 'El valor total de la compra es ',valorcompra, ' con el descuento queda en ', valortotalcompra,salto,salto);
    
} else {
    var camisa1 = 8;
    var camisa2 = 6;
    valorcompra = camisa1 + camisa2;
    descuentoC = valorcompra/100 * descuentomin;
    valortotalcompra = valorcompra - descuentoC;
    document.write ( 'El valor total de la compra es ',valorcompra, ' con el descuento queda en ', valortotalcompra,salto,salto);   
    
}

//---------------------------------------------------------------------------------------------------------------------------------

var problema9 = 'Una empresa quiere hacer una compra de varias piezas de la misma clase a una fábrica de refacciones. La empresa, dependiendo del monto total de la compra, decidirá qué hacer para pagar al fabricante. Si el monto total de la compra excede de $500 000 la empresa tendrá la capacidad de invertir de su propio dinero un 55% del monto de la compra, pedir prestado al banco un 30% y el resto lo pagará solicitando un crédito al fabricante. Si el monto total de la compra no excede de $500 000 la empresa tendrá capacidad de invertir de su propio dinero un 70% y el restante 30% lo pagará solicitando crédito al fabricante. El fabricante cobra por concepto de intereses un 20% sobre la cantidad que se le pague a crédito.';
document.write (problema9,salto,salto);

var montopago = 400000;
var inversion; 
var prestamobanco;
var credito;
const interes = 20


if (montopago>500000) {
    var inversion = (montopago/100)*55;
    var prestamobanco = (montopago/100)*30
    var credito = (montopago - (inversion + prestamobanco));
    var credito = credito + ((credito/100) * interes)
    document.write ('El valor de la compra fue de ', montopago, salto,salto,'El monto pagado en inversión es ', inversion, 'se debera pedir al banco ', prestamobanco, ' y el restante con el 20% de sobrecosto es ', credito,salto,salto);

    
} else {
    var inversion = (montopago/100)*70;
    var credito = (montopago - inversion);
    var credito = credito + ((credito/100) * interes)
    document.write ('El valor de la compra fue de ', montopago, salto,salto,'El monto pagado en inversión es ', inversion, ' y el restante con el 20% de sobrecosto es ', credito,salto,salto);
}

//---------------------------------------------------------------------------------------------------------------------------------

// condicionales problemas compuestos 

var ProblemasCompuestos = 'CONDICIONALES COMPUESTOS';
document.write (ProblemasCompuestos, salto,salto);

//---------------------------------------------------------------------------------------------------------------------------------

var problema1c = '1. Leer 2 números; si son iguales que los multiplique, si el primero es mayor que el segundo que los reste y si no que los sume.';
document.write (problema1c,salto,salto);

var numero1 = 5;
var numero2 = 6;
var resultdo;

if (numero1 === numero2) {
    resultado = numero1*numero2;
}

if (numero1 > numero2) {
    resultado = numero1 - numero2;
}

if (numero2 > numero1) {
    resultado  = (numero1 + numero2);
}

document.write ('Los números son ', numero1, ' y ',numero2, ' por lo tanto el resultado es ', resultado,salto,salto);

//---------------------------------------------------------------------------------------------------------------------------------

var problema2c = '2. Leer tres números diferentes e imprimir el número mayor de los tres.';
document.write (problema2c,salto,salto);

var number1 = 10;
var number2 = 8;
var number3 = 9;
var numeromayor;

if (number1 > number2 & number1 > number3) {
    numeromayor = 'El número mayor de los tres es '+ number1;
}

if (number2 > number1 & number2 > number3) {
    numeromayor = 'El número mayor de los tres es '+ number2;
}

if (number3 > number1 & number3 > number2) {
    numeromayor = 'El número mayor de los tres es '+ number3;
}

document.write (numeromayor,salto, salto);

//---------------------------------------------------------------------------------------------------------------------------------

var problema3c = '3. Determinar la cantidad de dinero que recibirá un trabajador por concepto de las horas extras trabajadas en una empresa, sabiendo que cuando las horas de trabajo exceden de 40, el resto se consideran horas extras y que estas se pagan al doble de una hora normal cuando no exceden de 8; si las horas extras exceden de 8 se pagan las primeras 8 al doble de lo que se pagan las horas normales y el resto al triple.';
document.write (problema3c, salto, salto);

const horaslaborales = 40;
const valorhora      = 15000;
const maxhorasdobles = 8
const pagonormal = horaslaborales * valorhora
const pagohen = 2
const pagohet = 3

var Horastrabajadas = 50;
var horasextradobles = Horastrabajadas - horaslaborales;
var horasextrastriples = Horastrabajadas - maxhorasdobles - horaslaborales;
var pagoextrasdobles;
var pagoextrastriples;
var pagoFinal;


if (Horastrabajadas <= 40) {
    pagoFinal = Horastrabajadas * valorhora;
    document.write ('Señor usuario su salario es de ', pagoFinal,salto,salto);
} 

if (Horastrabajadas >= 41 & Horastrabajadas <= 48) {
    horasextradobles = Horastrabajadas - horaslaborales;
    pagoextrasdobles = horasextradobles * pagohen * valorhora;
    pagoFinal = pagonormal + pagoextrasdobles;

    document.write ('Señor usuario su salario es de ', pagoFinal,salto,salto);

    document.write ( 'Las horas laborales son ', horaslaborales, ' ',pagonormal,salto);

    document.write ( 'las horas extras dobles son ', horasextradobles,' ',pagoextrasdobles, salto,salto);
}

if (Horastrabajadas >= 49) {
    
    horasextradobles = Horastrabajadas - horaslaborales - horasextrastriples;
    pagoextrasdobles = horasextradobles * pagohen * valorhora;
    horasextrastriples = Horastrabajadas - horaslaborales - maxhorasdobles;
    pagoextrastriples = horasextrastriples * pagohet * valorhora;
    pagoFinal = pagonormal + pagoextrasdobles + pagoextrastriples;


document.write ('Señor usuario su salario es de ', pagoFinal,salto,salto);

document.write ( 'Las horas laborales son ', horaslaborales, ' ',pagonormal,salto);

document.write ( 'las horas extras dobles son ', horasextradobles,' ',pagoextrasdobles, salto);

document.write ( 'Las horas extras triples son ', horasextrastriples, ' ',pagoextrastriples, salto,salto);
}

//---------------------------------------------------------------------------------------------------------------------------------

var problema4c = '4. Calcular la utilidad que un trabajador recibe en el reparto anual de utilidades si este se le asigna como un porcentaje de su salario mensual que depende de su antigüedad en la empresa de acuerdo con la siguiente tabla';
document.write (problema4c,salto,salto);

//---------------------------------------------------------------------------------------------------------------------------------

var problema5c = 'En una tienda de descuento se efectúa una promoción en la cual se hace un descuento sobre el valor de la compra total según el color de la bolita que el cliente saque al pagar en caja. Si la bolita es de color blanco no se le hará descuento alguno, si es verde se le hará un 10% de descuento, si es amarilla un 25%, si es azul un 50% y si es roja un 100%. Determinar la cantidad final que el cliente deberá pagar por su compra se sabe que solo hay bolitas de los colores mencionados.';
document.write (problema5c,salto,salto);
alert ('Según el color de la bola deberas escribirlo de esta manera: blanca, verde, amarilla, azul, roja')

var valorproducto = 50;
var valortotalproducto;
var colordelabola = prompt ('Cual es el color de la bola','');
var msj;

const Bverde  = 10;
const Bamarilla = 25;
const Bazul = 50;
const Broja = 100;

switch (colordelabola) {
    case 'blanca':
        msj = 'Hoy no es tu dia de suerte el precio queda igual '+valorproducto;
        break;
    case 'verde':
        valortotalproducto = valorproducto - ((valorproducto/100)*Bverde);
        msj = 'Hoy es tu dia de suerte, te ganaste un 10% de descuento, el precio queda a '+valortotalproducto;
        break;
    case 'amarilla':
        valortotalproducto = valorproducto - ((valorproducto/100)*Bamarilla);
        msj = 'Hoy es tu dia de suerte, te ganaste un 25% de descuento, el precio queda a '+valortotalproducto;
        break;
    case 'azul':
        valortotalproducto = valorproducto - ((valorproducto/100)*Bazul);
        msj = 'Hoy es tu dia de suerte, te ganaste un 50% de descuento, el precio queda a '+valortotalproducto;
        break;
    case 'roja':
        valortotalproducto = valorproducto - ((valorproducto/100)*Broja);
        msj = 'Hoy es tu dia de suerte, obtienes un descuento del 100%  el precio queda a '+valortotalproducto;
        break;

    default:
        msj = 'Inserte el color de la manera indicada en el primer enunciado';
        break;
}

alert(msj);
document.write (msj,' $', salto,salto);

//---------------------------------------------------------------------------------------------------------------------------------


var problema6c = 'El IMSS requiere clasificar a las personas que se jubilaran en el año de 1997. Existen tres tipos de jubilaciones: por edad, por antigüedad joven y por antigüedad adulta. Las personas adscritas a la jubilación por edad deben tener 60 años o más y una antigüedad en su empleo de menos de 25 años. Las personas adscritas a la jubilación por antigüedad joven deben tener menos de 60 años y una antigüedad en su empleo de 25 años o más. Las personas adscritas a la jubilación por antigüedad adulta deben tener 60 años o más y una antigüedad en su empleo de 25 años o más. Determinar en qué tipo de jubilación, quedara adscrita una persona.';
document.write (problema6c,salto,salto);

var edad = 59;
var añostrabajados = 25;
var mensaje;

if (edad >= 60 & añostrabajados < 25) {
    mensaje = 'Usted pertenece a los jubilados por edad',salto,salto;
}

if (edad < 60 & añostrabajados >= 25) {
    mensaje = 'Usted hace parte a los jubilados por antigüedad joven',salto,salto;
}

if (edad >= 60 & añostrabajados >= 25) {
    mensaje = 'Usted hace parte de los jubilados por antigüedad adulta',salto,salto;
}

document.write (mensaje,salto,salto);

//---------------------------------------------------------------------------------------------------------------------------------

// condicionales de caso 

//---------------------------------------------------------------------------------------------------------------------------------

document.write ('Una persona se levanta por la mañana para ir al trabajo si sale de su casa antes de las 7:00 am desayuna en la panaderia y coje en metro, si se hace mas tarde, no desayuna y toma taxi.',salto,salto);

var Hsalida = prompt('Que horas son antes de salir ','')
Hsalida = parseInt (Hsalida);
var msj;

if (Hsalida < 7) {
    Hsalida = 'temprano'
} 

if (Hsalida >= 7) {
    Hsalida = 'tarde'
}

switch (Hsalida) {
    case 'temprano' :
        msj = 'Vas temprano, desayuna en la panaderia y coje metro'
        break;
     case 'tarde':
        msj = 'Mano lo cogio la noche, coja un taxi que por allá desayuna'
        break;

    default:
        msj = 'Diga que horas son antes de salir'
        break;
}

alert(msj);
document.write(msj);