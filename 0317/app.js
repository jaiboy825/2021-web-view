window.onload = function(){
    $(".pop").hide();
    $(".menu > li > ul").hide();
    $(".menu > li").hover(function(){
        let index = $(this).index();
        $(".menu > li > ul").eq(index).stop().slideDown();
    }, function(){
        $(".menu > li > ul").stop().slideUp();
    });

    $(".slider > img").hide();
    $(".slider > img").eq(1).show();
    let idx = 1;
    setInterval(() => {
        let next = (idx + 1) % 3;
        $(".slider > img").eq(idx).fadeOut();
        $(".slider > img").eq(next).fadeIn();
        idx = next;
    }, 3000);

    $(".notice_tab").on("click", function(){
        $(".gallery_tab").removeClass('active');
        $(".notice_tab").addClass('active');
        $(".notice").css({"zIndex":"2"});
        $(".gallery").css({"zIndex":"1"});
    });

    $(".gallery_tab").on("click", function(){
        $(".notice_tab").removeClass('active');
        $(".gallery_tab").addClass('active');
        $(".gallery").css({"zIndex":"2"});
        $(".notice").css({"zIndex":"1"});
    });
}
function openPop(){
    $(".pop").fadeIn();
}
function closePop(){
    $(".pop").fadeOut();
}