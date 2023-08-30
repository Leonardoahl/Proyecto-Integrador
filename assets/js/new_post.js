const projects = document.getElementById("post");

function addPostSection(post){
    let text = "";
    for(let i= 0; i < post.post.length; i++){
        text+= `
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
        `
    }
    localStorage.setItem("postData", JSON.stringify(post.post));
    return text;
}


const postManager = new PostsController();
postManager.addPost(post1);
postManager.addPost(post2);
postManager.addPost(post3);
postManager.addPost(post4);
postManager.addPost(post5);
postManager.addPost(post6);
postManager.addPost(post7);
postManager.addPost(post8);
postManager.addPost(post9);
postManager.addPost(post10);
projects.innerHTML = addPostSection(postManager);
postManager.deletePost(4);
postManager.updatePost(6,"jajaxd");
projects.innerHTML = addPostSection(postManager);


/* const postManager = new PostsController();
if(localStorage.getItem("postData") !== "[]"){
    postManager.loadFromLocalStorage();
    projects.innerHTML = addPostSection(postManager);
}else{
    postManager.addPost(post1);
    postManager.addPost(post2);
    postManager.addPost(post3);
    postManager.addPost(post4);
    postManager.addPost(post5);
    postManager.addPost(post6);
    postManager.addPost(post7);
    postManager.addPost(post8);
    postManager.addPost(post9);
    postManager.addPost(post10);
    projects.innerHTML = addPostSection(postManager);
}
postManager.deletePost(4);
 */
