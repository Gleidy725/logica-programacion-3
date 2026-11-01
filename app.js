const prompt = require('prompt-sync')();

let valor = prompt("Ingresa el valor: ");
valor=Number(valor);
let resultado=1;

for(let i=1;i<=valor;i++){
    resultado=resultado*i;
}
console.log("Tu resultado es: "+resultado);