let sumatoria = 0;
let calificacion1;
let calificacion2;
let calificacion3;
let promedios = 0;
let arr = [];
function promedio() {
     arr = [];
     calificacion1 =parseFloat(prompt("Deme la primera calificación"));
     arr.push(calificacion1);
     calificacion2 =parseFloat(prompt("Deme la segunda calificación"));
     arr.push(calificacion2);
     calificacion3 =parseFloat(prompt("Deme la tercera calificación"));
     arr.push(calificacion3);
     for (let i = 0; i < arr.length; i++) {
        sumatoria+= arr[i];
        
     }
     promedios= sumatoria/arr.length
     return promedios.toFixed(2)

    }
    alert("Su promedio es de: " + promedio());