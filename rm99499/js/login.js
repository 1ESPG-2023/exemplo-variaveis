const user = {
    name: "",
    password: ""
}

addEventListener("click", (event)=> {
    event.preventDefault();
    if (event.target.id === "btnSubmit") {
        user.name = document.querySelector("#idUser").value;
        user.password = document.querySelector("#idPass").value;
        console.log(user);
        const h1Title = document.querySelector("#titulo");

        if (user.name == "rm99499" && user.password == "1234") {
            console.log("Válido");
            h1Title.innerHTML = "Bem-vindo " + user.name

        } else {
            console.log("Não válido");
            h1Title.innerHTML = "";
        }
    }
});