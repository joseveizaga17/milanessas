function usuarios_recibidos(data){
    let documento = document.getElementById("usuarios");

    for (let i=0;i<data.length; i++){
        let usuario = data[i];
        
        let div1 = document.createElement("div");
        div1.setAttribute("class", "col-6 col-md-4 col-lg-3 col-xl-2 p-3");

        let div2 = document.createElement("div");
        div2.setAttribute("class", "card");

        let img = document.createElement("img");
        img.setAttribute("class", "card-img-top img-user");
        img.setAttribute("alt", "imagen");
        img.setAttribute("src", usuario.imagen);

        let div3 = document.createElement("div");
        div3.setAttribute("class", "card-body");



        //cosas de titulo, iamgen, decripcion
        let card_title = document.createElement("h5");
        card_title.setAttribute("class", "card-title name-user title-user");
        card_title.append(usuario.nombre);
        
        //let parrafo = document.createElement("p");
        //parrafo.setAttribute("class", "card-text");

        let boton_id = document.createElement("a");
        boton_id.setAttribute("class", "btn btn-outline-primary ms-2");
        boton_id.setAttribute("href", `/frontend/crear?id=${usuario.id}`);
        boton_id.innerText = "Elegir usuario";

        let boton = document.createElement("a");
        boton.setAttribute("class", "btn btn-outline-danger");
        boton.setAttribute("href", `/frontend/listausuarios/user?id=${usuario.id}`)
        boton.append("Ver")
        
        div3.append(card_title);
        //div3.append(parrafo);
        div3.append(boton);
        div3.append(boton_id);

        div2.append(img);
        div2.append(div3);

        div1.append(div2);

        documento.append(div1);


    }
}

fetch("http://127.0.0.1:5500/user")
    .then(response => response.json())
    .then(usuarios_recibidos)
    .catch(error => console.log("Error",error))
