window.open("mailto:jacobvideos34@gmail.com?subject=Dotazník%20-%20"+jmeno+"&body="+zprava)

const form  = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const jmeno = document.getElementById("jmeno").value;
    const email = document.getElementById("email").value;
    const zprava = document.getElementById("feedback").value;

    window.open("mailto:jacobvideos34@gmail.com?subject=Dotazník%20-%20"+jmeno+"&body="+email+"%0A"+zprava, "_blank");

});