$(function(){
    $(".lightbox").delay(500).fadeIn(1000);
    
    $("#login").on('click', function(){
        $(".lightbox").fadeOut(500);
    });
}); 