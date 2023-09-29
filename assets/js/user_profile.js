const description = document.getElementById("description")
const username = document.getElementById("name")
const softSkills = document.getElementById("soft")
const techSkills = document.getElementById("tech")
document.addEventListener('DOMContentLoaded', async () => {
    //get
    const url = "http://127.0.0.1:8080/users/7"
    const data = await fetch(url);
    const dataxd = await data.json();

    printProfile(dataxd);

});


const printProfile = (user) => {
    console.log(user);
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
}
