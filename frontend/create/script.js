function siguiente_pan(){
    let formulario = document.getElementById("form-sandwich");


    //Creando un div con un id
    let carne = document.createElement("div");
    carne.setAttribute("id", "tipo-de-carne");
    carne.setAttribute("class","card col-6 mx-auto");

    //Creando un label
    let texto = document.createElement("label");
    texto.setAttribute("for", "carne");
    texto.classList.add("my-2");
    texto.innerText = 'Eliga su carne :';

    //Creando una imagen
    let image = document.createElement("img");
    image.setAttribute("src", "https://arjosimarprod.vteximg.com.br/arquivos/ids/155753-1000-1000/milanesa-pollo-frita-kg-1-7113.jpg?v=637378633665430000");
    image.setAttribute("alt", "carne");
    image.setAttribute("class","img-thumbnail rounded mb-3");

    //Haciendo un input tipo texto con id
    let tipo = document.createElement("input");
    tipo.setAttribute("type", "text");
    tipo.setAttribute("id", "carne");
    tipo.setAttribute("placeholder", "Que tipo de carne desea");
    tipo.setAttribute("class","form-control mb-3 w-75 mx-auto");

    //creando un boton diciendo "siguiente"
    let boton = document.createElement("button");
    boton.setAttribute("type", "button");
    boton.setAttribute("class","mb-2 btn btn-primary mx-auto");
    boton.innerText = "Siguiente";
    boton.onclick = function(){siguiente_carne()};

    //aqui es como escondo el div de pan
    let clase = document.getElementById("tipo-de-pan")
    clase.classList.add("d-none");

    //aqui añado todo al div
    carne.append(texto);
    carne.append(image);
    carne.append(tipo);
    carne.append(boton);

    //y aqui añado todo el div con todo los elementos creados al formulario
    formulario.append(carne);
    
}

function siguiente_carne(){
    let formulario = document.getElementById("form-sandwich");

    let ensalada = document.createElement("div");
    ensalada.setAttribute("id", "tipo-de-ensalada");
    ensalada.setAttribute("class","card col-6 mx-auto");

    let texto = document.createElement("label");
    texto.setAttribute("for", "ensalada");
    texto.classList.add("my-2");
    texto.innerText = 'Eliga su ensalada :'

    let image = document.createElement("img");
    image.setAttribute("src", "https://cdn0.recetasgratis.net/es/posts/1/7/7/ensalada_de_apio_tomate_y_aguacate_60771_orig.jpg");
    image.setAttribute("alt", "ensalada");
    image.setAttribute("class","img-thumbnail rounded mb-3");

    let tipo = document.createElement("input");
    tipo.setAttribute("type", "text");
    tipo.setAttribute("id", "ensalada");
    tipo.setAttribute("placeholder", "Que tipo de ensalada desea");
    tipo.setAttribute("class","form-control mb-3 w-75 mx-auto");

    let boton = document.createElement("button");
    boton.setAttribute("type", "button");
    boton.setAttribute("class","mb-2 btn btn-primary mx-auto");
    boton.innerText = "Siguiente";
    boton.onclick = function(){siguiente_ensalada()};

    let clase = document.getElementById("tipo-de-carne")
    clase.classList.add("d-none");

    ensalada.append(texto);
    ensalada.append(image);
    ensalada.append(tipo);
    ensalada.append(boton);
    formulario.append(ensalada);
    
}
function siguiente_ensalada(){
    let formulario = document.getElementById("form-sandwich");

    let papas = document.createElement("div");
    papas.setAttribute("id", "tipo-de-papas");
    papas.setAttribute("class","card col-6 mx-auto");

    let texto = document.createElement("label");
    texto.setAttribute("for", "papas");
    texto.classList.add("my-2");
    texto.innerText = 'Eliga sus papas :'

    let image = document.createElement("img");
    image.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDnT_dO-xu7x1jlb5l3dvR641tcnieqlgF3w&s");
    image.setAttribute("alt", "carne");
    image.setAttribute("class","img-thumbnail rounded mb-3");

    let tipo = document.createElement("input");
    tipo.setAttribute("type", "text");
    tipo.setAttribute("id", "papas");
    tipo.setAttribute("placeholder", "Que tipo de papas desea");
    tipo.setAttribute("class","form-control mb-3 w-75 mx-auto");

    let boton = document.createElement("button");
    boton.setAttribute("class","mb-2 btn btn-success mx-auto");
    boton.innerText = "Enviar";

    let clase = document.getElementById("tipo-de-ensalada")
    clase.classList.add("d-none");

    papas.append(texto);
    papas.append(image);
    papas.append(tipo);
    papas.append(boton);
    formulario.append(papas);
    
}

//nota: falta reducir el codigo