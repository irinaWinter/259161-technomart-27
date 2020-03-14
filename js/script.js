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

slider(services__btn, services__description);
slider(switches__radio, slide);


// [SHOW WINDOW]

var btn_contacts = document.querySelector('.btn-contacts');
var btn_map = document.querySelector('.map');
var btn_buy = document.querySelectorAll('.product-action__button-buy');
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

btn_buy.forEach(function(e, i) {
  open(btn_buy[i], popup_status)
});
open(btn_contacts, popup_contacts);
open(btn_map, popup_map);



// [CLOSE WINDOW]

var btn_close = document.querySelectorAll('.btn-close');

function close(button) {
  button.forEach(function(e, i) {
    button[i].addEventListener('click', function() {
      button[i].parentNode.parentNode.classList.add('hidden');
    });
  });
}

close(btn_close);
