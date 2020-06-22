$(function() {

   $('.menu li:not(li.toggle-submenu)').on('click',function () {
      if (window.innerWidth > 768) {
         $('.submenu-1, .submenu-2').hide(1);
      } else {
         $('.menu .left-menu, .menu .right-menu').animate({'left':'-250px'},500);
         $('.menu .btn-close').animate({'left':'-32px'},500);
      }
   });

   //Drop down submenu

   $('.toggle-submenu')
      .on('mouseover', function () {
         if (window.innerWidth > 768) {
            $(this).children('ul').show(200);
         }
      })
      .on('mouseleave', function () {
         if (window.innerWidth > 768) {
            $(this).children('ul').hide(100);
         }
      });

   $('.right-menu > li.toggle-submenu > a')
      .on('click', function () {
         if (window.innerWidth < 769) {
            $(this).next().slideToggle(500);
         }
      });
      $('.submenu-1 > li.toggle-submenu > a')
      .on('click', function () {
         if (window.innerWidth < 769) {
            $(this).next().slideToggle(500);
         }
      });
   
   //Toggle maim menu for screen < 769px

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

   $('.right-control-slider').on('click', function () {
      $('.item li.active-slide').toggleClass('active-slide').next().toggleClass('active-slide');
      $('.item img.active-slide').toggleClass('active-slide').next().toggleClass('active-slide');
      if ($('.item li.active-slide').attr('id') == "last") {
         $(this).fadeOut(1);
      }
      if ($('.item li.active-slide').attr('id') != "first") {
         $('.left-control-slider').fadeIn(300);
      }
   });
   $('.left-control-slider').on('click', function () {
      $('.item li.active-slide').toggleClass('active-slide').prev().toggleClass('active-slide');
      $('.item img.active-slide').toggleClass('active-slide').prev().toggleClass('active-slide');
      if ($('.item li.active-slide').attr('id') == "first") {
         $(this).fadeOut(1);
      }
      if ($('.item li.active-slide').attr('id') != "last") {
         $('.right-control-slider').fadeIn(300);
      }
   });

   //second menu




});