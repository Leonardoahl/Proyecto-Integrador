/**
 * @author Perry Code
 * @version 0.0.1
 * 
 */


const contactForm = document.forms["contactForm"];
console.log(contactForm);

contactForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    // const name = contactForm.elements["name"].value;
    // console.log(name);
    const userData = {
        name:contactForm.elements["name"].value,
        email:contactForm.elements["email"].value,
        phone:contactForm.elements["phone"].value,
        feedback:contactForm.elements["feedback"].value
    }
    console.log(userData);

    sendEmail(userData);
   
    // printAlerts(userData);

});

function validateName ({name}){
  
    const patron = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s[a-zA-ZÀ-ÿ\u00f1\u00d1])*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
    const patronMatch = name.match(patron);
    let isValid = false;

    if(patronMatch)isValid = true;
    return isValid;

};
function validateNumber({phone}){

    const numPatron = /^[0-9]+$/;
    const patronMatch = phone.match(numPatron);
    let isValid = false;
    const phoneStr = phone.split(" ").join("").length;
    if(patronMatch && (phoneStr === 10)) isValid = true;
    return isValid;

};

function printAlerts (userData){

    if (!validateName(userData))alert("Pon un nombre válido.");
    if (!validateNumber(userData))alert("Pon un número válido.");

};

function sendEmail (userData){


    if (validateName(userData) && validateNumber(userData) ){
    console.log("xdd");
    emailjs.init('_AIRxlmq1luT-s4JJ');
    emailjs.sendForm('contact_service', 'contact_form', contactForm)
                    .then(function() {
                        console.log('SUCCESS!');
                        alert("Ya enviamos tu correo :) ");
                        contactForm.reset();
                    }, function(error) {
                        console.log('FAILED...', error);
                    });


}else{
    printAlerts(userData);
}


}