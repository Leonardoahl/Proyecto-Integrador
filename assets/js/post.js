const projects = document.getElementById("post");

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
                <button class="btn btn-secondary">
                    ${post.post[i].noLike} <img src="../img/corazon.png" width="30" />
                </button>

                <button class="btn btn-secondary">
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

const postManager = new PostsController();

// Create Post Handler
const form = document.getElementById("myForm");

form.addEventListener("submit", event => {
  event.preventDefault();
  
   // Get the textarea element by its id
   const textarea = document.getElementById("projectDescription");

   // Retrieve the data from the textarea using the value property
   const textData = textarea.value;

  // Aquí puedes realizar otras acciones, como enviar el objeto a un servidor, etc.
  const newPost={
    id: postManager.getCurrentId()+1,
    name: "ana",
    img: "/assets/img/perryXd.png",
    noLike: 0,
    noComments: 0,
    postContent:textData,
    postImgs: ["/assets/img/placeholder.png","/assets/img/placeholder.png"],
    trend: "#PatronaSubemeElSueldo"
  }

  postManager.addPost(newPost);
  projects.innerHTML = addPostSection(postManager);
  console.log(postManager);
  
});
