

/* Esto es para los personajes que tenemos que imprimir */
//import axios from 'axios';

const BASE_URL =
  "https://my-json-server.typicode.com/classicoman2/fakeRESTserver";

const getTodos = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/personatges`);

    const todos = res.data;

    pintarPersonatges(todos);

    return todos;
  } catch (e) {
    console.error(e);
  }
};

/**
* Mostra per consola les dades dels personatges
*
* @param {Array} personatges
*/
function pintarPersonatges(personatges) {
  // personajes consolas
  //console.log(personatges);

  // Comprobacion de que pagina es
  title = document.getElementsByTagName("title")[0].innerHTML;
  if (title == "Personajes") {

    for (let x = 0; x < personatges.length; x++) {
      let div = document.createElement("div");
      let h2 = document.createElement("h2");
      let img = document.createElement("img");
      let p = document.createElement("p");
      let cambioId = "mafioso" + x;
      div.id = cambioId;
      img.src = "";
      img.alt = "";
      document.getElementById("personas").appendChild(div);
      document.getElementById(cambioId).appendChild(h2);
      document.getElementById(cambioId).appendChild(img);
      document.getElementById(cambioId).appendChild(p);
    }
    // Pagina de personajes
    h2 = document.getElementsByTagName("h2");
    imagenes = document.getElementsByTagName("img");
    paragraphs = document.getElementsByTagName("p");
    alt = document.getElementsByTagName("img");

    for (let x = 0; x < personatges.length; x++) {
      h2[x].innerHTML = personatges[x].name;
      imagenes[x + 1].setAttribute("src", personatges[x].img);
      paragraphs[x].innerHTML = personatges[x].motto;
      alt[x + 1].setAttribute("alt", personatges[x].name);
      //--------------------
    }
  } else if (title == "EntradaJuego") {
    // Pagina de entrada al juego
    for (let x = 0; x < personatges.length; x++) {
      let input = document.createElement("input");
      input.type = "image";
      input.src = "";
      input.alt = "";
      input.id = "";
      input.onclick = "";
      document.getElementById("imagenes").appendChild(input)
    }
    imagen = document.getElementsByTagName("input");
    alt = document.getElementsByTagName("input");
    click = document.getElementsByTagName("input");
    id = document.getElementsByTagName("input");
    for (let x = 0; x <= personatges.length; x++) {
      imagen[x + 2].setAttribute("src", personatges[x].img);
      alt[x + 2].setAttribute("alt", personatges[x].name);
      id[x + 2].setAttribute("id", personatges[x].id);
      click[x + 2].setAttribute("onclick", "perfil(this)");// Le he puesto comillas otra vez a perfil(this) porque sino estan por algun motivo no salen todas las imagenes
    }
  }
  else {
    console.log("Estoy probando si esto funciona");
  }
}
/*-----------------------------------------*/

/**
 * 
 * @param {*} personatges 
 */
function crearElements(personatges) {

  for (let x = 0; x < personatges.length; x++) {
    let input = document.createElement("input");
    input.type = "image";
    input.src = "";
    input.alt = "";
    document.getElementById("imagenes").appendChild(input);
  }


}
/*------------------------ */

/**
 * Boton del menu
 */
function menuHome() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
/*--------------------------------*/

/**
 * Calculo del dinero por minuto ganado en el juego
 */
function registroJuego() {
  let dineroMinuto = document.getElementById("dineroMinuto");
  let chabolas = 0;
  let casas = 0;
  let chalets = 0;
  let hoteles = 0;
  for (let x = 0; x < imagenes.length; x++) {
    switch (imagenes.alt[x]) {
      case "xibiu":
        chabolas++;
        break;
      case "casa":
        casas++;
        break;
      case "xalet":
        chalets++;
        break;
      case "hotel":
        hoteles++;
        break;
      default:
        break;
    }
  }
  let dineroChabola = chabolas * 50;
  let dineroCasa = casas * 100;
  let dineroChalet = chalets * 200;
  let dineroHotel = hoteles * 500;
  dineroMinuto = dineroChabola + dineroCasa + dineroChalet + dineroHotel;
  registroDinero(dineroMinuto);
}
/*-------------------------------*/

/**
 * Calculo del dinero total sumandole cada minuto lo calculado en
 * la funcion registroJuego.
 * 
 * @param {*} dineroMinuto Es el dinero por minuto calculado en la funcion registroJuego.
 */
function registroDinero(dineroMinuto) {
  let eventos = document.getElementById("eventos");
  let dineroTotal = document.getElementById("dineroTotal");
  let total = total + dineroMinuto;
}
/*-------------------------*/
var imagen = "";
var guardarAlt = "";
/**
 * Seleccion de imagen y posicion para construir
 * 
 * @param {*} element Es el tipo de casa seleccionado(imagen)
 */
function construcciones(element) {
  imagen = element.getAttribute("src");
  guardarAlt = element.getAttribute("alt");
}
/*-------------------------*/
var grid = new Array(20);
for (let i = 0; i < 30; i++) {
  grid[i] = new Array(30);
}

/* 
Variable que cambiara dependiendo del boton que pulse el usuario.
Habra dos botones que son construir edificio y mover edificio.
De forma predeterminada sera false que es construir.
*/
var cambioModo = false;

/**
 * Funcion creada para cambiar el valor de la variable global cambioModo
 * la cual usamos para cambiar lo que hace el juego.
 * 
 * @param {*} cambio variable recibida desde el onclick del juego,
 * si presionas el boton de construir sera false y si pulsas el
 * boton de mover sera true
 */
function cambiarModo(cambio) {
  cambioModo = cambio;
}

/**
 * Recoger posicion del click en el canvas
 * 
 * @param {*} imagen imagen enviada desde la funcion construcciones.
 */
function colocarEdificio() {
  let posicion = document.getElementsByClassName("canvas")[0].addEventListener("click", function (event) {
    let x = event.offsetX;
    let y = event.offsetY;
    console.log(`(${x}, ${y})`);
    if (cambioModo == true) {
      //Codigo para mover los edificios
      console.log("Estas en el modo de MOVER EDIFICIOS");
    } else {
      // Console.log para hacer pruebas y asi saber en que modo estas
      console.log("Estas en el modo de CONSTRUIR EDIFICIOS");
      let precio;
      if (guardarAlt = "xibiu") {
        precio = 50;
      } else if (guardarAlt = "casa") {
        precio = 100;
      } else if (guardarAlt = "xalet") {
        precio = 200;
      } else {
        precio = 500;
      }

      let dineroTotal = document.getElementById("dineroTotal").value;

      if ((dineroTotal - precio) >= 0) {
        document.getElementById("dineroTotal").value = dineroTotal - precio;

        if (imagen) {
          let img = new Image();
          img.src = imagen;
          for (let i = 0; i < 30; i++) {
            let longitudBaja = 30 * i;
            let longitudAlta = 30 * (i + 1);
            if (longitudBaja < x && longitudAlta > x) {
              x = longitudBaja;
              break;
            }
          }
          for (let j = 0; j < 20; j++) {
            let alturaBaja = 30 * j;
            let alturaAlta = 30 * (j + 1);
            if (alturaBaja < y && alturaAlta > y) {
              y = alturaBaja;
              break;
            }
          }
          let posicionX = 0;
          let posicionY = 0;

          if (x != 0) {
            posicionX = x / 30;
          }

          if (y != 0) {
            posicionY = y / 30;
          }


          if (grid[posicionX][posicionY] === "") {
            document.getElementById("micanvas").getContext("2d").drawImage(img, x, y, 30, 30);
            grid[posicionX][posicionY] = "tipo";
          }

        }
      }
    }

  });
}
/*-------------------------*/

/* Boton para pasar la info de entradaJuego a el juego */
function guardarDatos() {
  let apodo = document.getElementById("apodo").value;//Esto funciona, solo faltaria colocarlo mejor
  let image = document.getElementById("image").id;//Tengo que guardar el identificador y despues buscarlo con el axios
  // Store
  localStorage.removeItem("apodo");
  localStorage.removeItem("image");
  localStorage.setItem("apodo", apodo);
  localStorage.setItem("fotoPersonaje", image);
}


/*-------------------------- */

/**
 * Construir en la pantalla de juego la imagen y el nickname del
 * usuario que han sido indicados en entradaJuego
 * @param {*} element La imagen seleccionada
 */
function perfil(element) {
  let img = document.createElement("img");
  let p = document.createElement("p");
  let balear = document.getElementById("balearic");
  img.src = "";
  img.alt = "";
  balear.appendChild(img);
  balear.appendChild(p);

  let imgPerfil = document.getElementsByTagName("img");
  let nickname = document.getElementsByTagName("p");
  imgPerfil[0].src = "";
  imgPerfil[0].setAttribute("src", element.value);
  nickPerfil[0].innerHTML = nickname;

}
/*-------------------------*/

/* Ejecutar al cargar la pagina */
window.onload = function () {
  // Crida la funció asíncrona
  getTodos();

  /* Este es el canvas que hemos creado en la pagina directamente
  porque aqui no nos funciona.*/
  if (document.title == "Juego") {
    var canvas = document.getElementById("micanvas");
    var ctx = canvas.getContext("2d");

    for (var x = 0; x <= 900; x = x + 30) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, 900);
    }


    for (var y = 0; y <= 600; y = y + 30) {
      ctx.moveTo(0, y);
      ctx.lineTo(900, y);
    }

    // Mueves el pencil y luego persistes con stroke
    ctx.strokeStyle = "#f00";
    ctx.stroke();
    canvas.append(ctx);

    for (let i = 0; i < 30; i++) {
      for (let j = 0; j < 20; j++) {
        grid[i][j] = "";
      }
    }

    // Es una prueba
    if (typeof (Storage) !== "undefined") {
      // Retrieve
      //Lo he hecho con el apodo y cuando vea que funciona entonces lo hare con la imagen
      document.getElementById("apodoUsuario").innerHTML = localStorage.getItem("apodo");
      document.getElementById("fotoPersonaje").src = localStorage.getItem("fotoPersonaje");
    } else {
      document.getElementById("apodoUsuario").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
  } else if (document.title == "entradaJuego") { // Es una prueba
    document.getElementById("alturaBoton").addEventListener("click", function () {
      guardarDatos();
    });
  }
};

/*-------------------------------------*/
