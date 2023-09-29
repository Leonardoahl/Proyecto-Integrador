console.log("registro xd");

if (sessionUser){
  window.location.href = "../pages/log_In.html";
}

console.log(sessionUser);


const registerForm = document.forms["registerForm"];

registerForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const userData = {
    name: registerForm.elements["name"].value,
    lastName: registerForm.elements["lastName"].value,
    user: registerForm.elements["user"].value,
    password: registerForm.elements["password"].value,
    confirmedPassword: registerForm.elements["confirmedPassword"].value,
    email: registerForm.elements["email"].value,
  };


  const isNameValid = validateName(userData);
  const isLastNameValid = validateLastName(userData);
  const isPasswordValid = validatePassword(userData);
  const isConfirmedPasswordValid = confirmPassword(userData);
  const isEmailValid = validateEmail(userData);

  if (
    isNameValid &&
    isLastNameValid &&
    isPasswordValid &&
    isConfirmedPasswordValid &&
    isEmailValid
  ) {

    const newUserPost = {
      username: userData.user,
      firstname: userData.name,
      lastName: userData.lastName,
      email: userData.email,
      password: userData.password,
      user: userData.user,
      profilepic : "../img/imgProfile.png",
    }
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Origin','http://127.0.0.1:8080');

    const url = "http://127.0.0.1:8080/users/register";

    try {
      const res = await fetch(url, {
        mode: "cors",
        method: "POST",
        headers: headers,
        body: JSON.stringify(newUserPost)
      });

      const result = await res.json();
      console.log(result);
      showSuccessAlert();
    } catch (error) {
      console.error('Error registering user:', error);
    }
  }
});

  function showSuccessAlert() {
    const successAlert = document.getElementById("successAlert");
    successAlert.style.display = "block";
    setTimeout(() => {
    successAlert.style.display = "none";
    window.location.href = "../pages/log_In.html";//cambiar direccion al index en caso de que se mueva el login de lugar
    
   }, 3000); // Ocultar la alerta después de 3 segundos y redirigir a login


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
