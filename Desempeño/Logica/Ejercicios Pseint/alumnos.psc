Algoritmo alumnos
	Definir x,n,sexo,hombres, mujeres Como Entero
	Escribir 'Escribir el n�mero de alumnos'
	leer n 
	
	x = 1 
	hombres = 0
	mujeres = 0 
	
	Mientras x <= n hacer 
		Escribir  'Elige un n�mero seg�n el sexo'
		Escribir  '1. Hombre'
		Escribir  '2. Mujer'
		leer sexo 
		
		si sexo == 1 Entonces
			hombres<-hombres+1
		SiNo
			si sexo==2 Entonces
				mujeres<-mujeres+1
			SiNo
				Escribir 'Escribe el n�mero seg�n tu sexo'
				x=x-1
			FinSi
		FinSi
		
		x<- x+1
	FinMientras
	
	
	Escribir  'El numero de alumnos hombres es: ', hombres
	Escribir  'El numero de alumnos mujeres es: ', mujeres
FinAlgoritmo
