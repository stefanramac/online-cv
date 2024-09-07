document.addEventListener("DOMContentLoaded", function() {
    const roles = [
        "WEB DEVELOPER",
        "INTEGRATION DEVELOPER",
        "INTEGRATION ARCHITECT",
        "BACKEND DEVELOPER"
    ];

    let index = 0;
    let dynamicTextElement = document.getElementById("dynamic-text");

    function typeRole() {
        let role = roles[index];
        let currentText = "";
        let letterIndex = 0;

        function typeLetter() {
            if (letterIndex < role.length) {
                currentText += role[letterIndex];
                dynamicTextElement.textContent = currentText;
                letterIndex++;
                setTimeout(typeLetter, 150); // Brzina kucanja
            } else {
                setTimeout(deleteRole, 1500); // Pauza pre brisanja
            }
        }

        function deleteRole() {
            if (letterIndex > 0) {
                currentText = currentText.slice(0, --letterIndex);
                dynamicTextElement.textContent = currentText;
                setTimeout(deleteRole, 100); // Brzina brisanja
            } else {
                index = (index + 1) % roles.length;
                setTimeout(typeRole, 500); // Pauza pre sledećeg kucanja
            }
        }

        typeLetter();
    }

    typeRole(); // Inicira prvi unos
});