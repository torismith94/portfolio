// creating the show/hide function jQuery Toggle
$(document).ready(function() {
    $("#navToggle a").click(function(e) {
        e.preventDefault();

        $("header &gt; nav").slideToggle();
        $("#logo").toggleClass("menuUp menuDown");
    })
});

// drop down for mobile 
$("header &gt; nav &gt; ul &gt; li &gt; a").click(function(e) {
    if($( window ).width() &lt;= "600") { if($(this).siblings().size() &gt; 0 ) {
            e.preventDefault();
            $(this).siblings().slideToggle("fast")
            $(this).children(".toggle").html($(this).children(".toggle").html() == 'close' ? 'expand' : 'close');
        }
    }
});