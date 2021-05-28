Algoritmo matrices
	Definir filas,columnas, matriz Como Entero
	Definir i,j,suma Como Real
	
	Escribir 'Escriba el número de filas'
	leer filas 
	
	Escribir 'Escriba el número de columnas' 
	leer columnas
	
	Dimension matriz[filas,columnas]
	
	Para i<-1 hasta filas Con Paso 1 hacer 
		Para j<-1 hasta columnas Con Paso 1 hacer 
			Escribir 'Ingrese un número para la fila: ', i, ' columna: ', j
			leer matriz[i,j]
		FinPara
	FinPara
	
		
		Para j<-1 hasta columnas Con Paso 1 hacer
			suma<- suma + matriz[j,2]
		FinPara
		
	
	
	Para i<-1 hasta filas hacer 
		Para j<-1 hasta columnas hacer 
			Escribir Sin Saltar matriz[i,j], ''
		FinPara
		Escribir ''
	FinPara
	
	Escribir 'El resultado de la suma en la columa 2 es: ' suma
FinAlgoritmo
