Algoritmo array 
	
	Definir n, resultado Como Entero
	Definir posicion Como Real
	
	Escribir 'Escribir un n�mero para el arreglo'
	leer n 
	
	Escribir ''
	
	Dimension posicion[n]
	
	para i<-1 hasta n Con Paso 1 hacer 
		Escribir 'Ingrese el numero ', i
		leer posicion[i]
		
		resultado= resultado + posicion[i]
	FinPara
	
	escribir 'La suma de los n�meros es: ', resultado
FinAlgoritmo
