// javascript for index.html

const container = document.querySelector(".blogs");
//const form = document.querySelector(".search");
const searchField = document.querySelector(".searchBox");

const renderData = async (term) => {
  let url = "http://localhost:3000/posts";
  if (term) {
    console.log(term);
    url += `?&q=${term}`;
    console.log(url);
  }

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
            <a href="/details.html?id=${post.id}">read more...</a>   
      </div>
      
      `;
  });

  container.innerHTML = template;
};

searchField.addEventListener("change", (e) => {
  e.preventDefault();
  //const term = searchField.value;
  renderData(searchField.value);
});

window.addEventListener("DOMContentLoaded", () => renderData());
