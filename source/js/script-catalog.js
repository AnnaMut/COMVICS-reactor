var navMainCatalog = document.querySelector(".popup-menu-catalog");
var navOpenCatalog = document.querySelector(".burger-menu-button-catalog");
var navCloseCatalog = document.querySelector(".burger-menu-button-close-catalog");

navOpenCatalog.addEventListener("click", function() {
    if (navMainCatalog.classList.contains("closed-popup-menu-catalog")) {
      navMainCatalog.classList.remove("closed-popup-menu-catalog");
      navMainCatalog.classList.add("opened-popup-menu-catalog");
    }
  });
  
  navCloseCatalog.addEventListener("click", function() {
      if (navMainCatalog.classList.contains("opened-popup-menu-catalog")) {
        navMainCatalog.classList.remove("opened-popup-menu-catalog");
        navMainCatalog.classList.add("closed-popup-menu-catalog");
      } 
    });