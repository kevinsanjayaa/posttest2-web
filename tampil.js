const nama = sessionStorage.getItem("fullName");
const email = sessionStorage.getItem("#email");
const notelp = sessionStorage.getItem("phoneNumber");
const game = sessionStorage.getItem("game");
const paket = sessionStorage.getItem("paket");

const tampil = document.getElementById("fullName");
const tampil2 = document.getElementById("#email");
const tampil3 = document.getElementById("phoneNumber");
const tampil4 = document.getElementById("game");
const tampil5 = document.getElementById("paket");


tampil.innerHTML = nama;
tampil2.innerHTML = email;
tampil3.innerHTML = notelp;
tampil4.innerHTML = game;
tampil5.innerHTML = paket;


const form = document.getElementById("form");


form.addEventListener("submit", function(e) {

    e.preventDefault();

    alert("Konfirmasi Berhasil");
    window.location.href = "awal1.html";
});
