Algoritmo cinco_numeros
	Definir num,i, resultado, promedio Como real
	
	Escribir 'A continuación ingrese 5 números que desee promediar'
	Escribir ''
	

	para i<-1 hasta 5 Con Paso 1 hacer
		Escribir 'Ingrese el número ', i
		leer num
		resultado = resultado+num
	FinPara
	
	promedio= resultado/5
	
	Escribir 'El resultado es ', resultado
	Escribir 'El promedio es ', promedio
	
FinAlgoritmo
