$(document).ready(function () {
    $(".b01").animate({
        opacity: '1',
    }, 1000);
    $(".b02").delay(500).animate({
        opacity: '1',
    }, 1000);
    $(".b03").delay(500).animate({
        opacity: '1',
    }, 1000);
    $(".b04").animate({
        opacity: '1',
    }, 1000);
})


$(document).ready(function () {
    $(".queding a").animate({
        opacity: '1',
        right: '1%',
    }, 500);
    $(".fanhui a").animate({
        opacity: '1',
        left: '1%',
    }, 500);
    $(".top a").animate({
        opacity: '1',
        right: '1%',
    }, 500);
})

$(document).ready(function () {
    $(".message .book .div1:even").css({
        'background': 'rgba(255,255,255,0.7)',
    });
    $(".message .book .div1:odd").css({
        'background': 'rgba(255,255,255,0.2)',
    });
    $(".message .reader .div1:even").css({
        'background': 'rgba(255,255,255,0.7)',
    });
    $(".message .reader .div1:odd").css({
        'background': 'rgba(255,255,255,0.2)',
    });
    
    
    $(".booksearch .bookblock .leftinf div:even").css({
        'background': 'rgba(255,255,255,0.7)',
    });
    $(".booksearch .bookblock .leftinf div:odd").css({
        'background': 'rgba(255,255,255,0.2)',
    });
    $(".booksearch .bookblock .rightinf div:even").css({
        'background': 'rgba(255,255,255,0.7)',
    });
    $(".booksearch .bookblock .rightinf div:odd").css({
        'background': 'rgba(255,255,255,0.2)',
    });
});
