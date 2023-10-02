const form = document.getElementById("form");
const firstname1 = document.getElementById("firstname1");
const lastname1 = document.getElementById("lastname1");
const email1 = document.getElementById("email1");
const password1 = document.getElementById("password1");
const repassword1 = document.getElementById("repassword1");
const gender = document.getElementsByName("gender")
const age1 = document.getElementById("age1");
const phoneNumber1 = document.getElementById("phoneNumber1");
const address1 = document.getElementById("address1");
const state1 = document.getElementById("state1");

String.prototype.isEmail = function () {
    return !!this.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
}
String.prototype.isAlpha = function () {
    return !!this.match(/^[a-zA-Z]*$/);
};
String.prototype.isNumeric = function () {
    return !!this.match(/^[0-9]*$/);
};
String.prototype.isPassword = function () {
    return !!this.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})*$/)
};

function checkRequired(inputs) {
    inputs.forEach((input) => {
        if (input.value.trim() == "") {
            //Error
            errorInput(input, `POOR `);
        } else {
            //Success
            successInput(input);
        }
    });
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
        formGroup.className = "formfield success";
        const span = formGroup.querySelector("span");
        span.innerHTML = "";
    }
    function checkLength(input, min, max) {
        const data = input.value.trim().length;
        if (data < min) {
            errorInput(input, `POOR`);
        } else if (data > max) {
            errorInput(input, `POOR`);
        } else {
            successInput(input);
        }
    }
    function checkEmail(input) {

        if (!input.value.trim().isEmail()) {
            errorInput(input, 'POOR');
        }
    }
    function checkAlpha(input) {
        if (!input.value.trim().isAlpha()) {
            errorInput(input, `POOR`);
        }
    }
    function checkAge(input) {
        if (input.value.trim().isNumeric()) {
            errorInput(input, `POOR`);
        }
    }
    function checkConfirmPassword(password, password2) {
        if (password.value != password2.value) {
            errorInput(password2, `POOR AND MISMATCH`);
        }
    }
    form.addEventListener("submit", function (e) {
        e.preventDefault();
   
        checkRequired([firstname1, lastname1, email1, password1, repassword1,age1, phoneNumber1, address1, state1,]);
        checkLength(firstname1, 3, 10);
        checkLength(lastname1, 3, 10);
        checkLength(address1, 5, 100);
        checkLength(password1, 5, 10);
        checkLength(phoneNumber1, 1, 10);
        checkConfirmPassword(password1, repassword1);
        checkEmail(email1);
        checkAlpha([firstname1, lastname1, state1]);
        checkAge(age1);
        checkAge(phoneNumber1)


    });





