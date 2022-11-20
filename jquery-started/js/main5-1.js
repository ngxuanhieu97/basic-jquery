$(function () {
    $("#start").click(function(){
        $("h1").animate({top:'300px'},5000);
        $("h2").animate({top:'400px'},"slow");
        $("h3").animate({top:'500px'},"fast");
        $("h1").animate({
            top:'500px',
            fontSize:'60px'
        },5000);
        $("h1").delay(8000).fadeOut();
    });

    $("#stop").click(function(){
        $("h1").stop();
    });
});
