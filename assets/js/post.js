/**
 * @author Perry Code
 * @version 0.0.1
 *
 */










function addPostSection(post) {
  let text = "";
  for (let i = 0; i < post.post.length; i++) {
    text += `
        <div class="row" id="user">
              <div class="col-lg-1 col-md-2 col-sm-1 col-xs-1">
                <img
                  class="img-thumbnail rounded float-start"
                  src='${post.post[i].img}'
                  alt="user profile thumbnail"
                  width="90"
                />
              </div>
              <div class="col-lg-11 col-md-10 col-sm-11 col-xs-11">
                <h2 class="row" id="userId">
                  <strong>@${post.post[i].name}</strong>
                </h2>
                <div class="row" id="hashtag">
                  <label>${post.post[i].trend}</label>
                </div>
              </div>
            </div>
            <div class="row" id="content">
              <p>
                ${post.post[i].postContent}
              </p>
            </div>
            <div class="row" id="info">
              <div id="interactios">
                <button class="btn btn-secondary btn-xs btn-custom-transparent">
                    ${post.post[i].noLike} <img src="../img/corazon.png" width="30" />
                </button>

                <button class="btn btn-secondary btn-xs btn-custom-transparent">
                    ${post.post[i].noComments}
                  <img
                    class="img-fluid"
                    src="../img/comentarios.png"
                    width="30"
                  />
                </button>
              </div>
            </div>
          </div>
        `;
  }
  localStorage.setItem("postData", JSON.stringify(post.post));
  return text;
}






// Create Post Handler

const projects = document.getElementById("publications");
const form = document.forms["formularioDeProyecto"];

form.addEventListener("submit",(event) => {
  event.preventDefault();

  // Get the textarea element by its id
  const textarea = document.getElementById("descripcion");

  // Retrieve the data from the textarea using the value property
  const textData = textarea.value;
  
  // validamos que hayan hashtags en el post
  //if (validateHashtagsPost(textData)) {
  // Aquí puedes realizar otras acciones, como enviar el objeto a un servidor, etc.
  const newPost = {
    // id: postManager.getCurrentId() + 1,
    title: form.elements["tituloProyecto"].value,
    description: form.elements["descripcion"].value,
    trend: "trend",
  };
  console.log(newPost)
  projects.innerHTML = addPostSection(postManager);
  
}
);

/**
 *
 * Funcion que recibe el texto del proyecto y analiza los hashtag , si no encuentra uno
 * emite una advertencia
 *
 * */

function validateHashtagsPost(data) {
  // busqueda global con expresion regular de hashtags y se guardan en un string
  coincidence = data.match(/#[a-z]+/gi);
  //si es un string vacio , significa que no tiene hashtags y necesita agregarlos
  if (coincidence == null) {
    projects.innerHTML = `
  <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <em>Faltan hastags!</em> debes agregar al menos un hasthag de lenguaje para publicar
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
`;
    return false;
  } else {
    return true;
  }
}


// const content = document.getElementById("postBody");
// content.style.cursor = "pointer";
// content.onclick = () => {
//   window.location = "project_page.html";
// };


