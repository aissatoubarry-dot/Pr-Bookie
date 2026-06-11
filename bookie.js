
let container1 = document.querySelector(".container1");
let container2 = document.querySelector(".container2");
let container3 = document.querySelector(".container3");
let btnConnecter = document.querySelector(".btnConnecter");
let btnCreerCompte = document.querySelector(".btnCreerCompte");

btnCreerCompte.addEventListener("click", function(){

    const nom = document.getElementById('inscNom').value;
    const email = document.getElementById('inscEmail').value;
    const tel = document.getElementById('inscTel').value;
    const mdp = document.getElementById('inscMdp').value;
    const confirmPassword = document.getElementById('inscConfirm').value;

    if(!nom || !email || !tel || !mdp || !confirmPassword){
        alert("Veuillez remplir tous les champs");
        return;
    }

    if(mdp !== confirmPassword){
        alert("Les mots de passe ne correspondent pas");
        return;
    }

    let utilisateur = {
        nom,
        email,
        tel,
        mdp
    };

    localStorage.setItem(
        "utilisateur",
        JSON.stringify(utilisateur)
    );

    alert("Compte créé avec succès");

    container2.style.display = "none";
    container1.style.display = "flex";
    container3.style.display = "none";
});

document.getElementById("createAccountLink").addEventListener("click", function(){
    container1.style.display = "none";
    container2.style.display = "flex";
    container3.style.display = "none";
});

btnConnecter.addEventListener("click", function(){

    const email = document.getElementById("loginEmail").value;
    const mdp = document.getElementById("loginMotDePasse").value;

    let utilisateur = JSON.parse(
        localStorage.getItem("utilisateur") || "null"
    );

    if(utilisateur && email === utilisateur.email && mdp === utilisateur.mdp){
        container1.style.display = "none";
        container3.style.display = "flex";
        alert("Connexion réussie");
    }
    else{
        alert("Email ou mot de passe incorrect");
    }

});



