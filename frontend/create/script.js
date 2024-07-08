
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
    boton1.innerText = "Milanesa de Carne";
    boton1.onclick = function(){siguiente_milanesa()};

    let boton2 = document.createElement("button");
    boton2.setAttribute("type", "button");
    boton2.setAttribute("class","btn btn-outline-dark");
    boton2.innerText = "Milanesa de Pollo";
    boton2.onclick = function(){siguiente_milanesa()};

    let boton3 = document.createElement("button");
    boton3.setAttribute("type", "button");
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
    boton1.setAttribute("class","btn btn-outline-dark");
    boton1.innerText = "Frita";
    boton1.onclick = function(){siguiente_coccion()};

    let boton2 = document.createElement("button");
    boton2.setAttribute("type", "button");
    boton2.setAttribute("class","btn btn-outline-dark");
    boton2.innerText = "Horno";
    boton2.onclick = function(){siguiente_coccion()};

    let boton3 = document.createElement("button");
    boton3.setAttribute("type", "button");
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
    boton1.setAttribute("class","btn btn-outline-dark");
    boton1.innerText = "Lechuga";
    boton1.onclick = function(){siguiente_papas()};

    let boton2 = document.createElement("button");
    boton2.setAttribute("type", "button");
    boton2.setAttribute("class","btn btn-outline-dark");
    boton2.innerText = "Tomate";
    boton2.onclick = function(){siguiente_papas()};

    let boton3 = document.createElement("button");
    boton3.setAttribute("type", "button");
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
    boton1.setAttribute("type", "submit");
    boton1.setAttribute("class","btn btn-outline-dark");
    boton1.innerText = "Papas Fritas";

    let boton2 = document.createElement("button");
    boton2.setAttribute("type", "submit");
    boton2.setAttribute("class","btn btn-outline-dark");
    boton2.innerText = "Papas al horno";


    let boton3 = document.createElement("button");
    boton3.setAttribute("type", "submit");
    boton3.setAttribute("class","btn btn-outline-dark");
    boton3.innerText = "Pure";

    let clase = document.getElementById("tipo-de-ensalada")
    clase.classList.add("d-none");

    papas.append(boton1);
    papas.append(boton2);
    papas.append(boton3);

    formulario.append(papas);
}


//nota: falta reducir el codigo