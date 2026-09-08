const KEY_STORAGE = "contacto_storage";

function guardar() {
    var nombre = document.getElementById("nombreUsuario").value;
    console.log(nombre);
    var correo = document.getElementById("emailUsuario").value;
    console.log(correo);
    var mensaje = document.getElementById("mensajeUsuario").value;
    console.log(mensaje);

if(nombre == "") {
        alert("Falta ingresar el nombre");
        return;
    } else if(correo == "") {
        alert("Falta ingresar el correo");
        return;
    } else if(mensaje == "") {
        alert("Falta ingresar el mensaje");
        return;
    }

    var objeto_contacto = [
        {
            "nombre": nombre,
            "correo": correo,
            "mensaje": mensaje
        }
    ];
    localStorage.setItem(KEY_STORAGE, JSON.stringify(objeto_contacto));
    var storage = localStorage.getItem(KEY_STORAGE);
    console.log(JSON.parse(storage));

    alert("Mensaje guardado con exitoo");
}