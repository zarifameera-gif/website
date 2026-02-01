welcomeMessage();

function welcomeMessage() {
    let userResponse = prompt("Welcome to Oops! Studio. What is your name?");

    if (userResponse === null || userResponse.trim() === "") {
        userResponse = "Guest";
    }

    document.getElementById("welcome speech").innerText = `Hello, ${userResponse}! Welcome to Oops! Studio.`;
}

submitMessage();

function submitMessage() {
    const submitButton = document.getElementById("end speech");
    submitButton.addEventListener("click", function() {
        alert("Thank you for visiting Oops! Studio. We hope to see you again soon!");
    });
}