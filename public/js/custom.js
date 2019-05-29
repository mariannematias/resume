$(document).ready(function(){
    $("a.nav-link").click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 1200);
    });

    $('#slide-btn').click(function() {
        $('.color-box').toggle("slide", {direction: "right"}, 500);
    });

    $('.color-btn').click(function() {
        $('.color-btn').removeClass("active");
        $(this).addClass("active");
    });
});