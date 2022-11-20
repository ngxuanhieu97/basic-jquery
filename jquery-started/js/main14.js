$(function() {
    // attr(), prop(), val()

    // var specialLink = $("#special-link");
    // console.log(specialLink.attr("href"));
    // console.log(specialLink.attr("title"));

    // specialLink.attr("href","http://hieudev@gmail.com");

    // var checkBox = $("input:checkBox");
    // console.log(checkBox.prop("checked"));
    // console.log(checkBox.attr("checked"));

    var textInput = $("input:text");
    console.log(textInput.val());

    var rangeInput = $("input[type='range']");
    console.log(rangeInput.val());
})