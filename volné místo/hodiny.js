function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var timeString = hours + ':' + minutes + ':' + seconds;
    console.log(timeString);
}

setInterval(updateClock, 1000);