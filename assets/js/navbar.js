export function loadNavbar(){
    const navElement = document.getElementById("navbar");
    navElement.innerHTML = `
    <nav class="navbar navbar-expand-md py-1">
    <div class="container">
        <a class="navbar-logo d-flex justify-content-center align-items-center" href="publications.html">
            <img src="../img/logo blanco blanco pequeño.png" />
        </a>
        <div class="search">
          <div class="d-flex align-items-center hola">
            <input type="text" id="navSearch" name="skill" placeholder="Búsqueda">
            <button type="button" id="buttonSearch" class="btn"><i class="bi bi-search"></i></button>
          </div>
        </div>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mx-2 mb-lg-0 text-end">
                <li class="nav-item">
                    <a class="nav-link" href="publications.html">
                        <span class="badge bg-info"></span>
                        <i class="bi bi-house-fill"></i>
                        <span class="text-menu">Publicaciones</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="conections.html">
                        <span class="badge bg-info"></span>
                        <i class="bi bi-people-fill"></i>
                        <span class="text-menu">Conexiones</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="user_profile.html">
                        <i class="bi bi-person-circle"></i>
                        <span class="text-menu">Perfil</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="porfile_settings.html">
                        <i class="bi bi-gear-wide-connected"></i>
                        <span class="text-menu">Configuración de usuario</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="log_In.html">
                        <i class="bi bi-box-arrow-right"></i>
                        <span class="text-menu">Cerrar sesión</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>
    `;
}

export function loadNavbarInitial(){
  const navElement = document.getElementById("navbar");
  navElement.innerHTML = `
<nav class="navbar navbar-expand-lg py-1">
<div class="container">
<a class="navbar-logo d-flex justify-content-center align-items-center" href="log_In.html">
  <img src="../img/logo blanco blanco pequeño.png" />
</a>
</div>
</nav>
  `;
}