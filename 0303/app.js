window.onload = function(){
    $(".sub_menu").hide();
    $(".menu_container").hover(function(){
        $(".sub_menu").fadeIn();
    },function(){
        $(".sub_menu").fadeOut();
    });

    $(".slider > img").css({ "top": "100%" });
    $(".slider > img").eq(0).css({ "top": 0 });
    let idx = 0;
    setInterval(function () {
        let next = (idx + 1) % 3;
        $(".slider > img").eq(next).css({ "top": "100%" }).stop().animate({ "top": 0 }, 800);
        $(".slider > img").eq(idx).stop().animate({ "top": "-100%" }, 800);
        idx = next;
    }, 3000);
}