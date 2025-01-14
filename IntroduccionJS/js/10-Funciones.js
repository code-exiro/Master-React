/* 
Function Declaration
function sumar(numero1 = 0, numero2 = 0){ //Esta forma de declarar es interesante porque en caso de que mandaramos a llamar nuestra funcion mas arriba en el codigo si nos lo permitiria
    console.log(numero1 + numero2)
}

sumar(10, 40)
sumar(100, 146)
sumar(10)


Funciones - Funciones Expression
const sumar = function(numero1 = 0, numero2 = 0){
    console.log(numero1 + numero2)
}

sumar(10, 20)
sumar(100, 200)
sumar(685)


Arrow functions
const sumar = (numero1 = 0, numero2 = 0) => console.log(numero1 + numero2)

sumar(10, 28)
sumar(300, 3)
sumar(100)
*/

//Funciones que retornan valores 
const sumar = function(numero1 = 0, numero2 = 0){
    console.log(numero1 + numero2)
}


sumar(23,3)
