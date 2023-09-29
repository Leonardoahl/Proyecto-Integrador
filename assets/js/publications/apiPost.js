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

function postDisplayInnerHTML(postDataJason) {
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

  const hashtag = document.createElement("span");
  hashtag.className = "badge text-bg-primary";
  hashtag.textContent = postDataJason.hashtag.name;

  divPostBody.appendChild(postId);
  divPostBody.appendChild(titlePost);
  divPostBody.appendChild(postDate);
  divPostBody.appendChild(postContent);
  divPostBody.appendChild(hashtag);

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
  const postSectionAtPage = document.getElementById("newPost");
  postSectionAtPage.appendChild(divRow);
}

/**
 * **************************FUNCION GET
 */

function getPostsApi(){
  document.addEventListener("DOMContentLoaded", async () => {
    //get
    const url = "http://127.0.0.1:8080/posts";
    const data = await fetch(url);
    const postArray = await data.json();
    // console.log(dataxd);
  
    postArray.forEach((element) => {
      postDisplayInnerHTML(element);
    });
  
   
  });
}


////////////////////////POST FORM CAPTURE DATA/////////////////////

const formInPage = document.forms["formularioDeProyecto"];

formInPage.addEventListener("submit", (event) => {
  event.preventDefault();
  const newPost = crearPublicacion(
    formInPage.elements["tituloProyecto"].value,
    formInPage.elements["descripcion"].value,
    1,
    1
  );
    
  
  async (newPost) => {
    const headers = new Headers();
    const url = "http://127.0.0.1:8080/posts";
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    headers.append("Origin", "http://127.0.0.1:8080");

    const res = await fetch(url, {
      mode: "cors",
      method: "POST",
      headers: headers,
      body: JSON.stringify(newPost),
      
    }
    );
    console.log(newPost);

    const result = await res.json();
    
  };

  //getPostsApi();
});

////////////////////////POST FORM CAPTURE DATA   ENDING/////////////////////

///////////////////////////////////////// constructores de un post nuevo

function crearPublicacion(title, content, userId, hashtagId) {
  const currentDate = new Date().toISOString();

  const publicacion = {
    publicationdate: currentDate,
    title: title,
    content: content,
    likes: 0, // Inicializamos los "likes" en 0
    user: {
      id: userId,
    },
    hashtag: {
      id: hashtagId,
    },
  };

  return publicacion;
}

// ///////////////////////////////fin de constructore4s de post nuevl
