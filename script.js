document.addEventListener("DOMContentLoaded", function() {
    // Reference to the intro background div
    var introBackground = document.getElementById("intro-background");
    var heroSection = document.getElementById("hero");

    // Wait for 3 seconds (duration of the zoom-in animation) and then hide the intro
    setTimeout(function() {
        introBackground.style.display = "none"; // Hide the intro section
        heroSection.style.opacity = "1"; // Slowly show content
    }, 3000); // 3 seconds matches the duration of the CSS animation
});

document.addEventListener("DOMContentLoaded", function() {
    const words = ["Welcome   ", "Resume", "CV"]; // Words
    let currentWordIndex = 0;
    let currentText = "";
    let isDeleting = false;
    let typingSpeed = 200;
    let pauseBetweenWords = 2000;

    const dynamicTextElement = document.getElementById("dynamic-text");

    function type() {
        const fullText = words[currentWordIndex];

        // Ako brišemo tekst
        if (isDeleting) {
            currentText = fullText.substring(0, currentText.length - 1);
        } else {
            currentText = fullText.substring(0, currentText.length + 1);
        }

        // Showing current text
        dynamicTextElement.textContent = currentText;

        
        let typingDelay = isDeleting ? typingSpeed / 2 : typingSpeed;

        // If word is fully writed
        if (!isDeleting && currentText === fullText) {
            // Pauza pre nego što počne brisanje
            typingDelay = pauseBetweenWords;
            isDeleting = true;
        } 
        // IF word is fully deleted
        else if (isDeleting && currentText === "") {
            isDeleting = false;
            currentWordIndex = (currentWordIndex + 1) % words.length; // Prelazak na sledeću reč
            typingDelay = 500; // Pauza pre nego što počne ispisivanje sledeće reči
        }

        setTimeout(type, typingDelay);
    }

    // Start typing animation 
    type();
});

document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("photo-modal");
    var btn = document.getElementById("see-photo-button");
    var span = document.getElementById("close-photo-modal");
    var modalContent = document.getElementById("profile-pic");

    // When the user clicks the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on the close button (×), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside the modal content, close the modal
    modal.onclick = function(event) {
        if (event.target !== modalContent) {
            modal.style.display = "none";
        }
    }
});


// Back to Top button functionality
document.getElementById("back-to-top").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var menuButton = document.getElementById("menu-button");
    var popupMenu = document.getElementById("popup-menu");

    // Toggle menu on button click
    menuButton.onclick = function() {
        popupMenu.classList.toggle("open");
    }

    // Close the menu if clicking outside the menu
    window.onclick = function(event) {
        if (event.target !== popupMenu && event.target !== menuButton && popupMenu.classList.contains("open")) {
            popupMenu.classList.remove("open");
        }
    }
});