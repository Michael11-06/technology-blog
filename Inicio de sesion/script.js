// Obtenemos los elementos del formulario de inicio de sesión y el formulario de registro
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");

// Obtenemos los elementos de enlace para cambiar entre inicio de sesión y registro
const loginLink = document.getElementById("login-link");
const signupLink = document.getElementById("signup-link");

// Mostramos el formulario de inicio de sesión y ocultamos el formulario de registro
function showLoginForm() {
  loginForm.style.display = "block";
  signupForm.style.display = "none";
}

// Mostramos el formulario de registro y ocultamos el formulario de inicio de sesión
function showSignupForm() {
  loginForm.style.display = "none";
  signupForm.style.display = "block";
}

// Escuchamos el evento submit del formulario de inicio de sesión
loginForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Evitamos que se envíe el formulario

  // Obtenemos los valores de usuario y contraseña
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Aquí puedes realizar la lógica de validación de inicio de sesión

  // Redirigimos a la página principal si el inicio de sesión es exitoso
  if (username === "admin" && password === "admin123") {
    window.location.href = "/pagina de inicio/index.html";
  }
});



// Cambiamos al formulario de registro al hacer clic en el enlace correspondiente
signupLink.addEventListener("click", function(event) {
  event.preventDefault();
  showSignupForm();
});

// Mostramos inicialmente el formulario de inicio de sesión
showLoginForm();


