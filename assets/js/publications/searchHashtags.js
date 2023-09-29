
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const searchResultsDrop = document.getElementById("searchedOptions");

// Ejemplo de datos de búsqueda (puedes reemplazarlo con tu propio conjunto de datos)
const searchData = [
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
  "Ruby on Rails"
];

searchInput.addEventListener("input", function () {
  const searchText = searchInput.value.toLowerCase();

  const matchingResults = searchData.filter((item) =>
    item.toLowerCase().includes(searchText)
  );













  
  // Limpiar resultados anteriores
  searchResults.innerHTML = "";
  searchResultsDrop.replaceChildren("");
  if (!!searchText) {
    if (matchingResults.length > 0) {
      // Mostrar hasta 3 resultados coincidentes
      for (let i = 0; i < Math.min(3, matchingResults.length); i++) {
        const resultItem = document.createElement("div");
        resultItem.setAttribute("class", "badge rounded-pill text-light me-2 bi-hash");
        resultItem.textContent = matchingResults[i];
        searchResults.appendChild(resultItem);
      }

      // Si hay más de 3 resultados, mostrar un enlace para ver más
      if (matchingResults.length > 3) {
        for (let i = 3; i < matchingResults.length; i++) {
          const moreLink = document.createElement('a');
              moreLink.classList.add('dropdown-item');
              moreLink.textContent = `${matchingResults[i]}`;
              searchResultsDrop.appendChild(moreLink);
        }
      }
    } else {
      const noResultsItem = document.createElement("span");
      noResultsItem.classList.add("d-inline");
      noResultsItem.textContent = "No se encontraron resultados";
      searchResults.appendChild(noResultsItem);
    }
  }
});

// codigo select hashtags

const dropdownMenu = document.getElementById('searchedOptions');

let selectedOption = null; // Variable para guardar la opción seleccionada

// Agregar un controlador de eventos al menú desplegable
dropdownMenu.addEventListener('click', function (event) {
    const clickedItem = event.target;
    if (clickedItem.classList.contains('dropdown-item')) {
        selectedOption = clickedItem.textContent; // Guardar la opción seleccionada en la variable
        console.log(`Opción seleccionada: ${selectedOption}`);
    }
});

// Agregar un controlador de eventos a la fila con resultados en texto
searchResults.addEventListener('click', function (event) {
  const clickedItem = event.target;
  if (clickedItem.classList.contains('badge')) {
      selectedOption = clickedItem.textContent; // Guardar la opción seleccionada en la variable
      console.log(`Opción seleccionada: ${selectedOption}`);
  }
});