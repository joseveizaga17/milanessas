function siguiente_pan(){
    let formulario = document.getElementById("form-sandwich");

    let carne = document.createElement("div");
    carne.setAttribute("id", "tipo-de-carne");

    let texto = document.createElement("label");
    texto.setAttribute("for", "carne");
    texto.innerText = 'Que tipo de carne :'

    let image = document.createElement("img");
    image.setAttribute("src", "https://dthezntil550i.cloudfront.net/po/latest/po1807080447316790001907598/1280_960/c13f97a7-8dd1-4ab4-89b3-33f1b34b466a.png");

    let tipo = document.createElement("input");
    tipo.setAttribute("type", "text");
    tipo.setAttribute("id", "carne");
    tipo.setAttribute("placeholder", "tipo de carne");

    let boton = document.createElement("button");
    boton.setAttribute("type", "button");
    boton.innerText = "Siguiente";
    boton.onclick = function(){siguiente_carne()};

    let clase = document.getElementById("tipo-de-pan")
    clase.classList.add("ocultar");

    carne.append(texto);
    carne.append(image);
    carne.append(tipo);
    carne.append(boton);
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
    image.setAttribute("src", "https://dthezntil550i.cloudfront.net/po/latest/po1807080447316790001907598/1280_960/c13f97a7-8dd1-4ab4-89b3-33f1b34b466a.png");

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
    image.setAttribute("src", "https://dthezntil550i.cloudfront.net/po/latest/po1807080447316790001907598/1280_960/c13f97a7-8dd1-4ab4-89b3-33f1b34b466a.png");

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