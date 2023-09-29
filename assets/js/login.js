/**
 * @author Perry Code
 * @version 0.0.1
 * Login functionality
 */


if (sessionUser){
  window.location.href = "../pages/publications.html";
}

const inputUser = document.getElementById("inputName");
const inputPassword = document.getElementById("inputPassword");
const registerForm = document.forms["loginForm"]; 
const seccionDeAlerta = document.getElementById("seccionDeAlertas");
const seccionDeSpinner= document.getElementById("seccionDeSpinner");

// objeto con las distintas alertas para seleccionar

const ALERTAS_MESSAGES={
  exito:`<div class="alert alert-success alerta-personalizada col-md-7 offset-md-3 mt-3 text-center "> Usuario identificado correctamente. <br> !Bienvenido! :D</div>`,
  usuarioInvalido:`<div class="alert alert-success alerta-personalizada col-md-7 offset-md-3 mt-3 text-center ">Usuario o contraseña incorrecto.</div>`,
  usuarioVacio:`<div class="alert alert-success alerta-personalizada col-md-7 offset-md-3 mt-3 text-center ">Faltó introducir usuario.</div>`,
  passwordVacio:`<div class="alert alert-success alerta-personalizada col-md-7 offset-md-3 mt-3 text-center ">Faltó introducir la contraseña.</div>`,
  passwordErroneo:`<div class="alert alert-success alerta-personalizada col-md-7 offset-md-3 mt-3 text-center ">Contraseña incorrecta.</div>`
};
 ////////////

 function validacionDeCamposVacios(datoDelFormulario) {
  return (datoDelFormulario === "");
 }
 //validacionDeCamposVacios(inputUser.value)? mostrarAlerta("usuario vacio"): mostrarAlerta("usuario invalido");
 //validacionDeCamposVacios(inputPassword.value)? mostrarAlerta("password vacio"):mostrarAlerta("password invalido"); 

 registerForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  // Get the form input values
  const inputUserValue = inputUser.value;
  const inputPasswordValue = inputPassword.value;

  // Check for empty inputs
  if (validacionDeCamposVacios(inputUserValue)) {
    mostrarAlerta("usuario vacio");
    return;
  }

  if (validacionDeCamposVacios(inputPasswordValue)) {
    mostrarAlerta("password vacio");
    return;
  }

  // Perform login validation by sending user data to the server
  const url = "http://127.0.0.1:8081/users/login";
  const data = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: inputUserValue,
      password: inputPasswordValue
    })
    

  });
  const responseData = await data.json();
  console.log(responseData);
  const id = responseData['id'];

  if (data.status === 200) {
    mostrarAlerta("exito de conexion");
    console.log(responseData);
    setCookie("user", id);
    // if (responseData && responseData.id) {
      
      
    // } else {
    //   console.error("El objeto responseData no tiene la propiedad 'id' definida.");
    // }
    setTimeout(() => { window.location.href = "publications.html" }, 3000);
    seccionDeSpinner.innerHTML = `<div class="d-flex justify-content-center">
      <div class="spinner-grow text-success">
        <span class="sr-only">Loading...</span>
      </div>
    </div>`;
  } else {
    mostrarAlerta("usuario invalido");
  }
});



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

