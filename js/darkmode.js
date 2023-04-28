const toggleSwitch = document.getElementById("checkbox");
const currentTheme = sessionStorage.getItem("theme");
const browserTheme = window.matchMedia("(prefers-color-scheme: dark)");

var clicks = 0;

// Sets color scheme based on default browser settings
function setDefault() {

  if (currentTheme) {
    console.log("Color scheme set from storage")
    document.documentElement.setAttribute("color-theme", currentTheme);

    if (currentTheme === "dark") {
      toggleSwitch.checked = true;

    }

  } else if (browserTheme.matches) {
    document.documentElement.setAttribute("color-theme", "dark");
    toggleSwitch.checked = true;

  }

}

// Sets dark color scheme
function setDark() {
  document.documentElement.setAttribute("color-theme", "dark");
  sessionStorage.setItem("theme", "dark");

}

// Sets light color scheme
function setLight() {
  document.documentElement.setAttribute("color-theme", "light");
  sessionStorage.setItem("theme", "light");

}

// Sets secret color scheme
function setPink() {
  document.documentElement.setAttribute("color-theme", "pink");
  sessionStorage.setItem("theme", "pink");

}

// Changes color schemes on click
function switchTheme(event) {
  clicks += 1;

  if (clicks === 10) {
    setPink();
    console.log("Pink theme, clicks: " + clicks)
    clicks = 0;

  } else if (event.target.checked) {
    console.log("Dark theme, clicks: " + clicks)
    setDark();

  } else {
    console.log("Light theme, clicks: " + clicks)
    setLight();

  }

}

setDefault();
toggleSwitch.addEventListener("change", switchTheme, false);
