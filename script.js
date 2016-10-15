window.onload = function() {
    var date = new Date();
    document.getElementById("greeting").innerHTML = getGreeting(date);
}

function getGreeting(date) {
    return "<p>The time is now: " + date.toTimeString() + "</p>";
}

