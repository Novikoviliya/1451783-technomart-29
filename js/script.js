"use strict";
const close = document.querySelector(".pop-up-close");
const mapOpen = document.querySelector(".static-map");
const mapPopup = document.querySelector(".modal-static-map");
const mapClose = document.querySelector(".mapClose");
mapOpen.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
    mapPopup.classList.add("modal-animation");
});
mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
    mapPopup.classList.remove("modal-animation");
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});

/*Slider*/
const control = document.querySelector(".slider-gallery-1");
let sliderTool = document.querySelector(".slider-controls");
let dow = document.querySelector(".image-btn");
sliderTool.onclick = function(evt){
evt.preventDefault();
control.classList.toggle("current");

};
/*Service*/
/*added-card*/
var buy = document.querySelectorAll(".buy-button");
var popup = document.querySelector(".added-to-card");
[].forEach.call(buy, function(buy){
    buy.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.add("modal-show");
        popup.classList.add("modal-animation");
    });
});
close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-animation");
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if ( popup.classList.contains("modal-show")) {
      evt.preventDefault();
       popup.classList.remove("modal-show");
    }
  }
});


/*Заблудились?*/

const messageOpen = document.querySelector(".write-us");
  const messagePopup = document.querySelector(".modal-write-us");
 const form =  messagePopup.querySelector(".relative-form");
 const myName = messagePopup.querySelector(".name");
 const email = messagePopup.querySelector(".email");
 const text = messagePopup.querySelector(".message-text");
 const messageClose = document.querySelector(".messageClose");

messageOpen.addEventListener("click", function (evt) {
    evt.preventDefault();
    messagePopup.classList.add("modal-show");
    messagePopup.classList.add("modal-animation");
});
form.addEventListener("submit", function (evt) {
    if (!myName.value||!email.value||!text.value) {
        evt.preventDefault();
        console.log(myName.value);
        console.log(email.value);
        console.log(text.value);
        alert("Нужно заполнить все поля формы!");
    }
})
messageClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    messagePopup.classList.remove("modal-show");
    messagePopup.classList.remove("modal-animation");
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (messagePopup.classList.contains("modal-show")) {
      evt.preventDefault();
      messagePopup.classList.remove("modal-show");
    }
  }
});
