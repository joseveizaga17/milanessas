function data_received(data){
    const usuario = document.getElementById("user");

    let imagen = document.createElement("img");
    imagen.setAttribute("src", data.imagen);
    imagen.setAttribute("class", "rounded-5")
    imagen.setAttribute("witdh", 30);
    imagen.setAttribute("height", 50);

    /*let name = document.createElement("p");
    name.setAttribute("class", "fw-bold text-capitalize ms-1 align-self-center")
    name.innerText = `${data.nombre} ${data.apellido}`;*/

    let drop = document.createElement("div");
    drop.setAttribute("class", "btn-group me-2");

    let nombre = document.createElement("button");
    nombre.setAttribute("class", "btn btn-dark dropdown-toggle");
    nombre.setAttribute("data-bs-toggle", "dropdown");
    nombre.setAttribute("aria-expanded", "false");
    nombre.innerText = `${data.nombre} ${data.apellido}`;

    let dropd = document.createElement("ul");
    dropd.setAttribute("class", "dropdown-menu");

    let lista1 = document.createElement("li");
    let a1 = document.createElement("a");
    a1.setAttribute("class", "dropdown-item");
    a1.setAttribute("href", "/frontend/index.html");
    a1.innerText = "Salir";

    drop.append(nombre)
    lista1.append(a1);
    dropd.append(lista1);
    drop.append(dropd);
    usuario.append(drop);
    usuario.append(imagen); 

  }

  const id = new URLSearchParams(window.location.search).get("id");

  document.getElementById("l-inicio").setAttribute("href", `/frontend?id=${id}`);
  document.getElementById("l-nos").setAttribute("href", `/frontend/nosotros?id=${id}`);
  document.getElementById("l-regis").setAttribute("href", `/frontend/registrar?id=${id}`);
  document.getElementById("l-crear").setAttribute("href", `/frontend/crear?id=${id}`);
  document.getElementById("l-user").setAttribute("href", `/frontend/listausuarios?id=${id}`);
  document.getElementById("l-sand").setAttribute("href", `/frontend/listasandwiches?id=${id}`);

  console.log(id);
  fetch("http://127.0.0.1:5500/user/"+id)
    .then(res => res.json())
    .then(data_received)
    .catch(error => console.log("errores: ", error));
