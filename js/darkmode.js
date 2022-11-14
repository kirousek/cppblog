const toggleSwitch = document.getElementById("checkbox");
const currentTheme = sessionStorage.getItem("theme");
const browserTheme = window.matchMedia("(prefers-color-scheme: dark)");

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
  if (event.target.checked) {
    document.documentElement.setAttribute("color-theme", "dark");
    sessionStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("color-theme", "light");
    sessionStorage.setItem("theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);
