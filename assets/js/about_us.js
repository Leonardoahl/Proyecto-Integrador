/**
 * @author Perry Code
 * @version 0.0.1
 * 
*/
/* const imagenesCarrusel = document.querySelectorAll('.open-modal');
const descripciones = document.querySelectorAll('.image-description');

// Agrega un evento click a cada imagen
imagenesCarrusel.forEach((imagen, index) => {
  imagen.addEventListener('click', () => {
    // Oculta todas las descripciones
    descripciones.forEach((descripcion) => {
      descripcion.style.display = 'none';
    });

    // Muestra la descripción correspondiente
    descripciones[index].style.display = 'block';
  });
});

// Agrega un evento click al cuerpo de la página para ocultar la descripción
document.body.addEventListener('click', (event) => {
  if (!event.target.classList.contains('open-modal')) {
    descripciones.forEach((descripcion) => {
      descripcion.style.display = 'none';
    });
  }
}); */
// Obtén una lista de todas las imágenes con la clase "open-modal"
var images = document.querySelectorAll('.open-modal');

// Agrega un evento de clic a cada imagen
images.forEach(function (image) {
  image.addEventListener('click', function () {
    // Obtén el elemento de descripción de la imagen clicada
    var description = this.closest('.carousel-item').querySelector('.image-description');

    // Alterna la visibilidad del elemento de descripción
    if (description.style.display === 'none' || description.style.display === '') {
      description.style.display = 'block';
    } else {
      description.style.display = 'none';
    }
  });
});
