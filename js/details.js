// javascript for details.html

const container = document.querySelector(".details");
const button = document.querySelector(".delete-btn");

const id = new URLSearchParams(window.location.search).get("id");

const renderDetails = async () => {
  const response = await fetch("http://localhost:3000/posts/" + id);
  const post = await response.json();

  const template = `
        <h2>${post.title}</h2>
        <p><small>${post.likes} likes</small></p>
        <p>${post.body}</p>
  `;

  container.innerHTML = template;
};

window.addEventListener("DOMContentLoaded", () => renderDetails());

const deletePost = async (e) => {
  e.preventDefault();
  await fetch("http://localhost:3000/posts/" + id, {
    method: "DELETE",
  });

  window.location.replace("../index.html");
};

button.addEventListener("click", deletePost);
