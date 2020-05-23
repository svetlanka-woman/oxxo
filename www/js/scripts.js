$(function() {

   //Drop down main menu

   $('.toggle-submenu')
      .on('mouseover', function () {
         $(this).children('ul').show(200);
      })
      .on('mouseleave', function () {
         $(this).children('ul').hide(100);
      })
   
   //main slider
   
   $('#main-slider .left-control-slider').hide(1);
   
   $('.right-control-slider').on('click', function () {
      $('.item li.active-slide').toggleClass('active-slide').next().toggleClass('active-slide');
      $('.item img.active-slide').toggleClass('active-slide').next().toggleClass('active-slide');
      if ($('.item li.active-slide').attr('id')=="last") {
         $(this).fadeOut(1);
      }
      if ($('.item li.active-slide').attr('id')!="first") {
         $('.left-control-slider').fadeIn(300);
      }
   });
   $('.left-control-slider').on('click', function () {
         $('.item li.active-slide').toggleClass('active-slide').prev().toggleClass('active-slide');
         $('.item img.active-slide').toggleClass('active-slide').prev().toggleClass('active-slide');
         if ($('.item li.active-slide').attr('id')=="first") {
            $(this).fadeOut(1);
         }
         if ($('.item li.active-slide').attr('id')!="last") {
            $('.right-control-slider').fadeIn(300);
         }
      });


});