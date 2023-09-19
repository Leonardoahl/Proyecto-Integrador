console.log("Profile Settings xd");

const profileSettings = document.forms["profileSettings"];
const acceptButton = document.getElementById("accept");
const cancelButton = document.getElementById("cancel");
//console.log(profileSettings);


acceptButton.addEventListener("click",(e)=>{
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
});

function showSuccessAlert() {
    const successAlert = document.getElementById("successAlert");
    successAlert.style.display = "block";
    setTimeout(() => {
    successAlert.style.display = "none";
   }, 5000); // Ocultar la alerta después de 5 segundos
  };

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



cancelButton.addEventListener("click",(e)=>{

    profileSettings.reset();
    console.log("se reseteó xd");

});


    
  








