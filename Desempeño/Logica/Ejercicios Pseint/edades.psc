Algoritmo mayor_menor
	Definir edad1, edad2, edad3, edad4, mayorque, menorque, i Como Entero
	Definir promedio Como real
	
	Escribir 'Ingrese la edad de la persona 1'
	leer edad1
	
	Escribir 'Ingrese la edad de la persona 2'
	leer edad2
	
	Escribir 'Ingrese la edad de la persona 3'
	leer edad3
	
	Escribir 'Ingrese la edad de la persona 4'
	leer edad4
	
	Para i<-1 hasta 4 Con Paso 1 hacer 
		Si edad1>edad2 & edad1>edad3 & edad1>edad4 Entonces
			mayorque = edad1
		SiNo
			si	edad1<edad2 & edad1<edad3 & edad1<edad4
				menorque = edad1
			SiNo
				edad1=edad1
			FinSi
		Fin Si
		
		Si edad2>edad1 & edad2>edad3 & edad2>edad4 Entonces
			mayorque = edad2 
		SiNo
			si	edad2<edad1 & edad2<edad3 & edad2<edad4
				menorque = edad2 
			SiNo
				edad2=edad2
			FinSi
		Fin Si
		
		Si edad3>edad2 & edad3>edad1 & edad3>edad4 Entonces
			mayorque = edad3 
		SiNo
			si	edad3<edad2 & edad3<edad1 & edad3<edad4
				menorque = edad3 
			SiNo
				edad3=edad3
			FinSi
		Fin Si
		
		Si edad4>edad2 & edad4>edad3 & edad4>edad1 Entonces
			mayorque = edad4 
		SiNo
			si	edad4<edad2 & edad4<edad3 & edad4<edad1
				menorque = edad4 
			SiNo
				edad4=edad4
			FinSi
		Fin Si
	FinPara
	
	promedio<- (edad1+edad2+edad3+edad4)/4 	
	
	imprimir 'La persona mayor es la de: ', mayorque, ' años'
	Imprimir 'La persona menor es la de: ', menorque, ' años'
	Imprimir 'El promedio de edades es: ', promedio, ' años'
	
FinAlgoritmo
