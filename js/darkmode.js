var body = document.body;
var btn = document.getElementById("modebut");
var browserColorScheme = window.matchMedia("(prefers-color-scheme: dark)");

btn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (btn.textContent === "Dark Mode") {
    btn.textContent = "Light Mode";
  } else {
    btn.textContent = "Dark Mode";
  }
});

if (browserColorScheme.matches) {
  body.classList.toggle("dark-mode");
  btn.textContent = "Light Mode";
}