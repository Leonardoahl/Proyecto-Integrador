/**
 * @author Perry Code
 * @version 0.0.1
 * 
 */
document.addEventListener("DOMContentLoaded", function() {
    // Obtiene todos los elementos de imagen dentro de .img-container
    var imgElements = document.querySelectorAll('.img-container img');
  
    imgElements.forEach(function(img) {
      img.addEventListener('click', function() {
        // Oculta todas las listas al principio
        var hiddenLists = document.querySelectorAll('.hidden-list');
        hiddenLists.forEach(function(list) {
          list.style.display = 'none';
        });
  
        // Muestra la lista correspondiente a la imagen clicada
        var listaId = this.closest('.carousel-item').querySelector('h5').textContent;
        listaId = listaId.replace(/\s+/g, '-').toLowerCase();
        document.getElementById(listaId).style.display = 'block';
      });
    });
  });