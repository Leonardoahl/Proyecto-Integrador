export function loadFooter(){
    const footerElement = document.getElementById("footer");
    footerElement.innerHTML = `
  
    <div class="groupOne">
      <div class="box">
        <div class="row">
          <a href="../pages/about_us.html" class="link-light"
            >Sobre Nosotros</a
          >
        </div>
        <div class="row">
          <a href="../pages/contact_us.html" class="link-light"
            >Contáctanos</a
          >
        </div>
        <div class="row">
          <a href="../pages/privacy_policy.html" class="link-light"
            >Política de privacidad</a
          >
        </div>
        <div class="row">
          <a href="../pages/terms_conditions.html" class="link-light"
            >Términos y condiciones</a
          >
        </div>
      </div>
      <div class="box text-center" style="margin: auto;" >
        <small
          >&copy; 2023 <b>PERING</b> - Todos los Derechos Reservados.</small
        >
      </div>
      <div
        class="socialMedia text-center align-items-center">
        <a href="https://www.facebook.com/profile.php?id=61552034635059" target="_blank" class="facebook" ; ><i class="bi bi-facebook"></i></a>
        <a href="https://www.instagram.com/peringnetworking/" target="_blank" class="instagram" ; ><i class="bi bi-instagram"></i></a>
        <a href="https://github.com/Leonardoahl/Proyecto-Integrador" target="_blank" class="github" ; ><i class="bi bi-github"></i></a>
      </div>
    </div>  

    
    `;
}