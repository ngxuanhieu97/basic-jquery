$(function(){
    var galleryImage = $(".gallery").find("img").first();
    var images = [
        "../images/1.jpg",
        "../images/2.jpg",
        "../images/3.jpg",
    ];

    var i = 0;
    setInterval(function(){
        i = ( i + 1) % images.length; // 0, 1, 2, 0, 1, 2, ...
        galleryImage.fadeOut(function(){
            $(this).attr("src", images[i]);
            $(this).fadeIn();
        });
        console.log(galleryImage.attr("src"));
    }, 2000);
})