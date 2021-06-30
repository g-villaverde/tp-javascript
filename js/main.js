
/* Simulador de peliculas curadas por director de cine */

// Definicion de class con id, nombre de director, fecha de estreno, poster, link a youtube y descripción breve
class Pelicula {
    constructor(id, titulo, director, estreno, poster, link, description) {
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.estreno = estreno;
        this.poster = poster;
        this.link = link;
        this.description = description;
    }
};


// funciones para crear la info adentro de cada box

function crearHitchcock(pelicula) {
    $('#box1').append(`<div id="${pelicula.id}" class="card mb-3 mt-2 mx-5 p-2" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
      <a href="${pelicula.link}" target="_blank"><img src="${pelicula.poster}" class="img-fluid rounded-start p-2" alt="..."></a>  
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${pelicula.titulo}</h5>
          <p class="card-text">${pelicula.estreno}</p>
          <p class="card-text">${pelicula.description}</p>
        </div>
      </div>
    </div>
  </div>`);
}
function crearTarkovsky(pelicula) {
    $('#box2').append(`<div id="${pelicula.id}" class="card mb-3 mt-2 mx-5 p-2" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
      <a href="${pelicula.link}" target="_blank"><img src="${pelicula.poster}" class="img-fluid rounded-start p-2" alt="..."></a>  
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${pelicula.titulo}</h5>
          <p class="card-text">${pelicula.estreno}</p>
          <p class="card-text">${pelicula.description}</p>
        </div>
      </div>
    </div>
  </div>`);
}
function crearCapra(pelicula) {
    $('#box3').append(`<div id="${pelicula.id}" class="card mb-3 mt-2 mx-5 p-2" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
      <a href="${pelicula.link}" target="_blank"><img src="${pelicula.poster}" class="img-fluid rounded-start p-2" alt="..."></a>  
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${pelicula.titulo}</h5>
          <p class="card-text">${pelicula.estreno}</p>
          <p class="card-text">${pelicula.description}</p>
        </div>
      </div>
    </div>
  </div>`);
}
function crearChaplin(pelicula) {
    $('#box4').append(`<div id="${pelicula.id}" class="card mb-3 mt-2 mx-5 p-2" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
      <a href="${pelicula.link}" target="_blank"><img src="${pelicula.poster}" class="img-fluid rounded-start p-2" alt="..."></a>  
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${pelicula.titulo}</h5>
          <p class="card-text">${pelicula.estreno}</p>
          <p class="card-text">${pelicula.description}</p>
        </div>
      </div>
    </div>
  </div>`);
}

// Iteración de los Arrey

for (const hitchcockPeliculas of hitchcock) {
    crearHitchcock(hitchcockPeliculas);    
};
for (const chaplinPeliculas of chaplin) {
    crearChaplin(chaplinPeliculas);    
};
for (const tarkovskyPeliculas of tarkovsky) {
    crearTarkovsky(tarkovskyPeliculas);    
};
for (const capraPeliculas of capra) {
    crearCapra(capraPeliculas);    
};


//Prepend de los botones

$('#botoncitos').prepend(`<button id="Capra" class="button-capra button-class p-3 m-2"></button>`)
$('#botoncitos').prepend(`<button id="Chaplin" class="button-chaplin text-white button-class p-3 m-2"></button>`)
$('#botoncitos').prepend(`<button id="Tarkovsky" class="button-tarkovsky button-class p-3 m-2"></button>`)
$('#botoncitos').prepend(`<button id="Hitchcock" class="button-hitchcock button-class p-3 m-2"></button>`)

$('.no-show').hide();
$('#listaCompleta').click( () => {
    $("#box1, #box2, #box3, #box4").fadeIn();
});

$('#Hitchcock').click( () => { /// Filtro para ver peliculas Hitchcock
    $("#box2, #box3, #box4").hide();
    $("#box1").fadeIn();
});
$('#Tarkovsky').click( () => { /// Filtro para ver peliculas Tarkovsky
    $("#box2").fadeIn();
    $("#box1, #box3, #box4").hide(); 
})
$('#Capra').click( () => { /// Filtro para ver peliculas Capra
    $("#box3").fadeIn();
    $("#box1, #box2, #box4").hide(); 
})
$('#Chaplin').click( () => { /// Filtro para ver peliculas Chaplin
    $("#box4").fadeIn();
    $("#box1, #box2, #box3").hide();
})









