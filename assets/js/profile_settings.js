/**
 * @author Perry Code
 * @version 0.0.1
 * Profile settings functionality
 */


const profileSettings = document.forms["profileSettings"];
const acceptButton = document.getElementById("accept");
const cancelButton = document.getElementById("cancel");
//console.log(profileSettings);
/**
 * @function validacionDeUsuarioNuevo arrow function con el algoritmo principal de validacion y funcionamiento de   
 * @param {void} void ningun argumento usa
 * @returns {void} void
 */

const validacionDeSettingsNuevos= (e)=>{
    e.preventDefault();
    
    const userData = {
        newName : profileSettings.elements["name"].value,
        newLastName : profileSettings.elements ["lastName"].value,
        newUser : profileSettings.elements ["user"].value,
        newHardskills : profileSettings.elements ["hardSkill"].value,
        newSofskills : profileSettings.elements ["softSkill"].value,
        newDescription : profileSettings.elements ["description"].value,
        newEmail : profileSettings.elements ["email"].value,
        newPassword : profileSettings.elements["password"].value,
        
    }
    const isNameValid = validateName(userData);
    if(isNameValid){
        console.log("nombre valido");
        console.log({newName})
    }

    for (let property in userData) {
        if (userData.hasOwnProperty(property) 
        && userData[property] !== null 
        && userData[property] !== undefined 
        && userData[property] !== "") {
            console.log(property + ": " + userData[property]);
            showSuccessAlert();
        }
    }
}

/////////////////////////////////
function validateNickname(){
    return false;
}

/////////////////////////////////
function validatePassword(){
    return false;
}




/**
 * @function showSuccessAlert activa o desactiva la alerta de el registro del usuario
 * @param {void} void ningun argumento usa
 * @returns {void} void
 */

function showSuccessAlert() {
    const successAlert = document.getElementById("successAlert");
    successAlert.style.display = "block";
    setTimeout(() => {
    successAlert.style.display = "none";    
   }, 5000); // Ocultar la alerta después de 5 segundos
  };



/**
 * @function validateName retorna un booleando que representa si es o no valido el nombre introducido
 * @param {String} Object.newName nombre del usuario registrado en el onjeto userData
 * @returns {boolean} isValid
 */

  function validateName({ newName }) {
    console.log("entrando a validar nombre");
    const patron = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s[a-zA-ZÀ-ÿ\u00f1\u00d1])*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
    const patronMatch = newName.match(patron);
    let isValid = false;
    console.log(newName);
    if (patronMatch) {
      isValid = true;
      // Campo válido, se elimina la clase 'is-invalid'
      const nameInput = document.getElementById("name");
      nameInput.classList.remove("is-invalid");
      return isValid;
    } else {
      console.log("No validó");
      // Campo no válido, se adiciona la clase 'is-invalid'.
      const nameInput = document.getElementById("name");
      nameInput.classList.add("is-invalid");
   };
  };



/**
 * @function resetFunction activa o desactiva la alerta de el registro del usuario
 * @param {void} void ningun argumento usa
 * @returns {void} void
 */

const resetFunction= (e)=>{
    profileSettings.reset();
}

/**
 * //////////////////////////// Evento con botones //////////////////////////////////////////
 */

cancelButton.addEventListener("click",resetFunction);

acceptButton.addEventListener("click",validacionDeSettingsNuevos);
    
  








