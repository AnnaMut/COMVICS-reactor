var navMain = document.querySelector(".popup-menu");
var navOpen = document.querySelector(".burger-menu-button");
var navClose = document.querySelector(".burger-menu-button-close");
var nexteSection = document.querySelector(".order-headtext");


navOpen.addEventListener("click", function() {
  if (navMain.classList.contains("closed-popup-menu")) {
    navMain.classList.remove("closed-popup-menu");
    navMain.classList.add("opened-popup-menu");
  } else {
    navMain.classList.add("closed-popup-menu");
    navMain.classList.remove("opened-popup-menu");
  }
});

navClose.addEventListener("click", function() {
    if (navMain.classList.contains("opened-popup-menu")) {
      navMain.classList.remove("opened-popup-menu");
      navMain.classList.add("closed-popup-menu");
    } else {
      navMain.classList.add("opened-popup-menu");
      navMain.classList.remove("closed-popup-menu");
    }
  });


  window.onclick = function(event) {
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
}