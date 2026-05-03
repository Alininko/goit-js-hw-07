const input = document.querySelector("input#name-input");
const output = document.querySelector("span#name-output");

input.addEventListener("input", (event) => {
    output.textContent = event.currentTarget.value.trim() === "" ? "Anonymous" : event.currentTarget.value.trim();
});
