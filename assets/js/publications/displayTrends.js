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
    "React"
  ];
/**
 * @function dynamicDisplayTrends de un arreglo de strings toma los elementos y  los despliga en el card de trendings
 *
 * @returns {void} 
 */
function dynamicDisplayTrends(){
    hashtags.forEach(item => {
    const newDivTag = document.createElement('div');
    newDivTag.setAttribute("class","text-light")
    const trendsRow = document.getElementById('dynamicSerchDisplay') 
    trendsRow.appendChild(newDivTag);
    //newDivTag.innerText =item;
});
}


 dynamicDisplayTrends();