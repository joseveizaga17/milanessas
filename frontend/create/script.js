function siguiente_pan(){
    let formulario = document.getElementById("form-sandwich");


    //Creando un div con un id
    let carne = document.createElement("div");
    carne.setAttribute("id", "tipo-de-carne");

    //Creando un label
    let texto = document.createElement("label");
    texto.setAttribute("for", "carne");
    texto.innerText = 'Que tipo de carne :'

    //Creando una imagen
    let image = document.createElement("img");
    image.setAttribute("src", "https://arjosimarprod.vteximg.com.br/arquivos/ids/155753-1000-1000/milanesa-pollo-frita-kg-1-7113.jpg?v=637378633665430000");

    //Haciendo un input tipo texto con id
    let tipo = document.createElement("input");
    tipo.setAttribute("type", "text");
    tipo.setAttribute("id", "carne");
    tipo.setAttribute("placeholder", "tipo de carne");

    //creando un boton diciendo "siguiente"
    let boton = document.createElement("button");
    boton.setAttribute("type", "button");
    boton.innerText = "Siguiente";
    boton.onclick = function(){siguiente_carne()};

    //aqui es como escondo el div de pan
    let clase = document.getElementById("tipo-de-pan")
    clase.classList.add("ocultar");

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

    let texto = document.createElement("label");
    texto.setAttribute("for", "ensalada");
    texto.innerText = 'Que tipo de ensalada :'

    let image = document.createElement("img");
    image.setAttribute("src", "https://cdn0.recetasgratis.net/es/posts/1/7/7/ensalada_de_apio_tomate_y_aguacate_60771_orig.jpg");

    let tipo = document.createElement("input");
    tipo.setAttribute("type", "text");
    tipo.setAttribute("id", "ensalada");
    tipo.setAttribute("placeholder", "tipo de ensalada");

    let boton = document.createElement("button");
    boton.setAttribute("type", "button");
    boton.innerText = "Siguiente";
    boton.onclick = function(){siguiente_ensalada()};

    let clase = document.getElementById("tipo-de-carne")
    clase.classList.add("ocultar");

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

    let texto = document.createElement("label");
    texto.setAttribute("for", "papas");
    texto.innerText = 'Que tipo de papas :'

    let image = document.createElement("img");
    image.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDnT_dO-xu7x1jlb5l3dvR641tcnieqlgF3w&s");

    let tipo = document.createElement("input");
    tipo.setAttribute("type", "text");
    tipo.setAttribute("id", "papas");
    tipo.setAttribute("placeholder", "tipo de papas");

    let boton = document.createElement("button");
    boton.innerText = "Enviar";

    let clase = document.getElementById("tipo-de-ensalada")
    clase.classList.add("ocultar");

    papas.append(texto);
    papas.append(image);
    papas.append(tipo);
    papas.append(boton);
    formulario.append(papas);
    
}

//nota: falta reducir el codigo