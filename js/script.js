$(document).ready (function(){
  $('.icon-menu').click(function(event){
    $('.icon-menu, .menu__body, .icon-menu span, .header-top__btn').toggleClass('_active');
    $('body').toggleClass('_lock');
  });
});

  //* навигация по сайту

  $(document).ready(function(){
    $("#menu").on("click",".menu__link", function (event) {
      //отменяем стандартную обработку нажатия по ссылке
      event.preventDefault();
      //забираем идентификатор бока с атрибута href
      let id  = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
      //анимируем переход на расстояние - top за 1000 мс
      $('body,html').animate({scrollTop: top}, 1000);
    });
  });