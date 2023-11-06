/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:

   let arr = [];

   for (const key in objeto) {

      arr.push([key, objeto[key]])
   }

   return arr;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:

   let arrString = string.split('').sort();

   let resultado = {}
   
   arrString.forEach(element => {
      resultado[element] = resultado[element] + 1 || 1
   });
   
   return resultado;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:

   let arrMinusculas = [];
   let arrMayusculas = [];

   let arrString = string.split('')

   for (let i = 0; i < arrString.length; i++) {

      if (arrString[i] === arrString[i].toUpperCase()) {
         
         arrMayusculas.push(arrString[i])
      } else {

         arrMinusculas.push(arrString[i])
      }
   }

   let mayusculas = arrMayusculas.join('');
   let minusculas = arrMinusculas.join('');
   
   return mayusculas+minusculas;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

   let arrLetras = frase.split('').reverse().join('');   //? Separo la frase en letras, las invierto y las vuelvo a unir.
   let arrPalabras = arrLetras.split(' ').reverse().join(' '); //? Separo la frase en palabras, las invierto y las vuelvo a unir.

   return arrPalabras;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:

   let numeroToString = numero.toString();
   let numeroReverso = numeroToString.split('').reverse().join(''); 

   if (numeroToString === numeroReverso) {
      return 'Es capicua';
   } else {
      return 'No es capicua'
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:

   let arrString = string.split('');
   let arr = [];

   for (let i = 0; i < arrString.length; i++) {
      
      if (arrString[i] === 'a' || arrString[i] === 'b' || arrString[i] === 'c') {

         continue;
      } else {

         arr.push(arrString[i]);
      }
   }
   string = arr.join('')

   return string;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

   let newArr = [];

   newArr = arrayOfStrings

   newArr.sort((a, b) => {
      return a.length - b.length
   })
   
   return newArr;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:

   let newArr = [];

   for (let i = 0; i < array1.length; i++) {
      
      for (let x = 0; x < array2.length; x++) {
         
         if (array1[i] === array2[x]) {
            newArr.push(array1[i])
         } 
      }
   }
   
   return newArr
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
