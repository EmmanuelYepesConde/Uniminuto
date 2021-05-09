select * from tipousuario;
select * from perfiles;
select * from datospersonales;
select * from usuarios;
select * from empleados;
select * from clientes;

/* 
	Elaborar una consulta que me muestre la siguiente información:
    
    cedula	|	Nombre completo	|	Fecha ingreso
    
    Cuando la persona sea Femenino.
*/
select cedula, concat(Nombre,' ', Apellidos) from datospersonales;
select * from generos;
# Paso a paso para ejecutar:

# 1. Buscar individualmente los datos que necesito
select cedula from datospersonales; # check 
select Nombre from datospersonales; # check
select Apellidos from datospersonales; # check
select fechaIng from perfiles;
# Busco los atributos de la condición:
select genero from generos;
select * from datospersonales;


# Traemos el resultado esperado:
select 
	datospersonales.cedula as 'Cédula', 
	concat(datospersonales.nombre,' ',datospersonales.apellidos) as 'Nombre Completo', 
	perfiles.fechaing as 'Fecha de Ingreso'
from datospersonales
join perfiles
on datospersonales.idUsuarios = perfiles.idUsuarios
join generos
on datospersonales.idGeneros = generos.idGeneros
where generos.Genero = 'Femenino'
group by datospersonales.cedula;

       #Cuando la persona sea masculino
       
-- Datos necesarios
select cedula from datospersonales;
select Nombre from datospersonales;
select Apellidos from datospersonales;
select fechaIng from perfiles;
-- Resultado esperado
select 
datospersonales.Cedula as 'Cédula',
concat(datospersonales.Nombre,' ', datospersonales.apellidos) as 'Nombre Completo', 
perfiles.fechaing as 'Fecha de Ingreso'
from datospersonales 
join perfiles 
on datospersonales.idUsuarios = perfiles.idUsuarios
join generos
on datospersonales.idGeneros = generos.idGeneros
where generos.Genero = 'Masculino'
group by datospersonales.cedula;

		#Cuando es emplead@
        
-- Datos necesarios 
select cedula from datospersonales; # check 
select Nombre from datospersonales; # check
select Apellidos from datospersonales; # check
select fechaIng from perfiles; 
select NombTipo from tipousuario;
# Busco los atributos de la condición:
select genero from generos;
select NombTipo from tipousuario;
select * from empleados;

select 
datospersonales.Cedula as 'Cédula',
concat(datospersonales.Nombre,' ', datospersonales.apellidos) as 'Nombre Completo', 
empleados.fechaing as 'Fecha de Ingreso'
from datospersonales
join empleados
on datospersonales.idUsuarios = empleados.idUsuarios
join generos
on datospersonales.idGeneros = generos.idGeneros
join tipousuario
on perfiles.idTipoUsuario = tipousuario.idTipoUsuario
where generos.genero = 'Femenino' and tipousuario.NombTipo = 'Empleado'
group by datospersonales.cedula;

select * from datospersonales;
select * from empleados;
select * from generos;
select * from clientes;
select * from tipodocus;
	    
        
        #Cuando es cliente 
        
-- Datos necesarios 
select cedula from datospersonales; # check 
select Nombre from datospersonales; # check
select Apellidos from datospersonales; # check
select fechaIng from perfiles; 
select NombTipo from tipousuario;
# Busco los atributos de la condición:
select genero from generos;
select NombTipo from tipousuario;
select * from empleados;

select 
datospersonales.Cedula as 'Cédula',
concat(datospersonales.Nombre,' ', datospersonales.apellidos) as 'Nombre Completo', 
perfiles.fechaing as 'Fecha de Ingreso'
from datospersonales
join perfiles
on datospersonales.idUsuarios = perfiles.idUsuarios
join generos
on datospersonales.idGeneros = generos.idGeneros
join tipousuario
on perfiles.idTipoUsuario = tipousuario.idTipoUsuario
where generos.genero = 'Masculino' and tipousuario.NombTipo = 'Cliente'
group by datospersonales.cedula;

	 #Para cédula o pasaporte
     
-- Datos necesarios 

select tipodocus from datospersonales; # check 
select Nombre from datospersonales; # check
select Apellidos from datospersonales; # check

# Busco los atributos de la condición:
select Nombtidoc from tipodocus;

select 
datospersonales.cedula as 'Identificación',
concat(datospersonales.Nombre,' ', datospersonales.apellidos) as 'Nombre Completo'
from datospersonales
join tipodocus
on datospersonales.idTipoDocus = tipodocus.idTipoDocus
where tipodocus.NombTiDoc = 'Pasaporte'
group by datospersonales.cedula;

select* from tipodocus;
select * from perfiles;