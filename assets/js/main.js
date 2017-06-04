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
  var phoneF  = document.getElementById("phone-f"); 
  var name  = document.getElementById("name");
  var email = document.getElementById("email");
  var city = document.getElementById("city");
  var caja = document.getElementById("el-sign-up");

  phone.classList.add("hide");
  phoneF.classList.remove("hide");
  name.classList.remove("hide");  
  email.classList.remove("hide");  
  city.classList.remove("hide");  
  caja.classList.remove("sign-up");
  caja.classList.add("sign-up-click");


/* -----------------------------------

 Este código es para validar uno por uno los campos con el error, 
 pero no me funciono, ya que ocupando focus o click cada vez que ponia el cursor me aparecia una img de error.
 Si usaba el evento oninput cada vez que escribia una letra me salia la img error.
 Las webs que encontre que sirven para validad uno por uno usan Jquery 
 ejm: http://formvalidation.io/examples/requiring-at-least-one-field/

  phoneF.addEventListener("focus",function(){
      var phoneFinal  = parseInt(document.getElementById("phone-f").value); 

      var elInput = document.getElementsByClassName("formulario");
      var phoneV = document.getElementsByClassName("input-box")[1];
      var phoneVId = document.getElementById("phone-f");

      var respuestaPhone = document.createElement("span");
      respuestaPhone.classList.add("error1");    
      var imgError = document.createElement("img");
      imgError.setAttribute("src","assets/img/error.png"); 
      respuestaPhone.appendChild(imgError); 

        if (!(/\+569[0-9]{8}/.test(phoneFinal))) {
          phoneVId.setAttribute("class", "input-error");        
          phoneV.appendChild(respuestaPhone);
        }
        else if(/\+569[0-9]{8}/.test(phoneFinal)){
          respuestaPhone.classList.add("hide");
          phoneVId.classList.remove("input-error");
        }           

  })

   ----------------------------------- */



  var boton = document.getElementById("btn-click");
  boton.addEventListener("click", function(el){
    var phonef = document.getElementById("phone-f");
    var name  = document.getElementById("name");
    var email = document.getElementById("email");
    var city = document.getElementById("city");

    var phoneV = document.getElementsByClassName("input-box")[1];
    var nameV = document.getElementsByClassName("input-box")[2];
    var emailV = document.getElementsByClassName("input-box")[3];
    var cityV = document.getElementsByClassName("input-box")[4];

    var elInput = document.getElementsByClassName("formulario");

    if(!(/\+569[0-9]{8}/.test(phonef.value))) {
      phoneV.appendChild(crearError());
      elInput[1].classList.add("input-error");
    }

    if(!(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]{2,11})+$/.test(name.value))){
      nameV.appendChild(crearError());
      elInput[2].classList.add("input-error");
    }

    if(!(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test(email.value)) ) {
      emailV.appendChild(crearError());
      elInput[3].classList.add("input-error");
    }

    if(!(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]{2,11})+$/.test(city.value))){
      cityV.appendChild(crearError());
      elInput[4].classList.add("input-error");
    }


    function crearError(){
      var respuesta = document.createElement("span");
      respuesta.classList.add("error1");    
      var imgError = document.createElement("img");
      imgError.setAttribute("src","assets/img/error.png");    
      respuesta.appendChild(imgError);    
      return respuesta
    }


      campoVacio(el); 
  })

  function campoVacio(el){
    document.getElementById("phone-f").value = "";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("city").value = "";
    el.removedChild(crearError());

  }

})










