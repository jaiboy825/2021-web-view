window.onload = function() {
    //서브메뉴
    $(".menu ul li").hover(function() {
        $(this).children("ul").stop().slideDown();
    }, function() {
        $(this).children("ul").stop().slideUp();
    });

    //비쥬얼 이미지 슬라이드
    let slide = $(".slide img");
    let sno = 0;
    let eno = slide.length - 1;

    setInterval(AutoSlide, 3000);


    function AutoSlide() {
        $(slide[sno]).fadeOut();
        sno++;

        if(sno > eno) sno = 0;

        $(slide[sno]).fadeIn();
    }

    $(".noticeBtn").click(function() {
        $(".gallery").hide();
        $(".notice").fadeIn();
    });

    $(".galleryBtn").click(function() {
        $(".notice").hide();
        $(".gallery").fadeIn();
    });

    $(".notice tr:nth-child(1)").click(function() {
        $(".popup").fadeIn();
        $(".popup").css("display", "flex");
    });

    $(".popupView button").click(function() {
        $(".popup").fadeOut();
    });
}