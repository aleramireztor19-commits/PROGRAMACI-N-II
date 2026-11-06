function ejemplosCodigo() {
const resultado = Math.max(3, 9, 4);
console.log(resultado); //9
//metodo: parentesis; propiedad NO
//código 2
console.log(parseInt("42px", 10)) //42
console.log(parseInt("px42", 10)) //NaN
console.log(parseFloat("3.5kg")) //3.5
console.log(Number("3.5kg")) //NaN
console.log(isNaN("abc")) //true
console.log(Number.isNaN("abc"))//false
//Código 3
const t = "Hola Mundo";
t.toUpperCase();//se descarta
console.log(t); //Hola Mundo
const mayus = t.toUpperCase();
console.log(mayus); //HOLA MUNDO
const s = "JavaScript";
console.log(s.length, s[0]); // 10 'J'
console.log(s.at(-1)); // t
//Código 4
const frase = "el perro y el gato";
console.log(frase.indexOf("el"));       // 0
console.log(frase.indexOf("el", 1));    // 11
console.log(frase.lastIndexOf("el"));   // 11
console.log(frase.indexOf("zorro"));    // -1
console.log(frase.includes("gato"));    // true
console.log(frase.startsWith("el"));    // true
console.log(frase.endsWith("perro"));   // false
//Código 5
const f = "2026-10-19";
console.log(f.slice(0, 4)) //2026
console.log(f.slice(5,7)) //10
console.log(f.slice(-2)) //19, cuenta desde el final el signo -
console.log(f.split("-")) // ['2026', '10', '19']
console.log(" hola ".trim()) // hola
console.log("7".padStart(11, 47002131237123)) //007 --- modificar valores
console.log("a-b-c".replaceAll("-", "+")) // a+b+c
//Código 6
console.log("é" > "z") //true
const L = ["b", "á", "a"];
console.log(L.sort()); // ['a', 'b', 'á']
const es = (x, y) => x.localeCompare(y, "es");
console.log(L.sort(es)); // ['a', 'á', 'b']
const sinAcentos = (txt) => txt.normalize("NFD").replace(/[-x]/g, "");
console.log(sinAcentos("José Ángel Núñez")) //Jose Angel Nunez 
}


//Prácticas


function contarVocales() {
    let palabra = prompt("Escriba una palabra");
    console.log(palabra);
    let contadorVocales = 0; // Convertir toda la cadena a minúsculas para facilitar la comparación
    const textoMinusculas = palabra.toLowerCase(); // Definir las vocales a buscar (incluyendo acentuadas)
    const vocales = "aeiouáéíóú";
    for (let i = 0; i < textoMinusculas.length; i++) { // Verificar si el carácter actual está en la cadena de vocales
        if (vocales.includes(textoMinusculas[i])) {
            contadorVocales++;
        }
    }
    return contadorVocales;
}   


let palindromo = prompt("Escriba un palindromo");
const sinAcentos = (str) => {
return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};
function esPalindromo() {

    palindromo = palindromo.toLowerCase();
    palindromo = palindromo.replaceAll(" ", "");

    console.log("Original:", palindromo);

    let ultpalind = "";
    palindromo = sinAcentos(palindromo)  
    for (let i = palindromo.length - 1; i >= 0; i--) {
        ultpalind += palindromo[i];
    } 
    console.log("Invertido:", ultpalind);

    if (ultpalind === palindromo) {
        alert("Su texto SI es un palindromo");
    }
    else {
        alert("Usted NO tiene un palindromo");
    }

    return ultpalind;
}

console.log(esPalindromo());
