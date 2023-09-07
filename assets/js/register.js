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

    if (validateName(userData)&& validateLastName(userData) && 
        validatePassword(userData)&& 
        confirmPassword(userData) && 
        validateEmail(userData)) {
        // Hacer lo del JJJJJJSSSSSOOOOOONNNNNNNNNNNN
        console.log("Registro exitoso");
        //registerForm.classList.add('was-validated');
        registerForm.reset();
    } 
}

function validateName ({name}){
    console.log("entrando a validar nombre");
      const patron = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s[a-zA-ZÀ-ÿ\u00f1\u00d1])*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
      const patronMatch = name.match(patron);
      let isValid = false;
      
      if (patronMatch) {
        isValid = true;
        // Campo válido, así que eliminamos la clase 'is-invalid' si está presente.
        const nameInput = document.getElementById("inputFirstName");
        nameInput.classList.remove("is-invalid");
        return isValid;
      } else {
        console.log("No validó");
        // Campo no válido, agregamos la clase 'is-invalid'.
        const nameInput = document.getElementById("inputFirstName");
        nameInput.classList.add("is-invalid");
      };
  
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
    if ((password.length >=8)){ isValid = true;
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




