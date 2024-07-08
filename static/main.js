window.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch("/api/users");
  const data = await response.json();
  renderUsers(data);
});

window.addEventListener("DOMContentLoaded", async () => {
  const responseSand = await fetch("/api/sandwiches");
  const dataSand = await responseSand.json();
  renderSandwiches(dataSand);
});

let users = [];
let sandwichesArray = [];
let isEditing = false;
let userID = null; // Variable para guardar el id del usuario a editar
let sandID = null; // Variable para guardar el id del sandwich a editar

const sandForm = document.querySelector("#sandForm");

sandForm.addEventListener("submit", async (e) => {
  const pan = sandForm["pan"].value;
  const milanesa = sandForm["milanesa"].value;
  const coccion = sandForm["coccion"].value;
  const ensalada = sandForm["ensalada"].value;
  const papas = sandForm["papas"].value;
  const response = await fetch("/api/sandwiches", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      pan,
      milanesa,
      coccion,
      ensalada,
      papas,
    }),
  });
});

function renderSandwiches(sandwiches) {
  console.log(sandwiches);
  const tableSandwiches = document.querySelector("#tableSandwiches");
  tableSandwiches.innerHTML = "";
  sandwiches.forEach((sanwich) => {
    const tr = document.createElement("tr");
    tr.innerText = `
      <td>${sanwich.pan}</td>
      <td>${sanwich.milanesa}</td>
      <td>${sanwich.coccion}</td>
      <td>${sanwich.ensalada}</td>      
      <td>${sanwich.papas}</td>
    `;
  });
}

const updtTitle = document.querySelector("#formTitle");
const updtBtn = document.querySelector("#btnSub");
const regBtn = document.querySelector("#btnReg");
regBtn.addEventListener("click", () => {
  updtTitle.innerHTML = "Registrarse";
  updtBtn.innerHTML = "Registrarse";
  isEditing = false;
  userForm.reset();
});
const userForm = document.querySelector("#userForm");
userForm.addEventListener("submit", async (e) => {
  const username = userForm["username"].value;
  const email = userForm["email"].value;
  const password = userForm["password"].value;

  if (!isEditing) {
    const response = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });
  } else {
    const response = await fetch(`/api/users/${userID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });
    const updateUser = await response.json();
    users = users.map((user) => {
      if (user.id === updateUser.id) {
        return updateUser;
      }
      return user;
    });
    renderUsers(users);
    isEditing = false;
  }

  const data = await response.json();
  console.log(data);

  userForm.reset();
});

function renderUsers(users) {
  const tableUsers = document.querySelector("#tableUsers");
  users.forEach((user) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${user.username}</td>
      <td>${user.email}</td>
      <td>${user.password}</td>
      <td>
        <button type="button" class="btn btn-danger">Borrar</button>
        <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#register">Actualizar</button>
      </td>
    `;
    const btnDelete = tr.querySelector(".btn-danger");
    const btnUpdate = tr.querySelector(".btn-secondary");
    btnDelete.addEventListener("click", async () => {
      const response = await fetch(`/api/users/${user.id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      users = users.filter((u) => u.id !== data.id);
      renderUsers(users);
    });

    btnUpdate.addEventListener("click", async () => {
      const response = await fetch(`/api/users/${user.id}`);
      const data = await response.json();
      userForm["username"].value = data.username;
      userForm["email"].value = data.email;
      isEditing = true;
      userID = data.id;
      updtTitle.innerHTML = "Actualizar Usuario";
      updtBtn.innerHTML = "Actualizar";
    });
    tableUsers.appendChild(tr);
  });
}
