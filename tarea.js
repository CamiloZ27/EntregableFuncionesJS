const suma = (x, y) =>{
    // Suma "x" e "y" y retorna el valor

    let sum = x + y;
    return sum;
}

const sonIguales = (x, y)=>{
    // Retorna "true" si "x" e "y" son iguales
    // Sino devuelve "false"

    if(x === y){

      return true;
    }
    else{

      return false;
    }
}

function tienenMismaLongitud(str1, str2) {
    // Retorna "true" si los dos strings tienen la misma longitud
    // Sino, devuelve "false"

    if (str1.length == str2.length){
      return true;
    }
    else{
      return false;
    }
  }

  function esPositivo(numero) {
    //La función recibe un numero entero y retorna un str
    //Si el número es positivo retornamos --> "Es positivo"
    //Si el número es negativo retornamos --> "Es negativo"
    //Si el número es 0, retorna false

    let str;

    if (numero > 0){

      str = 'Es positivo';
      return str;
    }
    else if (numero < 0){

      str = 'Es negativo';
      return str;
    }
    else{

      return false;
    }
  }

  const colors = (color)=>{
    //La función recibe un color.
    //Si el color recibido es "blue", retorna --> "This is blue"
    //Si el color recibido es "red", retorna --> "This is red"
    //Si el color recibido es "green", retorna --> "This is green"
    //Si el color recibido es "orange", retorna --> "This is orange"
    //default: retorna --> "Color not found"

    let str;

    switch (color) {
      case 'blue': 
        str = 'This is blue';
        return str;

      case 'red':
        str = 'This is red';
        return str;

      case 'green':
        str = 'This is green';
        return str;

      case 'orange':
        str = 'This is orange';
        return str;

      default:
        str = 'Color not found';
        return str;
    }
  }

  const fizzBuzz = (numero)  => {
    // Si "numero" es divisible entre 3, devuelve "fizz"
    // Si "numero" es divisible entre 5, devuelve "buzz"
    // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
    // De lo contrario, devuelve el numero

    let str;

    if (((numero % 3) == 0) && ((numero % 5) == 0)){

      str = 'fizzbuzz';
      return str;
    }
    else if ((numero % 3) == 0){

      str = 'fizz';
      return str;
    }
    else if ((numero % 5) == 0){

      str = 'buzz';
      return str;
    }
    else{

      return numero;
    }
  }

  const devolverPrimerElemento = (array) => {
    // Devuelve el primer elemento de un array

    let elemento = array[0];
    return elemento;
  }

  const agregarItemAlFinalDelArray = (array, elemento) =>{
    // Añade el "elemento" al final del array y lo retorna

    array.push(elemento);
    return array;
  }

  const nuevoUsuario = (nombre, email, password) => {
    // Crea un nuevo objeto con los atributos que se reciben
    // Retornar el objeto

    let objeto = {

      nombre: nombre,
      email: email,
      password: password
    }

    return objeto;
  }

  const verificarPassword = (usuario, password) => {
    // Comprueba si el "password" enviado coincide con la propiedad "password" del objeto "usuario"
    // Devuelve "true" si coinciden
    // De lo contrario, devuelve "false"

    if (usuario.password == password){

      return true;
    }
    else{

      return false;
    }
  }

  const actualizarPassword = (usuario, nuevaPassword) => {
    // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
    // Devuelve el objeto

    usuario.password = nuevaPassword;
    return usuario;
  }

  const agregarAmigo = (usuario, nuevoAmigo) => {
    // "usuario" tiene una propiedad llamada "amigos" que es un array
    // Agrega "nuevoAmigo" al final de ese array
    // Devuelve el objeto "usuario"

    usuario.amigos.push(nuevoAmigo);
    return usuario;
  }

  const pasarUsuarioAPremium = usuarios => {
    // "usuarios" es un array de objetos "usuario"
    // Cada objeto "usuario" tiene la propiedad "esPremium"
    // Define cada propiedad "esPremium" de cada objeto como "true"
    // Devuelve el array de usuarios
    
    usuarios.forEach((usuario) =>{ 

      usuario.esPremium = true;
    })

    return usuarios;
  }

  const sumarLikesDeUsuario = (usuario) => {
    // "usuario" tiene una propiedad llamada "posts" que es un array
    // "posts" es un array de objetos "post"
    // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
    // Suma todos los likes de todos los objetos "post"
    // Devuelve la suma
    // Tu código:
    // let usuario = {
    //   posts: [{
    //     likes: 4
    //   }]
    // };

    const suma = usuario.posts.map(post => post.likes).reduce((acumulador, valoractual) => {
      let likes = acumulador + valoractual
      return likes
    });

    return suma;
  }

  // ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con 
  //las propiedades de la persona y sus valores.
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }

class Persona {
  constructor(Nombre, Apellido, Edad, Domicilio) {
    this.Nombre = Nombre;
    this.Apellido = Apellido;
    this.Edad = Edad;
    this.Domicilio = Domicilio;
  }

  Detalle(Nombre, Apellido, Edad, Domicilio){
    let objeto = {
      Nombre: Nombre,
      Apellido: Apellido,
      Edad: Edad,
      Domicilio: Domicilio
    }

    return objeto;
  }
}

const crearInstanciaPersona = (nombre, apellido, edad, dir)=>{
    //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
    //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
    //Devolver la nueva persona creada

    const persona = new Persona('Juan','Perez',22,'Saavedra 123');
    return persona;
    
}

const sumarArray = (numeros, cb) =>{
    // Suma todos los números enteros (int/integers) de un array ("numeros")
    // Pasa el resultado a `cb`
    // No es necesario devolver nada

  const suma = numeros.reduce ((acumulador, valorActual) => {
      return acumulador + valorActual;
  })

  cb(suma);
}

const copiarEach = (array, cb) =>{
    // Itera sobre la matriz "array" y pasa los valores a cb uno por uno
    // Pista: Estarás invocando a `cb` varias veces (una por cada valor en el array)
    // no tienes que devolver nada

    for (let i = 0; i < array.length; i++) {

      cb(array[i]);
    }
    
  }

  const operacionMatematica =(n1, n2, cb) =>{
    //Vamos a recibir una función que realiza una operación matemática junto con dos números.
    //Devolver la función pasándole como argumentos los números recibidos.
    //Tu código:

    return cb(n1, n2);
  }

  function filter(array) {
    //Filtrar todos los elementos del array que comiencen con la letra "a".
    //Devolver un nuevo array con los elementos que cumplen la condición
    //Tu código:

    let newArray = array.filter(letra => letra.startsWith('a'))

    return newArray;
  } 


  /**
 * Por favor no borrar el código que hay de aquí en adelante.
 * Este código sirve para ejecutar las pruebas de la solución hallada para cada
 * una de las funciones creadas.
 */
module.exports = {
    suma,
    sonIguales,
    tienenMismaLongitud,
    esPositivo,
    colors,
    fizzBuzz,
    devolverPrimerElemento,
    agregarItemAlFinalDelArray,
    nuevoUsuario,
    verificarPassword,
    actualizarPassword,
    agregarAmigo,
    pasarUsuarioAPremium,
    sumarLikesDeUsuario,
    Persona,
    crearInstanciaPersona,
    sumarArray,
    copiarEach,
    operacionMatematica,
    filter
}

