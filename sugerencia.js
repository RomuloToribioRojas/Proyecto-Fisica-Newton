function enviarSugerencia() {
  // Obtener los valores del formulario
  var nombre = document.getElementById('nombre').value;
  var comentario = document.getElementById('comentario').value;

  //como enviar los datos a un servidor//

  // aqui solo en consola//
  console.log('Nombre:', nombre);
  console.log('Comentario:', comentario);

  // limpiar los datos//
  document.getElementById('nombre').value = '';
  document.getElementById('comentario').value = '';
}

