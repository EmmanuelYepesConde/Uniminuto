//variables predeterminadas

var salto = '<br>'

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

var problema1 = '1.	La factorial de un número es la multiplicación del número que van del 1 a dicho número. Para expresar el factorial se suele utilizar la notación n!. Así la definición es la siguiente:';
document.write (problema1,salto,salto);

var factorial = prompt('Ingrese el número a factorial','');
factorial = parseInt(factorial);
var resultado = 1;

for (var i = 1; i <= factorial; i++) {
    document.write(i,salto);
    resultado = resultado * i;
}
document.write(resultado,salto,salto);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

var problema2 = '2.	Hacer un algoritmo que imprima los números del 15 al 30 incluyendo estos dos últimos. ';
document.write (problema2,salto,salto);

var numerofinal = prompt ('Ingrese el número final ','');
var numerofinal = parseInt (numerofinal);
var i = 15


for (var i = 15; i <= numerofinal; i++) {
    document.write(i, salto);
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

var problema3 = '3.	Crea un programa que escriba la tabla de multiplicar del 5: desde "5 x 0 = 0" hasta "5 x 10 = 50" ';
document.write (salto,problema3,salto,salto);


