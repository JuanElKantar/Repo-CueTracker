var form = document.getElementById('game-time-form');
var minutesInput = document.getElementById('minutes');
var countdownElement = document.getElementById('countdown');
var countdown;

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  var minutes = parseInt(minutesInput.value, 10);
  
  if (isNaN(minutes) || minutes <= 0) {
    alert('Ingresa un valor válido para la duración en minutos.');
    return;
  }
  
  var countdownDate = new Date();
  countdownDate.setMinutes(countdownDate.getMinutes() + minutes);
  
  var countdownOptions = {
    endDate: countdownDate,
    format: 'hh:mm:ss',
  };
  
  countdown = new Countdown(countdownElement, countdownOptions);
  countdown.start();
  
  // Restablecer el formulario
  form.reset();
});
