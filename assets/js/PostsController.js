/**
 * @author Perry Code
 * @version 0.0.1
 * 
 */



const post1 = {
    id: 1,
    name: "BryanFan",
    img: "../img/perryXd.png",
    noLike: 3,
    noComments: 0,
    postContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    postImgs: ["/assets/img/placeholder.png","/assets/img/placeholder.png"],
    trend: "#edporfavor"
}


class PostsController {
    constructor(){
        this.post = [];
        this.currentId = 0
    }

    getCurrentId(){
        return this.currentId;
    }

    addPost(post) {
        this.post.push(post);
        this.currentId++;
    }

    loadFromLocalStorage (){
        const storagePosts = localStorage.getItem("postData");
        if(storagePosts){
            const post = JSON.parse(storagePosts);
            this.post = post;
        }
    }
    deletePost(idPost){
        const index = this.post.findIndex(x => {
            return x.id === idPost;
        });
        this.post.splice(index, 1);
    }
    updatePost(idPost, content){
        const index = this.post.findIndex(x=>{
            return x.id === idPost;
        });
        this.post[index].postContent = content;
    }
}
