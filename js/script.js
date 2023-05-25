function abrir1(){
  document.getElementById("vent1").style.display="block";
}

function cerrar1(){
  document.getElementById("vent1").style.display="none"
}
////////////////////////////////////////////////////////////////////////////////////////
function abrir2(){
  document.getElementById("vent2").style.display="block";
}

function cerrar2(){
  document.getElementById("vent2").style.display="none"
}
////////////////////////////////////////////////////////////////////////////////////////
function abrir3(){
  document.getElementById("vent3").style.display="block";
}

function cerrar3(){
  document.getElementById("vent3").style.display="none"
}
////////////////////////////////////////////////////////////////////////////////////////
function abrir4(){
  document.getElementById("vent4").style.display="block";
}

function cerrar4(){
  document.getElementById("vent4").style.display="none"
}
////////////////////////////////////////////////////////////////////////////////////////





function validarFormulario() {
  // Obtiene los valores de los campos del formulario
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var ciudad = document.getElementById('ciudad').value;
    var direccion = document.getElementById('direccion').value;
    var codigoPostal = document.getElementById('codigoPostal').value;
    var mensaje = document.getElementById('mensaje').value;

    // Valida que los campos no estén vacíos
    if (nombre === '' || email === '' || ciudad === '' || direccion === '' || codigoPostal === '' || mensaje === '') {
      alert('Por favor, completa todos los campos.');
      return false;
    }

    // Valida el formato del correo electrónico
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      alert('Por favor, ingresa un correo electrónico válido.');
      return false;
    }
  }


  function obtenerClima(destino) {
    const apiKey = 'e7f04484676fee8a8f39abaf5879c011';
    const endpoint = `http://api.openweathermap.org/data/2.5/weather?q=${destino},Argentina&appid=${apiKey}`;
    const url = new URL(endpoint);

    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        const resultado = document.querySelector('#resultado-clima')
        resultado.textContent = ''
        if (data.cod === '404') {
          resultado.textContent = 'Ciudad no encontrada...';
          return
      }
        const temperatura = data.main.temp;
        const descripcion = data.weather[0].description;
        const temp = (temperatura-273.15).toFixed(2); // reformulacion para que imprima en celsius y con 2 decimales
        resultado.textContent = `La temperatura en ${destino} es de ${temp} grados Celsius`;
        
        //console.log(`La temperatura en ${destino} es de ${temperatura} grados Celsius. ${descripcion}`);
        console.log(data)
      })
      .catch(error => {
        console.error('Error al obtener el clima:', error);
      });
  }
  