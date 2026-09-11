function login(event) {

    event.preventDefault();

    const username =
        document.getElementById("username").value.trim();

    const password =
        document.getElementById("password").value;


    if (username === "student" && password === "1234") {

        // Save login status
        sessionStorage.setItem("rutzzLoggedIn", "true");

        // Open dashboard
        window.location.href = "dashboard.html";

    } else {

        alert("❌ Invalid username or password!");

    }
}


/* =========================
   SHOW / HIDE PASSWORD
========================= */

function togglePassword() {

    const password =
        document.getElementById("password");

    if (password.type === "password") {

        password.type = "text";

    } else {

        password.type = "password";

    }

}