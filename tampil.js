const nama = JSON.parse(sessionStorage.getItem("nama")) || [];
const email = JSON.parse(sessionStorage.getItem("email")) || [];
const notelp = JSON.parse(sessionStorage.getItem("notelp")) || [];
const game = JSON.parse(sessionStorage.getItem("game")) || [];
const paket = JSON.parse(sessionStorage.getItem("paket")) || [];

const tampil = document.getElementById("fullName")
const tampil2 = document.getElementById("inputemail");
const tampil3 = document.getElementById("phoneNumber");
const tampil4 = document.getElementById("game");
const tampil5 = document.getElementById("paket");

tampil.innerHTML = nama
tampil2.innerHTML = email
tampil3.innerHTML = notelp
tampil4.innerHTML = game
tampil5.innerHTML = paket





const form = document.getElementById("form");


form.addEventListener("submit", function(e) {

    e.preventDefault();

    alert("Konfirmasi Berhasil");
    window.location.href = "awal1.html";
});
