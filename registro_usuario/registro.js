const KEY_STORAGE = "clave_storage";

function guardar(){
    var nombre = document.getElementById("nombre").value;
    console.log (nombre);
    var apellido = document.getElementById("apellido").value;
    console.log (apellido);
    var edad = document.getElementById("edad").value;
    console.log (edad);
    var correo = document.getElementById("correo").value;
    console.log (correo);
    var password = document.getElementById("password").value;
    console.log (password);

    if(nombre == "") {
        alert("El Nombre no puede estar vacio");
        return;
    }else if(apellido == ""){
        alert("El Apellido no puede estar vacio");
        return;
    }else if(edad == ""){
        alert("La Edad no puede estar vacia");
        return;
    }else if(correo == ""){
        alert("El Correo no puede estar vacio");
        return;
    }else if(password == ""){
        alert("La contraseña no puede estar vacia");
        return;
    }

    var objeto_user = [
        {
            "nombre": nombre,
            "apellido": apellido,
            "edad": edad,
            "correo": correo,
            "contraseña": password
        }
    ];

    localStorage.setItem(KEY_STORAGE,JSON.stringify(objeto_user));

    var storage = localStorage.getItem(KEY_STORAGE);
    console.log(JSON.parse(storage));
}