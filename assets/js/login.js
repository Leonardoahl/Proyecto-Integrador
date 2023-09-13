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

  ///////////////////////////// store in the local storage/////////////////

  // console.log(user3)

  localStorage.setItem(1, JSON.stringify(user3));
  localStorage.setItem(2, JSON.stringify(user1));
  localStorage.setItem(3, JSON.stringify(user2));
  //////////////// GUARDAMOS 3 USUARIOS//////////////7
}

////////////////////CODIGO PRINCIPAL/////////////////////////////////////////////////////

testUsersDatabase(); // metemos usuarios de prueba en el LocalStorage

const registerForm = document.forms["loginForm"]; // obtenemos el objeto de Formulario

///////////// Funcion para ejecutar las validaciones en el evento de presionar un boton////////////////////////////
registerForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Evita que el formulario se envíe por defecto

  const userData = {
    // Creo un objeto con atributos de usuario inbtroducido
    user: registerForm.elements["inputName"].value,
    password: registerForm.elements["inputPassword"].value,
  };
  validateData(userData); // realizamos todas las validaciones para poder desplegar las alertas de incio de sesion
});


/**
 * valida que usuario y contraseña sean correctos con los que estan en local storage
 * @param {object} userLogged es un obbjeto con el user y pass obtenidos del Formulario
 * Objeto que contiene usuario y contraseña codificados
 */
function validateData(userLogged) {
  
  let key; // variable asociada al key del localStorage
  key = findUser(userLogged);

  if (!key) {
    //al ser falso el no se encontro usuario
    showAlert("user");
    return;
  } else {
    // en este caso se encontraron el usuario y se verifica la contraseña
    if (
      validatePassword(userLogged.password,JSON.parse(localStorage.getItem(key).password))) {
      showAlert("succes"); // usuario y contraseña validos
    } else {
      showAlert("password"); // pass invalido
    }
  }
}

////////////////////FIN CODIGO PRINCIPAL/////////////////////////////////////////////////////


/**
 * Encuentra si el usuario introducido existe en la base de datos y devuelve el key asociado en el local storage
 * @param {object} data string que contiene el user o el passwd para buscar
 * @return {key} retorna el key del usuario si se encontro en el localStorage
 */
function findUser(inputUser) {
  let i = false;
  // recorre cada key del local storage
  Object.keys(localStorage).forEach((key) => {
    if (
      validateUser(inputUser.user, JSON.parse(localStorage.getItem(key).user))
    )
      i = key;
  });
  return i;
}

/**
 * Valida al usuario ingresado con el usuario almacenado en el localStorage
 * @param {string} userID usuario ingresado en el formulario
 * @param {string} registeredUser usuario de la base de datos o lcoal storage
 * @returns {boolean} devuelve false si no detecta coincidencia
 */

function validateUser(userID, registeredUser) {
  return userID === registeredUser;
}

/**
 * valida que usuario y contraseña sean correctos con los que estan en local storage
 * @param {object} userData
 * @returns {boolean} devuelve el objeto usuario codificado
 * Objeto que contiene usuario y contraseña codificados
 */

function validatePassword(password, registeredPassword) {
  return password === registeredPassword;
}

/**
 * Selecciona que tipo de mensaje y alerta sera mostrado y solo hay 3 casos
 * @param alerta {string} que representara 3 casos posible donde el usuario sea invalido o password o todo sea correcto
 * @returns {string} devulve el segmento de codigo que se selecciono para inyectar al HTML
 */

function showAlert(alerta) {
  switch (alerta.valueOf()) {
    case "user": //loginAlert.innerHTML ={} ;
      console.log("Mostrar ALERTA usuario invalido");
      break;
    case "password": //loginAlert.innerHTML ={} ;
      console.log("Mostrar ALERTA password invalido");
      break;
    case "succes": //loginAlert.innerHTML ={} ;
      console.log("Mostrar ALERTA de login exitoso");
      break;
    default:
      console.log("Caso no considerado");
  }
}
