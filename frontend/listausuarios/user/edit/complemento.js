let id = new URLSearchParams(window.location.search).get("id");

function data_received(data){
    document.getElementById("nombre").value = data.nombre;
    document.getElementById("apellido").value = data.apellido;
    document.getElementById("edad").value = data.edad;
    document.getElementById("imagen").value = data.imagen;
    document.getElementById("email").value = data.email;
}

fetch(`http://127.0.0.1:5500/user/${id}`)
    .then((res) => res.json())
    .then(data_received)
    .catch((error) => console.log("Error :", error));

function data_edit(data){
    alert("Se aplico los cambios");
    window.location.href = `/frontend/listausuarios/user?id=${id}`;
}

function editar_usuario(event){
    event.preventDefault();

    let confirmar = confirm("Esta cambiando datos, quiere avanzar?");
    if (!confirmar){
        return 
    }

    const formdata = new FormData(event.target);

    const nombre = formdata.get("nombre");
    const apellido = formdata.get("apellido");
    const edad = formdata.get("edad");
    const imagen = formdata.get("imagen");
    const email = formdata.get("email");

    fetch(`http://127.0.0.1:5500/user/edit/${id}`, { method: "PUT",
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
        .then(data_edit)
        .catch(error => console.log("Errores",error));
    }