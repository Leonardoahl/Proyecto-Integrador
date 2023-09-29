/**
 * @author Perry Code
 * @version 0.0.1
 * Post with backend comunication
 */

getPostsApi();

// Función para formatear la fecha
function formatDate(dateString) {
  const options = { year: "numeric", month: "numeric", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

async function postDisplayInnerHTML(postDataJason) {
  console.log(postDataJason);
  // Crea un nuevo elemento div con las clases y atributos necesarios
  const divRow = document.createElement("div");
  divRow.className = "row mt-1 justify-content-evenly";

  // Crea la primera columna para la imagen de perfil
  const divUserPhoto = document.createElement("div");
  divUserPhoto.className = "col-md-1";
  divUserPhoto.id = "userPhoto";

  // Crea la estructura para la imagen de perfil
  const picture = document.createElement("picture");
  const img = document.createElement("img");
  img.src = postDataJason.user.profilepic;
  img.className = "img-fluid rounded row d-block";
  img.width = 50;
  picture.appendChild(img);
  divUserPhoto.appendChild(picture);

  // Crea la segunda columna para el cuerpo del post
  const divPostBody = document.createElement("div");
  divPostBody.className = "col-md-7 mb-1 border-bottom border-top";
  divPostBody.id = "postBody";

  // Crea el contenido interno de la segunda columna
  const postId = document.createElement("div");
  postId.className = "visually-hidden";
  postId.id = "postId";
  postId.textContent = "id del post debe estar oculto visualmente";

  const titlePost = document.createElement("h3");
  titlePost.className = "fw-bold";
  titlePost.textContent = postDataJason.title;

  const postDate = document.createElement("p");
  postDate.id = "postDate";
  postDate.textContent = formatDate(postDataJason.publicationdate);

  const postContent = document.createElement("p");
  postContent.id = "postContent";
  postContent.textContent = postDataJason.content;

  /* const hashtag = document.createElement("span");
  hashtag.className = "badge text-bg-primary";
  hashtag.textContent = postDataJason.hashtag.name; */

  divPostBody.appendChild(postId);
  divPostBody.appendChild(titlePost);
  divPostBody.appendChild(postDate);
  divPostBody.appendChild(postContent);
/*   divPostBody.appendChild(hashtag); */

  // Crea la tercera columna para los botones de likes y comentarios
  const divButtons = document.createElement("div");
  divButtons.className = "col-md-2 text-center";

  const postLikes = document.createElement("button");
  postLikes.className = "btn btn-primary btn-sm bi bi-heart";
  postLikes.id = "postLikes";
  postLikes.textContent = postDataJason.likes;

  const postComments = document.createElement("button");
  postComments.className = "btn btn-secondary btn-sm";
  postComments.id = "postComments";
  postComments.textContent = "Comentarios";

  divButtons.appendChild(postLikes);
  divButtons.appendChild(postComments);

  // Agrega las tres columnas al divRow
  divRow.appendChild(divUserPhoto);
  divRow.appendChild(divPostBody);
  divRow.appendChild(divButtons);

  // Inserta el elemento divRow en el documento (en este ejemplo, dentro de un contenedor con id "contenedor")
  const postSectionAtPage = document.getElementById("postContent");
  postSectionAtPage.appendChild(divRow);
}

/**
 * @function  getPostsApi()  
 */

function getPostsApi() {
  document.addEventListener("DOMContentLoaded", async () => {
    //get
    const url = "https://pering.onrender.com/posts";
    const data = await fetch(url);
    const postArray = await data.json();
    // console.log(dataxd);

    postArray.reverse().forEach((element) => {
      postDisplayInnerHTML(element);
    });
  });
}

/**
 * @function  Evento  capturamos  objeto para mandarlo en POST
 */
const formInPage = document.forms["formularioDeProyecto"];

formInPage.addEventListener("submit", async (event) => {
  // seccionDePublicaciones.postDisplayInnerHTML="";
  console.log("xd");
  event.preventDefault();
  const newPost = crearPublicacion(
    formInPage.elements["tituloProyecto"].value,
    formInPage.elements["descripcion"].value,
    1,
    1
  );

  const headers = new Headers();
  const url = "https://pering.onrender.com/posts";
  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  headers.append("Origin", "https://pering.onrender.com");

  const res = await fetch(url, {
    mode: "cors",
    method: "POST",
    headers: headers,
    body: JSON.stringify(newPost),
  });

  console.log(newPost);

  const result = await res.json();
  window.location.reload();

  getPostsApi();
});



/**
 * @function  crearPublicacion() Creamos objeto para mandarlo en POST
 */

function crearPublicacion(title, content, userId, hashtagId) {
  const currentDate = new Date().toISOString();

  const publicacion = {
    publicationdate: currentDate,
    title: title,
    content: content,
    likes: 0, // Inicializamos los "likes" en 0
    user: {
      id: userId,
    }
  };

  return publicacion;
}

/**
 * FUNCIONES DE REDIRECCION A PAGINA DE PROYECTOS
 */
const content = document.getElementById("postContent");

document.addEventListener("DOMContentLoaded", async () => {
 // content.style.cursor = "pointer";
  
});

/**
 * Selecciona que tipo de mensaje y alerta sera mostrado y solo hay 3 casos
 * @param {string} alerta que representara 3 casos posible donde el usuario sea invalido o password o todo sea correcto
 * @returns {string} devulve el segmento de codigo que se selecciono para inyectar al HTML
 */

const elementosSeleccionados = [];
const selectedItemsDiv = document.getElementById("searchSelections");

// Obtén todos los elementos con la clase "badge"
const elementosBadge = document.querySelectorAll(".badge");

// Agrega un manejador de clic a cada elemento "badge"
elementosBadge.forEach((elemento) => {
  elemento.addEventListener("click", () => {
    const elementoContenido = elemento.textContent;

    // Verifica si el elemento ya está en el array
    const index = elementosSeleccionados.indexOf(elementoContenido);

    if (index === -1) {
      // Si no está en el array, agrégalo
      elementosSeleccionados.push(elementoContenido);
    } else {
      // Si ya está en el array, quítalo
      elementosSeleccionados.splice(index, 1);
    }

    // Actualiza el contenido del div "selectedItems"
    actualizarElementosSeleccionados();
  });
});

function actualizarElementosSeleccionados() {
  // Borra el contenido actual del div "selectedItems"
  selectedItemsDiv.innerHTML = "";

  // Agrega dinámicamente los elementos seleccionados en una fila
  elementosSeleccionados.forEach((elementoContenido) => {
    const elementoSeleccionado = document.createElement("div");
    elementoSeleccionado.textContent = elementoContenido;
    elementoSeleccionado.classList.add("badge"); // Aplica estilos de badge
    selectedItemsDiv.appendChild(elementoSeleccionado);
  });
}
