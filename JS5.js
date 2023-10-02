const  form= document.getElementById("form");
const Name= document.getElementById("name");
const Email=document.getElementById("email");
const Website=document.getElementById("website");
const Message=document.getElementById("message");
String.prototype.isEmail = function () {
    return !!this.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
}
String.prototype.isAlpha = function () {
    return !!this.match(/^[a-zA-Z]*$/);
};
String.prototype.isURL=function()
{
    return !! this.match(/^(http|https):\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}(\b|\/)?$/);
}

function getName(input) {
    //return input.id;
    return input.getAttribute("name");
}
function errorInput(input, message) {
    const formGroup = input.parentElement;
    formGroup.className = "Formfield error";
    const span = formGroup.querySelector("span");
    span.innerHTML = message;
}
function successInput(input) {
    const formGroup = input.parentElement;
    formGroup.className = "Formfield success";
    const span = formGroup.querySelector("span");
    span.innerHTML = "";
}
function checkRequired(inputs) {
    inputs.forEach((input) => {
        if (input.value.trim() == " ") {
            //Error
            errorInput(input, `This field is required `);
        } else {
            //Success
            successInput(input);
        }
    });
}
function checkLength(input, min, max) {
    const data = input.value.trim().length;
    if (data < min) {
        errorInput(input, `This field is required`);
    } else if (data > max) {
        errorInput(input, `${getName(input)} must be aleast lesser than ${min} characters`);
    } else {
        successInput(input);
    }
}
function checkEmail(input) {

    if (!input.value.trim().isEmail()) {
        errorInput(input,`A valid Email-id is required` );
    }
}
function checkAlpha(input) {
    if (!input.value.trim().isAlpha()) {
        errorInput(input, `A valid Name is Required`);
    }
}
function checkWebsite(input) {
    if (!input.value.trim().isURL()) {
        errorInput(input, `A valid url is Required`);
    }
}
form.addEventListener("submit", function (e) {
    checkRequired([Name,Email,Website,Message]);
    e.preventDefault();
    checkEmail(Email);
    checkAlpha(Name);
    checkWebsite(Website);
    checkLength(Name, 3, 10);
    checkLength(Message, 5, 100);
   
});




