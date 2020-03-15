var btn_buy = document.querySelectorAll('.product-action__button-buy');
var btn_bookmarks = document.querySelectorAll('.product-action__button-bookmark');

// [SLIDER]

var switches__radio = document.querySelectorAll('.switches__radio');
var slide = document.querySelectorAll('.slide');
var services__btn = document.querySelectorAll('.services__btn');
var services__description = document.querySelectorAll('.services-description__item');

function slider(switchers, slides) {
  var current = 0;
  switchers.forEach(function(e, i) {
    e.addEventListener('focus', function() {
      if (i !== current) {
        slides[current].classList.add('visually-hidden');
        slides[i].classList.remove('visually-hidden');
        switchers[current].classList.remove('active');
        switchers[i].classList.add('active');
        current = i;
      }
    });
  });
}


// [SHOW WINDOW]

var btn_contacts = document.querySelector('.btn-contacts');
var btn_map = document.querySelector('.map');
var popup_status = document.querySelector('.container-status');
var popup_contacts = document.querySelector('.container-contacts');
var popup_map = document.querySelector('.container-map');

function open(button, popup) {
  if (button && popup) {
    button.addEventListener('click', function() {
      popup.classList.remove('hidden');
      event.preventDefault();
    });
  } 
}


// [CLOSE WINDOW]

var btn_close = document.querySelectorAll('.btn-close');

function close(button) {
  button.forEach(function(e, i) {
    button[i].addEventListener('click', function() {
      button[i].parentNode.parentNode.classList.add('hidden');
    });
  });
}


// [CLOSE WINDOW]
function addToBasket() {
  var basket = document.querySelector('.shopping__link-basket');
  var basket_value = document.querySelector('.basket-value');
  var count = Number(basket_value.textContent);

  basket.classList.add('shopping-full');
  count++;
  basket_value.textContent = ' ' + count;
}

function addToBookmarks() {
  var bookmarks = document.querySelector('.shopping__link-bookmarks');
  var bookmarks_value = document.querySelector('.bookmarks-value');
  var count = Number(bookmarks_value.textContent);

  bookmarks.classList.add('shopping-full');
  count++;
  bookmarks_value.textContent = ' ' + count;
  event.preventDefault();  
}


// Вызовы

slider(services__btn, services__description);
slider(switches__radio, slide);

btn_buy.forEach(function(e, i) {
  open(btn_buy[i], popup_status);
});

btn_buy.forEach(function(e, i) {
  btn_buy[i].addEventListener('click', addToBasket);
});

btn_bookmarks.forEach(function(e, i) {
  btn_bookmarks[i].addEventListener('click', addToBookmarks);
});

open(btn_contacts, popup_contacts);
open(btn_map, popup_map);

close(btn_close);
