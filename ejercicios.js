//ejercicio 3
const lista = [1, 2, , 3, 4, 5];

function sumarPares(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] % 2 === 0) {
      suma = suma + list[i];
    }
  }
  return suma;
}
console.log(sumarPares(lista));

//ejercicio 4

const diccionario = ["hola", "pizza", "anana", "mama", "perro"];

function TerminaEnA(diccionario) {
  const letra = diccionario.every((palabra = palabra.endsWith("a")));
  return letra;
}
console.log(TerminaEnA(diccionario));

//ejercicio 5

const numero = [-45, 32, -36, -67];

function sortAbsoluteNumbers(lista) {
  const listaV = [];
  for (let i = 0; i < lista.length; i++) {
    const abs = Math.abs(lista[i]);
    listaV.push(abs);
  }
  return listaV.sort((a, b) => a - b);
}
console.log(sortAbsoluteNumbers(numero));

//ejercicio 6

const words = [
"hola",
"tres",
"uno",
"universidad",
"de",
"buenos aires",
"pepito"
];

const word = "pepito";

function buscaPalabras(words, word) {
 let lista = [];
 const indice = words.indexOf(word);
 for (let i = 0; i< words.length; i++) {
    if (words[i].length > indice){
      lista.push(words[i]);
    }
 }
 console.log(buscaPalbras(word))
}