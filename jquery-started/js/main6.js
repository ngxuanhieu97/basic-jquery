$(function(){

    $(".red-box").fadeTo(5000,0, function(){
        $(".green-box").fadeTo(5000,0, function(){
            $(".blue-box").fadeTo(5000,0);
        });
    });
});