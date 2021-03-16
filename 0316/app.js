window.onload = function() {
    $(".pop").hide();
    $(".sub_menu").hide();

    $(".menu").hover(function() {
        $(".sub_menu").fadeIn();
    }, function() {
        $(".sub_menu").fadeOut("fast");
    });
    $(".slider > img").css({ "left": "100%" });
    $(".slider > img").eq(0).css({ "left": "0" })
    let ments = ["세계속의 산업대", "글로벌 인재", "3년 연속 취업율 1위"];
    let idx = 0;
    setInterval(() => {
        let next = (idx + 1) % 3;
        $(".ment").text(ments[next]);
        $(".slider > img").eq(next).css({ "left": "100%" }).stop().animate({ "left": 0 }, 800);
        $(".slider > img").eq(idx).stop().animate({ "left": "-100%" }, 800)
        idx = next;
    }, 3000);
}

function openPop() {
    $(".pop").show();
}

function closePop() {
    $(".pop").hide();
}