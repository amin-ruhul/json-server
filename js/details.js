// javascript for details.html

const container = document.querySelector(".details");

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
