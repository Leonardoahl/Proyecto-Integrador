/**
 * @author Perry Code
 * @version 0.0.1
 * Profile settings functionality
*/
console.log("xd");

const registerForm = document.forms["configurationForm"];
console.log(registerForm);

registerForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const newDataUser = {
        name: registerForm.elements["name"].value,
        lastName: registerForm.elements["lastName"].value,
        user: registerForm.elements["user"].value,
        description: registerForm.elements["description"].value,
        password: registerForm.elements["password"].value,
        confirmedPassword: registerForm.elements["confirmedPassword"].value,
        email: registerForm.elements["email"].value,

    };

    console.log(newDataUser.description);
    const isNameValid = validateName(newDataUser);
    const isLastNameValid = validateLastName(newDataUser);
    const isUser = validateUser(newDataUser);
    const description = validateDescription(newDataUser);
    const isPasswordValid = validatePassword(newDataUser);
    const isConfirmedPasswordValid = confirmPassword(newDataUser);
    const isEmailValid = validateEmail(newDataUser);

    if (
        isNameValid &&
        isLastNameValid &&
        isPasswordValid &&
        isConfirmedPasswordValid &&
        isEmailValid && isUser
    ) {
        //console.log(userData);
        showSuccessAlert();
    }

});

function showSuccessAlert() {
    const successAlert = document.getElementById("successAlert");
    successAlert.style.display = "block";
    setTimeout(() => {
        successAlert.style.display = "none";
    }, 3000); // Ocultar la alerta después de 3 segundos y redirigir a login
}



/* function validateExistingEmail(emailExists) {
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
} */

function validateName({ name }) {
    console.log("entrando a validar nombre");
    const patron = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s[a-zA-ZÀ-ÿ\u00f1\u00d1])*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
    const patronMatch = name.match(patron);
    let isValid = false;
    const nameInput = document.getElementById("inputFirstName");

    if (patronMatch) {
        isValid = true;
        // Campo válido, se elimina la clase 'is-invalid'
        nameInput.classList.remove("is-invalid");
        return isValid;
    } else {
        console.log("No validó");
        // Campo no válido, se adiciona la clase 'is-invalid'.
        nameInput.classList.add("is-invalid");
    }
}


function validateLastName({ lastName }) {
    console.log("entrando a validar apellido");
    const patron = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s[a-zA-ZÀ-ÿ\u00f1\u00d1])*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
    const patronMatch = lastName.match(patron);
    let isValid = false;
    const lastNameInput = document.getElementById("inputLastName");

    if (patronMatch) {
        isValid = true;
        lastNameInput.classList.remove("is-invalid");
    } else {
        console.log("No validó Apellido");
        lastNameInput.classList.add("is-invalid");
    }

    return isValid;

}

function validatePassword({ password }) {
    console.log("entrando a validar pass");
    let isValid = false;
    const passwordInput = document.getElementById("password");
    if (password.length >= 8) {
        isValid = true;
        passwordInput.classList.remove("is-invalid");
    } else {
        passwordInput.classList.add("is-invalid");
    }

    return isValid;
}

function confirmPassword({ password, confirmedPassword }) {
    console.log("entrando a validar pass y pass 2");
    let isValid = false;
    const confirmedPasswordInput = document.getElementById("confirmedPassword");
    if (password === confirmedPassword) {
        isValid = true;
        confirmedPasswordInput.classList.remove("is-invalid");
    } else {
        confirmedPasswordInput.classList.add("is-invalid");
    }

    return isValid;

}

function validateEmail({ email }) {
    console.log("entrando a validar email");
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const emailMatch = email.match(emailPattern);
    let isValid = emailMatch !== null;
    const emailInput = document.getElementById("email");

    if (isValid) {
        emailInput.classList.remove("is-invalid");
    } else {
        emailInput.classList.add("is-invalid");
    }

    return isValid;
}

function validateUser({ email }) {
    console.log("entrando a validar email");
    const patronUser = /^[a-zA-Z0-9_\-]+$/;
    const userMatch = email.match(patronUser);
    let isValid = userMatch !== null;
    const userInput = document.getElementById("user");

    if (isValid) {
        userInput.classList.remove("is-invalid");
    } else {
        userInput.classList.add("is-invalid");
    }

    return isValid;
}

function validateDescription({ description }) {
    const isValid = description.length <= 250;
    const descriptionInput = document.getElementById("description");

    if (isValid) {
        descriptionInput.classList.remove("is-invalid");
    } else {
        descriptionInput.classList.add("is-invalid");
    }

    return isValid;
}

const arrSoftSkills = [];
const arrHardSkills = [];

// Funciones para agregar las habilidades y a su vez imprimirlas
// Se pone un límite de 5 habilidades



function addSkill(type, skillValue, showElement, alertElement, addButton, skillsArray) {
    if (skillsArray.includes(skillValue)) {
        alertElement.textContent = "¡Esta habilidad ya ha sido agregada!";
        return; // No agrega la habilidad y sale de la función
    }

    if (skillsArray.length < 5) {
        skillsArray.unshift(skillValue);
        const listItem = document.createElement("li");
        listItem.innerHTML = `${skillValue} <a href="#" class="iconDelete" onclick="removeSkill('${skillValue}', '${type}', event)"><i class="bi bi-x-circle"></i></a>`;
        showElement.insertBefore(listItem, showElement.firstChild);
        alertElement.textContent = "";
    }

    if (skillsArray.length === 5) {
        addButton.disabled = true;
        alertElement.textContent = "¡Ya has alcanzado el límite de habilidades!";
        setTimeout(function() {
            alertElement.textContent = "";
        }, 3000);
    } else {
        addButton.disabled = false;
    }
}

function removeSkill(skillToRemove, type, event) {
    event.preventDefault();
    console.log("Removing skill: " + skillToRemove);
    const skillsArray = type === "Hards" ? arrHardSkills : arrSoftSkills;
    const indexToRemove = skillsArray.indexOf(skillToRemove);
    if (indexToRemove !== -1) {
        skillsArray.splice(indexToRemove, 1);
        const listItems = document.querySelectorAll(`#options${type} li`);
        for (let i = 0; i < listItems.length; i++) {
            if (listItems[i].textContent.includes(skillToRemove)) {
                listItems[i].remove();
                break;
            }
        }
    }
    const addButton = type === "Hards" ? document.getElementById("addHard") : document.getElementById("addSoft");
    addButton.disabled = false;
}

function addHardSkills() {
    const hardSkill = document.getElementById("hardSkills").value;
    const showHard = document.getElementById("optionsHards");
    const alertHard = document.getElementById("alertHard");
    const buttonHard = document.getElementById("addHard");
    addSkill("Hards", hardSkill, showHard, alertHard, buttonHard, arrHardSkills);
}

function removeHardSkill(skillToRemove, event) {
    removeSkill(skillToRemove, "Hards", event);
}

function addSoftSkills() {
    const softSkill = document.getElementById("softSkills").value;
    const showSoft = document.getElementById("optionsSofts");
    const alertSoft = document.getElementById("alertSoft");
    const buttonSoft = document.getElementById("addSoft");
    addSkill("Softs", softSkill, showSoft, alertSoft, buttonSoft, arrSoftSkills);
}

function removeSoftSkill(skillToRemove, event) {
    removeSkill(skillToRemove, "Softs", event);
}