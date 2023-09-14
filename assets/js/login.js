/**
 * @author Perry Code
 * @version 0.0.1
 * Login functionality
 */

/**
 * @function funcion para ingresar usuarios a el local storage y poder realizar pruebas funcionales del codigo
 *
 * @returns {void} nada
 */

function testUsersDatabase() {
  const user1 = {
    id: 1,
    name: "ed",
    lastName: "cetina",
    user: "tururu06",
    password: "13954357582",
    email: "edcet@gmail.com",
  };

  const user2 = {
    id: 2,
    name: "ed",
    lastName: "cetina",
    user: "tururu07",
    password: "123456789",
    email: "edcet@gmail.com",
  };

  const user3 = {
    id: 3,
    name: "ed",
    lastName: "cetina",
    user: "tururu08",
    password: "87685877",
    email: "edcet@gmail.com",
  };

  localStorage.setItem(1, JSON.stringify(user3));
  localStorage.setItem(2, JSON.stringify(user1));
  localStorage.setItem(3, JSON.stringify(user2));
}





////////////////////CODIGO PRINCIPAL/////////////////////////////////////////////////////
testUsersDatabase(); // metemos usuarios de prueba en el LocalStorage
const registerForm = document.forms["loginForm"]; // obtenemos el objeto de Formulario


registerForm.addEventListener("submit", (event) => {//Funcion para ejecutar las validaciones en el evento de presionar un boton
  event.preventDefault(); // Evita que el formulario se envíe por defecto

  const infoFormulario = {
    // Creo un objeto con atributos de usuario inbtroducido
    user: registerForm.elements["inputName"].value,
    password: registerForm.elements["inputPassword"].value,
  };
  validacionDeDatos(infoFormulario); // realizamos todas las validaciones para poder desplegar las alertas de incio de sesion
});

/**
 * valida que usuario y contraseña sean correctos con los que estan en local storage
 * @param {object} inputDelFormulario es un obbjeto con el user y pass obtenidos del Formulario
 * Objeto que contiene usuario y contraseña codificados
 */
function validacionDeDatos(inputDelFormulario) {
  let key; // variable asociada al key del localStorage
  key = encuentraUsuario(inputDelFormulario);

  if (!key) {
    //al ser falso el no se encontro usuario
    mostrarAlerta("usuario invalido");
    return;
  } else {
    // en este caso se encontraron el usuario y se verifica la contraseña
    if (validacionDePassword(inputDelFormulario.password,JSON.parse(localStorage.getItem(key)))) {
      mostrarAlerta("exito de conexion"); // usuario y contraseña validos
    } else {
      mostrarAlerta("password invalido"); // pass invalido
    };
  };
};
////////////////////FIN CODIGO PRINCIPAL/////////////////////////////////////////////////////

/**
 * Encuentra si el usuario introducido existe en la base de datos y devuelve el key asociado en el local storage
 * @param {object} datosDelFormulario string que contiene el user o el passwd para buscar
 * @return {key} retorna el key del usuario si se encontro en el localStorage
 */
function encuentraUsuario(datosDelFormulario) {
  let id = false;
  // recorre cada key del local storage
  Object.keys(localStorage).forEach((key) => {    
    if (validacionDeUsuario(datosDelFormulario.user,JSON.parse(localStorage.getItem(key)).user)) { // verifica usuario con usuario en local storage
      id = key;
    };
  });
  return id;
};

/**
 * Valida al usuario ingresado con el usuario almacenado en el localStorage
 * @param {string} nombreDeinputDelFormulario usuario ingresado en el formulario
 * @param {string} nombreDeUsuariodeRegistrado usuario de la base de datos o lcoal storage
 * @returns {boolean} devuelve false si no detecta coincidencia
 */

function validacionDeUsuario(nombreDeinputDelFormulario, nombreDeUsuariodeRegistrado) {
  return nombreDeinputDelFormulario === nombreDeUsuariodeRegistrado;
};

/**
 * valida que contraseña sea correcta con los que estan en local storage
 * @param {string} passwordDeFormulario 
 * @param {string} PasswordRegistrado
 * @returns {boolean} devuelve el boolean de la comparacion de datos
 */

function validacionDePassword(passwordDeFormulario,PasswordRegistrado) {
  return passwordDeFormulario === PasswordRegistrado;
};

/**
 * Selecciona que tipo de mensaje y alerta sera mostrado y solo hay 3 casos
 * @param {string} alerta que representara 3 casos posible donde el usuario sea invalido o password o todo sea correcto
 * @returns {string} devulve el segmento de codigo que se selecciono para inyectar al HTML
 */

function mostrarAlerta(alerta) {
  switch (alerta.valueOf()) {
    case "usuario invalido": 
    //loginAlert.innerHTML ={} ;
      console.log("Mostrar ALERTA usuario invalido");
      break;
    case "password invalido": 
    //loginAlert.innerHTML ={} ;
      console.log("Mostrar ALERTA password invalido");
      break;
    case "exito de conexion": 
    //loginAlert.innerHTML ={} ;
      console.log("Mostrar ALERTA de login exitoso");
      break;
    default:
      console.log("Caso no considerado");
  };
};
