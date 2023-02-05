const sendButton = document.getElementById("send-button");
const namee = document.getElementById("name-input");
const email = document.getElementById("email-input");
const msg = document.getElementById("msg-input");


function validateEmail (input) {

    const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (input.value.match(validEmail)) {
      return true;
    } else {
      return false;
    };
};

function validateText (input) {
    if (input.value === "") {
        return false;
    } else {
        return true;
    };
};

// validacion

sendButton.addEventListener("click", function () {
    if (validateEmail(email) && validateText(namee) && validateText(msg)) {
        alert("Su solicitud ha sido enviada");
    } else {
        alert("El formulario no se pudo enviar");
    };
})