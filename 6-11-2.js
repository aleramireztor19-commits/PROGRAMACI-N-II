function ejemplosCodigo6(params) {
//código I
const x = 1234.5678;
x.toFixed(2) //1234.57
typeof x.toFixed(2) //string
Number(x.toFixed(2)) //1234.57
(255).toString(2) //11111111
const peso = new Intl.NumberFormat("es-MX", {
    style: "currency",currency: "MXN"
});
peso.format(x)// $1,234.57
//códigos II & III
Math.round(2.5) //3
Math.round(-2.5)//2 **Para quitar decimales sin redondear usa "trunc"
0.1+0.2 // 0.30000000000004
0.1+0.2=== 0.3 // false **0.1 no se guarda exacto
//Código IV
}
function redondear(n, decimales) {
    
    return Number(n.toFixed(decimales));
}
console.log(redondear(3.77674295, 4));
function promedioTexto() {
    const texto = "8, 9,5, x, 7, , 10";
    let promed = texto.replaceAll(" ", "").split(",").map((x) => Number(x)).filter((x)=> !Number.isNaN(x));
    let promediofin= promed.reduce((acum, p) => acum + p,0)/promed.length
    //let promedio_num = [];
    /*for (let i = 0; i < promed.length; i++) {
            promedio_num.push(Number(promed[i]));
    }
    promedio_num.filter((x)=> x== "x")*/
    console.log(promed);
    console.log(promediofin)
}
promedioTexto()