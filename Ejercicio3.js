var   num1 =0; num2=0; resultado=0;

num1= prompt("Ingrese el primer numero");
num2= prompt("Ingrese el segundo numero");

if (num1>num2) {

    var resultado=parseFloat(num1)+parseFloat(num2)
    alert ("El resultado es " + resultado);
}
if (num1<num2){

    var resultado=parseFloat(num1*num1)+parseFloat(num2*num2)
    alert ("El resultado es " + resultado);
}
if(num1==num2){

    alert("Los numeros son iguales")
}

