const jmeno = document.getElementById("jmeno").value;
const email = document.getElementById("email").value;
const zprava = document.getElementById("zprava").value;

window.open("mailto:jacobvideos34@gmail.com?subject=Dotazník%20-%20"+jmeno+"&body="+zprava)