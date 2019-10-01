$('.slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1140,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 960,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 540,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 1
      }
    }
  ]
});


$("[data-fancybox]").fancybox();


$('.scroll-link').click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.focus(); 
          };
        });
      }
    }
  });

  $('.menu-mob').click(function(){
    $(this).toggleClass('active');
    $('.menu-mob-content').toggleClass('active');
  });
  
  $('.phone-mask').mask('+7(999)999-99-99');
  
 
    $('.callback').on('submit', function(e){
     e.preventDefault();
     var fd = new FormData( this );
     $.ajax({
     url: 'mail.php',
     type: 'POST',
     contentType: false, 
     processData: false, 
     data: fd,
     success: function(msg){
    if(msg == 'ok') {
     $.fancybox.close();
     alert('Спасибо за заявку!');
    } else {
     alert('Ошибка')
    }
     }
     });
     });

  // $(".section-btn .btn").click(function(){
  //   var btn = $('.section-btn .btn').text();
  //   var title = $('#callback-title');
  //   // $('.section-btn .btn').each(function(){
  //   //   title.text($(this).html());
  //   // });
  //   title.text(btn);
  // }).fancybox();

// var canvas = document.getElementById('bg-color');
// var ctx = canvas.getContext('2d');

// ctx.beginPath();
// ctx.moveTo();
// ctx.quadraticCurveTo();
// ctx.stroke();