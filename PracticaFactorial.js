
const prompt = require('prompt-sync')();

console.log("Calculadora de Factorial");

let numero = prompt("Ingrese un numero: ");


numero = parseInt(numero);


let factorial = 1;


for (let i = 1; i <= numero; i++)
{
    factorial = factorial * i;
}


console.log("El factorial de " + numero + " es: " + factorial);