
function boton1(){
    let formulario = document.getElementById("form-sandwich");

    let pan1 = document.getElementById("pan1").onclick = "";
    let pan2 = document.getElementById("pan2").onclick = "";
    let pan3 = document.getElementById("pan3").onclick = "";

    let boton = document.createElement("button");
    boton.setAttribute("type", "button");
    boton.setAttribute("class", "btn btn-primary ms-4 mb-3");
    boton.setAttribute("id", "boton1");
    boton.innerText = "Siguiente";
    boton.onclick = function(){siguiente1()};

    formulario.append(boton);
}

function siguiente1(){
    let boton1 = document.getElementById("boton1")
    boton1.setAttribute("class", "d-none");

    let pan = document.getElementById("pan");
    pan.setAttribute("class", "d-none");

    let carne = document.getElementById("carne");
    carne.classList.remove("d-none");

    let progress = document.getElementById("progress");
    progress.setAttribute("aria-valuenow", 25);

    let barra = document.getElementById("barra");
    barra.setAttribute("style", "width: 25%")
    barra.innerText = "2 / 5";
}

function boton2(){
    let formulario = document.getElementById("form-sandwich");

    let mila1 = document.getElementById("milanesa1").onclick = "";
    let mila2 = document.getElementById("milanesa2").onclick = "";
    let mila3 = document.getElementById("milanesa3").onclick = "";
    let mila4 = document.getElementById("milanesa4").onclick = "";

    let boton = document.createElement("button");
    boton.setAttribute("type", "button");
    boton.setAttribute("class", "btn btn-primary ms-4 mb-3");
    boton.setAttribute("id", "boton2");
    boton.innerText = "Siguiente";
    boton.onclick = function(){siguiente2()};

    formulario.append(boton);
}

function siguiente2(){
    let boton2 = document.getElementById("boton2")
    boton2.setAttribute("class", "d-none");

    let carne = document.getElementById("carne");
    carne.setAttribute("class", "d-none");

    let coccion = document.getElementById("coccion");
    coccion.classList.remove("d-none");

    let progress = document.getElementById("progress");
    progress.setAttribute("aria-valuenow", 50);

    let barra = document.getElementById("barra");
    barra.setAttribute("style", "width: 50%")
    barra.innerText = "3 / 5";
}

function boton3(){
    let formulario = document.getElementById("form-sandwich");

    let coccion1 = document.getElementById("coccion1").onclick = "";
    let coccion2 = document.getElementById("coccion2").onclick = "";

    let boton = document.createElement("button");
    boton.setAttribute("type", "button");
    boton.setAttribute("class", "btn btn-primary ms-4 mb-3");
    boton.setAttribute("id", "boton3");
    boton.innerText = "Siguiente";
    boton.onclick = function(){siguiente3()};

    formulario.append(boton);
}

function siguiente3(){
    let boton3 = document.getElementById("boton3")
    boton3.setAttribute("class", "d-none");

    let coccion = document.getElementById("coccion");
    coccion.setAttribute("class", "d-none");

    let verdura = document.getElementById("extras");
    verdura.classList.remove("d-none");

    let progress = document.getElementById("progress");
    progress.setAttribute("aria-valuenow", 75);

    let barra = document.getElementById("barra");
    barra.setAttribute("style", "width: 75%")
    barra.innerText = "4 / 5";
}

function boton4(){
    let formulario = document.getElementById("form-sandwich");

    let verdura1 = document.getElementById("extras1").onclick = "";
    let verdura2 = document.getElementById("extras2").onclick = "";
    let verdura3 = document.getElementById("extras3").onclick = "";

    let boton = document.createElement("button");
    boton.setAttribute("type", "button");
    boton.setAttribute("class", "btn btn-primary ms-4 mb-3");
    boton.setAttribute("id", "boton4");
    boton.innerText = "Siguiente";
    boton.onclick = function(){siguiente4()};

    formulario.append(boton);
}

function siguiente4(){
    let boton4 = document.getElementById("boton4")
    boton4.setAttribute("class", "d-none");

    let verdura = document.getElementById("extras");
    verdura.setAttribute("class", "d-none");

    let papas = document.getElementById("papas");
    papas.classList.remove("d-none");

    let progress = document.getElementById("progress");
    progress.setAttribute("aria-valuenow", 100);

    let barra = document.getElementById("barra");
    barra.setAttribute("style", "width: 100%")
    barra.innerText = "5 / 5";
}

function boton5(){
    let formulario = document.getElementById("form-sandwich");

    let papas1 = document.getElementById("papas1").onclick = "";
    let papas2 = document.getElementById("papas2").onclick = "";
    let papas3 = document.getElementById("papas3").onclick = "";

    let boton = document.createElement("button");
    boton.setAttribute("type", "submit");
    boton.setAttribute("class", "btn btn-success ms-4 mb-3");
    boton.innerText = "Crear sandwich";

    formulario.append(boton);
}