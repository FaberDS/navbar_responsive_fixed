// JavaScript Document


// ##################################################################################################
// Fixed Responsive Navbar
// ##################################################################################################

$(document).ready(function(){

    //Mobile NAVBAR Slidedown effekt Effekt *************************************************************       

    $(".menu-icon").on("click", function(){
        $("nav ul").toggleClass("showing");
    })

    //Scrolling Effekt *************************************************************       
    $(window).on("scroll", function(){
        if($(window).scrollTop()){
            $('nav').addClass('black');
        } else{
            $('nav').removeClass('black');

        }
    })

})