/**
 * @author Perry Code
 * @version 0.0.1
 * Login functionality
 */

const registerForm = document.forms["loginForm"];

/**
 * @function funcion para ingresar usuarios a el local storage y poder realizar pruebas funcionales del codigo
 *
 * @returns {void} nothihg
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

testUsersDatabase(); // llamamos la funcion

/**
 * @function ApiDom
 * @param {object} userData
 * @returns {void}
 */

registerForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Evita que el formulario se envíe por defecto

  const userData = {
    user: registerForm.elements["inputName"].value,
    password: registerForm.elements["inputPassword"].value,
  };

  // console.log(userData.user);

  validateData(userData);
});

/**
 * valida que usuario y contraseña sean correctos con los que estan en local storage
 * @param {object} userData
 * Objeto que contiene usuario y contraseña codificados
 */
function validateData(userLogged) {
  let valid_user = false; // banderas de validacion
  let valid_pass = false;

  // recorrer cada key del local storage

  Object.keys(localStorage).forEach((key) => {
    // console.log(localStorage.getItem(key));
    let userQuery = JSON.parse(localStorage.getItem(key));
    valid_user = validateUser(userLogged.user, userQuery.user);
    valid_pass = validatePassword(userLogged.password, userQuery.password);
  });

  displayErrors(valid_user, valid_pass);
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
 * Muestra errores si detecta algun error en otro caso despliega el aviso de exito de logueo
 * @param {boolean} userValidation passwordValidation
 * * @param {boolean} passwordValidation
 * @returns {boolean} devuelve el objeto usuario codificado
 * Objeto que contiene usuario y contraseña codificados
 */

function displayErrors(userValidation, passwordValidation) {
  if (!userValidation) {
    showAlert("user");
  }
  if (!passwordValidation) {
    showAlert("password");
  }
  if (userValidation && passwordValidation) {
    showAlert("succes");
  }
}

/**
 * Selecciona que tipo de mensaje y alerta sera mostrado y solo hay 3 casos
 * @param alerta {string} passwordValidation
 * @returns {string} devulve el segmento de codigo que se selecciono para inyectar al HTML
 */

function showAlert(alerta) {
  console.log(alerta.valueOf());
  switch (alerta.valueOf()) {
    case "user": //loginAlert.innerHTML ={} ;
      console.log("Display user invalid");
      break;
    case "password": //loginAlert.innerHTML ={} ;
      console.log("Display password invalid");
      break;
    case "succes": //loginAlert.innerHTML ={} ;
      console.log("Display exito de logueo");
      break;
    default:
      console.log("Caso no considerado");
  }
}