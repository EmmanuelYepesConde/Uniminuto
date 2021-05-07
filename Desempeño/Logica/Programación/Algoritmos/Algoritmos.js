// problema vacunas:

//constantes:
const cdiez= 10;
const cocho= 8; 

//variables 
var peso = 5;
var meses = 12; 
var dosis = (((peso + cdiez) / ( 10 * meses)) + 8)  ; 
var dosis = Math.floor(dosis); 

document.write ('1. problema vacunas: <br><br>')
document.write('Las dosis necesarias son ', dosis, '<br><br>'); 


// problema salario 

//constantes
const porcerete = 12.5;

// variables 
var Hs = 48;
var Vh = 15000;
var Sbruto = ( Hs * Vh );
var Retenfuente = ((Sbruto/100) * porcerete) ;
var SalNeto = (Sbruto - Retenfuente); 

document.write ( '2.  problema salario <br><br>');
document.write (' El salario bruto es ', Sbruto, ' la retención de la fuente es ', Retenfuente, ' el valor neto es ', SalNeto, '<br><br>');  

// problema EPM

//constantes
const kw = 15000;
const aseo = 10;

//variables 
var LecAnt = 1;
var LecAct = 1;
var consumo;

//proceso
var consumo = LecAnt + LecAct;
var monto = consumo * kw; 
var cobroaseo = ((monto/100) * aseo);
var montopagar = (monto + cobroaseo);

//resultado 
document.write ('3. problema EPM <br><br>');
document.write ('Señor usuario, su consumo fue de ', consumo, ' por lo tanto el monto a pagar es ', montopagar, '<br><br>');


// problema evaluaciones 

//constantes 
const P1 = 15;
const P2 = 30;
const P3 = 25;
const P4 = 10;
const P5 = 20;

// variables 
var ev1 = 3;
var ev2 = 5;
var ev3 = 1;
var ev4 = 4;
var ev5 = 1;

var calificacionF

//procesos
var ev1 = (3/100)*15;
var ev2 = (5/100)*30;
var ev3 = (1/100)*25;
var ev4 = (4/100)*10;
var ev5 = (1/100)*20;

var calificacionF = ev1+ev2+ev3+ev4+ev5 

//resultado 
document.write ( '4. problema evaluaciones <br><br>');
document.write ( 'Su calificación final fue ', calificacionF, '<br><br>');

// problema descuentos 

//constantes
const Lph = 1
const Ss  = 4
const Spf = 0.5 
const Ca  = 5

//variables 
var Salario = 50000; 
var SalarioFinal; 
var md1; 
var md2; 
var md3;
var md4; 

//procesos
var md1 = ((Salario/100)*Lph);
var md2 = ((Salario/100)*Ss);
var md3 = ((Salario/100)*Spf);
var md4 = ((Salario/100)*Ca);

var SalarioFinal = Salario - md1 - md2 - md3 - md4;

// resultado
document.write ('5. problema descuentos <br><br> ');
document.write ('Señor usuario, a su salario se le aplicaran los siguientes descuentos : <br><br>');
document.write ('Descuento por ley de politica habitacional ', md1,'<br>');
document.write ('Descuento por seguro social ', md2,'<br>');
document.write ('Descuento por seguro paro forzozo ', md3,'<br>');
document.write ('Descuento por caja de ahorros ',md4,'<br><br>');
document.write ('Aplicando estos descuentos su salario final es ', SalarioFinal, '<br><br>');

//problema difunto 

//constantes 
const incremento = 0.2;
const CuotasDiferidas= 24

//variables 
var precioInicial = 720000;
var precioFinal; 

//proceso 

var cuotasencilla = precioInicial / CuotasDiferidas
var cuotaIncremento = ((cuotasencilla * incremento) + cuotasencilla)
var precioFinal = cuotaIncremento * CuotasDiferidas
//resultado 
document.write ('6. problema del difunto <br><br>')
document.write ('Señor usario cada cuota de la parcela quedó a ',cuotaIncremento, ' por lo tanto el monto total de la parcela es ',precioFinal, '<br><br>');

//problema triangulo 

// constantes 
const div = 2

//variables 
var base = 2;
var altura = 2;
var lado1 = 3;
var lado2 = 3;
var lado3 = 3;

//proceso
var Area = ((base * altura) / div);
var perimetro = lado1+lado2+lado3;

//resultado 
document.write ('7. problema del triangulo <br><br>');
document.write ('El área es ', Area, ' el perimetro es ', perimetro, '<br><br>');

// problema ahorristas 

//constantes
const pago = 1.5;

//variables 
var saldoinicial = 25;
var saldofinal;

//proceso
var pagofinal = ((saldoinicial/100) * pago);
var saldofinal = saldoinicial + pagofinal;

//resultado 
document.write ('8. problema saldo <br><br>')
document.write ( 'El saldo final es ', saldofinal, '<br><br>');

// problema volumen de un cono 
const divc= 1/3;
const elev = 2;

//variables 
var alturaC = 2;
var radioC = 2;
var volumen; 

//proceso 
var volumen = divc * alturaC * (radioC + elev);

//resultado 
document.write ('9. problema volumen <br><br>')
document.write ('El volumen es ', volumen, '<br><br>');

// problema bonificación por hijos 

//const
const bono = 10;

//var 
var hijos = 2;
var sueldobase = 100000;
var montoboni;
var montosueldo;

//proceso
var montoboni = ((sueldobase/100) * 10);
var montoboni = montoboni * hijos;
var montosueldo = (sueldobase + montoboni);

//resultdo 
document.write ('10. problema bonificación por hijos <br><br>');
document.write ('el monto de bonificación es ',montoboni, ' el monto total del trabajador es ', montosueldo, '<br><br>');

// problema profesores 

const desc = 5
const pagoprof = 20000

var montodesc; 
var montopagarP; 

var montodesc = (pagoprof/100) * desc;
var montototal = pagoprof - montodesc;

document.write ('11. problema del profesor <br><br>');
document.write ('Monto del descuento ', montodesc, ', monto total a pagar ', montototal, '<br><br>');

// problema de los terrenos 

const precio = 550000;
const cuotas = 12;

var montoporcuota = precio / cuotas;

document.write ('12.problema terrenos <br><br>');
document.write ('El monto a pagar en cada cuota es ', montoporcuota,);
