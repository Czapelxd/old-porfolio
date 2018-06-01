$(window).scroll(function() {
    var hT = $('#skills).offset().top,
        hH = $('#skills').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+hH-wH)){
        console.log('H1 on the view!');
    }
});