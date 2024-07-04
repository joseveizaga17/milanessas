function siguiente_pan(){
    let formulario = document.getElementById("form-sandwich");

    let carne = document.createElement("div");
    carne.classList.add("tipo-de-carne");

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

    let clase = document.getElementById("tipo-de-pan")
    clase.classList.add("ocultar");

    carne.append(texto);
    carne.append(image);
    carne.append(tipo);
    carne.append(boton);
    formulario.append(carne);
    
}