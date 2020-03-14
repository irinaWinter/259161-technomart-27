// [SLIDER]

var switches__radio = document.querySelectorAll('.switches__radio');
var slide = document.querySelectorAll('.slide');

var services__btn = document.querySelectorAll('.services__btn');
var services__description = document.querySelectorAll('.services-description__item');

function slider(switchers, slides) {
  var current = 0;
  switchers.forEach(function(e, i) {
    e.addEventListener('click', function() {
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
var popup_contacts = document.querySelector('.container-contacts');
var popup_map = document.querySelector('.container-map');

function open(button, popup) {
  button.addEventListener('click', function() {
    popup.classList.remove('hidden');
    event.preventDefault();
  })
}

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
