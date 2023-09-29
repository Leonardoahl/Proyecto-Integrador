const description = document.getElementById("description")
const username = document.getElementById("name")
const softSkills = document.getElementById("soft")
const techSkills = document.getElementById("tech")
const projectsContainer = document.getElementById("projects")
const image = document.getElementById("image")
document.addEventListener('DOMContentLoaded', async () => {
    //get
    const url = "https://pering.onrender.com/users/" + sessionId;
    const data = await fetch(url);
    const dataxd = await data.json();

    printProfile(dataxd);

});
const postsArray = [
    {
        title: "Título del Post 1",
        content: "Contenido del Post 1",
        imageUrl: "../img/java.png", 
    }

];


const printProfile = (user) => {
    console.log(user);
    image.src = user.profilepic
    description.innerText = user.description;
    username.innerText = user.firstname + " @" + user.username;

    if (user.softSkills && Array.isArray(user.softSkills)) {
        user.softSkills.forEach(skillObj => {
            const listItem = document.createElement("li");
            listItem.innerText = skillObj.name;
            softSkills.appendChild(listItem);
        });
    }

    if (user.techSkills && Array.isArray(user.techSkills)) {
        user.techSkills.forEach(skillObj => {
            const listItem = document.createElement("li");
            listItem.innerText = skillObj.name;
            techSkills.appendChild(listItem);
        });
    }

    // Ahora, recorre el array de posts y crea elementos HTML para cada post
    if (Array.isArray(user.posts)) {
        user.posts.forEach((post) => {
            // Crear un contenedor para el conjunto de imagen y contenido
            const postContainer = document.createElement("div");
            postContainer.classList.add("project-item", "project-card", "d-flex", "align-items-center");

            // Crear una imagen para el post
            const imageElement = document.createElement("img");
            imageElement.src = "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTcPSqtPt3sTDvC46Rz4gKfZeSZOiBsfvNkXhMWJmOJbePhTzPV";
            imageElement.alt = "imagen JS" ;
            imageElement.width = "50";
            imageElement.height ="70";

            // Crear un contenedor para el contenido del post
            const contentContainer = document.createElement("div");
            contentContainer.classList.add("post-content");

            // Crear un elemento de texto para el contenido del post
            const contentElement = document.createElement("p");
            contentElement.textContent = post.content;
            contentElement.style = "color:white";

            // Agregar la imagen al contenedor del conjunto
            postContainer.appendChild(imageElement);

            // Agregar el contenido al contenedor del contenido
            contentContainer.appendChild(contentElement);

            // Agregar el contenedor del contenido al contenedor del conjunto
            postContainer.appendChild(contentContainer);

            // Agregar el conjunto al contenedor de proyectos
            projectsContainer.appendChild(postContainer);
        });
    }
};