$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        autoplay: true, 
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img  src="icons/left.svg"></img></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></img></button>',
        

      }
)
$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
  $(this)
    .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
    .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
});

/* $('a.catalog-item__link').each(function(i) {
    $(this).on('click', function(e) {
        e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    })
})

$('a.catalog-item__back').each(function(i) {
  $(this).on('click', function(e) {
      e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
  })
}) */

function toggl(qwe) {
  $(qwe).each(function(i) {
    $(this).on('click', function(e) {
        e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
   

      });
  });

}
toggl('.catalog-item__link');
toggl('.catalog-item__back');

/* function toggleSlide(item) {
  $(item).each(function(i) {
      $(this).on('click', function(e) {
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      });
  });
}

toggleSlide('.catalog-item__link');
toggleSlide('.catalog-item__back'); */
// modal

$('[data-modal=consultation]').on('click', function() {
  $('.overlay, #consultation').fadeIn('fast');
});
$('.modal__close').on('click', function() {
$('.overlay, #consultation, #order, #thanks').fadeOut('slow');
});

$('.button_mini').each(function(i) {
  $(this).on('click', function() {
    $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
    $('.overlay, #order').fadeIn('fast');
  })
});



function valodForm(form){
  $(form).validate({
    rules: {
      name: "required",
      phone: {
        required: true,
        minlength: 10
      },
      email: {
        required: true,
        email: true
      }
    },
      messages: {
        name: "Введите Ваше имя",
        email: {
          required: "Введите свою почту",
          email: "Введите правильно адрес, например: name@domain.com"
        },
        phone: {
          required: "Заполните правильно номер телефона",
          minlength: "Минимальное количество знаков - 11"
      }
    }
  
  })
};
valodForm('#order form');
valodForm('#consultation-form');
valodForm('#consultation form');

$('input[name=phone]').inputmask('+7(999)-999-99-99');

$('form').submit(function(e) {
  e.preventDefault();

  if(!$(this).valid()){
    return;
  }

  $.ajax({
    type: "POST",
    url: "mailer/smart.php",
    data: $(this).serialize()
  }).done(function(){
    $(this).find("input").val("");
    $('#consultation, #order').fadeOut();
    $('.overlay, #thanks').fadeIn('fast');
    $('form').trigger('reset');
  });
  return false;

  
});
$(window).scroll(function(){
  if ($(this).scrollTop() > 1600) {
    $('.pageup').fadeIn();
  } else {
    $('.pageup').fadeOut();
  }

});

$("a[href='#up']").click(function(){
  const _href = $(this).attr("href");
  $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
  return false;

});
new WOW().init();

});
