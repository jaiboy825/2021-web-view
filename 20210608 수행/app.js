window.onload = function() {
    $(".menu > li > ul").hide();
    $(".pop").hide();
    $(".menu > li").mouseenter(function(){
        let index = $(this).index();
        $(".menu > li > ul").eq(index).slideDown('fast');
    });

    $(".menu > li").mouseleave(function(){
       let index = $(this).index();
        $(".menu > li > ul").eq(index).slideUp('fast');
    });

    $(".b_section > img ").css({'top' : '-100%'});
    $(".b_section > img ").eq(0).css({'top' : '0%'});
    let idx = 0;
    setInterval(() => {
        let next = (idx + 1) % 3;
        $('.b_section > img').eq(idx).animate({'top' : '100%'});
        $('.b_section > img').eq(next).css({'top' : '-100%'}).animate({'top' : '0%'});
        idx = next;
    }, 3000);
}

function openPop(){
    $(".pop").show('fast');
}

function closePop(){
    $(".pop").hide('fast');
}