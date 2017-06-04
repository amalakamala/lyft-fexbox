function resizeHeaderOnScroll() {
  var distanciaY = window.pageYOffset || document.documentElement.scrollTop;
  /* 
  window.pageYOffset:  devuelve los píxeles del documento actual.
  scrollTop : devuelve el número de píxeles contenido de un elemento se desplaza verticalmente.
  */
  var limite = 100;
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



var phone = document.getElementById("phone");


phone.addEventListener("click",function(){
  var name  = document.getElementById("name");
  var email = document.getElementById("email");
  var city = document.getElementById("city");
  var caja = document.getElementById("el-sign-up");

  name.classList.remove("hide");  
  email.classList.remove("hide");  
  city.classList.remove("hide");  
  caja.classList.remove("sign-up");
  caja.classList.add("sign-up-click");

})


/*
(function validar() {
  var boton = document.getElementById("btn-click");

  boton.addEventListener("click", function(el){

  })
})()

*/

