function data_received(data){
    const usuario = document.getElementById("user");

    let imagen = document.createElement("img");
    imagen.setAttribute("src", data.imagen);
    imagen.setAttribute("class", "rounded-5")
    imagen.setAttribute("witdh", 30);
    imagen.setAttribute("height", 50);

    let name = document.createElement("p");
    name.setAttribute("class", "fw-bold text-capitalize ms-1 align-self-center")
    name.innerText = `${data.nombre} ${data.apellido}`;

    usuario.append(imagen); 
    usuario.append(name);
  }

  let id = new URLSearchParams(window.location.search).get("id");

  fetch("http://127.0.0.1:5500/user/"+id)
    .then(res => res.json())
    .then(data_received)
    .catch(error => console.log("errores: ", error));
