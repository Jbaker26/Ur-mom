/*
Programs the buttons to load pages into the content section of the page.
*/

const content = document.getElementById("content");
const buttons = document.querySelectorAll(".btn");

function loadPage(page) {
  fetch(page)
    .then(response => {
      if (!response.ok) {
        throw new Error("Page not found: " + page);
      }

      return response.text();
    })
    .then(html => {
      content.innerHTML = html;
    })
    .catch(error => {
      content.innerHTML = "<p>Page failed to load.</p>";
      console.error(error);
    });
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    buttons.forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");

    const page = button.dataset.page;
    loadPage(page);
  });
});

// Load home page automatically
loadPage("pages/.html");