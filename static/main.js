window.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch("/api/users");
  const data = await response.json();
  renderUsers(data);
});

let users = [];
let sandwiches = [];
let isEditing = false;
let userID = null;

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
  tableUsers.innerHTML = "";
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
