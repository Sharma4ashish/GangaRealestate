$(document).ready(function(){

 $(window).width() < 991 && 
 $("span.navbar-toggler-icon").click((function() {
        $(".navbar-toggler-icon").toggleClass("cross")
    }))

    $('.emaar-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
//         autoplay: true,
//   autoplaySpeed: 2000,
      });
      
       $(window).width() < 991 && 
 $(".navbar-nav li a").click((function() {
        $(".navbar-collapse").toggleClass(" show");
         $(".navbar-toggler-icon").toggleClass("cross");
    }))
      
     
         $(window).scroll(function(){
	  var sticky = $('nav'),
	      scroll = $(window).scrollTop();

	  if (scroll >= 100) sticky.addClass('fixed');
	  else sticky.removeClass('fixed');
	});
	
	$(".fixedbtn").click(function() {
//	$(".registerform").toggleClass("slideleft");
})


$("#contactus").on("show.bs.modal", (function(e) {
        $(e.currentTarget).find('input[name="type"]').val('')
        var s = $(e.relatedTarget).data("type");
        $(e.currentTarget).find('input[name="type"]').val(s)
    })),


$('.navbar-nav li a').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
          var $target = $(this.hash);
          $target = $target.length && $target
          || $('[name=' + this.hash.slice(1) +']');
          if ($target.length) {
            var targetOffset = $target.offset().top - 93;
            $('html,body')
            .animate({scrollTop: targetOffset}, 100);
          return false;
          }
        }
      });


setTimeout(function(){
      $('#contactus').modal();
	 
   },1000);
   
      
$.validator.addMethod("customname", (function(e, s) {
        return /^[a-zA-Z ]*$/.test(e)
    }), "Please enter valid Name"), $.validator.addMethod("customemail", (function(e, s) {
        return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e)
    }), "Please enter valid email"), $.validator.addMethod("customphone", (function(e, s) {
        return /^\d{10}$/.test(e)
    }), "Please enter 10 digit mobile number"), $.validator.addMethod("customspace", (function(e, s) {
        return $.validator.methods.required.call(this, $.trim(e), s)
    }), $.validator.messages.required), $.validator.addMethod("filesize", (function(e, s, a) {
        return this.optional(s) || s.files[0].size <= a
    }), "File size must be less than {0}"), $("form[data-form-validate='true']").each((function() {
        var e = $(this);
        $(this).validate({
            ignore: ".ignore",
            rules: {
                name: {
                    required: !0,
                    customspace: !0,
                    customname: !0
                },
                mobile: {
                    required: !0,
                    customphone: !0
                },
                email: {
                    required: !0,
                    customemail: !0
                },
            },
            messages: {
                name: {
                    required: "This field is required",
                    customname: "Please enter valid name."
                },
                mobile: {
                    required: "This field is required",
                    customphone: "Please enter 10 digit mobile number."
                },
                email: {
                    required: "This field is required",
                    customemail: "Please enter valid email."
                },
                country: {
                    required: "This field is required"
                },
                city: {
                    required: "This field is required"
                },
                hiddenRecaptcha: {
                    required: "This field is required"
                },
                term: {
                    required: "This field is required"
                }
            },
            submitHandler: function(s, a) {
                a.preventDefault();
                e.find(".btns").prop("disabled", !0);
                var o = e[0];
                $.ajax({
                    url: "submit.php",
                    type: "POST",
                    data: new FormData(o),
                    contentType: !1,
                    cache: !1,
                    processData: !1,
                    beforeSend: function() {
                        e.find(".btns").prop("disabled", !0).html("Processing...")
                    },
                    success: function(s) {
                        
                      
                      $url = "thankyou.php";
                      if($('input[name="type"]').val() == 'brochure') $url = 'thankyou.php?type=download';
                      e.trigger("reset"), window.location = $url , e.find(".btns").prop("disabled", !1)
                    }
                })
            }
        })
    }))    



})





function sendWhatsapp()  {
    

}