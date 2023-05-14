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
    const form = document.getElementById('formulario-evento');
    if (form !== null) {
        form.addEventListener('submit', enviarFormulario);
    }
  });
  
  function cambiarModo() {
    const botonCambioModo = document.getElementById("botonCambioModo");
    const temaClaro =  botonCambioModo.getAttribute("value") === "true";
    if (temaClaro) {
      activarModoOscuro();
      botonCambioModo.setAttribute("value", "false");
    } else {
      desactivarModoOscuro();  
      botonCambioModo.setAttribute("value", "true");
    }
  }

  function controlarModoEnLocalStorage(){
    const modoElegidoEnLocalStorage = localStorage.getItem("modoOscuroActivado");
    if (modoElegidoEnLocalStorage === "true") {
      activarModoOscuro();
      botonCambioModo.setAttribute("value", "false");
    } else {
      desactivarModoOscuro();
      botonCambioModo.setAttribute("value", "true");
    }
    document.querySelector('body').classList.add('visible');
  }

  function activarModoOscuro() {
    localStorage.setItem("modoOscuroActivado", 'true');
    const idBodyActual = document.body.id;
    document.getElementById("style-page").href = 'css/styles-dark.css';

    if (idBodyActual == 'bodyIndex') {
      seleccionarPartnersCorrectosParaModoEspecifico('logos-partners-light', 'logos-partners-dark');
    }
  }

  function desactivarModoOscuro() {
    localStorage.setItem("modoOscuroActivado", 'false');
    const idBodyActual = document.body.id;
    document.getElementById("style-page").href = "css/styles.css";

    if (idBodyActual == 'bodyIndex') {
      seleccionarPartnersCorrectosParaModoEspecifico('logos-partners-dark', 'logos-partners-light');
    }
  }

  function seleccionarPartnersCorrectosParaModoEspecifico(srcViejo, srcNuevo) {
    const divPartners = document.getElementById('div-partners');
    const logosPartners = divPartners.getElementsByTagName('img');

    for (let i = 0; i < logosPartners.length; i++) {
      let srcCompleto = logosPartners[i].src;
      if(!srcCompleto.includes(srcNuevo)){
        const posicion = srcCompleto.indexOf(srcViejo);
        const subcadena = srcCompleto.substring(posicion);
        let nuevoSrc = subcadena.replace(srcViejo, srcNuevo);
        logosPartners[i].src = nuevoSrc;
      }
    }
  }
