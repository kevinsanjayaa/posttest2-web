const form = document.getElementById("form");


form.addEventListener("submit", function(e) {

    e.preventDefault();
 
    const inputnama = document.getElementById("fullName").value;
    const inputpass = document.getElementById("pass").value;
    const inputemail = document.getElementById("inputemail").value;
    const inputnotelp = document.getElementById("phoneNumber").value;
    const inputgame = document.querySelector('input[name="game"]:checked') ? document.querySelector('input[name="game"]:checked').value : '';
    const inputpaket = document.getElementById("paket").value;


    const nama = JSON.parse(sessionStorage.getItem("nama")) || [];
    const pass = JSON.parse(sessionStorage.getItem("password")) || [];
    const email = JSON.parse(sessionStorage.getItem("email")) || [];
    const notelp = JSON.parse(sessionStorage.getItem("notelp")) || [];
    const game = JSON.parse(sessionStorage.getItem("game")) || [];
    const paket = JSON.parse(sessionStorage.getItem("paket")) || [];
  

    nama.push(inputnama);
    sessionStorage.setItem("nama", JSON.stringify(nama));

    pass.push(inputpass);
    sessionStorage.setItem("password", JSON.stringify(pass));

    email.push(inputemail);
    sessionStorage.setItem("email", JSON.stringify(email));

    notelp.push(inputnotelp)
    sessionStorage.setItem("notelp", JSON.stringify(notelp));

    game.push(inputgame)
    sessionStorage.setItem("game", JSON.stringify(game));

    paket.push(inputpaket)
    sessionStorage.setItem("paket" ,JSON.stringify(paket));
    

    alert("Berhasil Ditambahkan");
    window.location.href = "tampil.html";
});