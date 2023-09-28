/**
 * @author Perry Code
 * @version 0.0.1
 * 
*/


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
