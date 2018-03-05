function myFunction () {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className="topnav";
    }
}

//when the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction ()};

//get the navbar
var navbar = document.getElementById("myTopnav");

//get the offset position of the navbar
var sticky = navbar.offsetTop;

//adding the sticky class to the navbar when you reach its scroll position
//remove sticky when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

// //init controller
// var controller = new ScrollMagic.Controller();

// //build tween
// var tween = TweenMax.from(#)