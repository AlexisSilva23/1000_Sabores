const KEY_STORAGE_CONTACTO = "contacto_storage";

function enviarMensaje() {
    var nombre = document.getElementById("nombrecompleto").value;
    console.log(nombre);
    var correo = document.getElementById("correo").value;
    console.log(correome);
    var textoMensaje = document.getElementById("mensaje").value;
    console.log(textoMensaje);

    if(nombre == "") {
        alert("El Nombre no puede estar vacio");
        return;
    } else if(correo == "") {
        alert("El Correo no puede estar vacio");
        return;
    } else if(textoMensaje == "") {
        alert("El Mensaje no puede estar vacio");
        return;
    }

    var objeto_contacto = [
        {
            "nombre": nombre,
            "correo": correo,
            "mensaje": textoMensaje
        }
    ];
    
    localStorage.setItem(KEY_STORAGE_CONTACTO, JSON.stringify(objeto_contacto));
    
    var storage = localStorage.getItem(KEY_STORAGE_CONTACTO);
    console.log(JSON.parse(storage));

    alert("Mensaje enviado con exito");
}