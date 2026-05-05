const passwordInput = document.getElementById("password-input");
const confirmInput = document.getElementById("confirm-input");
const form = document.getElementById("form");

// requirements
const lengthReq = document.getElementById("length");
const numberReq = document.getElementById("number");
const upperReq = document.getElementById("uppercase");
const symbolReq = document.getElementById("symbol");
const matchReq = document.getElementById("passwordmatched");

// regex
const numberRegex = /[0-9]/;
const upperRegex = /[A-Z]/;
const symbolRegex = /[!@#$%^&*()_+\-=]/;

// function to toggle valid/invalid
function setValid(element, condition) {
    if (condition) {
        element.classList.remove("invalid");
        element.classList.add("valid");
    } else {
        element.classList.remove("valid");
        element.classList.add("invalid");
    }
}

// password typing event
passwordInput.addEventListener("input", () => {
    const value = passwordInput.value;

    setValid(lengthReq, value.length >= 8);
    setValid(numberReq, numberRegex.test(value));
    setValid(upperReq, upperRegex.test(value));
    setValid(symbolReq, symbolRegex.test(value));

    // check match while typing
    setValid(matchReq, value === confirmInput.value && value !== "");
});

// confirm password event
confirmInput.addEventListener("input", () => {
    setValid(matchReq, passwordInput.value === confirmInput.value && confirmInput.value !== "");
});

// form submit
form.addEventListener("submit", (e) => {
    const inputs = form.querySelectorAll("input");

    // check empty fields
    for (let input of inputs) {
        if (input.value.trim() === "") {
            e.preventDefault();
            alert("Please fill this field");
            return;
        }
    }

    // check passwords match
    if (passwordInput.value !== confirmInput.value) {
        e.preventDefault();
        alert("The passwords are not matched");
        return;
    }
});
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const firstName = document.getElementById("firstname").value;
    const lastName = document.getElementById("lastname").value;
    const email = document.getElementById("email-input").value;
    const password = document.getElementById("password-input").value;

    const newUser = {
        firstName,
        lastName,
        email,
        password
    };

    // Get the user
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // check if email exists 
    const emailExists = users.some(user => user.email === email);

    if (emailExists) {
        alert("This email already exists");
        return;
    }

    // New user
    users.push(newUser);

    // Store again
    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created successfully");

    window.location.href = "login.html";
});