function data_post(data){
    //condicional mal puesto?
    console.log(data.id);
    //porque mierda me acepta la condicion si enralidad es un int
    if(!data.success){
        alert("Error");
    } 
    alert("El id del user es: " + data.id);
    window.location.href = `/frontend/crear?id=${data.id}`
    //verificar contenido data, que este dentro de las situaciones controladas
    /*
    if(!data.success){
        alert("Error");
    } else {
        window.location.href = "/frontend/create/index.html";
    }
    */
}

function crear_usuario(event){
    event.preventDefault();

    const formdata = new FormData(event.target);

    const nombre = formdata.get("nombre");
    const apellido = formdata.get("apellido");
    const edad = formdata.get("edad");
    const imagen = formdata.get("imagen");
    const email = formdata.get("correo");

    fetch('http://127.0.0.1:5500/user/create', { method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        imagen: imagen,
        email: email
    })
    })
    .then(response => response.json())
    .then(data_post)
    .catch(error => console.log("Errores",error));
}