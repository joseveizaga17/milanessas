const params = new URLSearchParams(window.location.search);
const id = params.get("id");

document.getElementById("btnEdit").setAttribute("href", `/frontend/listausuarios/user/edit?id=${id}`)

let acordeon = document.getElementById("intento-acordeon");
let hay_milangas = false;

//te hace una pequeña lista de cada sandwich
function lista_de_cada_sandwich(milanga){

    let contenedor_lista = document.createElement("ul");

    let linea1 = document.createElement("li");
    linea1.append("Pan: " + milanga.pan);

    let linea2 = document.createElement("li");
    linea2.append("Milanesa: " + milanga.milanesa);

    let linea3 = document.createElement("li");
    linea3.append("Con: " + milanga.extras);

    let linea4 = document.createElement("li");
    linea4.append("Coccion: " + milanga.coccion);

    let linea5 = document.createElement("li");
    linea5.append("Papas: " + milanga.papas);

    contenedor_lista.append(linea1);
    contenedor_lista.append(linea2);
    contenedor_lista.append(linea3);
    contenedor_lista.append(linea4);
    contenedor_lista.append(linea5);
    return contenedor_lista;
}

function data_recibida(data){
    let titulo = document.getElementById("titulo-user");
    titulo.innerText = data.nombre;

    let nombre = document.getElementById("nombre");
    nombre.innerText = data.nombre;

    let apellido = document.getElementById("apellido");
    apellido.innerText = data.apellido;

    let imagen = document.getElementById("img");
    imagen.setAttribute("src", data.imagen);

    let edad = document.getElementById("edad");
    edad.innerText = data.edad;

    let email = document.getElementById("email");
    email.innerText = data.email;

    let identificacion = document.getElementById("id");
    identificacion.innerText = data.id;
        
    for(let j=0; j<data.milangas.length;j++){
        acordeon.classList.add("section-acordeon");

        let detalles = document.createElement("details");

        let summer = document.createElement("summary");
        summer.classList.add("summary-acordeon");
        summer.innerText = " Sandwich " + data.milangas[j].id;
            
        let contenido = document.createElement("p");
        contenido.classList.add("p-acordeon");
        
        let lista = function() {
            return lista_de_cada_sandwich(data.milangas[j]);
        };
        contenido.appendChild(lista());

        detalles.append(summer);
        detalles.append(contenido);

        acordeon.append(detalles);

        hay_milangas = true;
        
    }
    if (!hay_milangas){
        acordeon.classList.add("section-acordeon");
        acordeon.innerText = "No hay sadnwichs creados"

    }
}


function usuario_borrado(data){
    alert("El usuario a sido borrado exitosamente");
    window.location.href = "/frontend/listausuarios/index.html";
}

function remove_character(){
    let respuesta = confirm(`Esta seguro de elminar el usuario ${id}?`);
    if (!respuesta){
        return;
    }
    fetch(`http://127.0.0.1:5500/user/delete/${id}`, { method: "DELETE" })
        .then(response => response.json())
        .then(usuario_borrado)
        .catch(error => console.log("Error",error))

}

fetch(`http://127.0.0.1:5500/user/${id}`)
    .then(response => response.json())
    .then(data_recibida)
    .catch(error => console.log("Error",error))
