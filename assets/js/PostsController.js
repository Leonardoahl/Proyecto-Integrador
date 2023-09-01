const post1 = {
    id: 1,
    name: "ana",
    img: "/assets/img/perryXd.png",
    noLike: 3,
    noComments: 0,
    postContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    postImgs: ["/assets/img/placeholder.png","/assets/img/placeholder.png"],
    trend: "#edporfavor"
}
const post2 = {
    id: 2,
    name: "ana",
    img: "/assets/img/perryXd.png",
    noLike: 3,
    noComments: 0,
    postContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    postImgs: ["/assets/img/placeholder.png","/assets/img/placeholder.png"],
    trend: "#BryanNoEstaBryanSeFue"
}
const post3 = {
    id: 3,
    name: "ana",
    img: "/assets/img/perryXd.png",
    noLike: 3,
    noComments: 0,
    postContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    postImgs: ["/assets/img/placeholder.png","/assets/img/placeholder.png"],
    trend: "#MentirosillaDesdeShiquilla"
}
const post4 = {
    id: 4,
    name: "ana",
    img: "/assets/img/perryXd.png",
    noLike: 3,
    noComments: 0,
    postContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    postImgs: ["/assets/img/placeholder.png","/assets/img/placeholder.png"],
    trend: "#TeamChapulines"
}
const post5 = {
    id: 5,
    name: "ana",
    img: "/assets/img/perryXd.png",
    noLike: 3,
    noComments: 0,
    postContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    postImgs: ["/assets/img/placeholder.png","/assets/img/placeholder.png"],
    trend: "#GatitosEnojados"
}
const post6 = {
    id: 6,
    name: "ana",
    img: "/assets/img/perryXd.png",
    noLike: 3,
    noComments: 0,
    postContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    postImgs: ["/assets/img/placeholder.png","/assets/img/placeholder.png"],
    trend: "#ElMejorEquipoEsGatitos"
}
const post7 = {
    id: 7,
    name: "ana",
    img: "/assets/img/perryXd.png",
    noLike: 3,
    noComments: 0,
    postContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    postImgs: ["/assets/img/placeholder.png","/assets/img/placeholder.png"],
    trend: "#AyudaPoFavo"
}
const post8 = {
    id: 8,
    name: "ana",
    img: "/assets/img/perryXd.png",
    noLike: 3,
    noComments: 0,
    postContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    postImgs: ["/assets/img/placeholder.png","/assets/img/placeholder.png"],
    trend: "#ParenEstoMeQuieroBajar"
}
const post9 = {
    id: 9,
    name: "ana",
    img: "/assets/img/perryXd.png",
    noLike: 3,
    noComments: 0,
    postContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    postImgs: ["/assets/img/placeholder.png","/assets/img/placeholder.png"],
    trend: "#SeCancela"
}
const post10 = {
    id: 10,
    name: "ana",
    img: "/assets/img/perryXd.png",
    noLike: 3,
    noComments: 0,
    postContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    postImgs: ["/assets/img/placeholder.png","/assets/img/placeholder.png"],
    trend: "#PatronaSubemeElSueldo"
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

