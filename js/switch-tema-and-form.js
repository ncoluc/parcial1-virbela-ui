function enviarFormulario(event) {
    event.preventDefault();

    
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var mail = document.getElementById('mail').value;

    var asunto = 'Registro para Evento - Virbela Argentina';
    
    
    var cuerpoMail = 'Hola Virbela, soy ' + nombre + ' ' + apellido + '\nMi mail es: ' + mail 
    + '\nMe gustaíra reservar un lugar para el día del evento.' 
    + '\n\nSaludos!\n' + nombre +'.\n\n';

    var mailto = 'mailto:gabriel.molina@unahur.edu.ar?subject=' + encodeURIComponent(asunto) + '&body=' + encodeURIComponent(cuerpoMail);

    window.open(mailto);
  };
  
  document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('formulario-evento');
    form.addEventListener('submit', enviarFormulario);
  });


  function cambiarModo() {
    console.log("llegueaca");
    const botonCambioModo = document.getElementById("botonCambioModo");
    const temaClaro =  botonCambioModo.getAttribute("value") === "false";
    if (temaClaro) {
      activarModoOscuro();
      botonCambioModo.setAttribute("value", "true");
    } else {
      desactivarModoOscuro();  
      botonCambioModo.setAttribute("value", "false");
    }
  }

  function controlarModoEnLocalStorage(){
    const modoElegidoEnLocalStorage = localStorage.getItem("modoOscuroActivado");
    if (modoElegidoEnLocalStorage === "true") {
      activarModoOscuro();
    } else {
      desactivarModoOscuro();
    }
  }

  function activarModoOscuro() {
    localStorage.setItem("modoOscuroActivado", 'true');
    const htmlActual = window.location.pathname;
    document.getElementById("style-page").href = 'css/styles-dark.css';

    if (htmlActual == '/index.html') {
      seleccionarPartnersCorrectosParaModoEspecifico('logos-partners', 'logos-partners-dark');
    }
  }

  function desactivarModoOscuro() {
    localStorage.setItem("modoOscuroActivado", 'false');
    const htmlActual = window.location.pathname;
    document.getElementById("style-page").href = 'css/styles.css';

    if (htmlActual == '/index.html') {
      seleccionarPartnersCorrectosParaModoEspecifico('logos-partners-dark', 'logos-partners');
    }
  }

  function seleccionarPartnersCorrectosParaModoEspecifico(srcViejo, srcNuevo) {
    const divPartners = document.getElementById('div-partners');
    const logosPartners = divPartners.getElementsByTagName('img');

    for (let i = 0; i < logosPartners.length; i++) {
      let srcCompleto = logosPartners[i].src;
      let nuevoSrc = srcCompleto.replace(srcViejo, srcNuevo);
      logosPartners[i].src = nuevoSrc;
    }
  }
