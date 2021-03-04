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
    let ments = ["패션의 완성은 구두", "멋쟁이 팬츠", "후드티와 모자"];
    setInterval(function () {
        let next = (idx + 1) % 3;
        $(".ment").hide();
        $(".ment").text(ments[next]);
        $(".ment").fadeIn();
        $(".slider > img").eq(next).css({ "top": "100%" }).stop().animate({ "top": 0 }, 800);
        $(".slider > img").eq(idx).stop().animate({ "top": "-100%" }, 800);
        idx = next;
    }, 3000);

    $(".tab-news").on("click", function(){
        $(".news").css({"z-index":"2"});
        $(".gallery").css({"z-index":"1"});
    });
    $(".tab-gallery").on("click", function(){
        $(".news").css({"z-index":"1"});
        $(".gallery").css({"z-index":"2"});
    });
    $(".on").on("click", function(){
        $(".pop").fadeIn();
    });
    $(".close").on("click", function(){
        $(".pop").fadeOut();
    });

}