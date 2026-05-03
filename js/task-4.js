const form = document.querySelector(".login-form");

form.addEventListener("submit", eventHandler);

function eventHandler(event) {
    event.preventDefault();

    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
    
    if (email === "" || password === "") {
        alert("All form fields must be filled in");
        return;
    }

    const userData = {
        email,
        password,
    }

    console.log(userData);
    form.reset();
}