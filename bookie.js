
let container1 = document.querySelector(".container1");
let container2 = document.querySelector(".container2");
let container3 = document.querySelector(".container3");
let btnConnecter = document.querySelector(".btnConnecter");
let btnCreerCompte = document.querySelector(".btnCreerCompte");


btnCreerCompte.addEventListener("click",function(){

    let nom = document.getElementById("inscNom").value;
    let email = document.getElementById("inscEmail").value;
    let tel = document.getElementById("inscTel").value;
    let mdp = document.getElementById("inscMdp").value;
    let confirm = document.getElementById("inscConfirm").value;

    const utilisateur = {
        nom: nom,
        email: email,
        tel: tel,
        mdp: mdp,
        confirm: confirm
    }

    if (nom === "" || email == "" || tel === "" || mdp === "" || confirm === "") {
        alert("Vous devez remplir tous les champs");
        return;
    }

    if (mdp !== confirm) {
        alert("Les mots de passe ne correspondent pas");
        return;
    }

    localStorage.setItem(utilisateur, JSON.stringify(utilisateur));
    alert("Compte cree avec succès!");
    container2.style.display = "none";
    container1.style.display = "flex";
    container3.style.display = "none";

});

btnConnecter.addEventListener("click",function(){

    let email = document.getElementById("loginEmail").value;
    let mdp = document.getElementById("loginMotDePasse").value;

    let utilisateur = JSON.parse(localStorage.getItem("utilisateur"));

    if (email === "" || mdp === "") {
        alert("Veuillez remplir tous les champs");
        return;
    }

    if (email === utilisateur.email && mdp === utilisateur.mdp) {
        container1.style.display = "none";
        container2.style.display = "none";
        container3.style.display = "flex";
        alert("Connexion reussie");
    }
    else{
        alert("Informations incorrect");
        return;
    }

});

let creerCompteLink = document.getElementById("creerCompteLink");
creerCompteLink.addEventListener("click",function(){

    
    container1.style.display = "none";
    container2.style.display = "flex";
    container3.style.display = "none";

});



