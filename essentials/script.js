      window.onload = function() {
        var overlay = document.getElementById('overlay');
        var opacity = 1;
        var interval = setInterval(function() {
            console.log('overlay loaded');
            opacity -= 0.01;
            // overlay.style.backgroundColor = 'rgba(0, 0, 0, ' + opacity + ')'; // Set the background color to a darker opacity
          if (opacity <= 0.5) {
            clearInterval(interval); // Stop the interval once the desired opacity is reached
          }
        }, 20); // Change the opacity every 20 milliseconds
      }