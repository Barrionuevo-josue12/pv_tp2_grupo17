//2.Mostrar por consola los primeros 10 números pares.
let i = 1 ;
let es_Par; // variable boolean para determinar si un numero es par o no
while (i<=10)
{
    es_Par = (i % 2 === 0); // condicion para que a un n° se lo considere par.
    //si es_Par contiene el valor de true, a continuacion se mostrara su valor en consola.
    if(es_Par===true)
        console.log("El numero :" +i , "es par");
 i++;
}