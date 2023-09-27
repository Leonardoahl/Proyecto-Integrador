/**
 * @author Perry Code
 * @version 0.0.1
 * 
 */
$(document).ready(function() {
    $('.img-container img').click(function() {
      // Oculta todas las listas al principio
      $('.hidden-list').hide();
  
      // Muestra la lista correspondiente a la imagen clicada
      var listaId = $(this).closest('.carousel-item').find('h5').text();
      listaId = listaId.replace(/\s+/g, '-').toLowerCase(); // Convierte el nombre en un identificador válido
      $('#' + listaId).show();
    });
  });
  