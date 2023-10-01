window.addEventListener("DOMContentLoaded", function() {
  // Encuentra todos los enlaces en la página
  const links = document.querySelectorAll("a");

  // Establece el atributo target de todos los enlaces a "_blank"
  links.forEach(function(link) {
    link.setAttribute("target", "_blank");
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const toggleButt = document.querySelector('.js-toggle-button');
  const containerContent = document.querySelector('.imagesContainer');
  let isHidden = true;

  toggleButt.addEventListener('click', () => {
    if (!isHidden) {
      containerContent.style.display = 'none';
      console.log('is working')
      isHidden = true;
    } else {
      containerContent.style.display = 'block';
      isHidden = false;
    }
  });
});
