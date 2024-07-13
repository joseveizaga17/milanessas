function data_receive(data){

    let content = document.getElementById("list");

    //Aqui es donde creo cada elemento de cada tabla

    for(let index = 0; index < data.length; index++){
      let lista = document.createElement("li");
      lista.setAttribute("class", "list-group-item list-group-item-dark");


      //Titulo y la fecha de creacion dentro de este div
      let header = document.createElement("div");
      header.setAttribute("class","d-flex w-100 justify-content-between");

      let nombre = document.createElement("h5");
      nombre.setAttribute("class", "mb-1");
      nombre.append(data[index].milanesa);

      let fecha = document.createElement("small");
      fecha.setAttribute("class", "text-body-secondary");
      fecha.append(data[index].fecha_creacion);


      // Las demas tablas de milanesas 
      let ingredientes = document.createElement("p");
      ingredientes.setAttribute("class", "mb-1");
      ingredientes.append(`Contiene ${data[index].pan} con ${data[index].milanesa} ${data[index].coccion}, con ${data[index].ensalada} acompañado con ${data[index].papas}`);


      // Boton eliminar y el id del usuario
      let footer = document.createElement("div");
      footer.setAttribute("class", "d-flex w-100 justify-content-between");

      let usuario = document.createElement("small");
      usuario.setAttribute("class", "align-self-center");
      usuario.append(`Usuario ${data[index].usuario_id}`);

      let boton = document.createElement("button");
      boton.setAttribute("class", "btn btn-danger");
      boton.setAttribute("type", "submit");
      boton.onclick = function(){eliminar_sandwich(data[index])};
      boton.innerText = "Eliminar";

        
      //Aqui es donde pongo cada elemento dentro de otro elemento
      header.append(nombre);
      header.append(fecha);

      lista.append(header);
      lista.append(ingredientes);
      
      footer.append(usuario);
      footer.append(boton);

      lista.append(footer);
      content.append(lista);
    }
   
  }

  //De esta forma recargo la pagina
  function delete_response(data){
    window.location.href = window.location.href;
  }

  function handle_error(error){
    console.log("Error", error);
  }

  //esta funcion es donde elimino el sandwich
  function eliminar_sandwich(sand){

    const confirmacion = confirm(`Estas seguro de eliminar el sandwich ${sand.id}?`);
    if(!confirmacion){
      return
    }
    fetch(`http://127.0.0.1:5500/delete/${sand.id}`, 
    { method: "DELETE" })
      .then((res) => res.json())
      .then(delete_response)
      .catch(handle_error);
  }

  
  fetch('http://127.0.0.1:5500/sandwichs')
    .then(response => response.json())
    .then(data_receive)
    .catch(handle_error);

