// Слайдер в промоблоке
var switches__radio = document.querySelectorAll('.switches__radio');
var slide = document.querySelectorAll('.slide');

// Слайдер в разделе сервисов
var services__btn = document.querySelectorAll('.services__btn');
var services__description = document.querySelectorAll('.services-description__item');

// Добавлеие товара в корзину/закладки
var btn_buy = document.querySelectorAll('.product-action__button-buy');
var btn_bookmarks = document.querySelectorAll('.product-action__button-bookmark');
var popup_status = document.querySelector('.container-status');

// Окно для обратной связи
var btn_contacts = document.querySelector('.btn-contacts');
var popup_contacts = document.querySelector('.container-contacts');
var popup__form = document.querySelector('.popup__form');

// Открытие интерактивной карты
var btn_map = document.querySelector('.map');
var popup_map = document.querySelector('.container-map');

// Кнопка закрытия всплывающих окон
var btn_close = document.querySelectorAll('.btn-close');

// Локальное хранилище
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem('name');
} catch (err) {
  isStorageSupport = false;
}


// [SLIDER]

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

function open(button, popup) {
  if (button && popup) {
    button.addEventListener('click', function(evt) {
      popup.classList.remove('hidden');
      if (popup === popup_contacts) {
        var name_field = popup_contacts.querySelector('[name=name]');
        var email_field = popup_contacts.querySelector('[name=email]');
        if (storage) {
          name_field.value = storage;
          email_field.focus();
        } else {
          name_field.focus();
        }
      }
      evt.preventDefault();
    });
  }
}


// [CLOSE WINDOW]

function close(button) {
  button.forEach(function(e, i) {
    button[i].addEventListener('click', function() {
      button[i].parentNode.parentNode.classList.add('hidden');
    });
    window.addEventListener('keydown', function(evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        button[i].parentNode.parentNode.classList.add('hidden');
      }
    })
  });
}


// [ADD PRODUCT]

function addToBasket() {
  var basket = document.querySelector('.shopping__link-basket');
  var basket_value = document.querySelector('.basket-value');
  var count = Number(basket_value.textContent);

  basket.classList.add('shopping-full');
  count++;
  basket_value.textContent = ' ' + count;
}

function addToBookmarks(evt) {
  var bookmarks = document.querySelector('.shopping__link-bookmarks');
  var bookmarks_value = document.querySelector('.bookmarks-value');
  var count = Number(bookmarks_value.textContent);

  bookmarks.classList.add('shopping-full');
  count++;
  bookmarks_value.textContent = ' ' + count;
  evt.preventDefault();  
}


// [VALIDATION]

function checkForm(evt) {
  var name_field = popup_contacts.querySelector('[name=name]');
  var email_field = popup_contacts.querySelector('[name=email]');
  var text_field = popup_contacts.querySelector('[name=text]');

  if (!name_field.value || !email_field.value || !text_field.value) {
    evt.preventDefault();
    console.log('Нужно заполнить все поля');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('name', name_field.value);
    }
  }
}


// Вызовы

// Работа слайдеров
slider(services__btn, services__description);
slider(switches__radio, slide);

// Открытие всплывающих окон
// окно для обратной связи
open(btn_contacts, popup_contacts);
// интерактивная карта
open(btn_map, popup_map);
// оповещение об успешной покупке
btn_buy.forEach(function(e, i) {
  open(btn_buy[i], popup_status);
});

// Закрытие всплывающих окон
close(btn_close);

// Добавление товара в корзину 
btn_buy.forEach(function(e, i) {
  btn_buy[i].addEventListener('click', addToBasket);
});

// Добавление товара в закладки
btn_bookmarks.forEach(function(e, i) {
  btn_bookmarks[i].addEventListener('click', addToBookmarks);
});

// Валидация формы
if (popup__form) {
  popup__form.addEventListener('submit', checkForm);
}
