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



});
function validateName ({name}){
  console.log("entrando a validar nombre");
    const patron = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s[a-zA-ZÀ-ÿ\u00f1\u00d1])*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
    const patronMatch = name.match(patron);
    let isValid = false;
    console.log("antes de validación");

    if(patronMatch){isValid = true;
    console.log("validó");
    return isValid;
}
    else { console.log("NO validó")};

};
// function validateLastName ({lastName}){
  
//     const patron = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s[a-zA-ZÀ-ÿ\u00f1\u00d1])*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
//     const patronMatch = lastName.match(patron);
//     let isValid = false;

//     if(patronMatch)isValid = true;
//     return isValid;

// };
// function printAlerts (userData){

//     if (!validateName(userData))alert("Pon un nombre válido.");
//     if (!validateLastName(userData))alert("Pon un apellido válido.");

// };

// function validateForm (userData){

//     if (validateName && validateLastName) {
//         console.log("xd validado");
//     } else printAlerts();
// };