const form = document.getElementById("form");


form.addEventListener("submit", function(e) {

    e.preventDefault();
 
    const inputnama = document.getElementById("fullName").value;
    const inputpass = document.getElementById("pass").value;
    const inputemail = document.getElementById("inputemail").value;
    const inputnotelp = document.getElementById("phoneNumber").value;
    const inputgame = document.querySelector('input[name="game"]:checked') ? document.querySelector('input[name="game"]:checked').value : '';
    const inputpaket = document.getElementById("paket").value;


    var data = JSON.parse(sessionStorage.getItem("datainput")) || [];
    data.push( {
        nama : inputnama,
        pass : inputpass,
        email : inputemail,
        notelp : inputnotelp,
        game : inputgame,
        paket : inputpaket
    })

    sessionStorage.setItem("datainput", JSON.stringify(data));

    alert("Berhasil Ditambahkan");
    window.location.href = "tampil.html";
});