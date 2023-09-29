const users = [{
    name: "Patrona_Fan123",
    img: "../img/PERRYcontactosGrr.png"
},
{
    name: "Patrona_Fan123",
    img: "../img/PERRYcontactosGrr.png"
},
{
    name: "Patrona_Fan123",
    img: "../img/PERRYcontactosGrr.png"
},
{
    name: "Jimena",
    img: "../img/PERRYcontactosGrr.png"
},
{
    name: "Ana",
    img: "../img/PERRYcontactosGrr.png"
},{
    name: "Fer",
    img: "../img/PERRYcontactosGrr.png"
},
{
    name: "Luis",
    img: "../img/PERRYcontactosGrr.png"
},
{
    name: "Luis",
    img: "../img/PERRYcontactosGrr.png"
},
{
    name: "me llamo predro infante Xd soy cool",
    img: "../img/PERRYcontactosGrr.png"
},
{
    name: "Luis",
    img: "../img/PERRYcontactosGrr.png"
},
{
    name: "Luis",
    img: "../img/PERRYcontactosGrr.png"
}] 

function unUsuario (user){
const userElement = document.createElement("div");
            userElement.classList.add("col-4");
            userElement.name = user.name;
            
            const imgElement = document.createElement("img");
            imgElement.src = user.img; 
            userElement.appendChild(imgElement);

            const btnElement = document.createElement("button");
            btnElement.classList.add("yellowButton");
            btnElement.innerText = user.name;
            userElement.appendChild(btnElement);

            console.log(userElement);
            return userElement;
}

/* const test = document.getElementById("contactos");

test.appendChild(unUsuario(users[0]));
test.appendChild(unUsuario(users[1]));
test.appendChild(unUsuario(users[2]));
test.appendChild(unUsuario(users[4]));
 */
const userSolicitudes  = [
    {
        name: "Ed",
        img: "../img/perryGritandoSolicitudes.png"
    },
    {
        name: "Memo",
        img: "../img/perryGritandoSolicitudes.png"
    },
    {
        name: "Juan",
        img: "../img/perryGritandoSolicitudes.png"
    }
];


async function traerDatos(){
    const usuarios = await fetch("https://rickandmortyapi.com/api/character");
    const usuariosJson = await usuarios.json();
    return usuariosJson.results.slice(0,10);
}


async function generateUser() {
    const users = await traerDatos();
    let size = users.length;
    let i = 0;
    const contactos = document.querySelector("#contactos");
   
    while(i<size) {
        const fila = document.createElement("div");
        fila.classList.add("row");
        fila.classList.add("py-2");

        for(let j = 0; j<3 && i + j < size; j++){
            let user = users [i+j];
            const userElement = document.createElement("div");
            userElement.classList.add("col-4");

            const imgElement = document.createElement("img");
            imgElement.classList.add("avatar")
            imgElement.src = user.image; 
            userElement.appendChild(imgElement);

            const btnElement = document.createElement("button");
            btnElement.classList.add("yellowButton");
            btnElement.innerText = user.name;
            userElement.appendChild(btnElement);

            fila.appendChild(userElement);
            contactos.appendChild(fila);
            
            console.log(user);
        }
        i = i + 3;
    }
}


function generateUserSolicitudes() {
    let size = users.length;
    let i = 0;
    const contactos = document.querySelector("#solicitudes");
   
    while(i<size) {
        const fila = document.createElement("div");
        fila.classList.add("row");

            let user = userSolicitudes [i];
            const userElement = document.createElement("div");
            userElement.classList.add("col");

            const imgElement = document.createElement("img");

            imgElement.src = user.img; 
            userElement.appendChild(imgElement);
            imgElement.classList.add("avatar")
            const btnElement = document.createElement("button");
            btnElement.classList.add("yellowButton");
            btnElement.innerText = user.name;
            userElement.appendChild(btnElement);

            fila.appendChild(userElement);
            contactos.appendChild(fila);
            
            console.log(user);
        i++;
    }
}



generateUser();
generateUserSolicitudes();