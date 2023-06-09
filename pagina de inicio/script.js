// Obtener todos los botones de "Me gusta"
const likeButtons = document.querySelectorAll('.like-btn');

// Agregar el evento clic a cada botón de "Me gusta"
likeButtons.forEach(likeBtn => {
  likeBtn.addEventListener('click', () => {
    toggleLike(likeBtn);
  });
});

// Función para alternar el estado de "Me gusta" y cambiar el texto del botón
function toggleLike(likeBtn) {
  likeBtn.classList.toggle('liked');
  if (likeBtn.classList.contains('liked')) {
    likeBtn.textContent = 'Me encanta';
  } else {
    likeBtn.textContent = 'Me gusta';
  }
}

// Obtener todos los botones de "Comentar"
const commentButtons = document.querySelectorAll('.comment-btn');

// Agregar el evento clic a cada botón de "Comentar"
commentButtons.forEach(commentBtn => {
  commentBtn.addEventListener('click', () => {
    toggleCommentForm(commentBtn);
  });
});

// Función para alternar la visibilidad del formulario de comentarios
function toggleCommentForm(commentBtn) {
  const commentForm = commentBtn.nextElementSibling;
  commentForm.style.display = commentForm.style.display === 'none' ? 'block' : 'none';
}