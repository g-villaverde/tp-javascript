<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Base de datos por director</title>
    <link rel="stylesheet" href="css/main.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">

    
</head>
<body class="bg-color ">

<header>

    <nav class="navbar navbar-expand-lg navbar-light bg-light sombreado">
        <div class="container-fluid ">
          <a class="navbar-brand" href="#"><h1 class="h4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-film" viewBox="0 0 16 16">
            <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z"/>
          </svg></h1></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item  px-3 ">
              </li>
              <li class="nav-item">
                <button id="listaCompleta" type="button" class="btn btn-light">Todas las peliculas</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
    
</header>
<main >


<div id="botoncitos" class="p-5 d-flex justify-content-center"></div>

<div class="container mb-4">
  <div id="box1" class="row bg-box no-show m-2">
    <h2 class="mx-5 p-2">Alfred Hitchcock</h2>
  </div>
  <div id="box2" class="row bg-box no-show m-2">
    <h2 class="mx-5 p-2">Andrei Tarkovsky</h2>
  </div>
  <div id="box3" class="row bg-box no-show m-2">
    <h2 class="mx-5 p-2">Frank Capra</h2>
  </div>
  <div id="box4" class="row bg-box no-show m-2">
    <h2 class="mx-5 p-2">Charles Chaplin</h2>
  </div>
</div>

   
  

</main>
<footer>
    
</footer>
<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
<script src="js/data.js"></script>
<script src="js/main.js"></script>

</body>
</html>