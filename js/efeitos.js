$(document).ready(function(){
    $('.thumbnails').owlCarousel({
        loop:true,
        margin:0,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        }
    });
    $("#btn-bars").on("click", function(){
     
        $("header").toggleClass("open-menu");
   
    });
   
      $("#menu-mobile-mask, .btn-close").on("click", function(){
   
        $("header").removeClass("open-menu");
   
   
    });

    $("#btn-search").on("click", function(){

      $("header").toggleClass("open-search");
      $("#input-search-mobile").focus();

    });
    
});


