document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Validar el formulario y crear la cuenta del usuario
  if (username && email && password) {
    alert("Cuenta creada exitosamente");

    // Redirigir a la página de inicio del blog
    window.location.href = "/pagina de inicio/index.html";
  } else {
    alert("Por favor, completa todos los campos.");
  }
});
