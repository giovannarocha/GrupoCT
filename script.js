const elemsSidenav = document.querySelectorAll(".sidenav");
const instancesSidenav = M.Sidenav.init(elemsSidenav, {
    edge: "right"
});
var instance = M.Carousel.init({
    fullWidth: true
});
$('.slider').slider();
$(".num").counterUp({delay:10, time:1000});