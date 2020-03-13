// [SLIDER]

var switches__radio = document.querySelectorAll('.switches__radio');
var slide = document.querySelectorAll('.slide');

var services__btn = document.querySelectorAll('.services__btn');
var services__description = document.querySelectorAll('.services-description__item');

function slider(switchers, slides) {
  var current = 0;
  switchers.forEach(function(e, i) {
    e.addEventListener('click', function () {
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
