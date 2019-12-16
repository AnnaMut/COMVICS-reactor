var navMainMount = document.querySelector(".popup-menu-mountain");
var navOpenMount = document.querySelector(".burger-menu-button-mountain");
var navCloseMount = document.querySelector(".burger-menu-button-close-mountain");

navOpenMount.addEventListener("click", function() {
    if (navMainMount.classList.contains("closed-popup-menu-mountain")) {
      navMainMount.classList.remove("closed-popup-menu-mountain");
      navMainMount.classList.add("opened-popup-menu-mountain");
    } 
  });
  
  navCloseMount.addEventListener("click", function() {
      if (navMainMount.classList.contains("opened-popup-menu-mountain")) {
        navMainMount.classList.remove("opened-popup-menu-mountain");
        navMainMount.classList.add("closed-popup-menu-mountain");
      } 
    });