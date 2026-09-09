const KEY_STORAGE = "login_storage";

function login() {
    var correo = document.getElementById("correo").value;
    console.log(correo);
    var password = document.getElementById("password").value;
    console.log(password);


    if(correo == ""){
        alert("El Correo no puede estar vacio");
        return;
    } else if(password == ""){
        alert("La contraseña no puede estar vacia");
        return;
    }

    var objeto_login = [
        {
            "correo": correo,
            "password": password
        }
    ];
    
    localStorage.setItem(KEY_STORAGE, JSON.stringify(objeto_login));
    
    var storage = localStorage.getItem(KEY_STORAGE);
    console.log(JSON.parse(storage));

    alert("Inicio de sesión guardado con éxito");
}