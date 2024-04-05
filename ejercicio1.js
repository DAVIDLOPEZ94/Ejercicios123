var nota=0; asistencia=0; Numtotalclases=15;
nota= prompt ("Ingrese la nota final del estudiante");
asistencia= prompt ("Ingrese los dias asistidos por el estudiante");    

if (asistencia>=Numtotalclases*0.8 && nota>=3) {
   alert("El estudiante aprobó la materia");
}
else {

 alert("El estudiante no aprobó la materia");

}

