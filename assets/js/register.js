console.log("xd");

const users = [];
let i = 1;

const registerForm = document.forms["registerForm"];
console.log(registerForm);

registerForm.addEventListener("submit", (event) => {
  event.preventDefault()

  const userData = {
    name: registerForm.elements["name"].value,
    lastName: registerForm.elements["lastName"].value,
    user: registerForm.elements["user"].value,
    password: registerForm.elements["password"].value,
    confirmedPassword: registerForm.elements["confirmedPassword"].value,
    email: registerForm.elements["email"].value,

  };
  console.log(userData);
  validateRegistration(userData);


});


function validateRegistration(userData) {
  const existingData = localStorage.getItem("users");
  if (validateName(userData) && validateLastName(userData) && validatePassword(userData) &&
    confirmPassword(userData) && validateEmail(userData)) {
    if (!existingData) {
      const userDataJSON = {
        id: i++,
        name: userData.name,
        lastName: userData.lastName,
        user: userData.user,
        password: userData.password,
        email: userData.email,
      };

      const users = [userDataJSON];
      localStorage.setItem("users", JSON.stringify(users));
      registerForm.reset();
      showSuccessAlert();
    } else {
      const existingUsers = JSON.parse(existingData);
      // validación del correo, que no este repetido
      const emailExists = existingUsers.some(user => user.email === userData.email);

      if (validateExistingEmail(emailExists)) {
        const newUser = {
          id: existingUsers.length,
          name: userData.name,
          lastName: userData.lastName,
          user: userData.user,
          password: userData.password,
          email: userData.email,
        }
        existingUsers.push(newUser);
        localStorage.setItem("users", JSON.stringify(existingUsers));
        registerForm.reset();
        showSuccessAlert();
      }
    }
  }

  function showSuccessAlert() {
    const successAlert = document.getElementById("successAlert");
    successAlert.style.display = "block";
    setTimeout(() => {
    successAlert.style.display = "none";
   }, 5000); // Ocultar la alerta después de 5 segundos
  }

}

function validateExistingEmail(emailExists) {
  if (!emailExists) {
    isValid = true;
    // Campo válido, se elimina la clase 'is-invalid'
    const nameInput = document.getElementById("email");
    nameInput.classList.remove("is-invalid");
    return isValid;
  } else {
    console.log("No validó");
    // Campo no válido, se adiciona la clase 'is-invalid'.
    const nameInput = document.getElementById("email");
    nameInput.classList.add("is-invalid");
  }
}

function validateName({ name }) {
  console.log("entrando a validar nombre");
  const patron = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s[a-zA-ZÀ-ÿ\u00f1\u00d1])*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
  const patronMatch = name.match(patron);
  let isValid = false;

  if (patronMatch) {
    isValid = true;
    // Campo válido, se elimina la clase 'is-invalid'
    const nameInput = document.getElementById("inputFirstName");
    nameInput.classList.remove("is-invalid");
    return isValid;
  } else {
    console.log("No validó");
    // Campo no válido, se adiciona la clase 'is-invalid'.
    const nameInput = document.getElementById("inputFirstName");
    nameInput.classList.add("is-invalid");
 };
};


function validateLastName({ lastName }) {
  console.log("entrando a validar apellido");
  const patron = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s[a-zA-ZÀ-ÿ\u00f1\u00d1])*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
  const patronMatch = lastName.match(patron);
  let isValid = false;

  if (patronMatch) {
    isValid = true;
    const lastNameInput = document.getElementById("inputLastName");
    lastNameInput.classList.remove("is-invalid");
  } else {
    console.log("No validó Apellido");
    const lastNameInput = document.getElementById("inputLastName");
    lastNameInput.classList.add("is-invalid");
  }

  return isValid;

};

function validatePassword({ password }) {
  console.log("entrando a validar pass");
  let isValid = false;
  if (password.length >= 8) {
    isValid = true;
    const passwordInput = document.getElementById("password");
    passwordInput.classList.remove("is-invalid");
  } else {
    const passwordInput = document.getElementById("password");
    passwordInput.classList.add("is-invalid");
  }

  return isValid;

}
function confirmPassword({ password, confirmedPassword }) {
  console.log("entrando a validar pass y pass 2");
  let isValid = false;
  if (password === confirmedPassword) {
    isValid = true;
    const confirmedPasswordInput = document.getElementById("confirmedPassword");
    confirmedPasswordInput.classList.remove("is-invalid");
  } else {
    const confirmedPasswordInput = document.getElementById("confirmedPassword");
    confirmedPasswordInput.classList.add("is-invalid");
  }

  return isValid;

}

function validateEmail({ email }) {
  console.log("entrando a validar email");
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const emailMatch = email.match(emailPattern);
  let isValid = emailMatch !== null;

  if (isValid) {
    const emailInput = document.getElementById("email");
    emailInput.classList.remove("is-invalid");
  } else {
    const emailInput = document.getElementById("email");
    emailInput.classList.add("is-invalid");
  }

  return isValid;
}