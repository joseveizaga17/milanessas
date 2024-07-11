console.log("test script 2s");
function siguiente_pan() {
  let formulario = document.getElementById("form-sandwich");

  //Creando un div con un id
  let milanesa = document.createElement("div");
  milanesa.setAttribute("id", "tipo-de-milanesa");
  milanesa.setAttribute("class", "d-flex justify-content-evenly my-5");

  //creando un boton diciendo "siguiente"
  let boton1 = document.createElement("button");
  boton1.setAttribute("type", "button");
  boton1.setAttribute("class", "btn btn-outline-dark");
  boton1.setAttribute("name", "milanesa");
  boton1.innerText = "Milanesa de Carne";
  boton1.onclick = function () {
    siguiente_milanesa();
  };

  let boton2 = document.createElement("button");
  boton2.setAttribute("type", "button");
  boton2.setAttribute("class", "btn btn-outline-dark");
  boton2.setAttribute("name", "milanesa");
  boton2.innerText = "Milanesa de Pollo";
  boton2.onclick = function () {
    siguiente_milanesa();
  };

  let boton3 = document.createElement("button");
  boton3.setAttribute("type", "button");
  boton3.setAttribute("name", "milanesa");
  boton3.setAttribute("class", "btn btn-outline-dark");
  boton3.innerText = "Milanesa de Soja";
  boton3.onclick = function () {
    siguiente_milanesa();
  };

  //aqui es como escondo el div de pan
  let clase = document.getElementById("tipo-de-pan");
  clase.classList.add("d-none");

  //aqui añado todo al div
  milanesa.append(boton1);
  milanesa.append(boton2);
  milanesa.append(boton3);

  //y aqui añado todo el div con todo los elementos creados al formulario
  formulario.append(milanesa);
}

function siguiente_milanesa() {
  let formulario = document.getElementById("form-sandwich");

  let coccion = document.createElement("div");
  coccion.setAttribute("id", "tipo-de-coccion");
  coccion.setAttribute("class", "d-flex justify-content-evenly my-5");

  //creando un boton diciendo "siguiente"
  let boton1 = document.createElement("button");
  boton1.setAttribute("type", "button");
  boton1.setAttribute("name", "coccion");
  boton1.setAttribute("class", "btn btn-outline-dark");
  boton1.innerText = "Frita";
  boton1.onclick = function () {
    siguiente_coccion();
  };

  let boton2 = document.createElement("button");
  boton2.setAttribute("type", "button");
  boton2.setAttribute("name", "coccion");
  boton2.setAttribute("class", "btn btn-outline-dark");
  boton2.innerText = "Horno";
  boton2.onclick = function () {
    siguiente_coccion();
  };

  let boton3 = document.createElement("button");
  boton3.setAttribute("type", "button");
  boton3.setAttribute("name", "coccion");
  boton3.setAttribute("class", "btn btn-outline-dark");
  boton3.innerText = "Plancha";
  boton3.onclick = function () {
    siguiente_coccion();
  };

  //aqui es como escondo el div de pan
  let clase = document.getElementById("tipo-de-milanesa");
  clase.classList.add("d-none");

  //aqui añado todo al div
  coccion.append(boton1);
  coccion.append(boton2);
  coccion.append(boton3);

  //y aqui añado todo el div con todo los elementos creados al formulario
  formulario.append(coccion);
}
function siguiente_coccion() {
  let formulario = document.getElementById("form-sandwich");

  let ensalada = document.createElement("div");
  ensalada.setAttribute("id", "tipo-de-ensalada");
  ensalada.setAttribute("class", "d-flex justify-content-evenly my-5");

  let boton1 = document.createElement("button");
  boton1.setAttribute("type", "button");
  boton1.setAttribute("name", "ensalada");
  boton1.setAttribute("class", "btn btn-outline-dark");
  boton1.innerText = "Lechuga";
  boton1.onclick = function () {
    siguiente_papas();
  };

  let boton2 = document.createElement("button");
  boton2.setAttribute("type", "button");
  boton2.setAttribute("name", "ensalada");
  boton2.setAttribute("class", "btn btn-outline-dark");
  boton2.innerText = "Tomate";
  boton2.onclick = function () {
    siguiente_papas();
  };

  let boton3 = document.createElement("button");
  boton3.setAttribute("type", "button");
  boton3.setAttribute("name", "ensalada");
  boton3.setAttribute("class", "btn btn-outline-dark");
  boton3.innerText = "Huevo";
  boton3.onclick = function () {
    siguiente_papas();
  };

  //aqui es como escondo el div de pan
  let clase = document.getElementById("tipo-de-coccion");
  clase.classList.add("d-none");

  ensalada.append(boton1);
  ensalada.append(boton2);
  ensalada.append(boton3);

  formulario.append(ensalada);
}

function siguiente_papas() {
  let formulario = document.getElementById("form-sandwich");

  let papas = document.createElement("div");
  papas.setAttribute("id", "tipo-de-papas");
  papas.setAttribute("class", "d-flex justify-content-evenly my-5");

  let boton1 = document.createElement("button");
  boton1.setAttribute("type", "button");
  boton1.setAttribute("name", "papas");
  boton1.setAttribute("class", "btn btn-outline-dark");
  boton1.innerText = "Papas Fritas";
  boton1.onclick = function () {
    siguiente_formulario();
  };

  let boton2 = document.createElement("button");
  boton2.setAttribute("type", "button");
  boton2.setAttribute("name", "papas");
  boton2.setAttribute("class", "btn btn-outline-dark");
  boton2.innerText = "Papas al horno";
  boton2.onclick = function () {
    siguiente_formulario();
  };

  let boton3 = document.createElement("button");
  boton3.setAttribute("type", "button");
  boton3.setAttribute("name", "papas");
  boton3.setAttribute("class", "btn btn-outline-dark");
  boton3.innerText = "Pure";
  boton3.onclick = function () {
    siguiente_formulario();
  };

  let clase = document.getElementById("tipo-de-ensalada");
  clase.classList.add("d-none");

  papas.append(boton1);
  papas.append(boton2);
  papas.append(boton3);

  formulario.append(papas);
}

function siguiente_formulario() {
  let formulario = document.getElementById("form-sandwich");

  let title = document.getElementById("form-title");
  title.innerText = "Escriba su usuario para confirmar su pedido";

  let Nombre = document.createElement("div");
  Nombre.setAttribute("class", "mb-3 mx-5");

  let Apellido = document.createElement("div");
  Apellido.setAttribute("class", "mb-3 mx-5");

  let n_label = document.createElement("label");
  n_label.setAttribute("for", "nombre");
  n_label.innerText = "Nombre";
  let nombre = document.createElement("input");
  nombre.setAttribute("type", "text");
  nombre.setAttribute("id", "nombre");
  nombre.setAttribute("class", "form-control px-5");

  let a_label = document.createElement("label");
  a_label.setAttribute("for", "apellido");
  a_label.innerText = "Apellido";
  let apellido = document.createElement("input");
  apellido.setAttribute("type", "text");
  apellido.setAttribute("id", "apellido");
  apellido.setAttribute("class", "form-control px-5");

  let boton = document.createElement("input");
  boton.setAttribute("type", "submit");
  boton.setAttribute("class", "ms-5 mb-3 btn btn-success");

  let clase = document.getElementById("tipo-de-papas");
  clase.classList.add("d-none");

  Nombre.append(n_label);
  Nombre.append(nombre);
  Apellido.append(a_label);
  Apellido.append(apellido);

  formulario.append(Nombre);
  formulario.append(Apellido);
  formulario.append(boton);
}

//nota: falta reducir el codigo
