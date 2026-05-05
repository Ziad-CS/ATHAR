const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    // Get the data from local storage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
        alert("No account found, please sign up first");
        return;
    }

    // Comparsion
    if (email === storedUser.email && password === storedUser.password) {
        alert("Login successful");
    }
    if(email === storedUser.email && password !== storedUser.password){
        alert("Invalid password");
    }
    if(email !== storedUser.email && password === storedUser.password){
        alert("Invalid email");
    }
});