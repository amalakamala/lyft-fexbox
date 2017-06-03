function resizeHeaderOnScroll() {
  var distanciaY = window.pageYOffset || document.documentElement.scrollTop;
  /* 
  window.pageYOffset:  devuelve los píxeles del documento actual.
  scrollTop : devuelve el número de píxeles contenido de un elemento se desplaza verticalmente.
  */
  var limite = 300;
  var elNav = document.getElementById('navegador'); 
  var elHide = document.getElementById('a-hide');
  var lasA = Array.from(document.getElementsByClassName('estilo-a'));

  if (distanciaY > limite) {
    elNav.classList.add("menu-dos");  
    elHide.classList.remove("nav-hide");
    lasA.forEach(function(e){
      e.classList.add("color-a"); 
    });
  }else{
    elNav.classList.remove("menu-dos");
    elHide.classList.add("nav-hide")
    lasA.forEach(function(e){
      e.classList.remove("color-a"); 
    }); 
  }
}

window.addEventListener('scroll', resizeHeaderOnScroll);