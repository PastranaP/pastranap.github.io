// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "And I'd give up forever to touch you", time: 10 },
  { text: "'Cause I know that you feel me somehow", time: 14 },
  { text: "You're the closest to heaven that I'll ever be", time: 19 },
  { text: "And I don't wanna go home right now", time: 24 },
  { text: "And all I could taste is this moment", time: 28 },
  { text: "And all I can breathe is your life", time: 34 },
  { text: "And sooner or later, it's over", time: 39 },
  { text: "I just don't wanna miss you tonight", time: 41 },

  { text: "And I don't want the world to see me", time: 47 },
  { text: "'Cause I don't think that they'd understand", time: 52 },
  { text: "When everything's made to be broken", time: 56 },
  { text: "I just want you to know who I am", time: 61 },

  { text: "And you can't fight the tears that ain't comin'", time: 78 },
  { text: "Or the moment of truth in your lies", time: 81 },
  { text: "When everything feels like the movies", time: 88 },
  { text: "Yeah, you bleed just to know you're alive", time: 91 },

  { text: "And I don't want the world to see me", time: 97 },
  { text: "'Cause I don't think that they'd understand", time: 100 },
  { text: "When everything's made to be broken", time: 106 },
  { text: "I just want you to know who I am", time: 110 },

  { text: "And I don't want the world to see me", time: 208 },
  { text: "'Cause I don't think that they'd understand", time: 212 },
  { text: "When everything's made to be broken", time: 217 },
  { text: "I just want you to know who I am", time: 222 },

  { text: "And I don't want the world to see me", time: 230 },
  { text: "'Cause I don't think that they'd understand", time: 234 },
  { text: "When everything's made to be broken", time: 238 },
  { text: "I just want you to know who I am", time: 243 },
  { text: "I just want you to know who I am", time: 247 },
  { text: "I just want you to know who I am", time: 251 },
  { text: "I just want you to know who I am", time: 255 },
  { text: "I just want you to know who I am", time: 256 },
  { text: "Bye. Cuidate Pili Jeanett", time: 260 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.01; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);

// segunda-pagina.html
