$(function(){
    var firstPar = $("p:first");
    console.log(firstPar.text());
    console.log(firstPar.html());
    console.log($("p").html());

    // firstPar.text("<b>Some</b> new text." );
    // firstPar.html("<b>Hello</b> World." );
    firstPar.html(firstPar.html() + "This was just happended." );
})