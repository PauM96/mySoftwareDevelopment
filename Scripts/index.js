window.addEventListener("DOMContentLoaded", function() {
  // Encuentra todos los enlaces en la página
  const links = document.querySelectorAll("a");

  // Establece el atributo target de todos los enlaces a "_blank"
  links.forEach(function(link) {
    link.setAttribute("target", "_blank");
  });
});