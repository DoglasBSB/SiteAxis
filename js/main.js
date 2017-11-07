// Select all links with hashes
$('#menu-navegacao')
.find('a')
//Remova links que realmente não ligam para nada
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // Links na página
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Descobrir o elemento para se deslocar
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Existe um alvo de rolagem?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Retorno de chamada após animação
        // Deve mudar o foco!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Verificando se o destino estava concentrado 
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adicionando o tabindex para elementos não focusable
          $target.focus(); // Definir foco novamente 
        };
      });
    }
  }
});

$(".alert").alert()

/*
$(document).ready(function(){
  $("button").click(function(){
      $("Enviar").hide(1000);
      alert("Envio realizado!");
  });
});
*/
function Enviar() {
  
      var nome = document.getElementById("nomeid");
  
      if (nome.value != "") {
          alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
      }
  
  }





  