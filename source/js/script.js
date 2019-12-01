var navMain = document.querySelector(".popup-menu");
var navOpen = document.querySelector(".burger-menu-button");
var navClose = document.querySelector(".burger-menu-button-close");


var nexteSection = document.querySelector(".order-headtext");
var orderOpenBtn = document.querySelector(".button-order-form");
var orderCloseBtn = document.querySelector(".order-button-close");
var orderPopup = document.querySelector(".order-data");
var orderBtn = document.querySelector(".order-btn-popup");
var showHiddenItemOil = document.querySelector(".oil-btn"); 
var closedItemsOil = document.querySelectorAll(".oil-hidden");
var showHiddenItemPetrology = document.querySelector(".petrology-btn"); 
var closedItemsPetrology = document.querySelectorAll(".petrology-hidden");
var showHiddenItemAnalistic = document.querySelector(".analistic-btn"); 
var closedItemsAnalistic = document.querySelectorAll(".analistic-hidden");
var showHiddenReviewText = document.querySelector(".show-hidden-review-text"); 
var closedTextReview = document.querySelector(".mobile-close-text");
var reviewSpan = document.querySelector(".mobile-close-text-mark");
var writeusBtn = document.querySelector(".button-writeus"); 
var writeUsPopup = document.querySelector(".contacts-feed-data");
var writeusCloseBtn = document.querySelector(".writeus-button-close");
var mainPageLink = document.querySelector(".menu-list-item");

navOpen.addEventListener("click", function() {
  if (navMain.classList.contains("closed-popup-menu")) {
    navMain.classList.remove("closed-popup-menu");
    navMain.classList.add("opened-popup-menu");
  } /* else {
    navMain.classList.add("closed-popup-menu");
    navMain.classList.remove("opened-popup-menu");
  } */
});

navClose.addEventListener("click", function() {
    if (navMain.classList.contains("opened-popup-menu")) {
      navMain.classList.remove("opened-popup-menu");
      navMain.classList.add("closed-popup-menu");
    } 
  });

 


  orderOpenBtn.addEventListener("click", function() {
    if (orderPopup.classList.contains("сlosed-order")) {
      orderPopup.classList.remove("сlosed-order");
      orderPopup.classList.add("opened-order");
    }
  });

  orderBtn.addEventListener("click", function() {
    if (orderPopup.classList.contains("сlosed-order")) {
      orderPopup.classList.remove("сlosed-order");
      orderPopup.classList.add("opened-order");
    }
  });
  
  orderCloseBtn.addEventListener("click", function() {
      if (orderPopup.classList.contains("opened-order")) {
        orderPopup.classList.remove("opened-order");
        orderPopup.classList.add("сlosed-order");
      }
    });

    showHiddenItemOil.addEventListener("click", function() {
      for (var i=0; i< closedItemsOil.length; i++) {
      if (closedItemsOil[i].classList.contains("mobile-display")) {
        closedItemsOil[i].classList.remove("mobile-display");
        showHiddenItemOil.style = "display: none";
      } 
    }
    });

    showHiddenItemPetrology.addEventListener("click", function() {
      for (var i=0; i< closedItemsPetrology.length; i++) {
      if (closedItemsPetrology[i].classList.contains("mobile-display")) {
        closedItemsPetrology[i].classList.remove("mobile-display");
        showHiddenItemPetrology.style = "display: none";
      } 
    }
    });

     showHiddenItemAnalistic.addEventListener("click", function() {
      for (var i=0; i< closedItemsAnalistic.length; i++) {
      if (closedItemsAnalistic[i].classList.contains("mobile-display")) {
        closedItemsAnalistic[i].classList.remove("mobile-display");
        showHiddenItemAnalistic.style = "display: none";
      } 
    }
    });

    showHiddenReviewText.addEventListener("click", function() {
      if (closedTextReview) {
        closedTextReview.classList.remove("mobile-close-text");
        reviewSpan.style = "display: none";
        showHiddenReviewText.style = "display: none";
      }
    });

    writeusBtn.addEventListener("click", function() {
      event.preventDefault();
      if (writeUsPopup.classList.contains("hide-mobile-writeus")) {
        writeUsPopup.classList.remove("hide-mobile-writeus");
        writeUsPopup.classList.add("open-mobile-writeus");
      } 
    });
    
    writeusCloseBtn.addEventListener("click", function() {
        if (writeUsPopup.classList.contains("open-mobile-writeus")) {
          writeUsPopup.classList.remove("open-mobile-writeus");
          writeUsPopup.classList.add("hide-mobile-writeus");
        } 
      });


    var mainPageLink = document.querySelectorAll(".menu-list-item");
    
    for(var i=0;i<mainPageLink.length;i++)
    (function(i) { 
      mainPageLink[i].addEventListener("click", function(e) {
        var allItems =  document.querySelectorAll(".item");
        allItems.forEach(function (item) {
          item.querySelector(".menu-list-link").querySelector(".menu-list-link-text").classList.remove("active-span");
        });
        e.target.classList.add("active-span");
      })
  })(i);

  /* window.onclick = function(event) {
    if (event.target != navMain) {
        navMain.style.display = "none";
    }
  }


var modalWindow = document.querySelector(".modal-window");
var orderButton = document.querySelector(".popular-product__order-button");
var cartButtons = document.querySelectorAll(".product-card__cart-button");
var modalAddButton = document.querySelector(".modal-window__add-button");

if (orderButton) {
  orderButton.addEventListener("click", function() {
    if (!modalWindow.classList.contains("modal-window_shown")) {
      modalWindow.classList.add("modal-window_shown");
    }
  });
}

for (var i = 0; i < cartButtons.length; i++) {
  var item = cartButtons[i];
  item.addEventListener("click", function() {
    if (!modalWindow.classList.contains("modal-window_shown")) {
      modalWindow.classList.add("modal-window_shown");
    }
  });
}

if (modalAddButton) {
  modalAddButton.addEventListener("click", function() {
    modalWindow.classList.remove("modal-window_shown");
  });
}

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (modalWindow.classList.contains("modal-window_shown")) {
      modalWindow.classList.remove("modal-window_shown");
    }
  }
});

window.onclick = function(event) {
  if (event.target == modalWindow) {
    if (modalWindow.classList.contains("modal-window_shown")) {
      modalWindow.classList.remove("modal-window_shown");
    }
  } 
}*/