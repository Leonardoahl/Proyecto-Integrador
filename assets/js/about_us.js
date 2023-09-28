/**
 * @author Perry Code
 * @version 0.0.1
 * 
*/

var images = document.querySelectorAll('.open-modal');


images.forEach(function (image) {
  image.addEventListener('click', function () {
  
    var description = this.closest('.carousel-item').querySelector('.image-description');


    if (description.style.display === 'none' || description.style.display === '') {
      description.style.display = 'block';
    } else {
      description.style.display = 'none';
    }
  });
});
