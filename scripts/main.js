var timeSinceRefresh = 0;

setInterval(function() { // Autorefresh the page
    window.location.reload(true); // Force a pull from the server
}, 30 * 1000);

setInterval(function() { // Print when the page was last refreshed
    timeSinceRefresh++;

    if (timeSinceRefresh == 1) {
        $("#refresh-text").text("refreshed " + timeSinceRefresh + " second ago");
    } else {
        $("#refresh-text").text("refreshed " + timeSinceRefresh + " seconds ago");
    }
}, 1000);
