// Select all links with hashes
$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      
      if (target.length) {
        event.preventDefault();

        // --- LÓGICA RESPONSIVA AQUÍ ---
        // Definimos una variable para el margen
        var offsetVariable;

        // Si el ancho de la ventana es menor a 992px (Móvil/Tablet)
        if ($(window).width() < 992) {
            offsetVariable = 85; // Valor para celular
        } else {
            offsetVariable = 95; // Valor para PC
        }

        // Calculamos la posición final usando nuestra variable
        var posicionFinal = target.offset().top - offsetVariable;

        $('html, body').animate({
          scrollTop: posicionFinal
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.focus(); 
          };
        });
      }
    }
  });