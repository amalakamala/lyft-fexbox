function resizeHeaderOnScroll() {
  var distanciaY = window.pageYOffset || document.documentElement.scrollTop;
  /* 
  window.pageYOffset:  devuelve los píxeles del documento actual.
  scrollTop : devuelve el número de píxeles contenido de un elemento se desplaza verticalmente.
  */
  var limite = 150;
  var elNav = document.getElementById('navegador'); 
  var elHide = document.getElementById('a-hide');
  var lasA = Array.from(document.getElementsByClassName('estilo-a'));
  var navEspecial = document.getElementById('log-in');
  var logoW = document.getElementById('logo-white');
  var logoP = document.getElementById('logo-pink');


  if (distanciaY > limite) {
    elNav.classList.add("menu-dos"); 

    elHide.classList.remove("nav-hide");
    elHide.classList.add("estilo-a-scroll"); 

    lasA.forEach(function(e){
      e.classList.add("color-a"); 
    });
    navEspecial.classList.remove("nav-especial");
    navEspecial.classList.add("nav-especial-scroll");

    logoP.classList.remove("hide");    
    logoW.classList.add("hide");
    logoP.classList.add("logo");

  }else{
    elNav.classList.remove("menu-dos");

    elHide.classList.add("nav-hide")

    lasA.forEach(function(e){
      e.classList.remove("color-a"); 
    }); 
    navEspecial.classList.add("nav-especial");

    logoP.classList.add("hide");
    logoW.classList.remove("hide");  
    logoP.classList.remove("logo");

  }
}

window.addEventListener('scroll', resizeHeaderOnScroll);