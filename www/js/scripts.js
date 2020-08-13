$(function() {

   $('.menu li:not(li.toggle-submenu)').on('click',function () {
      if (window.innerWidth > 992) {
         $('.submenu-1, .submenu-2').hide(1);
      } else {
         $('.menu .left-menu, .menu .right-menu').animate({'left':'-250px'},500);
         $('.menu .btn-close').animate({'left':'-32px'},500);
      }
   });

   //Drop down submenu

   $('.toggle-submenu')
      .on('mouseover', function () {
         if (window.innerWidth > 992) {
            $(this).children('ul').show(200);
         }
      })
      .on('mouseleave', function () {
         if (window.innerWidth > 992) {
            $(this).children('ul').hide(100);
         }
      });

   $('.right-menu > li.toggle-submenu > a')
      .on('click', function () {
         if (window.innerWidth < 993) {
            $(this).next().slideToggle(500);
         }
      });
      $('.submenu-1 > li.toggle-submenu > a')
      .on('click', function () {
         if (window.innerWidth < 993) {
            $(this).next().slideToggle(500);
         }
      });
   
   //Toggle maim menu for screen < 993px

   $('.menu .bar-toggle').on('click', function () {
      $(this).siblings('.right-menu').css('top',$('.menu .left-menu').innerHeight());
      $(this).siblings('.btn-close').animate({'left':'218px'},500);
      $(this).siblings('.left-menu, .right-menu').animate({'left':'0px'},500);
   });

   $('.menu .btn-close').on('click', function () {
      $(this).siblings('.left-menu, .right-menu').animate({'left':'-250px'},500);
      $(this).animate({'left':'-32px'},500);
   });

   //main slider

   $('#main-slider .right-control-slider').on('click', function () {
      $('.item li.active-slide').toggleClass('active-slide').next().toggleClass('active-slide');
      $('.item img.active-slide').toggleClass('active-slide').next().toggleClass('active-slide');
      if ($('.item li:last').attr('class')=='active-slide') {
         $(this).fadeOut(1);
      }
      if ($('.item li:first').attr('class')!='active-slide') {
         $('#main-slider .left-control-slider').fadeIn(300);
      }
   });
   $('#main-slider .left-control-slider').on('click', function () {
      $('.item li.active-slide').toggleClass('active-slide').prev().toggleClass('active-slide');
      $('.item img.active-slide').toggleClass('active-slide').prev().toggleClass('active-slide');
      if ($('.item li:first').attr('class')=='active-slide') {
         $(this).fadeOut(1);
      }
      if ($('.item li:last').attr('class')!='active-slide') {
         $('#main-slider .right-control-slider').fadeIn(300);
      }
   });

// slider-about

$('#slider-about .right-control-slider').on('click', function () {
   $('#slider-about img.active-slide').toggleClass('active-slide').next().toggleClass('active-slide');
   if ($('#slider-about img:last').attr('class')=='active-slide') {
      $(this).fadeOut(1);
   }
   if ($('#slider-about img:first').attr('class')!='active-slide') {
      $('#slider-about .left-control-slider').fadeIn(300);
   }
});
$('#slider-about .left-control-slider').on('click', function () {
   $('#slider-about img.active-slide').toggleClass('active-slide').prev().toggleClass('active-slide');
   if ($('#slider-about img:first').attr('class')=='active-slide') {
      $(this).fadeOut(1);
   }
   if ($('#slider-about img:last').attr('class')!='active-slide') {
      $('#slider-about .right-control-slider').fadeIn(300);
   }
});

// portfolio

$('#portfolio figure').hover(function () {
   $(this).children('figcaption').slideDown(400);
   $(this).children('.btn-group').fadeIn(400);
   $(this).children('img').css('opacity','0.8');
}, function () {
   $(this).children('figcaption').slideUp(100);
   $(this).children('.btn-group').fadeOut(100);
   $(this).children('img').css('opacity','1');
});

});