var body = document.body;
var btn = document.getElementById("modebut");

btn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (btn.textContent === "Dark Mode") {
    btn.textContent = "Light Mode";
  } else {
    btn.textContent = "Dark Mode";
  }
});
