window.onload = function () {
    $(".pop").hide();
    $(".sub_menu").hide();
    $(".menu").hover(function () {
        $(".sub_menu").slideDown();
    }, function () {
        $(".sub_menu").slideUp();
    });
    $(".slider > img").css({ "left": "100%" });
    $(".slider > img").eq(0).css({"left" : 0});
    let ment = ["복지는 인권", "우리 모두 함께", "사람이 먼저다"];
    let idx = 0;
    setInterval(() => {
        let next = (idx + 1) % 3;
        $(".ment").text(ment[next]);
        $(".slider > img").eq(next).css({ "left": "100%" }).stop().animate({ "left": 0 }, 800);
        $(".slider > img").eq(idx).stop().animate({ "left": "-100%" }, 800);
        idx = next;
    }, 3000);
}
function openPop(){
    $(".pop").show();
}
function closePop(){
    $(".pop").hide();
}