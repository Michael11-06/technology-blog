// Variables
var addPostBtn = document.getElementById("add-post-btn");
var newPostForm = document.getElementById("new-post-form");
var postInput = document.getElementById("post-input");
var submitPostBtn = document.getElementById("submit-post-btn");
var postsContainer = document.getElementById("posts-container");

// Mostrar/ocultar formulario de nueva publicación
addPostBtn.addEventListener("click", function () {
  newPostForm.style.display = "block";
});

// Agregar nueva publicación
submitPostBtn.addEventListener("click", function () {
  var postContent = postInput.value;

  if (postContent) {
    var postDiv = document.createElement("div");
    postDiv.classList.add("post");

    var postText = document.createElement("p");
    postText.textContent = postContent;

    var likeBtn = document.createElement("button");
    likeBtn.classList.add("like-btn");
    likeBtn.textContent = "Me gusta";
    likeBtn.addEventListener("click", function () {
      toggleLike(likeBtn);
    });

    var commentBtn = document.createElement("button");
    commentBtn.classList.add("comment-btn");
    commentBtn.textContent = "Comentar";
    commentBtn.addEventListener("click", function () {
      toggleCommentForm(commentBtn);
    });

    var commentForm = document.createElement("div");
    commentForm.classList.add("comment-form");
    commentForm.style.display = "none";

    var authorInput = document.createElement("input");
    authorInput.type = "text";
    authorInput.placeholder = "Tu nombre";

    var dateInput = document.createElement("input");
    dateInput.type = "text";
    dateInput.placeholder = "Fecha (dd/mm/aaaa)";

    var commentInput = document.createElement("input");
    commentInput.type = "text";
    commentInput.placeholder = "Tu comentario";

    var submitCommentBtn = document.createElement("button");
    submitCommentBtn.textContent = "Agregar comentario";
    submitCommentBtn.addEventListener("click", function () {
      addComment(postDiv, authorInput, dateInput, commentInput);
      toggleCommentForm(commentBtn);
    });

    commentForm.appendChild(authorInput);
    commentForm.appendChild(dateInput);
    commentForm.appendChild(commentInput);
    commentForm.appendChild(submitCommentBtn);

    postDiv.appendChild(postText);
    postDiv.appendChild(likeBtn);
    postDiv.appendChild(commentBtn);
    postDiv.appendChild(commentForm);

    postsContainer.appendChild(postDiv);

    // Limpiar el formulario
    postInput.value = "";

    // Ocultar el formulario
    newPostForm.style.display = "none";
  }
});

// Función para dar "Me gusta" a una publicación
function toggleLike(likeBtn) {
  if (likeBtn.textContent === "Me gusta") {
    likeBtn.textContent = "Liked";
  } else {
    likeBtn.textContent = "Me gusta";
  }
}

// Función para mostrar/ocultar formulario de comentario
function toggleCommentForm(commentBtn) {
  var commentForm = commentBtn.nextElementSibling;

  if (commentForm.style.display === "none") {
    commentForm.style.display = "block";
  } else {
    commentForm.style.display = "none";
  }
}

// Función para agregar comentario
function addComment(postDiv, authorInput, dateInput, commentInput) {
  var author = authorInput.value;
  var date = dateInput.value;
  var comment = commentInput.value;

  if (author && date && comment) {
    var commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");

    var commentInfo = document.createElement("p");
    commentInfo.textContent = "Autor: " + author + " - Fecha: " + date;

    var commentText = document.createElement("p");
    commentText.textContent = comment;

    var likeBtn = document.createElement("button");
    likeBtn.textContent = "Me gusta";
    likeBtn.addEventListener("click", function () {
      toggleLike(likeBtn);
    });

    commentDiv.appendChild(commentInfo);
    commentDiv.appendChild(commentText);
    commentDiv.appendChild(likeBtn);

    postDiv.appendChild(commentDiv);

    // Limpiar formulario de comentario
    authorInput.value = "";
    dateInput.value = "";
    commentInput.value = "";
  }
}
// Obtener todas las publicaciones
var articles = document.querySelectorAll('article');

// Iterar sobre cada publicación
articles.forEach(function(article) {
  var likeBtn = article.querySelector('.like-btn');
  var commentBtn = article.querySelector('.comment-btn');
  var commentForm = article.querySelector('.comment-form');

  // Manejar evento de clic en el botón "Me gusta"
  likeBtn.addEventListener('click', function() {
    toggleLike(likeBtn);
  });

  // Manejar evento de clic en el botón "Comentar"
  commentBtn.addEventListener('click', function() {
    toggleCommentForm(commentForm);
  });

  // Manejar evento de clic en el botón "Agregar comentario"
  var submitCommentBtn = article.querySelector('.submit-comment-btn');
  submitCommentBtn.addEventListener('click', function() {
    addComment(article);
  });
});

// Función para alternar el estado de "Me gusta"
function toggleLike(likeBtn) {
  likeBtn.classList.toggle('liked');
}

// Función para mostrar u ocultar el formulario de comentarios
function toggleCommentForm(commentForm) {
  commentForm.style.display = commentForm.style.display === 'none' ? 'block' : 'none';
}

// Función para agregar un comentario
function addComment(article) {
  var authorInput = article.querySelector('.comment-form input:nth-of-type(1)');
  var dateInput = article.querySelector('.comment-form input:nth-of-type(2)');
  var commentInput = article.querySelector('.comment-form input:nth-of-type(3)');

  var author = authorInput.value;
  var date = dateInput.value;
  var comment = commentInput.value;

  var commentDiv = document.createElement('div');
  commentDiv.classList.add('comment');

  var commentInfo = document.createElement('p');
  commentInfo.textContent = 'Autor: ' + author + ' - Fecha: ' + date;

  var commentText = document.createElement('p');
  commentText.textContent = comment;

  commentDiv.appendChild(commentInfo);
  commentDiv.appendChild(commentText);

  article.appendChild(commentDiv);

  // Limpiar formulario de comentario
  authorInput.value = '';
  dateInput.value = '';
  commentInput.value = '';

  // Ocultar formulario de comentarios
  var commentForm = article.querySelector('.comment-form');
  toggleCommentForm(commentForm);
}


// Función para alternar el estado de "Me gusta" y cambiar el texto del botón
function toggleLike(likeBtn) {
    likeBtn.classList.toggle('liked');
    if (likeBtn.classList.contains('liked')) {
      likeBtn.textContent = 'Me encanta';
    } else {
      likeBtn.textContent = 'Me gusta';
    }
  }
  