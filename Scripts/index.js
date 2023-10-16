window.addEventListener("DOMContentLoaded", function() {
  // Encuentra todos los enlaces en la página
  const links = document.querySelectorAll("a");

  // Establece el atributo target de todos los enlaces a "_blank"
  links.forEach(function(link) {
    if(!link.classList.contains("js-sidebar-link")){
      link.setAttribute("target", "_blank");
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
const toggleButtons = document.querySelectorAll('.js-toggle-button');
  toggleButtons.forEach( (toggleButt) => {
    const containerContent = toggleButt.closest('.contentContainer')
      .querySelector('.imagesContainer');
    let isHidden = false;

    toggleButt.addEventListener('click', () => {
      if (!isHidden) {
        containerContent.style.display = 'none';
        toggleButt.innerHTML = '+';
        isHidden = true;
      } else {
        containerContent.style.display = 'block';
        toggleButt.innerHTML = '-';
        isHidden = false;
      }
    });  
  })

});

