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
});

const mat = document.querySelector(".mat-bars");
let stringResult = "";

const skills = {
    "HTML": 40,
    "CSS":20,
    "JS": 60,
    "Python": 65,
    "Java": 30
};

function writeHTML() {
    for (const key in skills) {
        const stringStructure = ` 
        <style>
        #${key} {
        width: ${skills[key]}%;
        }
        </style>
        <div class='bar-and-name'>
            <div class='bar-and-name'>
                <h1 class='bar-name'>${key}</h1>
                    <div class='graph-space'>
                    <div id='${key}' class='graph'>${skills[key]}%</div>
            </div>
        </div>`;
        stringResult += stringStructure;
    };
    mat.innerHTML = stringResult;
};

writeHTML();

// carousel

const pictures = document.querySelectorAll(".slide");
const buttonPrevious = document.querySelector(".btn-prev");
const buttonNext = document.querySelector(".btn-next");

let currentSlide = 0;
let maxNumberSlides = pictures.length - 1;

pictures.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
});

buttonPrevious.addEventListener("click", function () {
    if (currentSlide === 0) {
    currentSlide = maxNumberSlides;
    } else {
    currentSlide--;
    }

    pictures.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - currentSlide)}%)`;
    });
});

buttonNext.addEventListener("click", function () {

    if (currentSlide === maxNumberSlides) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }

  pictures.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - currentSlide)}%)`;
  });
});