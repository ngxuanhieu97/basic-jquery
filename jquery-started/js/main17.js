$(function(){
    $("a").addClass("fancy-link"); // class= "... fancy-link";
    $("p:first").addClass("large emphasize");

    // count li
    $("li li").addClass(function(index){
        $(this).addClass("item-"+ index);
    });
    // setting box class 
    // $("div").addClass(function(index, currentClass){
    //     if(currentClass === "dummy"){
    //         return "red-box";
    //     }
    // });

    $(".red-box").removeClass("red-box").addClass("blue-box");
})