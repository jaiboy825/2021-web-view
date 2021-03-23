window.onload = function () {
    $(".menu ul li").hover(function () {
        $(this).children("ul").slideDown("slow");
    }, function () {
        $(this).children("ul").slideUp("fast");
    });

    $(".menu ul li").click(function(){
        $(".menu ul li ul").hide();
        $(this).children("ul").slideDown("slow");
    });

}