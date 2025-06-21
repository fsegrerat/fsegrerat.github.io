// Script para el temporizador de cuenta regresiva
// IMPORTANTE: Define la fecha objetivo FUERA de la función para que no se resetee con cada segundo.
const targetDate = new Date(); // Obtiene la fecha y hora actual al cargar la página
targetDate.setDate(targetDate.getDate() + 3); // Suma 3 días a la fecha actual para la duración de la oferta

function updateTimer() {
    const now = new Date(); // Obtiene la fecha y hora actual en cada ejecución
    
    const diff = targetDate - now; // Diferencia en milisegundos

    // Si la cuenta regresiva termina, oculta el temporizador o muestra un mensaje
    if (diff < 0) {
        // Asegura que todos los contadores se muestren como "00"
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        document.getElementById('days2').textContent = '00';
        document.getElementById('hours2').textContent = '00';
        document.getElementById('minutes2').textContent = '00';
        document.getElementById('seconds2').textContent = '00';
        // Puedes añadir aquí lógica para deshabilitar los botones de compra,
        // cambiar el texto de la oferta, o redirigir al usuario si la oferta expira.
        return; // Detiene la función
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    // Actualiza ambos temporizadores en la página, asegurando formato de dos dígitos
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    
    document.getElementById('days2').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours2').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes2').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds2').textContent = seconds.toString().padStart(2, '0');
}

// Actualiza el temporizador cada segundo (1000 milisegundos)
setInterval(updateTimer, 1000);
// Llama a la función una vez inmediatamente al cargar la página para evitar el retraso inicial
updateTimer();