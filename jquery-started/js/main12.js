$(function(){
    // $("li").replaceWith("<li>Replaced.</li>");
    // $("li").replaceWith(function() {
    //     return "<li>Replaced here.</li>";
    // });

    // var firstListItem = $("li:first");
    // $("p:first").replaceWith(firstListItem);

    // $(".red-box, .blue-box").replaceWith("<div class='green-box'>More and More</div>");

    $("<div class='green-box'>More Green</div>").replaceAll(".red-box, .blue-box");
})