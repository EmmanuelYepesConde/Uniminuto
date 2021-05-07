// Constantes del formato:
var salto = '<br>';

// Problema a resolver:
var problema1 = '1. Haga un algoritmo que calcule e imprima el área de un circulo =>Área = π r 2';
document.write(problema1,salto, salto);

// Variables a ingresar: 
var radio = 20; // Variable

// Constantes:
var pi = 3.1416;  

// Operaciones:
var area = (pi*(radio*radio));

// Resultado : 
document.write('Área = ',area, salto, salto,);

// ---------------------------------------------------------------------------------------------------

var problema2 = '2. Haga un algoritmo que calcule e imprima el área de un triángulo => Área =(b*h) / 2';
document.write(problema2,salto,salto);

//variables 
var base = 2; 
var altura = 2; 

//constantes: 
var den = 2;

//operaciones

var area = ((base * altura) / den); 

//resultado 
document.write('Área = ',area, salto, salto);

// ---------------------------------------------------------------------------------------------------

var problema3 = '3. Diseñar un algoritmo a través del cual se pueda calcular la siguiente expresión => z= y1-y2 / x1-x2';
document.write (problema3,salto,salto); 

//variables 
var y1 = 8;
var y2 = 2; 
var x1 = 6; 
var x2 = 4; 

// operaciones 
var z = ((y1-y2) / (x1-x2)); 

//resultado
document.write ('z = ', z, salto, salto); 

// ---------------------------------------------------------------------------------------------------

var problema4 = '4. Diseñe un algoritmo para la conversión de una medida de metros a pies y pulgadas, donde se sabe que 1 metro es igual a 3.28 pies y 1 pie es igual a 12 pulgadas.' ; 
document.write (problema4, salto,salto); 

//variables 
var metros = 4; 

// constantes 

var pies; 
var pulgadas; 

// operaciones

var Rpies = (metros * 3.28); 
var Rpulgadas = ( Rpies * 12); 

// Resultado
document.write ('metros = ', metros, ' pies = ', Rpies, ' pulgadas = ', Rpulgadas, salto, salto); 

// ---------------------------------------------------------------------------------------------------

var problema5 = '5. Elabore un algoritmo que convierta una temperatura dada en centígrados a fahrenheit. Tener en cuenta la siguiente fórmula: ºF= 9/5 ºC + 32' ; 
document.write ( problema5,salto,salto);

//variables 

var gC = prompt('Digite los grados Celcius',''); 

// operaciones 

var gF = ((9/5) * gC + 32);

//resultado 
document.write ('°F = ', gF, salto, salto); 

// ---------------------------------------------------------------------------------------------------

var problema6 = '6. Hacer un algoritmo para calcular el IVA de un valor digitado por el teclado, mostrar este resultado y el de sumar el IVA al valor digitado. ';
document.write (problema6, salto, salto);

// variables 

var Vi = 19000; 

//constantes

var iva = 0.19; 

// operaciones 

var Vf = ( Vi * iva + Vi ); 

// resultado 
document.write ('El valor inicial =', Vi, ' El valor mas el iva es = ', Vf, salto, salto) ;

// ---------------------------------------------------------------------------------------------------
 
var problema7 = '7.Elabore un algoritmo para mostrar la cantidad de miles, centenas, decenas y unidades de un número entero digitado por teclado. ' ; 
document.write ( problema7, salto, salto);

//variables

var cifra = 25541; 

// constantes

var miles; 
var centenas;
var decenas;
var unidades;

// operaciones

miles = (cifra / 1000);
miles = Math.floor (miles);
miles = miles 
centenas = (cifra / 100); 
centenas = Math.floor(centenas);
centenas = centenas - ( miles * 10);
centenas = centenas  
decenas = (cifra/10); 
decenas = Math.floor(decenas);
decenas = decenas - ((miles * 100) + (centenas * 10));
decenas = decenas;
unidades = cifra - (( miles * 1000) + ( centenas * 100) + ( decenas * 10));
unidades = unidades;

//resultado 
document.write('El número es ', cifra,' los miles son = ', miles, ' las centenas son = ', centenas, ' las decenas son = ', centenas, ' las unidades son = ', unidades, salto, salto);

// ---------------------------------------------------------------------------------------------------

var problema8 = '8. Elaborar un algoritmo que permita leer el nombre de un empleado, el número de horas extras diurnas, horas extras nocturnas y el valor básico hora. Se debe calcular el valor a pagar en una quincena teniendo en cuenta que el recargo de la hora extra diurna es del 25% y el de la nocturna es del 75%.';
document.write (problema8, salto,salto);

//variables 

String = "Emmanuel";
var vh = 9000
var hed = 1
var hen = 1

// constantes

var rxd = (vh * 1.25);
var rxn = (vh * 1.75);
var mes = ( vh * 30);

// proceso 

var vpq = (( mes / 2) + (rxd * hed) + (rxn * hen));

// resutado 
document.write ('Señor ', String, ' el valor a pagar esta quincena es ', vpq, ' siga siendo un probre hpta', salto,salto);

// ---------------------------------------------------------------------------------------------------

var problema9 = '9. Elaborar un algoritmo que lea el nombre de un producto, el valor unitario, el saldo inicial al comienzo del mes, las entradas y las salidas durante el mes. Se debe calcular el saldo final del mes y el valor de dicha mercancía.';
document.write ( problema9, salto, salto); 

// variables 

String = "yuca";
var vu = 9000;
var Spm = 5;
var Em = 6;
var Sm = 8;

// constante 

var Sfm = ( Spm + Em - Sm);

// proceso 

var vfm = (Sfm * vu);

// resultado 
document.write ('El saldo del producto: ', String, ', al final de este mes es ', Sfm, ' el valor de este saldo es de ', vfm, salto, salto);

// ---------------------------------------------------------------------------------------------------

var problema10 = '10. Elaborar un algoritmo que permita leer el nombre y valor de venta de 3 productos de una tienda de insumos agrícolas. Sobre el 1er producto se hace un descuento del 2.5%, sobre el 2º un descuento del 1.8% y sobre el 3ro el 1.3%. Se debe calcular el valor final que debe de pagar el cliente por la mercancía comprada.';
document.write (problema10, salto, salto)

//variables

String = "Cuaderno";
String = "Block"; 
String = "Colores";
var v1 = 5000;
var v2 = 10000;
var v3 = 2500;

// constantes 

var D1 = ( v1 * 0.025);
var D2 = ( v2 * 0.018);
var D3 = ( v3 * 0.013);

// proceso 

var Vfp1 = (v1 - D1)
var Vfp2 = (v2 - D2)
var Vfp3 = (v3 - D3)

// Resultado 
document.write ( 'El valor del producto es ', v1 , ' queda en ', Vfp1,salto);
document.write ( 'El valor del producto es ', v2 , ' queda en ', Vfp2,salto);
document.write ( 'El valor del producto es ', v3 , ' queda en ', Math.floor (Vfp3),salto, salto);

// ---------------------------------------------------------------------------------------------------

var problema11 = '11. En la prueba final de atletismo de los 50 metros planos en los juegos olímpicos, se obtuvo el tiempo utilizado por cada uno de los 8 atletas participantes. Se debe imprimir la velocidad promedio (Metros/Segundos) en que los atletas corrieron.';
document.write ( problema11, salto, salto);

// variables 

var a1 = 15;
var a2 = 10;
var a3 = 17;
var a4 = 12;
var a5 = 13;
var a6 = 15;
var a7 = 18;
var a8 = 11; 

// proceso

var promedio =  (((50/a1) + (50/a2) + (50/a3) + (50/a4) + (50/a5) + (50/a6) + (50/a7) + (50/a8)) / 8 );

// resultado
document.write ('El promedio de los atletas es ', promedio, 'm/s');

// ---------------------------------------------------------------------------------------------------

var problema12 = '12. Elaborar un algoritmo que permita intercambiar el valor de dos variables. Ejemplo: Si la variable A=5 y la B=8, luego del proceso debe quedar así: A=8 y B=5.';
document.write (problema12, salto, salto);

//variables 

var A = 10;
var B = 2;
var C = A;

//proceso 

var C = A;
var A = B;
var B = C; 

// resultado 
document.write ('variable A = ', A, ' Variable B = ', B, salto,salto);
document.write ('despues del cambio quedan: variable A = ', C, ' variable B = ',A );

// ---------------------------------------------------------------------------------------------------

var problema13 = 'Se debe leer una cantidad de 6 dígitos que debe ser múltiplo de 1.000 y que representa el valor que va a retirar una persona de un cajero electrónico. Se debe de imprimir cuantos billetes de 50.000, 20.000, 10.000, 5.000, 2.000 y 1.000 debe entregar dicha máquina. Ejemplo: Se desea retirar 238.000. El cajero debería entregar 4 billetes de 50.000, 1 billete de 20.000, 1 billete de 10.000, 1 billete de 5.000, 1 billete de 2.000 y 1 billete de 1.000.';
document.write (problema13,salto,salto);

//variables 

var N6d = 480000;

// proceso 

var multiplo = ( N6d / 1000 );
var bille50 = (N6d / 50000); 
var bille50 = Math.floor(bille50);
var bille20 = (N6d - ( bille50 * 50000));
var bille20 = Math.floor(bille20 / 20000);
var bille10 = (N6d - (bille50 * 50000) - (bille20 *20000));
var bille10 = Math.floor(bille10 / 10000);
var bille5 = (N6d - (bille50 * 50000) - (bille20 * 20000) - (bille10 * 10000));
var bille5 = Math.floor(bille5 / 5000);
var bille2 = (N6d - (bille50 * 50000) - (bille20 * 20000) - (bille10 * 10000) - (bille5 * 5000));
var bille2 = Math.floor(bille2 / 2000);
var bille1 = (N6d - (bille50 * 50000) - (bille20 * 20000) - (bille10 * 10000) - (bille5 * 5000) - (bille2 * 2000));
var bille1 = Math.floor(bille1 / 1000);

// resultado
document.write ( 'Para la cantidad ', N6d, ' se deben repartir:',salto,salto);
document.write ('Billetes de 50000 ', bille50, salto);
document.write ('Billetes de 20000 ', bille20, salto);
document.write ('Billetes de 10000 ', bille10, salto);
document.write ('Billetes de 5000 ', bille5, salto);
document.write ('Billetes de 2000 ', bille2, salto);
document.write ('Billetes de 1000 ', bille1, salto,salto);

// ---------------------------------------------------------------------------------------------------

var problema14 = '14. Se conoce el tiempo en minutos y segundos utilizados por un vehículo de Fórmula 1 para dar una vuelta al circuito de Valencia España que tiene una longitud de 5.830 metros. Se debe de imprimir la velocidad promedio (Km/Hora) a la que el vehículo anduvo en la pista.';
document.write (problema14, salto,salto);

// variables 

var minutos = 10;
var segundos = 35;

//constantes 

var x = 5830;

// operaciones 

var St = ( minutos * 60 + segundos);
var Velp1 = ( x / St );

// resultado 
document.write ('La velocidad promedio del vehiculo es: ', Velp1, 'km/h',salto,salto); 

// ---------------------------------------------------------------------------------------------------

var problema15 = '15. Se hizo una prueba en un edificio de 40 pisos para determinar la velocidad a la que cae un martillo desde su parte más alta. Se sabe que cada piso del edificio mide 3.5 metros de altura. Si se conoce el tiempo que tardó el martillo en caer, se debe imprimir la velocidad promedio (Metros/Segundo) que alcanzó el martillo en su caída libre.';
document.write (problema15, salto, salto);

// variables 

var tiempo = 30;

// constantes 

var Altm = (3.5 * 40);

// proceso 

var Velp2 = ( Altm / tiempo);

// resultado 
document.write ( 'La velocidad promedio del martillo al caer es de ',Velp2,'m/s',salto, salto);
