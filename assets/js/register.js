console.log("xd");

const registerForm = document.forms["registerForm"];
console.log(registerForm);

registerForm.addEventListener("submit", (event)=> {event.preventDefault()

    const userData ={
        name:registerForm.elements["name"].value,
        lastName:registerForm.elements["lastName"].value,
        user:registerForm.elements["user"].value,
        password:registerForm.elements["password"].value,
        confirmedPassword:registerForm.elements["confirmedPassword"].value,
        email:registerForm.elements["email"].value,

    };
    console.log(userData);
    validateRegistration(userData);


});


function validateRegistration(userData) {

    if (validateName(userData)&& validateLastName(userData) && validatePassword(userData)&& confirmPassword(userData) && validateEmail(userData)) {
        // Hacer lo del JJJJJJSSSSSOOOOOONNNNNNNNNNNN
        console.log("Registro exitoso");
        registerForm.reset();
    } else {
        printAlerts(userData);
    }
}

function validateName ({name}){
    console.log("entrando a validar nombre");
      const patron = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s[a-zA-ZÀ-ÿ\u00f1\u00d1])*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
      const patronMatch = name.match(patron);
      let isValid = false;
      
      if(patronMatch){isValid = true;
      return isValid;
  }
      else { console.log("No validó")};
  
  };
  function validateLastName ({lastName}){
    console.log("entrando a validar apellido");
      const patron = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s[a-zA-ZÀ-ÿ\u00f1\u00d1])*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
      const patronMatch = lastName.match(patron);
      let isValid = false;
      
      if(patronMatch){isValid = true;
      return isValid;
  }
      else { console.log("No validó Apellido")};
  
  };

function validatePassword({password}){
    console.log("entrando a validar pass");
    let isValid = false;
    if (password.length >=8){ isValid = true;
        return isValid;
    }
     
}
function confirmPassword({password,confirmedPassword}){
    console.log("entrando a validar pass y pass 2");
    let isValid = false;
    if(password === confirmedPassword){isValid = true;
        return isValid;
    }
    
}

function validateEmail({email}){
    console.log("entrando a validar email");
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const emailMatch = email.match(emailPattern);
    return emailMatch !== null;
}
function printAlerts(userData) {
    //Variables para nombre
    const nameInput = document.getElementById("inputFirstName");
    const nameError = document.getElementById("nameError");
    const nameSuccess = document.getElementById("nameSuccess");
    //Variables para apellido
    const lastNameInput = document.getElementById("inputLastName");
    const lastNameError = document.getElementById("lastNameError");
    const lastNameSuccess = document.getElementById("lastNameSuccess");
    //Variables para password
    const passwordInput = document.getElementById("password");
    const passwordError = document.getElementById("passwordError");
    const passwordSuccess = document.getElementById("passwordSuccess");
    //Variables para confirmar password
    const confirmedPassword = document.getElementById("confirmedPassword");
    const confirmedPasswordError = document.getElementById("confirmedPasswordError");
    const confirmedPasswordSuccess = document.getElementById("confirmedPasswordSuccess");
    //Variables para email
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const emailSuccess = document.getElementById("emailSuccess");

    //habilitar-deshabilitar validaciones
    
    if (!validateName(userData)) {
      nameInput.classList.add("is-invalid");
      nameInput.classList.remove("is-valid");
      nameError.style.display = "block"; // Muestra el mensaje de error
      nameSuccess.style.display = "none"; // Oculta el mensaje de éxito
    } else {
      nameInput.classList.remove("is-invalid");
      nameInput.classList.add("is-valid");
      nameError.style.display = "none"; // Oculta el mensaje de error
      nameSuccess.style.display = "block"; // Muestra el mensaje de éxito
    }
    
    if (!validateLastName(userData)) {
      lastNameInput.classList.add("is-invalid");
      lastNameError.style.display = "block";
      lastNameSuccess.style.display = "none"; 
    } else {
      lastNameInput.classList.remove("is-invalid");
      lastNameError.style.display = "none"; 
      lastNameSuccess.style.display = "block"; 
    }
  
    if (!validatePassword(userData)) {
      passwordInput.classList.add("is-invalid");
      passwordError.style.display = "block";
      passwordSuccess.style.display = "none";
    } else {
      passwordInput.classList.remove("is-invalid");
      passwordError.style.display = "none"; 
      passwordSuccess.style.display = "block"; 
    }
    if (!confirmPassword(userData)) {
      confirmedPassword.classList.add("is-invalid");
      confirmedPasswordError.style.display = "block";
      confirmedPasswordSuccess.style.display = "none";
      } else {
      confirmedPassword.classList.remove("is-invalid");
      confirmedPasswordError.style.display = "none"; 
      confirmedPasswordSuccess.style.display = "block";
      }
  
    if (!validateEmail(userData)) {
      emailInput.classList.add("is-invalid");
      emailError.style.display = "block";
      emailSuccess.style.display = "none";
    } else {
      emailInput.classList.remove("is-invalid");
      emailError.style.display = "none"; 
      emailSuccess.style.display = "block";
    }
  }
  
