const data = JSON.parse(sessionStorage.getItem("datainput"));
    document.getElementById("fullName").innerHTML = data[0].nama
    document.getElementById("inputemail").innerHTML = data[0].email
    document.getElementById("phoneNumber").innerHTML = data[0].notelp
    document.getElementById("game").innerHTML = data[0].game
    document.getElementById("paket").innerHTML = data[0].paket






const form = document.getElementById("form");


form.addEventListener("submit", function(e) {

    e.preventDefault();

    alert("Konfirmasi Berhasil");
    window.location.href = "awal1.html";
});
