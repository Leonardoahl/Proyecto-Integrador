
/**
 * @author Perry Code
 * @version 0.0.1
 * Post with backend comunication
 */


  // const postDataJason = {
  //   postId: 2,
  //   publicationdate: "2023-09-28T22:13:05.000+00:00",
  //   title: null,
  //   content:
  //     "Estoy interesado en encontrar programadores recién egresados con gran interés en crecer profesionalmente y comenzar un camino como freelancer, principalmente con enfoque a fullstack en desarrollo web.",
  //   likes: 1,
  //   user: {
  //     id: 2,
  //     username: "Usuario2",
  //     firstname: "María",
  //     lastname: "González",
  //     email: "maria@example.com",
  //     password: "contraseña2",
  //     profilepic:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP2O7jVvsiu6VAzLenct84ihy4L0xdHn4Omg&usqp=CAU",
  //     description: "Descripción de Usuario2",
  //     registerDate: "2023-09-18T06:00:00.000+00:00",
  //   },
  //   hashtag: { id: 8, name: "PHP" },
  // };

// post post

// {

//   "publicationdate": "2023-09-28T22:13:05.000+00:00",
//   "title": "mi primer post",
//   "content": "Estoy interesado en encontrar programadores recién egresados con gran interés en crecer profesionalmente y comenzar un camino como freelancer, principalmente con enfoque a fullstack en desarrollo web.",
//   "likes": 1,
//   "user": {
//       "id": 2

//   },
//   "hashtag": {
//       "id": 8

//   }
// }

// Función para formatear la fecha
function formatDate(dateString) {
  const options = { year: "numeric", month: "numeric", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
}




function postCreator(postDataJason) {
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




//--------------------------------------------------------------------------------------
const inputID = "formularioDeProyecto";

const form = document.getElementById(inputID);

form.addEventListener("submit", (event) => {
 console.log("boton apretado")
  event.preventDefault();

  // Get the textarea element by its id
  const titulo = document.getElementById("title");
  const descripcion = document.getElementById("descripcion");

  // Retrieve the data from the textarea using the value property
  const descriptionData = descripcion.value;
  const tituloData=titulo.value;
  console.log(tituloData);

  // validamos que hayan hashtags en el post
  //if (validateHashtagsPost(textData)) {
  // Aquí puedes realizar otras acciones, como enviar el objeto a un servidor, etc.
  const newPost = {
    id: postManager.getCurrentId() + 1,
    name: "ana",
    img: "../img/perryXd.png",
    noLike: 0,
    noComments: 0,
    postContent: textData,
    postImgs: ["/assets/img/placeholder.png", "/assets/img/placeholder.png"],
    trend: "#PatronaSubemeElSueldo",
  };

  postManager.addPost(newPost);
  projects.innerHTML = addPostSection(postManager);
  //}
});



//--------------------------------------------------------------------------------------






document.addEventListener("DOMContentLoaded", async () => {
  //get
  const url = "http://127.0.0.1:8080/posts";
  const data = await fetch(url);
  const postArray= await data.json();
  // console.log(dataxd);

  postArray.forEach(element => {
    postCreator(element);
  });

  //post

  // const user = {
  //   username: "alfredogodofredo",
  //   firstname: "leonardo",
  //   email: "fred99@gmail.com",
  // };

  // console.log(JSON.stringify(user));
});

// const createUserForm = document.forms["testing-post"];

// createUserForm.addEventListener("submit", async (e) => {
//   e.preventDefault();

//   const user = {
//     username: createUserForm.elements["username-post"].value,
//     firstname: createUserForm.elements["name-post"].value,
//     email: createUserForm.elements["email-post"].value,
//   };

//   const headers = new Headers();

//   const url = "http://127.0.0.1:8080/users";
//   headers.append("Content-Type", "application/json");
//   headers.append("Accept", "application/json");
//   headers.append("Origin", "http://127.0.0.1:8080");

//   const res = await fetch(url, {
//     mode: "cors",
//     method: "POST",
//     headers: headers,
//     body: JSON.stringify(user),
//   });

//   const result = await res.json();
//   console.log(result);
// });
