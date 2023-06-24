$(document).ready(function()
{
	"use strict";
	 $("html").niceScroll();

	$(".carousel") .carousel(
    {
		interval:6000
	});

     $(".gear-check").click(function()
     {
	 $(".color-option").fadeToggle();
     });
	 
	 
     var colorLi = $(".color-option ul li");
	 
             colorLi
                .eq(0).css("backgroundColor","#e41b17").end()
                .eq(1).css("backgroundColor","#e426d5").end()
                .eq(2).css("backgroundColor","#009aff");
                

            colorLi.click(function()
			{
                $("link[href*='theme']").attr("href", $(this).attr("data-value") );
            });
			  
			var scrollButton=$("#scroll-top");
			
			$(window).scroll(function ()
			{
				if($(this).scrollTop()>700)
				{
					scrollButton.show();
				}
				else
				{
					scrollButton.hide();
				}
				
			});
			//click
				scrollButton.click(function () {
					$("html,body").animate({scrollTop: 0}, "slow");
				});
				
			});
  
  //loading-overlay
  
  $(window).on('load',function ()
  {
	  
	  
	 $(".loading-overlay .spinner").fadeOut(2000,
	 function()
	 {
		 $(this).parent().fadeOut(2000,
		 function ()
	 {
	 $("body").css("overflow","auto");
	 $(this).remove();
	 });
	 
	 });
  });
  
  

  
  

  