var descuento=0; monto=0;

monto=prompt("Ingrese el monto");

if (monto>100){

    descuento=monto*0.1
}
else {
    descuento=monto*0.02
}

alert("su descuento es de " + descuento + "%");