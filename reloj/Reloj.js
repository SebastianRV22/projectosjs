function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  var timeString = formatTime(hours, minutes, seconds);

  // Actualiza el contenido del elemento con id 'digitalClock'
  document.getElementById('digitalClock').innerText = timeString;

  // Actualiza las manecillas del reloj analógico
  updateAnalogClock(hours, minutes, seconds);
}

function formatTime(hours, minutes, seconds) {
  // Formatea la hora en formato HH:MM:SS
  return padZero(hours) + ':' + padZero(minutes) + ':' + padZero(seconds);
}

function padZero(number) {
  // Agrega un cero por delante si el número es menor que 10
  return (number < 10) ? '0' + number : number;
}

function updateAnalogClock(hours, minutes, seconds) {
  // Calcula los grados de rotación para las manecillas del reloj analógico
  var hourRotation = (hours % 12 + minutes / 60) * 30;
  var minuteRotation = (minutes + seconds / 60) * 6;
  var secondRotation = seconds * 6;

  // Aplica las rotaciones a través de CSS
  document.getElementById('hourHand').style.transform = 'rotate(' + hourRotation + 'deg)';
  document.getElementById('minuteHand').style.transform = 'rotate(' + minuteRotation + 'deg)';
  document.getElementById('secondHand').style.transform = 'rotate(' + secondRotation + 'deg)';
}

// Inicializa el reloj llamando a updateClock cada segundo
setInterval(updateClock, 1000);
