/**
 * @author Perry Code
 * @version 0.0.1
 * Profile settings functionality
*/
console.log("xd");
let urlAvatar = "";

const registerForm = document.forms["configurationForm"];
const avatarsProfile = ["https://i.pinimg.com/564x/40/f4/5c/40f45c3184f7331d844c29d0e38649d0.jpg",
                        "https://i.pinimg.com/564x/8d/94/83/8d948388cbe771358a6ec1bc4cae238b.jpg",
                        "https://i.pinimg.com/564x/fe/8b/36/fe8b36deeae7148c73c6d2db65ba6f42.jpg",
                        "https://i.pinimg.com/564x/d1/1d/0a/d11d0a0516cfe047719d5c8f10fe4110.jpg",
                        "https://i.pinimg.com/564x/e9/13/fe/e913feb4d4588cf5693cd3bf809ad99b.jpg"];
/* console.log(registerForm); */

registerForm.addEventListener("submit", async (event) => {
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
    const headers = new Headers();
    
    const updateUser = {
        firstname: newDataUser.name,
        lastname: newDataUser.lastName,
        username: newDataUser.user,
        email: newDataUser.email,
        password: newDataUser.password,
        profilepic: urlAvatar,
        techSkills : arrayTechSkillsIdObj,
        softSkills : arraySoftSkillsIdObj
    }

    console.log(updateUser);

    const url="http://127.0.0.1:8080/users/update/3"
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Origin','http://127.0.0.1:8080');

    const res = await fetch(url, {
        mode:"cors",
        method:"POST",
        headers:headers,
        body: JSON.stringify(updateUser)
    });

    const result = await res.json();
    console.log(result);

        showSuccessAlert();


    }

});

function showSuccessAlert() {
    const successAlert = document.getElementById("successAlert");
    successAlert.style.display = "block";
    setTimeout(() => {
        successAlert.style.display = "none";
    }, 7000); // Ocultar la alerta después de 3 segundos y redirigir a login
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

function validateUser({ user }) {
    console.log("entrando a validar email");
    const patronUser = /^[a-zA-Z0-9_\-]+$/;
    const userMatch = user.match(patronUser);
    let isValid = userMatch !== null;
    const userInput = document.getElementById("user");

    if (isValid) {
        userInput.classList.remove("is-invalid");
    } else {
        userInput.classList.add("is-invalid");
    }

    return isValid;
}

const description = document.getElementById('description');
const counter = document.getElementById('counter');
description.addEventListener('input', function(event) {
    const target = event.target;
    const longitudMax = target.maxLength; // Accede a la propiedad maxLength
    const longitudAct = target.value.length;
    counter.innerHTML = `${longitudAct}/${longitudMax}`;
});

const arrSoftSkills = [];
const arrHardSkills = [];
const arrayTechSkillsIdObj = [];
const arraySoftSkillsIdObj = [];

// Funciones para agregar las habilidades y a su vez imprimirlas
// Se pone un límite de 5 habilidades

function getIdForSkill(skillValue) {
    // Implementa la lógica para obtener el ID de la habilidad aquí
    // Puedes usar un objeto o un mapa para mapear habilidades a IDs
    // Por ejemplo:
    const skillToIdMap = {
        "Java": 1,
        "Python": 2,
        "JavaScript": 3,
        "C++": 4,
        "Ruby": 5,
        "PHP":6,
        "Swift":7,
        "Kotlin":8,
        "C#":9,
        "SQL":10,
        "HTML":11,
        "CSS":12,
        "React":13,
        "Angular":14,
        "Vue.js":15,
        "Docker":16,
        "Kubernetes":17,
        "AWS":18,
        "Azure":19,
        "Git":20,
        "Jenkis":21,
        "Terraform":22,
        "Spring":23,
        "Framework":24,
        "Ruby on Rails":25,
        "Mentalidad de crecimiento":1,
        "Orientación al futuro":2,
        "Orientación al detalle":3,
        "Comunicación":4,
        "Responsabilidad Personal":5,
        "Persistencia":6,
        "Proactividad":7,
        "Trabajo en equipo":8
        // ...
    };
    return skillToIdMap[skillValue];
}

function addSkill(type, skillValue, showElement, alertElement, addButton, skillsArray, idArray) {
    if (skillsArray.includes(skillValue)) {
        alertElement.textContent = "¡Esta habilidad ya ha sido agregada!";
        return; // No agrega la habilidad y sale de la función
    }

    if (skillsArray.length < 5) {
        skillsArray.unshift(skillValue);
        const listItem = document.createElement("li");
        listItem.innerHTML = `${skillValue} <a href="#" class="iconDelete" onclick="removeSkill('${skillValue}', '${type}', event, ${idArray})"><i class="bi bi-x-circle"></i></a>`;
        showElement.insertBefore(listItem, showElement.firstChild);
        
        // Agrega el ID correspondiente al array de IDs
        const skillId = getIdForSkill(skillValue);
        idArray.unshift({ id: skillId });
        
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

    console.log(idArray);
}

function removeSkill(skillToRemove, type, event, idArray) {
    event.preventDefault();
    console.log("Removing skill: " + skillToRemove);
    const skillsArray = type === "Hards" ? arrHardSkills : arrSoftSkills;
    const indexToRemove = skillsArray.indexOf(skillToRemove);
    if (indexToRemove !== -1) {
        skillsArray.splice(indexToRemove, 1);

        // Elimina el ID correspondiente del array de IDs
        idArray.splice(indexToRemove, 1);

        const listItems = document.querySelectorAll(`#options${type} li`);
        for (let i = 0; i < listItems.length; i++) {
            if (listItems[i].textContent.includes(skillToRemove)) {
                listItems[i].remove();
                break;
            }
        }
    } else {
        console.log("La habilidad no se encontró en el array.");
    }
    const addButton = type === "Hards" ? document.getElementById("addHard") : document.getElementById("addSoft");
    addButton.disabled = false;

    console.log(skillsArray);
}

function addHardSkills() {
    const hardSkill = document.getElementById("hardSkills").value;
    const showHard = document.getElementById("optionsHards");
    const alertHard = document.getElementById("alertHard");
    const buttonHard = document.getElementById("addHard");
    addSkill("Hards", hardSkill, showHard, alertHard, buttonHard, arrHardSkills, arrayTechSkillsIdObj);
}

function removeHardSkill(skillToRemove, event, arrayTechSkillsIdObj) {
    removeSkill(skillToRemove, "Hards", event, arrayTechSkillsIdObj);
}

function addSoftSkills() {
    const softSkill = document.getElementById("softSkills").value;
    const showSoft = document.getElementById("optionsSofts");
    const alertSoft = document.getElementById("alertSoft");
    const buttonSoft = document.getElementById("addSoft");
    addSkill("Softs", softSkill, showSoft, alertSoft, buttonSoft, arrSoftSkills, arraySoftSkillsIdObj);
}

function removeSoftSkill(skillToRemove, event, arraySoftSkillsIdObj) {
    removeSkill(skillToRemove, "Softs", event, arraySoftSkillsIdObj);
}

function changeAvatar() {
    const showAvatars = document.getElementById("showAvatars");

    if (showAvatars.style.display === "block") {
        // Si está visible, ocultar las imágenes y salir
        showAvatars.style.display = "none";
        return;
    }

    showAvatars.innerHTML = "";

    // Recorre el array de avatares y crea un elemento img para cada uno
    avatarsProfile.forEach((avatar, index) => {
        const img = document.createElement("img");
        img.src = avatar;
        img.alt = "Avatar " + (index + 1);
        img.className = "selectAvatar px-1";
        
        img.onclick = () => changeCurrentAvatar(index, showAvatars);

        showAvatars.appendChild(img);
    });

    showAvatars.style.display = "block";
}

function changeCurrentAvatar(index, showAvatars) {
    const avatarElement = document.querySelector(".avatar");
    avatarElement.src = avatarsProfile[index]; // Usa el índice para obtener la URL
    urlAvatar = avatarElement.src;
    console.log(urlAvatar);
    // Oculta el contenedor de avatares
    showAvatars.style.display = "none";
}