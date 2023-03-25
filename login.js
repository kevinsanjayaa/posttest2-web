const tombol = document.getElementById("login");
tombol.onclick = login;

function login(e){
    e.preventDefault();
const username = document.getElementById("username");
const pass = document.getElementById("password");

const loc_user = localStorage.getItem("username");
const loc_pass = localStorage.getItem("password");

if (username.value == loc_user && pass.value == loc_pass){
    alert("Selamat Datang");
    window.location.href = "awal1.html";
} else {
    alert("Username atau Password Salah")
 }
}
