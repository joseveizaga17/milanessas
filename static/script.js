
function siguiente_pan(){
    let formulario = document.getElementById("form-sandwich");

    //Creando un div con un id
    let milanesa = document.createElement("div");
    milanesa.setAttribute("id", "tipo-de-milanesa");
    milanesa.setAttribute("class","d-flex justify-content-evenly my-5");

    //creando un boton diciendo "siguiente"
    let boton1 = document.createElement("button");
    boton1.setAttribute("type", "button");
    boton1.setAttribute("class","btn btn-outline-dark");
    boton1.setAttribute("name", "milanesa");
    boton1.innerText = "Milanesa de Carne";
    boton1.onclick = function(){siguiente_milanesa()};

    let boton2 = document.createElement("button");
    boton2.setAttribute("type", "button");
    boton2.setAttribute("class","btn btn-outline-dark");
    boton2.setAttribute("name", "milanesa");
    boton2.innerText = "Milanesa de Pollo";
    boton2.onclick = function(){siguiente_milanesa()};

    let boton3 = document.createElement("button");
    boton3.setAttribute("type", "button");
    boton3.setAttribute("name", "milanesa");
    boton3.setAttribute("class","btn btn-outline-dark");
    boton3.innerText = "Milanesa de Soja";
    boton3.onclick = function(){siguiente_milanesa()};



    //aqui es como escondo el div de pan
    let clase = document.getElementById("tipo-de-pan")
    clase.classList.add("d-none");

    //aqui añado todo al div
    milanesa.append(boton1);
    milanesa.append(boton2);
    milanesa.append(boton3);

    //y aqui añado todo el div con todo los elementos creados al formulario
    formulario.append(milanesa);
    
}

function siguiente_milanesa(){
    let formulario = document.getElementById("form-sandwich");

    let coccion = document.createElement("div");
    coccion.setAttribute("id", "tipo-de-coccion");
    coccion.setAttribute("class","d-flex justify-content-evenly my-5");

        //creando un boton diciendo "siguiente"
    let boton1 = document.createElement("button");
    boton1.setAttribute("type", "button");
    boton1.setAttribute("name", "coccion");
    boton1.setAttribute("class","btn btn-outline-dark");
    boton1.innerText = "Frita";
    boton1.onclick = function(){siguiente_coccion()};

    let boton2 = document.createElement("button");
    boton2.setAttribute("type", "button");
    boton2.setAttribute("name", "coccion");
    boton2.setAttribute("class","btn btn-outline-dark");
    boton2.innerText = "Horno";
    boton2.onclick = function(){siguiente_coccion()};

    let boton3 = document.createElement("button");
    boton3.setAttribute("type", "button");
    boton3.setAttribute("name", "coccion");
    boton3.setAttribute("class","btn btn-outline-dark");
    boton3.innerText = "Plancha";
    boton3.onclick = function(){siguiente_coccion()};



    //aqui es como escondo el div de pan
    let clase = document.getElementById("tipo-de-milanesa")
    clase.classList.add("d-none");

    //aqui añado todo al div
    coccion.append(boton1);
    coccion.append(boton2);
    coccion.append(boton3);

    //y aqui añado todo el div con todo los elementos creados al formulario
    formulario.append(coccion);
}
function siguiente_coccion(){
    let formulario = document.getElementById("form-sandwich");

    let ensalada = document.createElement("div");
    ensalada.setAttribute("id", "tipo-de-ensalada");
    ensalada.setAttribute("class","d-flex justify-content-evenly my-5");

    let boton1 = document.createElement("button");
    boton1.setAttribute("type", "button");
    boton1.setAttribute("name", "ensalada");
    boton1.setAttribute("class","btn btn-outline-dark");
    boton1.innerText = "Lechuga";
    boton1.onclick = function(){siguiente_papas()};

    let boton2 = document.createElement("button");
    boton2.setAttribute("type", "button");
    boton2.setAttribute("name", "ensalada");
    boton2.setAttribute("class","btn btn-outline-dark");
    boton2.innerText = "Tomate";
    boton2.onclick = function(){siguiente_papas()};

    let boton3 = document.createElement("button");
    boton3.setAttribute("type", "button");
    boton3.setAttribute("name", "ensalada");
    boton3.setAttribute("class","btn btn-outline-dark");
    boton3.innerText = "Huevo";
    boton3.onclick = function(){siguiente_papas()};



    //aqui es como escondo el div de pan
    let clase = document.getElementById("tipo-de-coccion")
    clase.classList.add("d-none");

    ensalada.append(boton1);
    ensalada.append(boton2);
    ensalada.append(boton3);

    formulario.append(ensalada);
    
}

function siguiente_papas(){
    let formulario = document.getElementById("form-sandwich");

    let papas = document.createElement("div");
    papas.setAttribute("id", "tipo-de-papas");
    papas.setAttribute("class","d-flex justify-content-evenly my-5");

    let boton1 = document.createElement("button");
    boton1.setAttribute("type", "button");
    boton1.setAttribute("name", "papas");
    boton1.setAttribute("class","btn btn-outline-dark");
    boton1.innerText = "Papas Fritas";
    boton1.onclick = function(){siguiente_formulario()};

    let boton2 = document.createElement("button");
    boton2.setAttribute("type", "button");
    boton2.setAttribute("name", "papas");
    boton2.setAttribute("class","btn btn-outline-dark");
    boton2.innerText = "Papas al horno";
    boton2.onclick = function(){siguiente_formulario()};


    let boton3 = document.createElement("button");
    boton3.setAttribute("type", "button");
    boton3.setAttribute("name", "papas");
    boton3.setAttribute("class","btn btn-outline-dark");
    boton3.innerText = "Pure";
    boton3.onclick = function(){siguiente_formulario()};

    let clase = document.getElementById("tipo-de-ensalada")
    clase.classList.add("d-none");

    papas.append(boton1);
    papas.append(boton2);
    papas.append(boton3);

    formulario.append(papas);
}

function siguiente_formulario(){
    let formulario = document.getElementById("form-sandwich");

    let title = document.getElementById("form-title");
    title.innerText = 'Cree una cuenta para finalizar el pedido';

    let Nombre = document.createElement("div");
    Nombre.setAttribute("class", "mb-3 px-5");
    let nombre_label = document.createElement("label");
    nombre_label.setAttribute("class", "form-label");
    nombre_label.innerText = "Ingrese su nombre";
    let nombre = document.createElement("input");
    nombre.setAttribute("type", "text");
    nombre.setAttribute("name", "nombre");
    nombre.setAttribute("class", "form-control");


    let Apellido = document.createElement("div");
    Apellido.setAttribute("class", "mb-3 px-5" );
    let apellido_label = document.createElement("label");
    apellido_label.setAttribute("class", "form-label");
    apellido_label.innerText = "Ingrese su apellido";
    let apellido = document.createElement("input");
    apellido.setAttribute("type", "text");
    apellido.setAttribute("name", "apellido");
    apellido.setAttribute("class", "form-control");


    let Edad = document.createElement("div");
    Edad.setAttribute("class", "mb-3 px-5");
    let edad_label = document.createElement("label");
    edad_label.setAttribute("class", "form-label");
    edad_label.innerText = "Ingrese su edad";
    let edad = document.createElement("input");
    edad.setAttribute("type", "number");
    edad.setAttribute("name", "edad");


    let Imagen = document.createElement("div");
    Imagen.setAttribute("class", "mb-3 px-5");
    let imagen_label = document.createElement("label");
    imagen_label.setAttribute("class", "form-label");
    imagen_label.innerText = "Ingrese una imagen";
    let imagen = document.createElement("input");
    imagen.setAttribute("type", "file");
    imagen.setAttribute("name", "imagen");
    imagen.setAttribute("class", "form-control");


    let Email = document.createElement("div");
    Email.setAttribute("class", "mb-3 px-5");
    let email_label = document.createElement("label");
    email_label.setAttribute("class", "form-label");
    email_label.innerText = "Ingrese su email";
    let email = document.createElement("input");
    email.setAttribute("type", "email");
    email.setAttribute("name", "email");
    email.setAttribute("class", "form-control");


    
    let boton = document.createElement("input");
    boton.setAttribute("type", "submit");
    boton.setAttribute("class", 'btn btn-success ms-5 mb-3')

    let clase = document.getElementById("tipo-de-papas")
    clase.classList.add("d-none");




    Nombre.append(nombre_label);
    Nombre.append(nombre);
    Apellido.append(apellido_label);
    Apellido.append(apellido);

    Edad.append(edad_label);
    Edad.append(edad);
    Imagen.append(imagen_label);
    Imagen.append(imagen);

    Email.append(email);
    Email.append(email_label);
    
    formulario.append(title);
    formulario.append(Nombre);
    formulario.append(Apellido);
    formulario.append(Edad);
    formulario.append(Imagen);
    formulario.append(Email);
    
    formulario.append(boton);

}






//nota: falta reducir el codigo