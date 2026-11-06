function ejemplosCodigo5() {
const lista = [777, 42, 34, 67]
const listapush = lista.push(18);
const listapop= lista.pop();
const listaun= lista.unshift(17);
const listash= lista.shift();
const listasp= lista.splice(3, 4, 72);
const listasl = lista.slice(-1, -2);
const listacon = lista.concat(listasl);
console.log(lista);
console.log(listapush);
console.log(listapop);
console.log(listaun);
console.log(listash);
console.log(listasp);
console.log(listasl);
console.log(listacon);

//código II

let frutas = ["manzana", "naranja", "uva", "pera"];
let resultado = frutas.splice(1, 2);//Modifica variable original
let reemplazarElemento = frutas.splice(1, 1, "piña"); //Modifica variable original
let insertarElemento = frutas.splice(1,0, "pera", "uva");//Modifica variable original
console.log(resultado);

//código III
const b = [1,2,3,4,5];
console.log(b.splice(1,2)); // [2,3]
b.splice(1,0, "x" , "y");
console.log(b); // [1,4,5]
console.log(b.slice(1,3)); //['x', 'y'] (b no cambia)

//código IV
const n = [5, 12, 8, 130, 44];
n.indexOf(8);
n.includes(130);
n.find((x) => x>10);
n.findIndex((x) => x>10);
n.find((x) => x>1000);
n.some((x) => x>100);
n.every((x) => x>5);
//código V
let precios = [100, 250, 80, 400];
console.log(precios);
precios = precios.map((p) => p+20); // [120, 270, 100, 420]
console.log(precios);
precios = precios.filter((p) => p>150); //[250, 400]
console.log(precios);
precios = precios.reduce((acum, p) => acum + p,0)// 830
console.log(precios);
//sort y reverse modifican el original
const nums = [10, 9, 1, 100];
[...nums].sort(); // R: [1, 10, 100, 9]. .sort(): ordena los elementos de menor a mayor según su valor como texto (orden alfabético).
[...nums].sort((a, b) => a - b); // R: [1, 9, 10, 100]. .sort(): ordena los números de menor a mayor mediante una resta entre los elementos.
[...nums].sort((a, b) => b - a); // R: [100, 10, 9, 1]. .sort(): ordena los números de mayor a menor invirtiendo el orden de la resta.
}
//Prácticas
//let listaalumnos = ["Alejandro", "Raúl", "Gerardo"];
function promedioAprobados() {
    let list_cal_al = [10, 7.5, 5];
    let list_cal_apr= list_cal_al.filter((x) => x>=6);
    let prom= list_cal_al.reduce((acum, p) => acum + p,0)/list_cal_al.length
    console.log("Los aprobados son: " + list_cal_apr);
    console.log(prom);
    /*let cantidadAlumnos = parseInt(prompt("Cuantos alumnos tiene?"));
    for (let i = 0; i < cantidadAlumnos; i++) {
        let alumno = prompt("Cuál es el alumno #" + (i+1)+ "?");
        let cal_al = parseFloat(prompt("Cuál es la calificación del alumno #" + (i+1)+ "?")); 
        listaalumnos.push(alumno);
        list_cal_al.push(cal_al);

    }*/
}
promedioAprobados();
function cuadradoPares() {
    let numeros = [1, 3, 6, 7, 2, 8, 12, 36, 48, 22];
    let num_ordenados = numeros.filter((x) => x%2 === 0).map((x)=> x**2).sort((x,y) => y - x); //Valor mayor a menor según jerarquia
    console.log(num_ordenados); 
   
    /*for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 == 0) {
            
        }
        
    }*/
}
cuadradoPares()
function ordenEspañol() {
let elementos = ["pera", "Manzana", "uva", "Árbol"];
console.log(elementos.sort((a, b) => a.localeCompare(b, "es", { sensitivity: "base" })));

/*const sinAcentos = (str) => {
return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

};
let elementos_low = [];
for (let i = 0; i < elementos.length; i++) {
    elementos_low.push(sinAcentos(elementos[i].toLowerCase()));
    
}
let elementos_ordenados = elementos_low.sort((x,y) => x.localeCompare(y, "es"));
console.log(elementos_low);
console.log(elementos_ordenados);*/
}
ordenEspañol();