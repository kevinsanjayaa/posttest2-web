const form = document.getElementById("form");


form.addEventListener("submit", function(e) {

    e.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;

    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", pass);

    alert("Registrasi Akun Berhasil");
    window.location.href = "index.html";
});
