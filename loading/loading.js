// loading.js

// Function to refresh the loading.html page after a countdown
function refreshPage() {
    var countdown = 10; // Countdown duration in seconds

    var countdownInterval = setInterval(function() {
        document.querySelector('.loader-text').innerHTML = 'Reloading in ' + countdown + ' seconds...';
        countdown--;

        if (countdown < 0) {
            clearInterval(countdownInterval);
            window.location.reload();
        }
    }, 1000); // Update text every 1 second (1000 milliseconds)
}

// Function to open index.html after loading.html loads
function openIndexPage() {
    var indexPage = 'index.html'; // Specify the path to your index.html file

    setTimeout(function() {
        window.location.href = indexPage;
    }, 8000); // 8000 milliseconds (8 seconds)
}

// Call the functions after loading.html loads
window.onload = function() {
    refreshPage();
    openIndexPage();
};
// Function to refresh the loading.html page after a countdown
function refreshPage() {
    var countdown = 10; // Countdown duration in seconds

    var countdownInterval = setInterval(function() {
        document.querySelector('.loader-text').innerHTML = 'Reloading in ' + countdown + ' seconds...';
        countdown--;

        if (countdown < 0) {
            clearInterval(countdownInterval);
            window.location.reload(true); // Reload the page and bypass the cache
        }
    }, 1000); // Update text every 1 second (1000 milliseconds)
}

// Function to open index.html after loading.html loads
function openIndexPage() {
    var indexPage = 'index.html';

    setTimeout(function() {
        window.location.href = indexPage;
    }, 8000); // 8000 milliseconds (8 seconds)
}

// Call the functions after loading.html loads
window.onload = function() {
    refreshPage();
    openIndexPage();
};
// index.js

// Function to refresh the index.html page after a countdown
function refreshIndexPage() {
    var countdown = 15; // Countdown duration in seconds

    var countdownInterval = setInterval(function() {
        console.log('Reloading in ' + countdown + ' seconds...');
        countdown--;

        if (countdown < 0) {
            clearInterval(countdownInterval);
            window.location.reload(true); // Reload the page and bypass the cache
        }
    }, 1000); // Update text every 1 second (1000 milliseconds)
}

// Call the function to refresh the page after index.html loads
window.onload = function() {
    refreshIndexPage();
};

