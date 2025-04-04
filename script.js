document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;

    if (username.trim() === "") {
        document.getElementById("message").textContent = "Por favor, ingresa tu usuario.";
        return;
    }

    // URL del Web App de Google Sheets (cambia esto por tu propia URL)
    var scriptURL = "https://script.google.com/macros/s/AKfycbyzVCu0L6fxqD3i7LTytangOVhZlgrpuy3E6hkWgoEhOt864Xr8p7B0Lei4zm_aEpIr/exec";
    
    var formData = new FormData();
    formData.append("username", username);

    fetch(scriptURL, { method: "POST", body: formData })
        .then(response => response.text())
        .then(data => {
            document.getElementById("message").textContent = "Tu solicitud ha sido enviada. Revisa tu DM.";
            document.getElementById("username").value = "";
        })
        .catch(error => {
            document.getElementById("message").textContent = "Hubo un error. Intenta de nuevo.";
        });
});