function myFunction () {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className="topnav";
    }
}

// //init controller
// var controller = new ScrollMagic.Controller();

// //build tween
// var tween = TweenMax.from(#)