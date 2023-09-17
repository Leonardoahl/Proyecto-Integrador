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

    console.log(userData);

    for (let property in userData) {
        if (userData.hasOwnProperty(property) 
        && userData[property] !== null 
        && userData[property] !== undefined 
        && userData[property] !== "") {
            console.log(property + ": " + userData[property]);
            //alert(`Se actualizaron tus datos.`);
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
  }

cancelButton.addEventListener("click",(e)=>{

    profileSettings.reset();
    console.log("se reseteó xd");

})
    
  








