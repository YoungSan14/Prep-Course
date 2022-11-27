// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
  }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let arrays = [];
  for (let i in objeto){
      let key = i;
      let valor = objeto[i];
      let array = [key, valor];
      arrays.push(array);
  }
  return arrays;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let strArray = string.split('')
  let repeticiones = {}
  strArray.forEach(function(str){
    if (repeticiones[str] === undefined){
      repeticiones[str] = 1;
    }else{
      repeticiones[str] += 1;
    }
  })
  return repeticiones;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let abcMinus = /[a-z]/g
// exprecion regular de la 'a' hasta la 'z', bandera /g para incluir todos los caracteres en minuscula
  let abcMayus = /[A-Z]/g 
// exprecion regular de la 'A' hasta la 'Z', bandera /g para incluir todos los caracteres en MAYUSCULA    
  let arrayMinus = s.match(abcMinus);
// el metodo .match() tomara todas las minusculas del string gracias a la exprecion regular 'abcMinus'
  let arrayMayus = s.match(abcMayus);
// el metodo .match() tomara todas las MAYUSCULAS del string gracias a la exprecion regular 'abcMayus'
  let newString = arrayMayus.join('') + arrayMinus.join('');
// concatena ambos arrays en formato string
  return newString;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let strAlreves = '';
// se declara un string vacio
  for (let i = str.length -1; i >= 0; i--){
// el bucle for itera de el ultimo caracter(str.length - 1), al primero (cuando i valga 0)
    strAlreves += str[i];
// y lo concatena al string vacio 'strAlreves'
  }
  return strAlreves.split(' ').reverse().join(' ')
//.split(' ') convieter el string en array separado por un espacio
//.reverse() invierte la posicion de los elementos del array
//.join(' ') convierte el array en string con un espacio de por medio
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let numString = numero.toString();
  let numAlreves = numString.split('').reverse().join('');
  if (numString === numAlreves){
  return 'Es capicua';
  }else{
  return 'No es capicua';
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let expReg = /[a-c]/g;
// se define la exprecion regular de la 'a' hasta la 'c' ([a-c])  
  if (expReg.test(cadena)){
// .test() devuelve un booleano  
    let abc = cadena.match(expReg).join('');
// abc contine todos los caracteres a|b|c que contenga la cadena 
    return cadena.replace(abc,'')
// .replace() remplaza los caracteres a|b|c por ningun caracter ni espacio ('')
  }else{
    return cadena;
  }
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  arr.sort(function(a, b){
    return a.length - b.length;
  })
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  let coincidencias = [];
  let vacio = [];
  for(let i = 0; i < arreglo1.length; i++){
    for(let j = 0; j < arreglo2.length; j++){
      if(arreglo1[i] === arreglo2[j]){
        coincidencias.push(arreglo2[j]);
      }
    }
  }
  if(coincidencias.length !== 0){
    return coincidencias;
  }else{
    return vacio;
  }
}
//Escribe tu código aquí  




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};

