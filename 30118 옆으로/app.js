window.onload = function () {
    $(".menu ul li").hover(function () {
        $(this).children("ul").slideDown("slow");
    }, function () {
        $(this).children("ul").slideUp("fast");
    });
}