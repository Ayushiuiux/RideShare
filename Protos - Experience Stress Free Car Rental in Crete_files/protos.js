//custom vh height 
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

//mobile menu
var mainbody = $("body");
function openNav() {
    document.getElementById("myNav").setAttribute("style", "opacity: 1;visibility:visible");
    mainbody.addClass('modal-open');
}
function closeNav() {
    document.getElementById("myNav").setAttribute("style", "opacity: 0;visibility:hidden");
    mainbody.removeClass('modal-open');
}

//sticky
if (window.innerWidth > 992) {
jQuery(document).ready(function( $ ) {
    $(".desktop-form").sticky({topSpacing:0});
  });
}  
if (window.innerWidth < 992) {
jQuery(document).ready(function( $ ) {
    $(".mobile-form").sticky({topSpacing:0});
  });
}    

//flip
jQuery(document).ready(function( $ ) {
  $("#getMoreBtnFlip").click(function(){
    $(".update-item-front").toggleClass("flip");
    $(".update-item-back").toggleClass("flip");

  });
});

jQuery(document).ready(function( $ ) {


//change the text on flip
$('#getMoreBtn').click(function() {
    if($('#getMore').is(':visible')){
          jQuery(this).text('I WANT MORE');
    }else{
          jQuery(this).text('I WANT LESS');
    }
});

//what you get carousel
$('.cars-items').owlCarousel({
    center: false,
    items:1,
    loop:true,
    margin:30,
    nav:false,
    dots:false,
    rows: false,
    autoplayTimeout: 4000,
    autoplay:false,
    navText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
    slideBy: 1,
	autoWidth: false,
    responsive:{
    0 : {
            items:1,
            stagePadding: 0,
            margin:0,
            nav:true,


    },
    576 : {
            items:1,
            stagePadding: 100,
            nav:true,

    },
    768 : {
            items:2,
                stagePadding: 100,
            nav:true,

    },
    992 : {
            items:2,
                stagePadding: 200,

    },
    1351 : {
            items:3,
                stagePadding: 150,

    },
    1920 : {
            items:3,
                stagePadding: 300,

    }
    }
});

//blog carousel
$('.services-items').owlCarousel({
    center: false,
    items:2,
    loop:true,
    margin:30,
    nav:true,
    dots:false,
    rows: false,
    autoplay:false,
    navText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
    slideBy: 1,
	autoWidth: false,
    responsive:{
    0 : {
            items:1,
    },
    992 : {
            items:2,

    }
    }
});


//what you get
$('.whatyouget-carousel').owlCarousel({
    center: false,
    items:2,
    loop:true,
    margin:30,
    nav:true,
    dots:false,
    rows: false,
    autoplay:false,
    navText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
    slideBy: 1,
	autoWidth: false,
    responsive:{
    0 : {
            items:1,
            margin:0,
    },
    992 : {
            items:2,

    }
    }
});

//car images carousel
$('.car-images').owlCarousel({
    center: false,
    items:1,
    loop:true,
    margin:30,
    nav:true,
    dots:false,
    rows: false,
    autoplayTimeout: 4000,
    autoplay:false,
    navText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
    slideBy: 1,
	autoWidth: false,
});

});


//laxx
  window.onload = function () {
    lax.init()

    // Add a driver that we use to control our animations
    lax.addDriver('scrollY', function () {
      return window.scrollY
    })

    // Add animation bindings to elements
    lax.addElements('.surf', {
      scrollY: {
        translateX: [
          ["elInY", "elCenterY", "elOutY"],
           {
		   991: [-300, 0, 300 ],
		   992: [0, 0,'pageWidth-elWidth-200' ]
		   }
          
        ],
      }
    })
    lax.addElements('.dive', {
      scrollY: {
        translateY: [
          ["elInY", "elCenterY", "elOutY+400"],
          [0, 0, 300]
        ]

      }
    })
    lax.addElements('.animation-whatyouget', {
      scrollY: {
        translateX: [
          ["elInY", "elCenterY", "elOutY"],
          ['-elWidth', 0,0 ]
        ],
      }
    })
    lax.addElements('.saying-animate.animate-left img', {
      scrollY: {
        translateX: [
          ["elInY", "elCenterY", "elOutY"],
         {
         0: [-200, 0, 0, ],
         1500: [-200, 50, 50, ],
         1501: [-200, 200, 200 ]
          }          
        ],
      }
    })    
      lax.addElements('.saying-animate.animate-right img', {
      scrollY: {
        translateX: [
          ["elInY", "elCenterY", "elOutY"],
         {
         0: [200, 0, 0, ],
         1500: [200, -50, -50, ],
         1501: [200, -200, -200 ]
          } 
		 ]

      }
    })
      lax.addElements('.cancellation-right .custom', {
      scrollY: {
        translateX: [
          ["elInY", "elCenterY-200", "elOutY-400"],
          ['200', '0', 0]
        ]

      }
    })
    lax.addElements('.cancellation-left .custom', {
      scrollY: {
        translateX: [
          ["elInY", "elCenterY-200", "elOutY-400"],
          ['-200', '0', 0]
        ]

      }
    })
    lax.addElements('.support-right .custom', {
      scrollY: {
        translateX: [
          ["elInY", "elCenterY-200", "elOutY-400"],
          ['200', '0', 0]
        ]

      }
    })
    lax.addElements('.support-left .custom', {
      scrollY: {
        translateX: [
          ["elInY", "elCenterY-200", "elOutY-400"],
          ['-200', '0', 0]
        ]

      }
    })    
    lax.addElements('.insurance-right .custom', {
      scrollY: {
        translateX: [
          ["elInY", "elCenterY-200", "elOutY-400"],
          ['200', '0', 0]
        ]

      }
    })
    lax.addElements('.insurance-left .custom', {
      scrollY: {
        translateX: [
          ["elInY", "elCenterY-200", "elOutY-400"],
          ['-200', '0', 0]
        ]

      }
    })  
    lax.addElements('.services-left .services-box', {
      scrollY: {
        scale: [
          ["elInY", "elCenterY", "elOutY"],
          [0, 1, 1]
        ]

      }
    })
    lax.addElements('.services-right .services-box', {
      scrollY: {
        scale: [
          ["elInY", "elCenterY", "elOutY"],
          [0, 1, 1]
        ]

      }
    })
    lax.addElements('.why-item.why-1 .icon-bg', {
      scrollY: {
        translateX: [
          ["elInY", "elCenterY", "elOutY"],
          [0, 20, 40]
        ]

      }
    })
    lax.addElements('.why-item.why-2 .icon-bg', {
      scrollY: {
        translateX: [
          ["elInY", "elCenterY", "elOutY"],
          [0, -20, -40]
        ]

      }
    })
    lax.addElements('.why-item.why-3 .icon-bg', {
      scrollY: {
        translateX: [
          ["elInY", "elCenterY", "elOutY"],
          [0, 20, 40]
        ]

      }
    })
    lax.addElements('.why-car', {
      scrollY: {
        translateX: [
          ["elInY", "elCenterY", "elOutY"],
          ['-elWidth', '0', 0]
        ]

      }
    })
    lax.addElements('.why-tourists', {
      scrollY: {
        translateX: [
          ["elInY", "elCenterY", "elOutY"],
          ['0', '0', 'elWidth']
        ]

      }
    })
    lax.addElements('.newsletter-right img', {
      scrollY: {
        translateX: [
          ["elInY", "elCenterY", "elOutY"],
          ['200', '0', '0']
        ]

      }
    })

  }
  
  
  
  

	
// match height of reviews	
jQuery(document).ready(function( $ ) {	
window.addEventListener("load", function(){
var maxHeight = 0;
$(".reviews-panel .reviews-widget .review-content").each(function(){
   if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
});
$(".reviews-panel .reviews-widget .review-content").height(maxHeight);	
});
});







//css rules 

(function($){
	
	
$(window).on('load resize', function () {
	
if (window.innerWidth > 991) {


    $('.grid-left-svg').each(function () {
        $(this).css({
            "left": -parseInt(($(this).outerWidth() / 1.5))
        });
    });

    $('.grid-right-svg').each(function () {
        $(this).css({
            "right": -parseInt(($(this).outerWidth() / 1.5))
        });
    });

    $('.grid-right-bottom-svg').each(function () {
        $(this).css({
            "right": -parseInt(($(this).outerWidth() / 2))
        });
    });

    $('.nl-left').each(function () {
        $(this).css({
            "left": -parseInt(($(this).outerWidth() / 1.4))
        });
    });
    $('.nl-right').each(function () {
        $(this).css({
            "right": -parseInt(($(this).outerWidth() / 1.4))
        });
    });
    
    $('.blog-left-svg').each(function () {
        $(this).css({
            "left": -parseInt(($(this).outerWidth() / 1.3))
        });
    });
    $('.blog-right-svg').each(function () {
        $(this).css({
            "right": -parseInt(($(this).outerWidth() / 1.3))
        });
    });
    }


    
       
   

    
    
    
    

});

})(jQuery);



(function($){
  $('.more-info').popover({
    container: 'body',
  })
})(jQuery);






    
 
 
 //scroll to fixed side car
(function($){
$(document).ready(function() {
//  $('.preview').scrollToFixed({ marginTop: 42, removeOffsets: true, limit: $('.content').offset().top - $('.preview').outerHeight(true) - 28 });

});   
})(jQuery);

// Toogle Protection
function toogleFull() {
  var parent = $('#full-protection').parents('.fp-toggler');
  parent.find('input[type="hidden"]').remove();
/*
  if ($('#basic-protection').is(':checked')) {
	var elem = document.getElementById('full-protection');
    var input = document.createElement('input');
    input.setAttribute('type', 'hidden');
    input.setAttribute('name', elem.getAttribute('name'));
    input.setAttribute('value', '0');
    parent.append(input);
    parent.removeClass('checked');    
  } else {
    parent.addClass('checked');
  }
 */
}
function toogleBasic() {
  var parent = $('#basic-protection').parents('.fp-toggler');
  parent.find('input[type="hidden"]').remove();
 /*
  if ($('#full-protection').is(':checked')) {
	var elem = document.getElementById('basic-protection');
    var input = document.createElement('input');
    input.setAttribute('type', 'hidden');
    input.setAttribute('name', elem.getAttribute('name'));
    input.setAttribute('value', '0');
    parent.append(input);
    parent.removeClass('checked');    
  } else {
    parent.addClass('checked');
  }
 */
}

//Preview
function toogleOption1() {
  var element = document.getElementsByClassName("preview-cell-phone-holder");
  for (var i = 0; i < element.length; i++){
  element[i].classList.toggle("hidden");
  }
} 

function toogleOption2() {
  var element = document.getElementsByClassName("preview-additional-driver");
  for (var i = 0; i < element.length; i++){
  element[i].classList.toggle("hidden");
  }	
} 
function toogleOption3() {
  var element = document.getElementsByClassName("preview-young-driver");
  for (var i = 0; i < element.length; i++){
  element[i].classList.toggle("hidden");
  }		
} 
function toogleOption4() {
  var element = document.getElementsByClassName("preview-gps-navigation");
  for (var i = 0; i < element.length; i++){
  element[i].classList.toggle("hidden");
  }	
} 
function toogleOption5() {
  var element = document.getElementsByClassName("preview-baby-seat");
  for (var i = 0; i < element.length; i++){
  element[i].classList.toggle("hidden");
  }		
} 
function toogleOption6() {
  var element = document.getElementsByClassName("preview-infant-seat");
  for (var i = 0; i < element.length; i++){
  element[i].classList.toggle("hidden");
  }	
} 
function toogleOption7() {
  var element = document.getElementsByClassName("preview-booster-seat");
  for (var i = 0; i < element.length; i++){
  element[i].classList.toggle("hidden");
  }		
} 
function toogleProtection1() {
  var basic = document.getElementsByClassName("preview-basic-protection");
  for (var i = 0; i < basic.length; i++){
  basic[i].classList.toggle("hidden");
  }	
 /* var full = document.getElementsByClassName("preview-full-protection");
  for (var i = 0; i < full.length; i++){
  full[i].classList.toggle("hidden");
  }	*/	
} 
function toogleProtection2() {
  /*var basic = document.getElementsByClassName("preview-basic-protection");
  for (var i = 0; i < basic.length; i++){
  basic[i].classList.toggle("hidden");
  }	*/
  var full = document.getElementsByClassName("preview-full-protection");
  for (var i = 0; i < full.length; i++){
  full[i].classList.toggle("hidden");
  }	
} 


(function($){

    $(".btn-smaller").click(function() {   
		$(this).parent().closest('.car-item').toggleClass("modal-open");
    });
    $(".car-close").click(function() {   
		$(this).parent().closest('.car-item').toggleClass("modal-open");
    });
    
    $(".options-half-half .rsform-switcher-box").click(function() {   
		$(this).parent().closest('.row-switch').toggleClass("selected");
    });
    
    
    $("#basic-protection").click(function() {   
		$(".protection-row.basic-protection").toggleClass("selected");
		//$(".protection-row.full-protection").toggleClass("selected");

    });
        $("#full-protection").click(function() {   
		//$(".protection-row.basic-protection").toggleClass("selected");
		$(".protection-row.full-protection").toggleClass("selected");

    });
    
    
	
	
// seat numbers 	

	$("#baby-seat-number").ionRangeSlider({
        min: 1,
        max: 3,
        from: 1,
       	onFinish: function (data) {
	   	$('.baby-number').each(function(){
	   	$(this).empty().append(data.from);
  		});
		if ( data.from >= 2){
			
	  		$('.baby-price').each(function(){
		   	$(this).empty().append("€",(data.from - 1 )* 4);
		   	$(this).removeClass("hidden");
		   	});
		   	$('.baby-perday').each(function(){
		   	$(this).removeClass("hidden");
		   	});
		   	$('.baby-free').each(function(){
		   	$(this).addClass("hidden");
		   	});
		   	
  		}
  		if ( data.from < 2){
			
	  		$('.baby-price').each(function(){
		   	$(this).addClass("hidden");
		   	});
		   	$('.baby-perday').each(function(){
		   	$(this).addClass("hidden");
		   	});
		   	$('.baby-free').each(function(){
		   	$(this).removeClass("hidden");
		   	});			
			
		}
	    $('#baby-seat-hidden').val(data.from);
	},
	});
	
	
	$("#infant-seat-number").ionRangeSlider({
        min: 1,
        max: 3,
        from: 1,
       	onFinish: function (data) {
	       	
	   	$('.infant-number').each(function(){
	   	$(this).empty().append(data.from);
  		});	
  		
  		
		if ( data.from >= 2){
			
	  		$('.infant-price').each(function(){
		   	$(this).empty().append("€",(data.from - 1 )* 4);
		   	$(this).removeClass("hidden");
		   	});
		   	$('.infant-perday').each(function(){
		   	$(this).removeClass("hidden");
		   	});
		   	$('.infant-free').each(function(){
		   	$(this).addClass("hidden");
		   	});
		   	
  		}
  		if ( data.from < 2){
			
	  		$('.infant-price').each(function(){
		   	$(this).addClass("hidden");
		   	});
		   	$('.infant-perday').each(function(){
		   	$(this).addClass("hidden");
		   	});
		   	$('.infant-free').each(function(){
		   	$(this).removeClass("hidden");
		   	});			
			
		}  		
  		 	
	    $('#infant-seat-hidden').val(data.from);
	},
	});
	
	$("#booster-seat-number").ionRangeSlider({
        min: 1,
        max: 3,
        from: 1,
       	onFinish: function (data) {
	       	
	   	$('.booster-number').each(function(){
	   	$(this).empty().append(data.from);
  		});	 
  		
		if ( data.from >= 2){
			
	  		$('.booster-price').each(function(){
		   	$(this).empty().append("€",(data.from - 1 )* 4);
		   	$(this).removeClass("hidden");
		   	});
		   	$('.booster-perday').each(function(){
		   	$(this).removeClass("hidden");
		   	});
		   	$('.booster-free').each(function(){
		   	$(this).addClass("hidden");
		   	});
		   	
  		}
  		if ( data.from < 2){
			
	  		$('.booster-price').each(function(){
		   	$(this).addClass("hidden");
		   	});
		   	$('.booster-perday').each(function(){
		   	$(this).addClass("hidden");
		   	});
		   	$('.booster-free').each(function(){
		   	$(this).removeClass("hidden");
		   	});			
			
		}  		
  			
	    $('#booster-seat-hidden').val(data.from);
	},
	});
	
	
	



 
 

	
	
//pick up time	
// on input click open modal
$( "#time-from" ).click(function() {
  $('#picktimeModal').addClass('dpifs-show');
  $('#picktimeBg').addClass('dpifs-show');
  $('body').addClass('dpifs-hide-scrollbar');
});


// on click close modal
$( "#picktimeBg" ).click(function() {
  $('#picktimeBg, #picktimeModal' ).removeClass('dpifs-show');
  $('body').removeClass('dpifs-hide-scrollbar');

});
//set hour
$('#picktimeModal .hour').click(function (e) {
        e.preventDefault();
        var name = $(this).text();
        $("#time-from").val(name);
        $('#picktimeBg, #picktimeModal' ).removeClass('dpifs-show');
		$('body').removeClass('dpifs-hide-scrollbar');
		

});


// auto open time
//set hour
$('#droptimeModal .hour').click(function (e) {
        e.preventDefault();
        var name = $(this).text();
        $("#time-to").val(name);
        $('#droptimeBg, #droptimeModal' ).removeClass('dpifs-show');
		$('body').removeClass('dpifs-hide-scrollbar');
});


//drop off time	
// on input click open modal
$( "#time-to" ).click(function() {
  $('#droptimeModal').addClass('dpifs-show');
  $('#droptimeBg').addClass('dpifs-show');
  $('body').addClass('dpifs-hide-scrollbar');
});


// on click close modal
$( "#droptimeBg" ).click(function() {
  $('#droptimeBg, #droptimeModal' ).removeClass('dpifs-show');
  $('body').removeClass('dpifs-hide-scrollbar');

});
//set hour
$('#droptimeModal .hour').click(function (e) {
        e.preventDefault();
        var name = $(this).text();
        $("#time-to").val(name);
        $('#droptimeBg, #droptimeModal' ).removeClass('dpifs-show');
		$('body').removeClass('dpifs-hide-scrollbar');
});






//pickup location	
// on input click open modal
$( "#from" ).click(function() {
  $('#picklocationModal').addClass('dpifs-show');
  $('#picklocationBg').addClass('dpifs-show');
  $('body').addClass('dpifs-hide-scrollbar');
});


// on click close modal
$( "#picklocationBg" ).click(function() {
  $('#picklocationBg, #picklocationModal' ).removeClass('dpifs-show');
  $('body').removeClass('dpifs-hide-scrollbar');

});
//set location
$('#picklocationModal .location').click(function (e) {
        e.preventDefault();
        var name = $(this).text();
        $("#from").val(name);
        $('#picklocationBg, #picklocationModal' ).removeClass('dpifs-show');
		$('body').removeClass('dpifs-hide-scrollbar');
		if ( name == 'Requested Location' || name == 'Επιλέξτε τοποθεσία' || name == 'Gewünschter Standort'){
		$(".rsform-block-pick-requested-location").removeClass("hidden");
		}	
		if ( name != 'Requested Location' && name != 'Επιλέξτε τοποθεσία' && name != 'Gewünschter Standort'){
		$(".rsform-block-pick-requested-location").addClass("hidden");
		}		
		
		
});

//drop location	
// on input click open modal
$( "#to" ).click(function() {
  $('#droplocationModal').addClass('dpifs-show');
  $('#droplocationBg').addClass('dpifs-show');
  $('body').addClass('dpifs-hide-scrollbar');
});


// on click close modal
$( "#droplocationBg" ).click(function() {
  $('#droplocationBg, #droplocationModal' ).removeClass('dpifs-show');
  $('body').removeClass('dpifs-hide-scrollbar');

});
//set location

$('#droplocationModal .location').click(function (e) {
        e.preventDefault();
        var name = $(this).text();
        $("#to").val(name);
        $('droplocationBg, #droplocationModal' ).removeClass('dpifs-show');
		$('body').removeClass('dpifs-hide-scrollbar');
		
		if ( name == 'Requested Location' || name == 'Επιλέξτε τοποθεσία' || name == 'Gewünschter Standort'){
		$(".rsform-block-drop-requested-location").removeClass("hidden");
		}	
		if ( name != 'Requested Location' && name != 'Επιλέξτε τοποθεσία' && name != 'Gewünschter Standort'){
		$(".rsform-block-drop-requested-location").addClass("hidden");
		}
	
});


$('#Drop0').click(function (e) {
		$(".homepage .rsform-block-to").toggleClass("hidden");
});


//requested location coming from home
$( document ).ready(function() {
        var name = $('#to').val();
		if ( name == 'Requested Location'){
		$(".rsform-block-drop-requested-location").removeClass("hidden");
		}	
		if ( name != 'Requested Location'){
		$(".rsform-block-drop-requested-location").addClass("hidden");
		}	
});
$( document ).ready(function() {
        var name = $('#from').val();
		if ( name == 'Requested Location' || name == 'Επιλέξτε τοποθεσία' || name == 'Gewünschter Standort'){
		$(".rsform-block-pick-requested-location").removeClass("hidden");
		}	
		if ( name != 'Requested Location' && name != 'Επιλέξτε τοποθεσία' && name != 'Gewünschter Standort'){
		$(".rsform-block-pick-requested-location").addClass("hidden");
		}	
});



//disable keyboard

$('#date-from').attr('readonly','readonly');
$('#time-from').attr('readonly','readonly');
$('#date-to').attr('readonly','readonly');
$('#time-to').attr('readonly','readonly');
$('#from').attr('readonly', 'readonly');
$('#to').attr('readonly','readonly');

  
 
 
 
// title plaheholder

jQuery("#title").change(function () {
    jQuery(this).removeClass("place_holder");
});

jQuery("#additional-car-group").change(function () {
    jQuery(this).removeClass("place_holder");
});
  
  


	
    
})(jQuery);


  jQuery(document).ready(function( $ ) {

//Go through each carousel on the page
$('.owl-carousel').each(function() {
    //Find each set of dots in this carousel
  $(this).find('button.owl-dot').each(function(index) {
    //Add one to index so it starts from 1
    $(this).attr('aria-label', index + 1);
  });
    $(this).find('button.owl-next').each(function(index) {
    //Add one to index so it starts from 1
    $(this).attr('aria-label', index + 1);
  });
   $(this).find('button.owl-prev').each(function(index) {
    //Add one to index so it starts from 1
    $(this).attr('aria-label', index + 1);
  });
  
});



});
  

 