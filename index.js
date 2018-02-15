// creating the show/hide function jQuery Toggle
$(document).ready(function() {
    $("#navToggle a").click(function(e) {
        e.preventDefault();

        $("header &gt; nav").slideToggle();
        $("#logo").toggleClass("menuUp menuDown");
});

//toggling depending on screenwidth 
$(window).resize(function() {
    if($( window ).width() > "600") {
        $("header &gt; nav").css("display", "block");

        if ($("#logo").attr('class') == "menuDown") {
            $("#logo").toggleClass("menuUp menuDown");
        }
    }
    else {
        $("header &gt; nav").css("display", "none");
    }
});

// drop down for mobile 
$("header &gt; nav &gt; ul &gt; li &gt; a").click(function(e) {
    if($( window ).width() <= "600") { if($(this).siblings().size() < 0 ) {
                e.preventDefault();
                $(this).siblings().slideToggle("fast")
                $(this).children(".toggle").html($(this).children(".toggle").html() == 'close' ? 'expand' : 'close');
            }
        }
    });
});

