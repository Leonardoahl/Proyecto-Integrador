export function loadNavbar(){
    const navElement = document.getElementById("navbar");
    navElement.innerHTML = `
<nav class="navbar navbar-expand-lg py-1">
<div class="container">
  <a class="navbar-logo" href="publications.html">
    <img src="../img/logo blanco blanco pequeño.png" />
  </a>
  <button
    class="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link" href="#">
          <i class="bi bi-search"></i>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="publications.html"><span class="badge bg-info">4</span>
          <i class="bi bi-house-fill">
          </i>
        </a>
      </li>
      <li class="nav-item">
        <!-- use of badges  -->
        <a class="nav-link" href="conections.html"><span class="badge bg-info">4</span>
          <i class="bi bi-people-fill"></i>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="user_profile.html">
          <i class="bi bi-person-circle"></i>
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
<a class="navbar-logo" href="log_In.html">
  <img src="../img/logo blanco blanco pequeño.png" />
</a>
<button
  class="navbar-toggler"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#navbarSupportedContent"
  aria-controls="navbarSupportedContent"
  aria-expanded="false"
  aria-label="Toggle navigation"
>
  <span class="navbar-toggler-icon"></span>
</button>
</div>
</nav>
  `;
}