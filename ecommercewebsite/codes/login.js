function checkform() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("errormessage");

    
    if (username === "" || password === "") {
        errorMessage.innerHTML = "Username or Password cannot be empty!";
        return false; 
    }

    
    if (username === "Jess123" && password === "password123") {
        window.location.href = "homepage.html";
    } else {
        errorMessage.innerHTML = "Invalid Username or Password!";
    }
}

