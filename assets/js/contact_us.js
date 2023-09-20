console.log("xd");

const contactForm = document.forms["contactForm"];
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const userData = {
        name: contactForm.elements["name"].value,
        email: contactForm.elements["email"].value,
        phone: contactForm.elements["phone"].value,
        feedback: contactForm.elements["feedback"].value
    }

    // Validar los campos
    const isNameValid = validateName(userData);
    const isEmailValid = validateEmail(userData);
    const isPhoneValid = validateNumber(userData);

    // Mostrar u ocultar mensajes de error
    nameError.style.display = isNameValid ? "none" : "block";
    emailError.style.display = isEmailValid ? "none" : "block";
    phoneError.style.display = isPhoneValid ? "none" : "block";

    // Solo enviar el correo si todos los campos son válidos
    if (isNameValid && isEmailValid && isPhoneValid) {
        sendEmail(userData);
    }
});

function validateName({ name }) {
    const patron = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s[a-zA-ZÀ-ÿ\u00f1\u00d1])*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
    const patronMatch = name.match(patron);
    return patronMatch;
}

function validateEmail({ email }) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const emailMatch = email.match(emailPattern);
    return emailMatch !== null;
}

function validateNumber({ phone }) {
    const numPatron = /^[0-9]+$/;
    const patronMatch = phone.match(numPatron);
    const phoneStr = phone.split(" ").join("").length;

    return patronMatch && (phoneStr === 10);
}

function showSuccessAlert() {
    const successAlert = document.getElementById("successAlert");
    successAlert.style.display = "block";
    setTimeout(() => {
    successAlert.style.display = "none";
   }, 5000); // Ocultar la alerta después de 5 segundos
  }

function sendEmail(userData) {
    emailjs.init('_AIRxlmq1luT-s4JJ');
    emailjs.sendForm('contact_service', 'contact_form', contactForm)
        .then(function () {
            console.log('SUCCESS!');
            contactForm.reset();
            showSuccessAlert();
        }, function (error) {
            console.log('FAILED...', error);
        });
}

