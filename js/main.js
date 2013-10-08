function background_slide_swap() {
    var old_slide = $(".background-slide:first").detach();
    old_slide.appendTo(".background-container");
    var new_slide = $(".background-slide:first");
    new_slide.animate({opacity: 1}, 1000);
    old_slide.animate({opacity: 0}, 1000);
    setTimeout(background_slide_swap, 5000);
}

$(document).ready(function (){
   setTimeout(background_slide_swap, 5000);
});
