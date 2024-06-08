/*IIFE */
const videoBox = (() => {
  //crear función privada que reciba la url del video y el id de la etiqueta iframe para mostrar el documento HTML
  function configureVideoUrl(url, id) {
    const boxMovie = document.getElementById(id);
    console.log(boxMovie); //=> i frame
    boxMovie.setAttribute("src", url);
  }
  //una función pública que reciba los parámetros (url, id), y realice el llamado a la función interna (privada)
  return {
    moduleVideo: (url, id) => {
      configureVideoUrl(url, id);
    },
  };
})();

class Multimedia {
  #url;

  constructor(url) {
    this.#url = url;
  }

  get url() {
    return this.#url;
  }

  setInicio() {
    return "Este método es para realizar un cambio en la URL del video";
  }
}

/*CLASE REPRODUCTOR EXTENDIDA DE MULTIMEDIA */
class Reproductor extends Multimedia {
  #id;

  constructor(url, id) {
    super(url);
    this.#id = id;
  }

  playMultimedia() {
    videoBox.moduleVideo(this.url, this.#id);
  }

  
  setInicio(tiempo) {
    videoBox.moduleVideo(`${this.url()}&start=${tiempo}`, this.#id);
  }
}

//url le pasamos el link de youtube
/*videoBox.moduleVideo(
  "https://www.youtube.com/embed/PfID_33TL_A?si=vS00Cn2aShswOsy4",
  "series"
);
videoBox.moduleVideo(
  "https://www.youtube.com/embed/m8e-FF8MsqU?si=RxeGiU0a-BLu0DCy",
  "peliculas"
);
videoBox.moduleVideo(
  "https://www.youtube.com/embed/7gwO8-oqwFw?si=VyIN9lj4YtnBdSdA",
  "musica"
);*/

const serie = new Reproductor ("https://www.youtube.com/embed/PfID_33TL_A?si=vS00Cn2aShswOsy4" , "series");
const peliculas = new Reproductor ("https://www.youtube.com/embed/m8e-FF8MsqU?si=RxeGiU0a-BLu0DCy" , "peliculas");
const musica = new Reproductor ("https://www.youtube.com/embed/7gwO8-oqwFw?si=VyIN9lj4YtnBdSdA" , "musica");

serie.playMultimedia();
peliculas.playMultimedia();
musica.playMultimedia();

musica.setInicio(30);

/*INTEGRANTES DEL GRUPO 
Constanza Mendoza
Javier Jimenez
Javiera Maldonado
Joaquin Baeza
Nicolás Valderrama
Camila Zúñiga*/
