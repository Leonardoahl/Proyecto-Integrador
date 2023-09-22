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

//Se comenta la funcion para que no intervenga con los test de otros usuarios 
// function testUsersDatabase() {
//   const user1 = {
//     id: 1,
//     name: "ed",
//     lastName: "cetina",
//     user: "tururu06",
//     password: "13954357582",
//     email: "edcet@gmail.com",
//   };

//   const user2 = {
//     id: 2,
//     name: "ed",
//     lastName: "cetina",
//     user: "tururu07",
//     password: "123456789",
//     email: "edcet@gmail.com",
//   };

//   const user3 = {
//     id: 3,
//     name: "ed",
//     lastName: "cetina",
//     user: "tururu08",
//     password: "87685877",
//     email: "edcet@gmail.com",
//   };

//   localStorage.setItem(1, JSON.stringify(user3));
//   localStorage.setItem(2, JSON.stringify(user1));
//   localStorage.setItem(3, JSON.stringify(user2));
// }



// objeto con las distintas alertas para seleccionar

const ALERTAS_MESSAGES={
  exito:`<div class="alert alert-success alerta-personalizada col-md-7 offset-md-3 mt-3 text-center "> Usuario identificado correctamente. <br> !Bienvenido! :D</div>`,
  usuarioInvalido:`<div class="alert alert-success alerta-personalizada col-md-7 offset-md-3 mt-3 text-center ">Usuario no válido.</div>`,
  usuarioVacio:`<div class="alert alert-success alerta-personalizada col-md-7 offset-md-3 mt-3 text-center ">Faltó introducir usuario.</div>`,
  passwordVacio:`<div class="alert alert-success alerta-personalizada col-md-7 offset-md-3 mt-3 text-center ">Faltó introducir la contraseña.</div>`,
  passwordErroneo:`<div class="alert alert-success alerta-personalizada col-md-7 offset-md-3 mt-3 text-center ">Contraseña incorrecta.</div>`
};
 ////////////



/**
 * valiudamos si el algun dato del formulario es vacio
 * @param {object} datoDelFormulario string que contiene el user o el passwd para buscar
 * @return {bool} retorna valor booleano de la comparacion
 */
function validacionDeCamposVacios(datoDelFormulario) {
 return (datoDelFormulario==="");
}

/**
 * Encuentra si el usuario introducido existe en la base de datos y devuelve el key asociado en el local storage
 * @param {object} datosDelFormulario string que contiene el user o el passwd para buscar
 * @return {key} retorna el key del usuario si se encontro en el localStorage si no retorna un FALSE
 */
function encuentraUsuario(datosDelFormulario) {
  let id = false;
  // recorre cada key del local storage
  Object.keys(localStorage).forEach((key) => {
    if (
      validacionDeUsuario(
        datosDelFormulario.user,
        JSON.parse(localStorage.getItem(key)).user
      )
    ) {
      // verifica usuario con usuario en local storage
      id = key;
    }
  });
  return id;
}

/**
 * Valida al usuario ingresado con el usuario almacenado en el localStorage
 * @param {string} nombreDeinputDelFormulario usuario ingresado en el formulario
 * @param {string} nombreDeUsuariodeRegistrado usuario de la base de datos o lcoal storage
 * @returns {boolean} devuelve false si no detecta coincidencia
 */

function validacionDeUsuario(
  nombreDeinputDelFormulario,
  nombreDeUsuariodeRegistrado
) {
  return nombreDeinputDelFormulario === nombreDeUsuariodeRegistrado;
}

/**
 * valida que contraseña sea correcta con los que estan en local storage
 * @param {string} passwordDeFormulario
 * @param {string} PasswordRegistrado
 * @returns {boolean} devuelve el boolean de la comparacion de datos
 */

function validacionDePassword(passwordDeFormulario, PasswordRegistrado) {
  return passwordDeFormulario === PasswordRegistrado;
}

/**
 * Selecciona que tipo de mensaje y alerta sera mostrado y solo hay 3 casos
 * @param {string} alerta que representara 3 casos posible donde el usuario sea invalido o password o todo sea correcto
 * @returns {string} devulve el segmento de codigo que se selecciono para inyectar al HTML
 */

function mostrarAlerta(alerta) {
  switch (alerta.valueOf()) {
    case "usuario invalido":
      seccionDeAlerta.innerHTML =ALERTAS_MESSAGES.usuarioInvalido ;
      break;
    case "password invalido":
      seccionDeAlerta.innerHTML =ALERTAS_MESSAGES.passwordErroneo;
      break;
    case "exito de conexion":
      seccionDeAlerta.innerHTML =ALERTAS_MESSAGES.exito ;
      break;
    case "usuario vacio":
      seccionDeAlerta.innerHTML =ALERTAS_MESSAGES.usuarioVacio ;
      break;
    case "password vacio":
      seccionDeAlerta.innerHTML =ALERTAS_MESSAGES.passwordVacio ;
      break;
    default:
      console.log("Caso no considerado");
  }
};



////////////////////CODIGO PRINCIPAL/////////////////////////////////////////////////////
//testUsersDatabase(); // metemos usuarios de prueba en el LocalStorage 
const registerForm = document.forms["loginForm"]; // obtenemos el objeto de Formulario
const seccionDeAlerta = document.getElementById("seccionDeAlertas");// Obtén una referencia al elemento HTML con el ID "alerta" y guárdala en la variable "alert"
const seccionDeSpinner= document.getElementById("seccionDeSpinner");// Obtén una referencia al elemento HTML con el ID "seccionDeSpinner"

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const infoFormulario = {
    user: registerForm.elements["inputName"].value,
    password: registerForm.elements["inputPassword"].value
  };
  validacionDeDatos(infoFormulario);
});

/**
 * valida que usuario y contraseña sean correctos con los que estan en local storage
 * @param {object} inputDelFormulario es un obbjeto con el user y pass obtenidos del Formulario
 * Objeto que contiene usuario y contraseña codificados
 */
function validacionDeDatos(inputDelFormulario) {
  let key; 
  key = encuentraUsuario(inputDelFormulario);

// LS = Local storage  

  if (!key) {
    //al no encontrar un key asociado a un user en el LS , se verifica si esta vacio el user introducido o es invalido para desplegar un aviso adecuado
    validacionDeCamposVacios(inputDelFormulario.user)? mostrarAlerta("usuario vacio"): mostrarAlerta("usuario invalido");

  } else {
    // en este caso se encontraron el usuario y se verifica la contraseña
    if (validacionDePassword(inputDelFormulario.password,JSON.parse(localStorage.getItem(key)).password)) {
      mostrarAlerta("exito de conexion"); // usuario y contraseña validos
      setTimeout(()=>{window.location.href="publications.html"},2000);
      
     seccionDeSpinner.innerHTML= `<div class="d-flex justify-content-center">
     <div class="spinner-grow text-success">
     <span class="sr-only">Loading...</span>
   </div>
    </div>`
      //redireccionarPaginaPrincipal
      
      
    } else {
      // solo queda el caso donde el password es invalido de alguna manera 
      validacionDeCamposVacios(inputDelFormulario.password)? mostrarAlerta("password vacio"):mostrarAlerta("password invalido"); // pass invalido
    }
  }
};