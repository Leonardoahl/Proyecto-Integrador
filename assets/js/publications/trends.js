/**
 * @author Perry Code
 * @version 0.0.1
 * 
 */


const hashtags = [
  "Java",
  "Python",
  "JavaScript",
  "C++",
  "Ruby",
  "PHP",
  "Swift",
  "Kotlin",
  "C#",
  "SQL",
  "HTML",
  "CSS",
  "React",
  "Angular",
  "Vue.js",
  "Docker",
  "Kubernetes",
  "AWS",
  "Azure",
  "Git",
  "Jenkis",
  "Terraform",
  "Spring Framework",
  "Ruby on Rails",
];


/**
 * @function showTrends de un arreglo de strings toma los elementos y  los despliga en el card de trendings
 *
 * @returns {void} 
 */
function showTrends(){
        hashtags.forEach(item => {
        const newDivTag = document.createElement('div');
        newDivTag.setAttribute("class","badge small bg-warning-subtle text-dark")
        const cardElement = document.querySelector('.card') 
        cardElement.appendChild(newDivTag);
        newDivTag.innerText =item;
    });
}


showTrends();