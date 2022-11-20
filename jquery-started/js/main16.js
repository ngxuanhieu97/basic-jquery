$(function(){
    $(".gallery").css("display","none");

    var redBox = $(".red-box");
    console.log(redBox.css("width"));
    console.log(redBox.width());

    redBox.css("background-color","#AA7777");
    $("p").css("font-size","18px");
    redBox.css("width","+=30px");

    var properties = $("p").css(["font-size","line-height","color"]);
    console.log(properties);

    redBox.css("user-select", function(){
        return "none";
    });
});