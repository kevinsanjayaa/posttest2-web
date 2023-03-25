const form = document.getElementById("form");


form.addEventListener("submit", function(e) {

    e.preventDefault();
 
    const nama = document.getElementById("fullName").value;
    const email = document.getElementById("#email").value;
    const notelp = document.getElementById("phoneNumber").value;
    const game = document.querySelector('input[name="game"]:checked') ? document.querySelector('input[name="game"]:checked').value : '';
    const paket = document.getElementById("paket").value;


    sessionStorage.setItem("fullName", nama);
    sessionStorage.setItem("#email", email);
    sessionStorage.setItem("phoneNumber", notelp);
    sessionStorage.setItem("game", game);
    sessionStorage.setItem("paket" ,paket);


    alert("Berhasil Ditambahkan");
    window.location.href = "tampil.html";
});