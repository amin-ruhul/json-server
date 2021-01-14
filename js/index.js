// javascript for index.html

const container = document.querySelector(".blogs");

const renderData = async () => {
  let url = "http://localhost:3000/posts";

  const response = await fetch(url);

  const posts = await response.json();

  console.log(posts);

  let template = "";

  posts.forEach((post) => {
    template += `
      <div class = "post">
            <h2>${post.title}</h2>
            <p><small>${post.likes} likes</small></p>
            <p>${post.body.slice(0, 200)}</p>
            <a href="/details.html">read more...</a>   
      </div>
      
      `;
  });

  container.innerHTML = template;
};

window.addEventListener("DOMContentLoaded", () => renderData());
