



/**
 * @function dynamicDisplayTrends de un arreglo de strings toma los elementos y  los despliga en el card de trendings
 *
 * @returns {void} 
 */
function dynamicDisplayTrends(){
    hashtags.forEach(item => {
    const newDivTag = document.createElement('div');
    newDivTag.setAttribute("class","badge small bg-warning-subtle text-dark")
    const trendsRow = document.getElementById('dynamicSerchDisplay') 
    trendsRow.appendChild(newDivTag);
    newDivTag.innerText =item;
});
}


// dynamicDisplayTrends();