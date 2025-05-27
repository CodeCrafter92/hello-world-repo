// Example of a simple interactivity feature like a form validation

document.querySelector("form").addEventListener("submit", function(event) {
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;

  if (!name || !email || !message) {
    event.preventDefault();
    alert("Please fill in all the fields!");
  }
});
