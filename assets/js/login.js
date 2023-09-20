<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/assets/css/log_in.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Slab:wght@100&family=Quicksand:wght@300&display=swap"
        rel="stylesheet">
    <title>Inicia Sesión</title>
    <script type="module" src="/assets/js/navbar.js"></script>
    <script type="module" src="/assets/js/footer.js"></script>
    <script defer src="/assets/js/login.js"></script>
</head>

<body>
    <header id="navbar"></header>
        <main class="container" style="padding-top: 90px;">

            <div class="col-md-6 offset-md-3">
              <h1 class="text-center">Inicia Sesión</h1>
          
              <!-- Inicio formulario Log In -->
              <form class="row g-3" name="loginForm">
                <div class="col-md-12">
                  <label for="inputName" class="form-label">Usuario</label>
                  <input type="text" class="form-control" id="inputName" placeholder="Tu nombre de usuario aquí">
                </div>
          
                <div class="col-md-12">
                  <label for="inputPassword" class="form-label">Contraseña</label>
                  <input type="password" class="form-control" id="inputPassword" placeholder="ingresa tu contraseña">
                </div>

          
                <div class="col-md-12 text-center">
                  <button type="submit" class="btn btn-warning">Log in</button>
                </div>
                
              </form>
              <!-- Fin formulario Log In -->

                  <!-- Inicio de alerta -->
            <section class="row text-center" id="seccionDeAlertas">
              
            </section>
             <!-- Fin de alerta -->

              <!-- Inicio de spinner -->
            <section class="row" id="seccionDeSpinner">
              
            </section>
             <!-- Fin de spinner -->



            <div class="col-md-6 offset-md-3 mt-5">
                <h5 class="text-center"> ¿No tienes cuenta?</h5>
            </div>

            <div class="col-md-12 text-center mt-4">
              <a href="register.html" class="btn btn-warning btn-sm" role="button">Registrate aqui!!</a>
              </div>
          
         
    </main>
    <footer class="foot" id="footer"></footer>
    <script type="module">
     import{loadNavbar} from "../js/navbar.js";
        import{loadFooter} from "../js/footer.js";
      loadNavbar();
      loadFooter();
  </script>

</body>

</html>
