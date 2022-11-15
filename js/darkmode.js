const toggleSwitch = document.getElementById("checkbox");
const currentTheme = sessionStorage.getItem("theme");
const browserTheme = window.matchMedia("(prefers-color-scheme: dark)");
var clicks = 0;

if (currentTheme) {
  document.documentElement.setAttribute("color-theme", currentTheme);
  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
} else if (browserTheme.matches) {
  document.documentElement.setAttribute("color-theme", "dark");
  toggleSwitch.checked = true;
}

function switchTheme(event) {
  clicks += 1;
  if (clicks === 10) {
    document.documentElement.setAttribute("color-theme", "pink");
    sessionStorage.setItem("theme", "pink");
    clicks = 0;
  } else if (event.target.checked) {
    document.documentElement.setAttribute("color-theme", "dark");
    sessionStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("color-theme", "light");
    sessionStorage.setItem("theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);
