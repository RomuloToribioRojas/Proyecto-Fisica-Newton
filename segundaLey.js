function calcularAceleracion(event) {
    event.preventDefault(); // Evitar que el formulario se envíe y la página se recargue

    let FuerzaA = parseInt(document.getElementById("fuerzaA").value);
    let MasaA = parseInt(document.getElementById("masaA").value);
    
    let AceleracionA = FuerzaA / MasaA;

    document.getElementById("aceleracionA").value = AceleracionA;
}
/*       */

function calcularFuerza(event) {
    event.preventDefault(); // Evitar que el formulario se envíe y la página se recargue

    let MasaF = parseInt(document.getElementById("masaF").value);
    let AceleracionF = parseInt(document.getElementById("aceleracionF").value);
    
    let FuerzaF = MasaF * AceleracionF;

    document.getElementById("fuerzaF").value = FuerzaF;
}

/**/

function calcularMasa(event) {
    event.preventDefault(); // Evitar que el formulario se envíe y la página se recargue

    let FuerzaM = parseInt(document.getElementById("fuerzaM").value);
    let AceleracionM = parseInt(document.getElementById("aceleracionM").value);
    
    let MasaM = FuerzaM / AceleracionM;

    document.getElementById("masaM").value = MasaM;
}
function limpiarAceleracion() {
    document.getElementById("fuerzaA").value = "";
    document.getElementById("masaA").value = "";
    document.getElementById("aceleracionA").value = "";
}
function limpiarFuerza() {
    document.getElementById("fuerzaF").value = "";
    document.getElementById("masaF").value = "";
    document.getElementById("aceleracionF").value = "";
}
function limpiarMasa() {
    document.getElementById("fuerzaM").value = "";
    document.getElementById("masaM").value = "";
    document.getElementById("aceleracionM").value = "";
}

/* mostrar y ocultar*/

document.addEventListener("DOMContentLoaded", function() {
  // Obtener elementos de los enlaces
  const enlaceAceleracion = document.getElementById('aceleracionNoneA');
  const enlaceFuerza = document.getElementById('fuerzaNoneA');
  const enlaceMasa = document.getElementById('masaNoneA');

  // Obtener elementos de las secciones
  const seccionUno = document.getElementById('aceleracionSeccion');
  const seccionDos = document.getElementById('fuerzaSeccion');
  const seccionTres = document.getElementById('masaSeccion');

  // Función para ocultar todas las secciones
  function ocultarSecciones() {
    seccionUno.style.display = 'none';
    seccionDos.style.display = 'none';
    seccionTres.style.display = 'none';
  }

  // Mostrar sección correspondiente al hacer clic en el enlace de aceleración
  enlaceAceleracion.addEventListener('click', function(event) {
    event.preventDefault();
    ocultarSecciones();
    seccionUno.style.display = 'block';
  });

  // Mostrar sección correspondiente al hacer clic en el enlace de fuerza
  enlaceFuerza.addEventListener('click', function(event) {
    event.preventDefault();
    ocultarSecciones();
    seccionDos.style.display = 'block';
  });

  // Mostrar sección correspondiente al hacer clic en el enlace de masa
  enlaceMasa.addEventListener('click', function(event) {
    event.preventDefault();
    ocultarSecciones();
    seccionTres.style.display = 'block';
  });
});

/*      */

document.addEventListener("DOMContentLoaded", function() {
  // Obtener elementos de los enlaces
  const enlaceAceleracion = document.getElementById('aceleracionNoneF');
  const enlaceFuerza = document.getElementById('fuerzaNoneF');
  const enlaceMasa = document.getElementById('masaNoneF');

  // Obtener elementos de las secciones
  const seccionUno = document.getElementById('aceleracionSeccion');
  const seccionDos = document.getElementById('fuerzaSeccion');
  const seccionTres = document.getElementById('masaSeccion');

  // Función para ocultar todas las secciones
  function ocultarSecciones() {
    seccionUno.style.display = 'none';
    seccionDos.style.display = 'none';
    seccionTres.style.display = 'none';
  }

  // Mostrar sección correspondiente al hacer clic en el enlace de aceleración
  enlaceAceleracion.addEventListener('click', function(event) {
    event.preventDefault();
    ocultarSecciones();
    seccionUno.style.display = 'block';
  });

  // Mostrar sección correspondiente al hacer clic en el enlace de fuerza
  enlaceFuerza.addEventListener('click', function(event) {
    event.preventDefault();
    ocultarSecciones();
    seccionDos.style.display = 'block';
  });

  // Mostrar sección correspondiente al hacer clic en el enlace de masa
  enlaceMasa.addEventListener('click', function(event) {
    event.preventDefault();
    ocultarSecciones();
    seccionTres.style.display = 'block';
  });
});


/*      */


document.addEventListener("DOMContentLoaded", function() {
  // Obtener elementos de los enlaces
  const enlaceAceleracion = document.getElementById('aceleracionNoneM');
  const enlaceFuerza = document.getElementById('fuerzaNoneM');
  const enlaceMasa = document.getElementById('masaNoneM');

  // Obtener elementos de las secciones
  const seccionUno = document.getElementById('aceleracionSeccion');
  const seccionDos = document.getElementById('fuerzaSeccion');
  const seccionTres = document.getElementById('masaSeccion');

  // Función para ocultar todas las secciones
  function ocultarSecciones() {
    seccionUno.style.display = 'none';
    seccionDos.style.display = 'none';
    seccionTres.style.display = 'none';
  }

  // Mostrar sección correspondiente al hacer clic en el enlace de aceleración
  enlaceAceleracion.addEventListener('click', function(event) {
    event.preventDefault();
    ocultarSecciones();
    seccionUno.style.display = 'block';
  });

  // Mostrar sección correspondiente al hacer clic en el enlace de fuerza
  enlaceFuerza.addEventListener('click', function(event) {
    event.preventDefault();
    ocultarSecciones();
    seccionDos.style.display = 'block';
  });

  // Mostrar sección correspondiente al hacer clic en el enlace de masa
  enlaceMasa.addEventListener('click', function(event) {
    event.preventDefault();
    ocultarSecciones();
    seccionTres.style.display = 'block';
  });
});

/* para que se muestre primero aceleracion por defecto*/
function mostrarSeccion(id) {
  // Ocultar todas las secciones
  var secciones = document.querySelectorAll('section[class^="simuladorPrimeraLey"]');
  secciones.forEach(function(seccion) {
    seccion.style.display = 'none';
  });

  // Mostrar la sección deseada por su ID
  var seccionAMostrar = document.getElementById(id);
  if (seccionAMostrar) {
    seccionAMostrar.style.display = 'block';
  }
}
